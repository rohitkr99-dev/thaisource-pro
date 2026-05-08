"use client";

import React from "react";
import { 
  Wrench, 
  Wind, 
  Zap, 
  Construction, 
  Layers, 
  Cpu, 
  Truck, 
  Ship, 
  Cog, 
  Factory, 
  ShieldAlert, 
  HardHat,
  ArrowRight
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const categories = [
  { name: "MEP", icon: Wrench, count: "1,240+", color: "text-blue-400" },
  { name: "HVAC", icon: Wind, count: "850+", color: "text-cyan-400" },
  { name: "Electrical", icon: Zap, count: "2,100+", color: "text-yellow-400" },
  { name: "Civil Works", icon: Construction, count: "3,400+", color: "text-orange-400" },
  { name: "Steel Fab", icon: Layers, count: "920+", color: "text-zinc-400" },
  { name: "Automation", icon: Cpu, count: "580+", color: "text-purple-400" },
  { name: "Logistics", icon: Truck, count: "1,100+", color: "text-emerald-400" },
  { name: "Export Svc", icon: Ship, count: "450+", color: "text-indigo-400" },
  { name: "Machinery", icon: Cog, count: "1,850+", color: "text-red-400" },
  { name: "Manufacturing", icon: Factory, count: "4,200+", color: "text-slate-400" },
  { name: "Safety Gear", icon: HardHat, count: "720+", color: "text-amber-400" },
  { name: "Maintenance", icon: ShieldAlert, count: "940+", color: "text-rose-400" },
];

const IndustryCategories = () => {
  return (
    <section className="py-32 relative bg-background overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Badge variant="glass" dot className="mb-6">Sectors</Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Explore Industrial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Verticals</span>
            </h2>
            <p className="text-text-secondary text-lg font-medium">
              Precision-mapped categories connecting you to verified Thai manufacturers and specialized service providers.
            </p>
          </div>
          <button className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs hover:text-accent transition-all pb-2 border-b border-white/10 hover:border-accent">
            View All Industries <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <AnimatedSection 
              key={category.name} 
              delay={index * 0.04} 
              direction="up"
              distance={20}
            >
              <GlassCard className="flex flex-col gap-6 group cursor-pointer h-full border-white/5 hover:border-accent/40 bg-white/[0.02] p-8">
                <div className={`p-4 rounded-2xl bg-white/[0.03] w-fit group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300 ${category.color} shadow-xl`}>
                  <category.icon size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-accent transition-colors mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between">
                     <span className="text-xs font-bold text-text-secondary uppercase tracking-widest opacity-60">
                       {category.count} Suppliers
                     </span>
                     <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform">
                        <ArrowRight size={14} className="text-accent" />
                     </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCategories;
