import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getUserSessions, revokeRefreshToken } from "@/lib/token";
import { UAParser } from "ua-parser-js";

export async function GET(request: NextRequest) {
  try {
    const token = await getToken({ req: request });

    if (!token || !token.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Get all active sessions for the user
    const sessions = await getUserSessions(token.id as string);

    // Parse user agent information for better display
    const formattedSessions = sessions.map((session) => {
      let deviceInfo = { browser: "Unknown", os: "Unknown", device: "Unknown" };

      if (session.userAgent) {
        const parser = new UAParser(session.userAgent);
        const result = parser.getResult();

        deviceInfo = {
          browser: `${result.browser.name || "Unknown"} ${
            result.browser.version || ""
          }`.trim(),
          os: `${result.os.name || "Unknown"} ${
            result.os.version || ""
          }`.trim(),
          device: result.device.vendor
            ? `${result.device.vendor} ${result.device.model || ""}`
            : "Desktop/Unknown",
        };
      }

      // Get current session identifier
      const currentSessionId = request.headers.get("x-session-id") || "";
      const isCurrentSession = currentSessionId === session.id;

      return {
        id: session.id,
        createdAt: session.createdAt,
        expiresAt: session.expiresAt,
        deviceInfo,
        isCurrentSession,
      };
    });

    return NextResponse.json({ sessions: formattedSessions });
  } catch (error) {
    console.error("Error retrieving sessions:", error);
    return NextResponse.json(
      { error: "Error retrieving sessions" },
      { status: 500 }
    );
  }
}

/**
 * DELETE endpoint to revoke a specific session
 */
export async function DELETE(request: NextRequest) {
  try {
    // Get user from token
    const token = await getToken({ req: request });

    if (!token || !token.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Get session ID to revoke from URL params
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Verify the session belongs to this user
    const sessions = await getUserSessions(token.id as string);
    const sessionToRevoke = sessions.find((s) => s.id === sessionId);

    if (!sessionToRevoke) {
      return NextResponse.json(
        { error: "Session not found or not owned by this user" },
        { status: 404 }
      );
    }

    // Revoke the session
    await revokeRefreshToken(sessionId);

    return NextResponse.json({
      message: "Session revoked successfully",
    });
  } catch (error) {
    console.error("Error revoking session:", error);
    return NextResponse.json(
      { error: "Error revoking session" },
      { status: 500 }
    );
  }
}
