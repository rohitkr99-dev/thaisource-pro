"use client";

import React from "react";
import { Search, ChevronRight, ShieldCheck, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-10">
            <AnimatedSection direction="up" distance={30}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-bold text-accent mb-8 shadow-xl shadow-accent/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                <span className="uppercase tracking-widest">Global Industrial Gateway</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-white">
                Sourcing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary animate-gradient-x">
                  Redefined.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mt-8 max-w-lg leading-relaxed font-medium">
                Connect with Thailand's elite industrial network. The premier B2B infrastructure for verifiable procurement and high-scale manufacturing.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="up" distance={20}>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl bg-white/[0.03] p-2 rounded-2xl border border-white/5 backdrop-blur-sm shadow-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary" size={22} />
                  <Input 
                    placeholder="Search manufacturers, services..." 
                    className="pl-14 h-16 bg-transparent border-none focus-visible:ring-0 text-lg placeholder:text-text-secondary/50"
                  />
                </div>
                <Button size="lg" className="h-16 px-12 text-lg rounded-xl shadow-2xl">
                  Search <ArrowRight className="ml-3" size={22} />
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-text-secondary/60 font-bold uppercase tracking-widest">
                <span>Popular:</span>
                <button className="hover:text-accent transition-all hover:translate-y-[-1px]">Metal-Works</button>
                <button className="hover:text-accent transition-all hover:translate-y-[-1px]">Robotics</button>
                <button className="hover:text-accent transition-all hover:translate-y-[-1px]">MEP-Engineering</button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="up" className="grid grid-cols-3 gap-10 pt-10 border-t border-white/5 mt-4">
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-black text-white tracking-tighter">12.5k+</div>
                <div className="text-[10px] text-text-secondary uppercase font-black tracking-widest opacity-60">Verified Suppliers</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-black text-white tracking-tighter">฿850M</div>
                <div className="text-[10px] text-text-secondary uppercase font-black tracking-widest opacity-60">Monthly Volume</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-black text-white tracking-tighter">2.4h</div>
                <div className="text-[10px] text-text-secondary uppercase font-black tracking-widest opacity-60">Avg. Response</div>
              </div>
            </AnimatedSection>
          </div>

          {/* Ultra-Premium Visual Element */}
          <div className="relative hidden lg:block h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
            >
              {/* Central Geometric Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
                
                {/* Floating Refraction Cards */}
                <motion.div 
                  animate={{ y: [0, -30, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 -left-10 z-30"
                >
                  <GlassCard className="w-56 p-5 border-white/10 shadow-2xl backdrop-blur-2xl" hoverEffect={false}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2.5 bg-accent rounded-xl shadow-lg shadow-accent/20">
                        <ShieldCheck className="text-white" size={22} />
                      </div>
                      <div className="h-2 w-20 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-full" />
                      </div>
                    </div>
                    <div className="space-y-2">
                       <div className="h-4 w-full bg-white/5 rounded-md" />
                       <div className="h-3 w-2/3 bg-white/5 rounded-md opacity-50" />
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 30, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -right-10 z-30"
                >
                  <GlassCard className="w-64 p-6 border-white/10 shadow-2xl backdrop-blur-2xl" hoverEffect={false} accent="secondary">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <Zap size={20} fill="currentColor" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-white/80">Live Inquiries</span>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/5" />
                          <div className="space-y-1">
                             <div className="h-2 w-24 bg-white/10 rounded-full" />
                             <div className="h-1.5 w-16 bg-white/5 rounded-full" />
                          </div>
                       </div>
                       <div className="flex items-center gap-3 opacity-60">
                          <div className="w-8 h-8 rounded-lg bg-white/5" />
                          <div className="space-y-1">
                             <div className="h-2 w-20 bg-white/10 rounded-full" />
                             <div className="h-1.5 w-12 bg-white/5 rounded-full" />
                          </div>
                       </div>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Industrial Ring Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-80 h-80 border-2 border-white/[0.03] rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                      <div className="w-64 h-64 border-2 border-dashed border-accent/20 rounded-full" />
                   </div>
                   <div className="absolute w-40 h-40 bg-accent/10 rounded-full blur-[60px]" />
                   <div className="w-24 h-24 bg-accent rounded-[32px] flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.6)] border-4 border-white/10 relative z-20">
                      <span className="text-white font-black text-4xl italic tracking-tighter">TS</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
