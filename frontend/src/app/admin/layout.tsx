"use client";

import { useRequireAuth } from "@/hooks/useRequireAuth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboardPage() {
  const { user, isLoading } = useRequireAuth("/signin", true);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton className="h-12 w-64 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage all users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Songs</CardTitle>
            <CardDescription>Manage songs and tracks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">5,678</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Artists</CardTitle>
            <CardDescription>Manage artists and bands</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">890</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
