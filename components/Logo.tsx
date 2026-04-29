import Image from "next/image";
import { SITE_LOGO_PATH, SITE_NAME } from "@/lib/site";

type LogoProps = {
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function Logo({ className = "", width, height, priority }: LogoProps) {
  return (
    <Image
      src={SITE_LOGO_PATH}
      alt=""
      width={width}
      height={height}
      className={`h-auto w-auto max-w-full object-contain object-left ${className}`}
      priority={priority}
    />
  );
}

export function logoAriaLabel() {
  return `${SITE_NAME} home`;
}
