"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Avatar } from "@/components/ui/Avatar";
import { 
  Search, 
  Filter, 
  LayoutGrid, 
  List, 
  MapPin, 
  Star, 
  ShieldCheck, 
  ExternalLink,
  ChevronDown,
  X,
  Factory,
  Boxes,
  Truck,
  Settings,
  ChevronRight,
  SlidersHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const VendorSearch = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const vendors = [
    {
      id: 1,
      name: "Thai Steel Dynamics Co., Ltd.",
      category: "Steel Fabrication",
      location: "Rayong, Thailand",
      rating: 4.9,
      reviews: 124,
      isVerified: true,
      isGold: true,
      logoFallback: "TSD",
      services: ["Structural Steel", "Sheet Metal", "Welding"],
      description: "Leading manufacturer of structural steel components for large-scale industrial projects across SE Asia.",
      stats: { projects: "450+", experience: "25y" }
    },
    {
      id: 2,
      name: "Siam Automation Systems",
      category: "Automation",
      location: "Bangkok, Thailand",
      rating: 4.8,
      reviews: 86,
      isVerified: true,
      isGold: true,
      logoFallback: "SAS",
      services: ["PLC Programming", "Robotics", "SCADA"],
      description: "Specializing in end-to-end industrial automation and smart factory solutions for modern manufacturing.",
      stats: { projects: "120+", experience: "12y" }
    },
    {
      id: 3,
      name: "Bangkok MEP Contractors",
      category: "MEP",
      location: "Bangkok, Thailand",
      rating: 4.7,
      reviews: 210,
      isVerified: true,
      isGold: false,
      logoFallback: "BMC",
      services: ["Electrical", "Plumbing", "Fire Safety"],
      description: "Full-service mechanical, electrical, and plumbing contractor for commercial and industrial buildings.",
      stats: { projects: "800+", experience: "30y" }
    },
    {
      id: 4,
      name: "Eastern Logistics Solutions",
      category: "Logistics",
      location: "Chonburi, Thailand",
      rating: 4.6,
      reviews: 45,
      isVerified: true,
      isGold: false,
      logoFallback: "ELS",
      services: ["Warehousing", "Freight Forwarding", "Customs"],
      description: "Comprehensive logistics and supply chain management provider based near Thailand's main industrial ports.",
      stats: { projects: "2000+", experience: "15y" }
    },
  ];

  const categories = [
    { name: "MEP", icon: <Settings size={14} /> },
    { name: "HVAC", icon: <Boxes size={14} /> },
    { name: "Electrical", icon: <Settings size={14} /> },
    { name: "Steel Fabrication", icon: <Factory size={14} /> },
    { name: "Automation", icon: <Settings size={14} /> },
    { name: "Logistics", icon: <Truck size={14} /> },
  ];

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header & Search */}
          <div className="flex flex-col gap-10 mb-16">
             <div className="flex flex-col gap-4 max-w-2xl">
                <Badge variant="outline" className="w-fit border-accent/30 text-accent bg-accent/5 font-bold tracking-wider">
                   DIRECTORY
                </Badge>
                <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                   Discover Premium <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Industrial Partners</span>
                </h1>
                <p className="text-lg text-text-secondary font-medium leading-relaxed">
                   Access Thailand's most comprehensive network of verified manufacturers, contractors, and industrial service providers.
                </p>
             </div>

             <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 group">
                   <div className="absolute inset-0 bg-accent/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                   <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={22} />
                   <Input 
                    placeholder="Search by company, service, or product..." 
                    className="pl-14 h-16 bg-card/50 border-white/5 group-focus-within:border-accent/50 text-lg transition-all"
                   />
                </div>
                <div className="flex gap-4 shrink-0">
                   <Button variant="outline" className="h-16 px-8 border-white/5 hover:border-white/20 bg-card/50 lg:hidden" onClick={() => setShowFilters(true)}>
                      <SlidersHorizontal size={20} className="mr-2" /> Filters
                   </Button>
                   <Button className="h-16 px-12 text-lg font-bold shadow-2xl shadow-accent/20">
                      Find Suppliers
                   </Button>
                </div>
             </div>

             {/* Quick Filter Tags */}
             <div className="flex flex-wrap gap-2">
                {["Verified Only", "EEC Zone", "ISO Certified", "Gold Partners"].map(tag => (
                   <button 
                    key={tag}
                    onClick={() => toggleFilter(tag)}
                    className={cn(
                      "px-4 py-2 rounded-full border text-xs font-bold transition-all",
                      activeFilters.includes(tag) 
                        ? "bg-accent border-accent text-white shadow-lg shadow-accent/20" 
                        : "border-white/5 bg-card/50 text-text-secondary hover:border-white/20 hover:text-white"
                    )}
                   >
                      {tag}
                   </button>
                ))}
             </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-12 items-start">
             {/* Sidebar Filters (Desktop) */}
             <aside className="hidden lg:flex flex-col gap-10 sticky top-32">
                <div className="flex items-center justify-between">
                   <h2 className="text-lg font-black text-white tracking-tight">Filters</h2>
                   <button className="text-xs font-bold text-accent hover:underline" onClick={() => setActiveFilters([])}>Reset All</button>
                </div>

                <div className="flex flex-col gap-10">
                   {/* Categories */}
                   <div className="flex flex-col gap-5">
                      <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] flex items-center justify-between">
                         Industry Sector
                         <ChevronDown size={14} />
                      </h3>
                      <div className="flex flex-col gap-2">
                         {categories.map((cat) => (
                           <button 
                            key={cat.name} 
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 group transition-all text-left"
                           >
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary group-hover:bg-accent/10 group-hover:text-accent transition-all">
                                    {cat.icon}
                                 </div>
                                 <span className="text-sm font-bold text-text-secondary group-hover:text-white transition-colors">{cat.name}</span>
                              </div>
                              <div className="w-4 h-4 rounded border border-white/10 group-hover:border-accent/50" />
                           </button>
                         ))}
                      </div>
                   </div>

                   {/* Province */}
                   <div className="flex flex-col gap-5">
                      <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">Location</h3>
                      <div className="relative group">
                         <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                         <select className="w-full h-14 bg-card/50 border border-white/5 rounded-2xl pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none transition-all cursor-pointer">
                            <option>All Provinces</option>
                            <option>Bangkok (BKK)</option>
                            <option>Rayong (EEC)</option>
                            <option>Chonburi (EEC)</option>
                            <option>Samut Prakan</option>
                         </select>
                         <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" size={16} />
                      </div>
                   </div>

                   {/* Verification Status */}
                   <div className="flex flex-col gap-5">
                      <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">Trust & Verification</h3>
                      <div className="flex flex-col gap-3">
                         {[
                           { name: "Verified Supplier", icon: <ShieldCheck size={16} className="text-blue-400" /> },
                           { name: "Gold Membership", icon: <Star size={16} className="text-amber-500" /> },
                           { name: "Active RFQ Status", icon: <div className="w-2 h-2 rounded-full bg-emerald-500" /> }
                         ].map((item) => (
                           <label key={item.name} className="flex items-center gap-4 cursor-pointer group p-2 -ml-2 rounded-xl hover:bg-white/5 transition-all">
                              <div className="w-5 h-5 rounded-md border border-white/10 bg-card group-hover:border-accent transition-colors flex items-center justify-center">
                                 <div className="w-2 h-2 rounded-sm bg-accent opacity-0 group-hover:opacity-20" />
                              </div>
                              <div className="flex items-center gap-2">
                                 {item.icon}
                                 <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors">{item.name}</span>
                              </div>
                           </label>
                         ))}
                      </div>
                   </div>
                </div>
             </aside>

             {/* Results Section */}
             <div className="lg:col-span-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                   <div className="flex flex-col gap-1">
                      <p className="text-lg font-black text-white tracking-tight">124 Suppliers Found</p>
                      <p className="text-sm text-text-secondary font-medium">Sorted by match relevance and rating</p>
                   </div>
                   
                   <div className="flex items-center gap-4">
                      <div className="flex bg-card/80 p-1.5 rounded-2xl border border-white/5 shadow-inner">
                         <button 
                            className={cn("p-2.5 rounded-xl transition-all duration-300", viewMode === "grid" ? "bg-accent text-white shadow-lg shadow-accent/20" : "text-text-secondary hover:text-white")}
                            onClick={() => setViewMode("grid")}
                         >
                            <LayoutGrid size={20} />
                         </button>
                         <button 
                            className={cn("p-2.5 rounded-xl transition-all duration-300", viewMode === "list" ? "bg-accent text-white shadow-lg shadow-accent/20" : "text-text-secondary hover:text-white")}
                            onClick={() => setViewMode("list")}
                         >
                            <List size={20} />
                         </button>
                      </div>
                      <div className="relative group">
                        <select className="h-12 bg-card/80 border border-white/5 rounded-2xl pl-4 pr-10 text-xs font-black text-white/70 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none transition-all cursor-pointer">
                           <option>Recommended</option>
                           <option>Highest Rated</option>
                           <option>Recently Added</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" size={14} />
                      </div>
                   </div>
                </div>

                {viewMode === "grid" ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {vendors.map((vendor, i) => (
                      <AnimatedSection key={vendor.id} delay={i * 0.05} direction="up">
                        <GlassCard className="h-full flex flex-col p-8 group border-white/5 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500 relative overflow-hidden">
                           {/* Decorative background gradient */}
                           <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] group-hover:bg-accent/10 transition-colors" />
                           
                           <div className="flex justify-between items-start mb-8">
                              <div className="relative">
                                 <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                 <Avatar fallback={vendor.logoFallback} className="w-20 h-20 text-2xl border-white/10 shadow-2xl relative z-10 font-black" />
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                 {vendor.isGold && (
                                   <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 font-black text-[10px] tracking-widest px-3 py-1 uppercase">Gold Partner</Badge>
                                 )}
                                 {vendor.isVerified && (
                                   <div className="flex items-center gap-1 text-blue-400 font-bold text-[10px] uppercase tracking-widest">
                                      <ShieldCheck size={14} /> Verified
                                   </div>
                                 )}
                              </div>
                           </div>

                           <div className="flex flex-col gap-2 mb-6">
                              <h3 className="font-black text-2xl text-white group-hover:text-accent transition-colors leading-tight">{vendor.name}</h3>
                              <div className="flex items-center gap-4">
                                 <p className="text-xs text-text-secondary flex items-center gap-1.5 font-bold"><MapPin size={14} className="text-accent" /> {vendor.location}</p>
                                 <div className="flex items-center gap-1.5 text-amber-500">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-xs font-black text-white">{vendor.rating}</span>
                                    <span className="text-[10px] text-text-secondary font-bold">({vendor.reviews})</span>
                                 </div>
                              </div>
                           </div>

                           <p className="text-sm text-text-secondary line-clamp-2 mb-8 leading-relaxed font-medium flex-1">
                              {vendor.description}
                           </p>

                           {/* Industrial Stats Preview */}
                           <div className="grid grid-cols-2 gap-4 mb-8">
                              <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
                                 <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Projects</span>
                                 <span className="text-sm font-black text-white">{vendor.stats.projects}</span>
                              </div>
                              <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
                                 <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Industry Exp</span>
                                 <span className="text-sm font-black text-white">{vendor.stats.experience}</span>
                              </div>
                           </div>

                           <div className="flex flex-wrap gap-2 mb-10">
                              {vendor.services.slice(0, 3).map(s => (
                                <Badge key={s} variant="outline" className="text-[9px] uppercase font-black tracking-widest py-1.5 px-3 border-white/5 bg-white/5 text-white/60 group-hover:border-accent/20 group-hover:text-accent transition-all">{s}</Badge>
                              ))}
                           </div>

                           <div className="flex gap-4">
                              <Button className="flex-1 h-14 font-black tracking-tight text-sm shadow-xl shadow-accent/10">
                                 Send Inquiry
                              </Button>
                              <Button variant="outline" size="icon" className="h-14 w-14 shrink-0 rounded-2xl border-white/5 hover:border-accent/30 group/btn">
                                 <ExternalLink size={20} className="group-hover/btn:text-accent transition-colors" />
                              </Button>
                           </div>
                        </GlassCard>
                      </AnimatedSection>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    {vendors.map((vendor, i) => (
                       <AnimatedSection key={vendor.id} delay={i * 0.05} direction="up">
                          <GlassCard className="p-8 border-white/5 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500 group relative overflow-hidden">
                             <div className="flex items-center gap-10 relative z-10">
                                <div className="relative shrink-0">
                                   <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                   <Avatar fallback={vendor.logoFallback} className="w-24 h-24 text-3xl font-black border-white/10 relative z-10" />
                                </div>
                                <div className="flex-1 min-w-0">
                                   <div className="flex items-center justify-between mb-3">
                                      <div className="flex items-center gap-3">
                                         <h3 className="font-black text-2xl text-white group-hover:text-accent transition-colors tracking-tight">{vendor.name}</h3>
                                         {vendor.isVerified && <ShieldCheck size={20} className="text-blue-400" />}
                                         {vendor.isGold && <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 font-black text-[9px] tracking-[0.2em] uppercase px-3">Gold Partner</Badge>}
                                      </div>
                                      <div className="flex items-center gap-2 text-amber-500">
                                         <Star size={18} fill="currentColor" />
                                         <span className="font-black text-lg text-white">{vendor.rating}</span>
                                         <span className="text-xs text-text-secondary font-bold">({vendor.reviews} reviews)</span>
                                      </div>
                                   </div>
                                   <div className="flex items-center gap-8 mb-6 font-bold">
                                      <span className="text-sm text-text-secondary flex items-center gap-1.5"><MapPin size={16} className="text-accent" /> {vendor.location}</span>
                                      <span className="text-sm text-accent uppercase tracking-widest flex items-center gap-2">
                                         <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                         {vendor.category}
                                      </span>
                                      <span className="text-sm text-white/40 flex items-center gap-1.5">
                                         <Boxes size={16} />
                                         {vendor.stats.projects} successful projects
                                      </span>
                                   </div>
                                   <p className="text-sm text-text-secondary line-clamp-1 leading-relaxed mb-8 font-medium">
                                      {vendor.description}
                                   </p>
                                   <div className="flex items-center justify-between">
                                      <div className="flex gap-2">
                                         {vendor.services.map(s => <Badge key={s} variant="outline" className="text-[9px] font-black uppercase tracking-widest py-1.5 px-4 border-white/5 bg-white/5">{s}</Badge>)}
                                      </div>
                                      <div className="flex items-center gap-4">
                                         <Button variant="ghost" className="text-xs font-black uppercase tracking-widest text-text-secondary hover:text-white group/btn">
                                            View Profile <ChevronRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                         </Button>
                                         <Button className="h-12 px-10 font-black text-sm rounded-2xl shadow-xl shadow-accent/10">Send RFQ</Button>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </GlassCard>
                       </AnimatedSection>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                <div className="mt-20 flex items-center justify-center gap-3">
                   <Button variant="outline" className="w-12 h-12 p-0 border-accent/40 bg-accent/10 text-accent font-black shadow-lg shadow-accent/10" disabled>1</Button>
                   <Button variant="ghost" className="w-12 h-12 p-0 border border-white/5 font-black hover:bg-white/5">2</Button>
                   <Button variant="ghost" className="w-12 h-12 p-0 border border-white/5 font-black hover:bg-white/5">3</Button>
                   <span className="text-text-secondary mx-3 font-black">...</span>
                   <Button variant="ghost" className="w-12 h-12 p-0 border border-white/5 font-black hover:bg-white/5">12</Button>
                   <Button variant="ghost" className="px-6 h-12 text-xs font-black uppercase tracking-[0.2em] ml-6 border border-white/5 hover:border-accent/30 group transition-all">
                      Next Page <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* Mobile Filters Drawer Overlay */}
      <AnimatePresence>
         {showFilters && (
            <>
               <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFilters(false)}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
               />
               <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-card border-l border-white/10 z-[101] p-8 overflow-y-auto"
               >
                  <div className="flex items-center justify-between mb-10">
                     <h2 className="text-2xl font-black text-white">Filters</h2>
                     <button onClick={() => setShowFilters(false)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                        <X size={20} />
                     </button>
                  </div>
                  {/* Reuse Sidebar Filter Content here for mobile */}
                  <div className="flex flex-col gap-10">
                     <div className="flex flex-col gap-5">
                        <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">Industry Sector</h3>
                        <div className="grid grid-cols-1 gap-2">
                           {categories.map((cat) => (
                              <Button key={cat.name} variant="outline" className="justify-start h-14 border-white/5 bg-white/5">
                                 {cat.icon} <span className="ml-3">{cat.name}</span>
                              </Button>
                           ))}
                        </div>
                     </div>
                     {/* ... Add other filter sections ... */}
                     <Button className="w-full h-16 text-lg font-black mt-10" onClick={() => setShowFilters(false)}>
                        Show 124 Results
                     </Button>
                  </div>
               </motion.div>
            </>
         )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default VendorSearch;
