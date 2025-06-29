"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
  Avatar,
  AvatarFallback,
} from "@/components/ui";
import { Artist } from "@/types";
import { formatName } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

export const ArtistColumns: ColumnDef<Artist>[] = [
  {
    header: "",
    accessorKey: "imagePublicId",
    cell: ({ row }) => {
      return (
        <Avatar>
          {row.original.imagePublicId ? (
            <CldImage
              src={row.original.imagePublicId}
              alt={row.original.name}
              fill
              aspectRatio="1:1"
              className="rounded-full"
              crop="fill"
              sizes="32px"
            />
          ) : (
            <AvatarFallback>
              {formatName(row.original.name || "")}
            </AvatarFallback>
          )}
        </Avatar>
      );
    },
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Nationality",
    accessorKey: "nationality",
  },
  {
    header: "Followers",
    accessorKey: "followerCount",
  },
  {
    header: "Monthly Listeners",
    accessorKey: "monthlyListeners",
  },
  {
    header: "Albums",
    accessorKey: "albums",
    cell: ({ row }) => {
      return <div>{row.original.albums.length}</div>;
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
                href={`/admin/artists/${row.original.slug}/${row.original.id}`}
              >
                View Artist
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`/admin/artists/${row.original.slug}/${row.original.id}/edit`}
              >
                Edit Artist
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
