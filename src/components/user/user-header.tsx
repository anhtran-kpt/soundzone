"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Icon from "../common/icon";
import { UserProfile, UserSearchBar } from ".";
import { ModeToggle } from "../layout/mode-toggle";
import { useScroll, motion, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function UserHeader({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollY } = useScroll({
    container: scrollContainerRef,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setIsScrolled(y > 0);
  });

  return (
    <motion.header
      className={`sticky top-0 z-10 px-12 py-3 flex items-center justify-between transition-colors ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="flex items-center gap-4 flex-grow">
        <div className="space-x-2">
          <Button variant="ghost">
            <Icon icon={ArrowLeftIcon} />
          </Button>
          <Button variant="ghost">
            <Icon icon={ArrowRightIcon} />
          </Button>
        </div>
        <UserSearchBar />
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <Button variant="ghost">
          <Icon icon={BellIcon} />
        </Button>
        <Button variant="ghost">
          <Icon icon={SettingsIcon} />
        </Button>
        <UserProfile />
      </div>
    </motion.header>
  );
}
