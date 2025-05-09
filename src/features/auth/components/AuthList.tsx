"use client";

import { useAuths, useDeleteAuth } from "../hooks";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuthList() {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Use the query hook to fetch auths
  const { data: auths, isLoading, error } = useAuths();

  // Use the mutation hook for deleting
  const deleteMutation = useDeleteAuth();

  const handleDelete = (id: string) => {
    setDeletingId(id);
    deleteMutation.mutate(id, {
      onSettled: () => {
        setDeletingId(null);
      },
    });
  };

  if (isLoading) return <div>Loading auths...</div>;
  if (error)
    return <div>Error loading auths: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Auths</h2>
        <Link href="/auths/new">
          <Button>Add Auth</Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {auths?.map((auth) => (
          <div
            key={auth.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{auth.name}</h3>
              {/* Add more auth fields here */}
            </div>
            <div className="flex gap-2">
              <Link href={`/auths/${auth.id}/edit`}>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(auth.id)}
                disabled={deletingId === auth.id}
              >
                {deletingId === auth.id ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        ))}

        {(!auths || auths.length === 0) && (
          <div className="col-span-full text-center p-8 border rounded-lg">
            No auths found.
          </div>
        )}
      </div>
    </div>
  );
}
