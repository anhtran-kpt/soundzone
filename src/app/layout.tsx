import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/providers";
import AudioPlayer from "@/components/features/audio/audio-player";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito_sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoundZone",
  description: "SoundZone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} antialiased overflow-hidden`}>
        <Providers>
          {children}
          <AudioPlayer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
