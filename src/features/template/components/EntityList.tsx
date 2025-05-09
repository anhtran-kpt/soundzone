"use client";

import { useEntities, useDeleteEntity } from "../hooks";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EntityList() {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Use the query hook to fetch entities
  const { data: entities, isLoading, error } = useEntities();

  // Use the mutation hook for deleting
  const deleteMutation = useDeleteEntity();

  const handleDelete = (id: string) => {
    setDeletingId(id);
    deleteMutation.mutate(id, {
      onSettled: () => {
        setDeletingId(null);
      },
    });
  };

  if (isLoading) return <div>Loading entities...</div>;
  if (error)
    return <div>Error loading entities: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Entities</h2>
        <Link href="/entities/new">
          <Button>Add Entity</Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {entities?.map((entity) => (
          <div
            key={entity.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{entity.name}</h3>
              {/* Add more entity fields here */}
            </div>
            <div className="flex gap-2">
              <Link href={`/entities/${entity.id}/edit`}>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(entity.id)}
                disabled={deletingId === entity.id}
              >
                {deletingId === entity.id ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        ))}

        {(!entities || entities.length === 0) && (
          <div className="col-span-full text-center p-8 border rounded-lg">
            No entities found.
          </div>
        )}
      </div>
    </div>
  );
}
