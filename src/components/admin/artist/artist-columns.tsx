"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MicVocalIcon, MoreHorizontalIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from "@/components/ui";
import { Artist } from "@/types";
import { CldImage } from "next-cloudinary";

export const ArtistColumns: ColumnDef<Artist>[] = [
  {
    header: "#",
    accessorKey: "#",
    cell: ({ row }) => {
      return <span>{row.index + 1}</span>;
    },
  },
  {
    header: "",
    accessorKey: "imagePublicId",
    cell: ({ row }) => {
      return (
        <div className="relative size-8 rounded-full">
          <CldImage
            src={row.original.imagePublicId}
            alt={row.original.name}
            fill
            sizes="32px"
            className="object-cover rounded-full"
          />
        </div>
      );
    },
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => {
      return <span>{row.original.name}</span>;
    },
  },
  {
    header: "Followers",
    accessorKey: "followerCount",
    cell: ({ row }) => {
      return <span>{row.original._count.followers}</span>;
    },
  },
  {
    header: "Monthly Listeners",
    accessorKey: "monthlyListeners",
    cell: ({ row }) => {
      return <span>{0}</span>;
    },
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
            <DropdownMenuItem>
              <Button asChild type="button" variant="ghost">
                <Link href={`/admin/artists/${row.original.slug}`}>
                  <MicVocalIcon />
                  Artist detail
                </Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button asChild type="button" variant="ghost">
                <Link href={`/admin/artists/${row.original.slug}/albums/new`}>
                  <PlusIcon />
                  New album
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
