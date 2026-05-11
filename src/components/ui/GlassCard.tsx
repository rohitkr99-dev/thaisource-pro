"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  accent?: "none" | "primary" | "secondary";
  gradient?: boolean;
}

// Props that conflict between React and Framer Motion
const MOTION_EXCLUDES = [
  'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration',
  'onDrag', 'onDragStart', 'onDragEnd', 'onDragOver', 'onDragEnter', 'onDragLeave', 'onDrop',
  'onTransitionEnd',
] as const;

type ExcludedProp = typeof MOTION_EXCLUDES[number];

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = true, accent = "none", gradient = false, children, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filteredProps: Record<string, any> = {};
    for (const [key, value] of Object.entries(props)) {
      if (!MOTION_EXCLUDES.includes(key as ExcludedProp)) {
        filteredProps[key] = value;
      }
    }

    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
        className={cn(
          "glass-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
          accent === "primary" && "border-accent/20",
          accent === "secondary" && "border-secondary/20",
          hoverEffect && "hover:border-white/20 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/40",
          gradient && "mesh-bg",
          className
        )}
        {...filteredProps}
      >
        {/* Subtle top light refraction */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {children}
      </motion.div>
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };