import { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
  fill?: string;
}

export default function Icon({
  icon: IconComponent,
  size = 22,
  strokeWidth = 1.5,
  className = "",
  fill = "none",
}: IconProps) {
  return (
    <IconComponent
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      fill={fill}
      className={className}
    />
  );
}
