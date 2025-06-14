"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatName, formatDuration } from "@/lib/helpers";
import { format } from "date-fns";
import { FullAlbum } from "@/lib/types";

export const columns: ColumnDef<FullAlbum>[] = [
  {
    header: "",
    accessorKey: "coverUrl",
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.original.coverUrl} />
          <AvatarFallback>{formatName(row.original.name)}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Total Duration",
    accessorKey: "totalDuration",
    cell: ({ row }) => {
      return <div>{formatDuration(row.original.totalDuration)}</div>;
    },
  },
  {
    header: "Release Type",
    accessorKey: "releaseType",
  },
  {
    header: "Release Date",
    accessorKey: "releaseDate",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.releaseDate
            ? format(row.original.releaseDate, "MMM d, yyyy")
            : ""}
        </div>
      );
    },
  },
  {
    header: "Tracks",
    accessorKey: "tracks",
    cell: ({ row }) => {
      return <div>{row.original.tracks.length}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={`/admin/artists/${row.original.artist.slug}/albums/${row.original.slug}`}
              >
                View Album
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`/admin/artists/${row.original.artist.slug}/albums/${row.original.slug}/edit`}
              >
                Edit Album
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
