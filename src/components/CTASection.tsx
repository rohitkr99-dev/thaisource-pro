"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, ShoppingCart, Briefcase, Zap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const CTASection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full mesh-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12">
          {/* Buyer CTA */}
          <AnimatedSection direction="left" distance={30}>
            <div className="relative group overflow-hidden rounded-[40px] bg-white/[0.03] p-12 md:p-16 border border-white/10 h-full backdrop-blur-xl hover:border-accent/30 transition-all duration-500 shadow-2xl">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                   <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center shadow-2xl shadow-accent/40 accent-glow">
                     <ShoppingCart className="text-white" size={36} strokeWidth={2.5} />
                   </div>
                   <Badge variant="glass" dot>Buyers</Badge>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                  Scale your <br />
                  <span className="text-accent">Procurement.</span>
                </h3>
                <p className="text-text-secondary text-xl mb-12 max-w-sm font-medium leading-relaxed">
                  Access 12k+ verified Thai manufacturers. Compare instant quotes and streamline your industrial supply chain.
                </p>
                <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-black uppercase tracking-widest group shadow-2xl">
                  Get Started <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                </Button>

                <div className="mt-12 flex gap-8">
                   <div className="flex items-center gap-3">
                      <Zap size={18} className="text-accent" />
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Fast Delivery</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Globe size={18} className="text-accent" />
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Global Export</span>
                   </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Vendor CTA */}
          <AnimatedSection direction="right" distance={30}>
            <div className="relative group overflow-hidden rounded-[40px] bg-white/[0.03] p-12 md:p-16 border border-white/10 h-full backdrop-blur-xl hover:border-secondary/30 transition-all duration-500 shadow-2xl">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] group-hover:bg-secondary/20 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                   <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center shadow-2xl shadow-secondary/40 secondary-glow">
                     <Briefcase className="text-white" size={36} strokeWidth={2.5} />
                   </div>
                   <Badge variant="glass" dot>Suppliers</Badge>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                  Grow your <br />
                  <span className="text-secondary">Export Business.</span>
                </h3>
                <p className="text-text-secondary text-xl mb-12 max-w-sm font-medium leading-relaxed">
                  List your products, reach enterprise industrial buyers, and dominate the SE Asian manufacturing market.
                </p>
                <Button variant="secondary" size="lg" className="h-16 px-10 rounded-2xl text-lg font-black uppercase tracking-widest group shadow-2xl">
                  Register Now <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                </Button>

                <div className="mt-12 flex gap-8">
                   <div className="flex items-center gap-3">
                      <Zap size={18} className="text-secondary" />
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">High Quality Leads</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Globe size={18} className="text-secondary" />
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Enterprise Reach</span>
                   </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
