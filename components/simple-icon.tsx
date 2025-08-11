import type { SimpleIcon } from "simple-icons";

interface SimpleIconProps extends Omit<React.ComponentProps<"svg">, "icon"> {
  icon: Pick<SimpleIcon, "title" | "hex" | "path">;
  color?: string;
  title?: string;
  size?: number;
}

export function SimpleIcon({
  icon,
  title = icon.title,
  color = "currentColor",
  size = 24,
  ...props
}: SimpleIconProps) {
  if (color === "default") {
    color = `#${icon.hex}`;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      {...props}
    >
      <title>{title}</title>
      <path d={icon.path} />
    </svg>
  );
}
