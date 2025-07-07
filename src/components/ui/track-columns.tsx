"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  MicVocalIcon,
  MoreHorizontalIcon,
  PlusCircleIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from "@/components/ui";
import { Track } from "@/types";
import TrackInfo from "../shared/ui/track-info";
import { formatDuration } from "@/lib/utils";

export const TrackColumns: ColumnDef<Track>[] = [
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
      return <TrackInfo track={row.original} />;
    },
  },
  {
    header: "Plays",
    accessorKey: "plays",
    cell: ({ row }) => {
      return <span>{row.original.playHistory.length}</span>;
    },
  },
  {
    header: "",
    accessorKey: "add-to-liked-tracks",
    cell: ({ row }) => {
      return <PlusCircleIcon />;
    },
  },
  {
    header: "Duration",
    accessorKey: "duration",
    cell: ({ row }) => {
      return (
        <span className="text-right">
          {formatDuration(row.original.duration)}
        </span>
      );
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
                <Link href={`/admin/artists/${row.original.id}`}>
                  <MicVocalIcon />
                  Artist detail
                </Link>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button asChild type="button" variant="ghost">
                <Link href={`/admin/artists/${row.original.id}/albums/new`}>
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
