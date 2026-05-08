"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  accent?: "none" | "primary" | "secondary";
  gradient?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hoverEffect = true, accent = "none", gradient = false, children, ...props }, ref) => {
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
        {...props}
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
