"use client";

import React from "react";
import { Star, ShieldCheck, MapPin, ExternalLink, ArrowRight, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";

const vendors = [
  {
    id: 1,
    name: "Thai Steel Dynamics",
    category: "Steel Fabrication",
    location: "Rayong, TH",
    rating: 4.9,
    reviews: 124,
    isVerified: true,
    isGold: true,
    logoFallback: "TSD",
    services: ["Structural", "CNC Machining"],
    performance: 98,
  },
  {
    id: 2,
    name: "Siam Automation",
    category: "Automation",
    location: "Bangkok, TH",
    rating: 4.8,
    reviews: 86,
    isVerified: true,
    isGold: true,
    logoFallback: "SAS",
    services: ["Robotics", "PLC"],
    performance: 95,
  },
  {
    id: 3,
    name: "Bangkok MEP Group",
    category: "MEP",
    location: "Bangkok, TH",
    rating: 4.7,
    reviews: 210,
    isVerified: true,
    isGold: false,
    logoFallback: "BMG",
    services: ["Electrical", "HVAC"],
    performance: 92,
  },
];

const FeaturedVendors = () => {
  return (
    <section className="py-32 bg-[#090D16] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <Badge variant="glass" dot className="mb-6">Elite Network</Badge>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Premium <span className="text-secondary">Partners.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg font-medium leading-relaxed">
            The top 1% of industrial suppliers in Thailand, audited for operational excellence and international quality standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {vendors.map((vendor, index) => (
            <AnimatedSection key={vendor.id} delay={index * 0.15} direction="up">
              <GlassCard className="h-full flex flex-col p-0 overflow-hidden group border-white/5 hover:border-white/10 shadow-2xl">
                {/* Visual Header */}
                <div className="h-32 bg-gradient-to-br from-accent/20 via-[#121826] to-secondary/10 relative overflow-hidden">
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#121826] to-transparent" />
                   
                   {vendor.isGold && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                        <Zap size={10} fill="currentColor" /> Gold Partner
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile Section */}
                <div className="px-8 pb-8 relative">
                  <div className="absolute -top-10 left-8">
                    <Avatar 
                      fallback={vendor.logoFallback} 
                      className="w-20 h-20 border-4 border-[#121826] bg-card text-2xl font-black shadow-2xl accent-glow"
                    />
                  </div>

                  <div className="mt-14 flex flex-col gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-black text-2xl text-white group-hover:text-accent transition-colors tracking-tight">
                          {vendor.name}
                        </h3>
                        {vendor.isVerified && (
                          <ShieldCheck size={20} className="text-blue-400" />
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-xs font-bold text-text-secondary/60 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-rose-500/70" /> {vendor.location}</span>
                        <div className="h-1 w-1 rounded-full bg-white/10" />
                        <span className="text-accent">{vendor.category}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-4 border-y border-white/5">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1 text-amber-500">
                           <Star size={16} fill="currentColor" />
                           <span className="text-lg font-black text-white">{vendor.rating}</span>
                        </div>
                        <span className="text-[10px] uppercase font-bold text-text-secondary/50 tracking-tighter">{vendor.reviews} Reviews</span>
                      </div>
                      <div className="h-10 w-[1px] bg-white/5" />
                      <div className="flex flex-col gap-1 text-right">
                         <span className="text-lg font-black text-secondary">{vendor.performance}%</span>
                         <span className="text-[10px] uppercase font-bold text-text-secondary/50 tracking-tighter">Win Rate</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {vendor.services.map((service) => (
                        <Badge key={service} variant="outline" className="bg-white/5 border-none text-[9px]">
                          {service}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2">
                      <Button variant="primary" className="flex-1 font-black text-xs uppercase tracking-widest h-12">
                        Contact Partner
                      </Button>
                      <Button variant="outline" size="icon" className="shrink-0 h-12 w-12 rounded-xl">
                        <ExternalLink size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="ghost" className="group text-text-secondary hover:text-white font-bold tracking-widest text-xs uppercase">
            Browse Entire Supplier Directory <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
