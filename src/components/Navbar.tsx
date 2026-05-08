"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Globe, User, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Suppliers", href: "/vendors" },
    { name: "Industries", href: "#" },
    { name: "RFQ System", href: "#" },
    { name: "Analytics", href: "#" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12",
        isScrolled 
          ? "py-4 glass border-b border-white/10" 
          : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center shadow-2xl shadow-accent/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-black text-2xl italic">T</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white hidden sm:block">
            ThaiSource<span className="text-accent group-hover:text-white transition-colors">Pro</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.2em] text-text-secondary hover:text-white transition-all hover:translate-y-[-1px]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-white transition-all rounded-lg hover:bg-white/5">
            <Search size={20} />
          </button>
          <div className="h-6 w-[1px] bg-white/10 mx-2" />
          <Button variant="ghost" size="sm" className="text-xs uppercase font-black tracking-widest px-6">
            Log In
          </Button>
          <Button variant="primary" size="sm" className="text-xs uppercase font-black tracking-widest px-8 rounded-xl shadow-xl">
            Join Now <ArrowRight size={14} className="ml-2" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-white glass rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-white/10 p-10 flex flex-col gap-8 animate-in slide-in-from-top duration-500 min-h-screen">
          <div className="flex flex-col gap-6">
             <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary/50">Navigation</p>
             {navLinks.map((link) => (
               <Link
                 key={link.name}
                 href={link.href}
                 className="text-3xl font-black text-white py-2 hover:text-accent transition-colors"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {link.name}
               </Link>
             ))}
          </div>
          <div className="h-[1px] bg-white/5 my-4" />
          <div className="flex flex-col gap-4">
             <Button variant="outline" className="w-full h-16 text-lg font-black uppercase tracking-widest">
               Sign In
             </Button>
             <Button variant="primary" className="w-full h-16 text-lg font-black uppercase tracking-widest">
               Join ThaiSource Pro
             </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
