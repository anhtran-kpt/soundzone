"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Profile } from "./profile";
import { SearchBar } from "./search-bar";
import { ModeToggle } from "@/components/features/mode-toggle";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll({
    container: scrollContainerRef,
    layoutEffect: false,
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    setIsScrolled(y > 0);
  });

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 px-12 py-3 flex items-center justify-between transition-colors",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-4 flex-grow">
        <div className="space-x-2">
          <Button variant="ghost">
            <ArrowLeftIcon />
          </Button>
          <Button variant="ghost">
            <ArrowRightIcon />
          </Button>
        </div>
        <SearchBar />
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <Button variant="ghost">
          <BellIcon />
        </Button>
        <Button variant="ghost">
          <SettingsIcon />
        </Button>
        <Profile />
      </div>
    </motion.header>
  );
}
