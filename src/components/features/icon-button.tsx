"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ReactNode } from "react";

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
  tooltipContent?: ReactNode;
}

export const IconButton = ({
  icon: Icon,
  onClick,
  className,
  iconClassName,
  size = "md",
  tooltipContent,
}: IconButtonProps) => {
  let iconSize;

  switch (size) {
    case "sm":
      iconSize = 16;
      break;

    case "lg":
      iconSize = 24;
      break;

    case "xl":
      iconSize = 28;
      break;

    default:
      iconSize = 20;
      break;
  }

  const button = (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "rounded-full text-muted-foreground hover:text-foreground hover:scale-105 transition-transform cursor-pointer p-1",
        className
      )}
    >
      <Icon width={iconSize} height={iconSize} className={cn(iconClassName)} />
    </button>
  );

  if (!tooltipContent) return button;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent>
        <p>{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
};
