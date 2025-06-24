import { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
  fill?: string;
  stroke?: string;
  color?: string;
}

export default function Icon({
  icon: IconComponent,
  size = 22,
  strokeWidth = 1.5,
  className = "",
  fill = "none",
  stroke = "currentColor",
  color = "currentColor",
}: IconProps) {
  return (
    <IconComponent
      width={size}
      height={size}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      color={color}
      className={className}
    />
  );
}
