import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, Info, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const Footer = () => {
  return (
    <footer className="bg-[#070A11] pt-32 pb-12 relative overflow-hidden">
      {/* Footer Top Refraction */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-xl shadow-accent/20">
                <span className="text-white font-black text-xl italic">T</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                ThaiSource<span className="text-accent">Pro</span>
              </span>
            </Link>
            <p className="text-text-secondary text-lg leading-relaxed max-w-sm font-medium">
              The premier industrial B2B infrastructure for Thailand. Connecting local excellence with global opportunity through verifiable data.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, Info].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-all group">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Marketplace</h4>
            <ul className="flex flex-col gap-5">
              {["Find Suppliers", "Industry Sectors", "RFQ System", "Verified Partners", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-text-secondary font-bold text-sm hover:text-white transition-colors flex items-center group">
                    {item} <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Company</h4>
            <ul className="flex flex-col gap-5">
              {["About Us", "Compliance", "Privacy Policy", "Terms of Use", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-text-secondary font-bold text-sm hover:text-white transition-colors flex items-center group">
                    {item} <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-text-secondary text-sm mb-6 font-medium">
              Get weekly industrial insights and top supplier alerts.
            </p>
            <div className="flex flex-col gap-3">
              <Input placeholder="Enter work email" className="bg-white/[0.03] border-white/10 h-12" />
              <Button className="w-full h-12 font-black uppercase tracking-widest text-xs">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-text-secondary text-xs font-bold uppercase tracking-widest opacity-40">
              © {new Date().getFullYear()} ThaiSource Pro. All rights reserved.
            </p>
            <div className="flex gap-8">
               <div className="flex items-center gap-2.5 text-text-secondary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer">
                 <Mail size={16} className="text-accent" /> info@thaisource.pro
               </div>
               <div className="flex items-center gap-2.5 text-text-secondary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer">
                 <Phone size={16} className="text-accent" /> +66 (0) 2 123 4567
               </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-4 py-2 glass rounded-full border-white/5">
             <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest text-white/60">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
