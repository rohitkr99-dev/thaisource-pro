"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IndustryCategories from "@/components/IndustryCategories";
import FeaturedVendors from "@/components/FeaturedVendors";
import TrustIndicators from "@/components/TrustIndicators";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <HeroSection />
      
      <AnimatedSection direction="up" delay={0.2}>
        <TrustIndicators />
      </AnimatedSection>
      
      <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <IndustryCategories />
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FeaturedVendors />
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <Testimonials />
        </div>
      </section>

      <CTASection />
      
      <Footer />
    </main>
  );
}
