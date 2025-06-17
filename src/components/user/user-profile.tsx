"use client";

import { signOut } from "next-auth/react";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuShortcut,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useSession } from "next-auth/react";
import { formatName } from "@/lib/helpers";
import { CldImage } from "next-cloudinary";

export default function UserProfile() {
  const { data } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          {data?.user.image ? (
            <CldImage
              src={data?.user.image}
              alt={data?.user.name || ""}
              fill
              aspectRatio="1:1"
              className="rounded-full"
              crop="fill"
              sizes="32px"
            />
          ) : (
            <AvatarFallback>{formatName(data?.user.name || "")}</AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/sign-in" })}>
          Sign out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
