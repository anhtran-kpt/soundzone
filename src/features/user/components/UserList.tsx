"use client";

import { useUsers, useDeleteUser } from "../hooks";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function UserList() {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Use the query hook to fetch users
  const { data: users, isLoading, error } = useUsers();

  // Use the mutation hook for deleting
  const deleteMutation = useDeleteUser();

  const handleDelete = (id: string) => {
    setDeletingId(id);
    deleteMutation.mutate(id, {
      onSettled: () => {
        setDeletingId(null);
      },
    });
  };

  if (isLoading) return <div>Loading users...</div>;
  if (error)
    return <div>Error loading users: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Users</h2>
        <Link href="/users/new">
          <Button>Add User</Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{user.name}</h3>
              {/* Add more user fields here */}
            </div>
            <div className="flex gap-2">
              <Link href={`/users/${user.id}/edit`}>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(user.id)}
                disabled={deletingId === user.id}
              >
                {deletingId === user.id ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        ))}

        {(!users || users.length === 0) && (
          <div className="col-span-full text-center p-8 border rounded-lg">
            No users found.
          </div>
        )}
      </div>
    </div>
  );
}
