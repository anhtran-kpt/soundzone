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

export type ArtistInfo = {
  slug: string;
  name: string;
  nationality: string;
  avatarUrl: string;
  followerCount: number;
  monthlyListeners: number;
};

export const columns: ColumnDef<ArtistInfo>[] = [
  {
    header: "Avatar",
    accessorKey: "avatarUrl",
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.original.avatarUrl} />
          <AvatarFallback>
            {row.original.name.split(" ")[0].charAt(0)}
            {row.original.name.split(" ")[1]?.charAt(0)}
          </AvatarFallback>
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
              <Link href={`/admin/artists/${row.original.slug}`}>
                View Artist
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/admin/artists/${row.original.slug}/edit`}>
                Edit Artist
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
