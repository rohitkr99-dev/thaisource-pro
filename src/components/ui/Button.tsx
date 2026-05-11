"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

// Props that conflict between React and Framer Motion
const MOTION_EXCLUDES = [
  'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration',
  'onDrag', 'onDragStart', 'onDragEnd', 'onDragOver', 'onDragEnter', 'onDragLeave', 'onDrop',
  'onTransitionEnd',
] as const;

type ExcludedProp = typeof MOTION_EXCLUDES[number];

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filteredProps: Record<string, any> = {};
    for (const [key, value] of Object.entries(props)) {
      if (!MOTION_EXCLUDES.includes(key as ExcludedProp)) {
        filteredProps[key] = value;
      }
    }

    const variants = {
      primary: "bg-accent text-white hover:bg-accent/90 accent-glow",
      secondary: "bg-secondary text-white hover:bg-secondary/90 secondary-glow",
      outline: "border border-border bg-transparent hover:bg-white/5 text-white",
      ghost: "bg-transparent hover:bg-white/5 text-white",
      glass: "glass text-white hover:bg-white/10",
      danger: "bg-error text-white hover:bg-error/90",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm font-semibold tracking-tight",
      lg: "h-14 px-10 text-base font-bold tracking-tight",
      icon: "h-10 w-10",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
          variants[variant],
          sizes[size],
          className
        )}
        {...filteredProps}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Processing...</span>
          </div>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };