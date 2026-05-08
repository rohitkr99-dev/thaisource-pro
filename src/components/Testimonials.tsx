"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";

const testimonials = [
  {
    quote: "ThaiSource Pro transformed our procurement process. We found a specialized steel fabricator in Rayong within 48 hours who met all our international standards.",
    author: "Somchai Rattanakul",
    role: "Procurement Manager",
    company: "Global Energy Solutions",
    avatarFallback: "SR",
    rating: 5,
  },
  {
    quote: "The verification process on this platform is rigorous. As a buyer, knowing that every vendor has been physically audited gives us immense peace of mind.",
    author: "Sarah Jenkins",
    role: "EPC Lead",
    company: "Indo-Pacific Infra",
    avatarFallback: "SJ",
    rating: 5,
  },
  {
    quote: "Since joining as a vendor, our export leads have increased by 40%. The RFQ system is intuitive and helps us respond to high-quality inquiries efficiently.",
    author: "Wichai Prasert",
    role: "Managing Director",
    company: "Prasert Automation",
    avatarFallback: "WP",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 relative bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <Badge variant="glass" dot className="mb-6">Success Stories</Badge>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Verified by <span className="text-accent">Industry Leaders.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg font-medium">
            Hear from the companies shaping Thailand's industrial future using our secure procurement infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, index) => (
            <AnimatedSection key={t.author} delay={index * 0.1} direction="up" distance={20}>
              <GlassCard className="h-full flex flex-col justify-between relative border-white/5 p-10 bg-white/[0.02]">
                <div className="absolute top-0 left-10 w-12 h-1 bg-accent/30 rounded-b-full" />
                <Quote className="absolute top-10 right-10 text-white/5" size={80} strokeWidth={1} />
                
                <div className="relative z-10 mb-10">
                  <div className="flex gap-1 mb-6 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xl text-white/90 font-medium leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                  <Avatar fallback={t.avatarFallback} className="w-14 h-14 bg-accent/10 text-accent font-black text-lg border-white/10 accent-glow" />
                  <div>
                    <div className="font-black text-white text-lg tracking-tight">{t.author}</div>
                    <div className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-0.5">
                      {t.role} <span className="text-white/20 mx-1">•</span> {t.company}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default Testimonials;
