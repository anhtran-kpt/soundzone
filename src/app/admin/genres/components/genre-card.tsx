"use client";

import { TrashIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EditIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Genre } from "@/app/generated/prisma";

export function GenreCard({ genre }: { genre: Genre }) {
  const router = useRouter();

  const onDelete = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{genre.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {genre.description || "No description"}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Link href={`/admin/genres/${genre.slug}/edit`}>
            <Button variant="outline" size="sm">
              <EditIcon className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </Link>
          <Button variant="destructive" size="sm" onClick={onDelete}>
            <TrashIcon className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
