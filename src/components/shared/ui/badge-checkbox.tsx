"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeCheckboxVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      size: {
        default: "h-8 px-3 py-1",
        sm: "h-6 px-2 py-0.5 text-xs",
        lg: "h-10 px-4 py-2 text-sm",
      },
      variant: {
        default:
          "border-input bg-background hover:bg-accent hover:text-accent-foreground data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
        secondary:
          "border-input bg-secondary hover:bg-secondary/80 data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground",
        outline:
          "border-input hover:bg-accent hover:text-accent-foreground data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground",
        destructive:
          "border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=checked]:border-destructive",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

export interface BadgeCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof badgeCheckboxVariants> {
  children: React.ReactNode;
  showIcon?: boolean;
}

const BadgeCheckbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  BadgeCheckboxProps
>(({ className, size, variant, children, showIcon = true, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(badgeCheckboxVariants({ size, variant }), className)}
    {...props}
  >
    <span className="flex items-center gap-1">
      {showIcon && (
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          <Check className="h-3 w-3" />
        </CheckboxPrimitive.Indicator>
      )}
      {children}
    </span>
  </CheckboxPrimitive.Root>
));

BadgeCheckbox.displayName = "BadgeCheckbox";

export { BadgeCheckbox, badgeCheckboxVariants };
