import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "error" | "glass";
  dot?: boolean;
}

function Badge({ className, variant = "default", dot = false, children, ...props }: BadgeProps) {
  const variants = {
    default: "border-transparent bg-accent/10 text-accent",
    secondary: "border-transparent bg-secondary/10 text-secondary",
    outline: "text-text-secondary border-white/10 hover:border-white/20",
    success: "border-transparent bg-success/10 text-success",
    warning: "border-transparent bg-warning/10 text-warning",
    error: "border-transparent bg-error/10 text-error",
    glass: "glass border-white/5 text-white/90 backdrop-blur-md",
  };

  const dots = {
    default: "bg-accent",
    secondary: "bg-secondary",
    outline: "bg-text-secondary",
    success: "bg-success shadow-[0_0_8px_rgba(16,185,129,0.6)]",
    warning: "bg-warning shadow-[0_0_8px_rgba(245,158,11,0.6)]",
    error: "bg-error shadow-[0_0_8px_rgba(239,68,68,0.6)]",
    glass: "bg-white",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse", dots[variant])} />
      )}
      {children}
    </div>
  );
}

export { Badge };
