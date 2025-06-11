"use client";

import { signOut } from "next-auth/react";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuShortcut,
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useSession } from "next-auth/react";
import { formatName } from "@/lib/helpers";

export default function AdminProfile() {
  const { data } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={data?.user.image || ""} />
          <AvatarFallback>{formatName(data?.user.name || "")}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          Sign out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
