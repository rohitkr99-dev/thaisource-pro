"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2500;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const TrustIndicators = () => {
  const stats = [
    { label: "Verified Partners", value: 12500, suffix: "+" },
    { label: "Active Enterprise Buyers", value: 4800, suffix: "+" },
    { label: "Digital RFQs Generated", value: 85200, suffix: "" },
    { label: "B2B Transaction Volume", value: 24, suffix: "B+" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Refraction Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1} direction="up" className="flex flex-col gap-4">
              <div className="text-4xl md:text-6xl font-black text-white tracking-tighter flex items-baseline gap-1">
                {stat.label.includes("Volume") && <span className="text-2xl md:text-3xl text-accent font-bold">฿</span>}
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="flex flex-col gap-2">
                 <div className="h-0.5 w-8 bg-accent/30 rounded-full" />
                 <div className="text-[10px] md:text-xs text-text-secondary/60 uppercase tracking-[0.2em] font-black leading-tight">
                    {stat.label}
                 </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default TrustIndicators;
