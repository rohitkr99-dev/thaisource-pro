import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback: string;
}

const Avatar = ({ src, alt, fallback, className, ...props }: AvatarProps) => {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-card",
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || fallback}
          className="aspect-square h-full w-full object-cover"
          width={40}
          height={40}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent">
          {fallback.substring(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export { Avatar };
