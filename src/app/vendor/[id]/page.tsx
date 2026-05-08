"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { Input } from "@/components/ui/Input";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
  MapPin, 
  Star, 
  ShieldCheck, 
  Globe, 
  Mail, 
  Phone, 
  Building2, 
  Calendar, 
  Users, 
  Award,
  CheckCircle2,
  FileText,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Download,
  Share2,
  Zap,
  Clock,
  Briefcase,
  Layers,
  BarChart3
} from "lucide-react";

const VendorProfile = () => {
  const vendor = {
    name: "Thai Steel Dynamics Co., Ltd.",
    category: "Steel Fabrication",
    location: "Rayong Industrial Park, Thailand",
    rating: 4.9,
    reviews: 124,
    isVerified: true,
    isGold: true,
    founded: 1998,
    employees: "200-500",
    website: "www.thaisteel.pro",
    description: "Thai Steel Dynamics is a premier manufacturer of high-grade structural steel and precision metal components. With over 25 years of experience in the Thai industrial sector, we provide end-to-end fabrication services for energy, construction, and manufacturing sectors. Our facility in Rayong is equipped with the latest CNC machinery and certified under ISO 9001:2015 and OHSAS 18001.",
    services: [
      "Structural Steel Fabrication",
      "Precision CNC Machining",
      "Industrial Welding (TIG/MIG)",
      "Sheet Metal Work",
      "Surface Treatment & Painting",
      "On-site Installation"
    ],
    certifications: [
      { name: "ISO 9001:2015", issuer: "TUV SUD", date: "2023" },
      { name: "ASME U-Stamp", issuer: "ASME", date: "2022" },
      { name: "Thailand Trust Mark", issuer: "Ministry of Commerce", date: "2024" }
    ],
    portfolio: [
      { title: "Bangkok Metro Expansion", year: "2023", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
      { title: "Rayong Oil Refinery Grid", year: "2022", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80" },
      { title: "Solar Power Plant Framework", year: "2024", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80" }
    ],
    stats: [
      { label: "RFQs Won", value: "450+", icon: <Zap size={18} className="text-accent" /> },
      { label: "On-time Delivery", value: "98.2%", icon: <Clock size={18} className="text-secondary" /> },
      { label: "Active Clients", value: "85", icon: <Users size={18} className="text-blue-400" /> },
      { label: "Certifications", value: "12", icon: <Award size={18} className="text-amber-500" /> }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden">
      <Navbar />

      <main className="pt-20 pb-20">
        {/* Profile Hero / Banner */}
        <section className="relative h-80 md:h-[450px] w-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 z-10" />
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
           <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/60 to-transparent z-20" />
           
           {/* Floating elements for industrial look */}
           <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full animate-pulse" />
           <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative -mt-48 z-30">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            
            {/* Left Column: Profile Info */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              
              {/* Header Card */}
              <GlassCard className="p-10 border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Button variant="outline" size="icon" className="w-10 h-10 rounded-full border-white/5 bg-white/5 hover:bg-white/10">
                      <Share2 size={16} />
                   </Button>
                   <Button variant="outline" size="icon" className="w-10 h-10 rounded-full border-white/5 bg-white/5 hover:bg-white/10">
                      <Briefcase size={16} />
                   </Button>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                   <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full opacity-50" />
                      <Avatar fallback="TSD" className="w-40 h-40 text-5xl font-black border-4 border-card shadow-2xl relative z-10" />
                   </div>
                   
                   <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                         <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">{vendor.name}</h1>
                         <div className="flex gap-2">
                           {vendor.isVerified && <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/5"><ShieldCheck size={24} /></div>}
                           {vendor.isGold && <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 font-black text-[10px] tracking-[0.2em] px-4 py-1 uppercase flex items-center h-10">GOLD PARTNER</Badge>}
                         </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-8 text-text-secondary mb-10 font-bold">
                         <span className="flex items-center gap-2"><MapPin size={20} className="text-accent" /> {vendor.location}</span>
                         <span className="flex items-center gap-2 uppercase tracking-widest text-xs text-white/60">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            {vendor.category}
                         </span>
                         <div className="flex items-center gap-2 text-amber-500 bg-amber-500/5 px-3 py-1.5 rounded-full border border-amber-500/10">
                           <Star size={18} fill="currentColor" />
                           <span className="text-white font-black">{vendor.rating}</span>
                           <span className="text-xs font-bold opacity-60">({vendor.reviews} reviews)</span>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                         {vendor.stats.map((stat, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-2 hover:border-white/10 transition-colors">
                               <div className="flex items-center justify-between">
                                  {stat.icon}
                                  <BarChart3 size={12} className="text-white/20" />
                               </div>
                               <div>
                                  <p className="text-[10px] text-text-secondary uppercase font-black tracking-widest mb-0.5">{stat.label}</p>
                                  <p className="text-xl font-black text-white">{stat.value}</p>
                               </div>
                            </div>
                         ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                         <Button className="h-16 px-10 font-black text-lg shadow-2xl shadow-accent/20 rounded-2xl">
                            <MessageSquare className="mr-3" size={22} /> Start Project Discussion
                         </Button>
                         <Button variant="outline" className="h-16 px-8 font-black rounded-2xl border-white/5 bg-white/5 hover:bg-white/10 transition-all">
                            <Globe className="mr-3" size={20} /> Company Site
                         </Button>
                      </div>
                   </div>
                </div>
              </GlassCard>

              {/* Navigation Tabs (Simulated) */}
              <div className="flex gap-10 border-b border-white/5 px-2">
                 {["Overview", "Services", "Portfolio", "Certifications", "Reviews"].map((tab, i) => (
                    <button key={tab} className={cn(
                       "pb-6 text-sm font-black uppercase tracking-widest transition-all relative",
                       i === 0 ? "text-accent" : "text-text-secondary hover:text-white"
                    )}>
                       {tab}
                       {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded-t-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />}
                    </button>
                 ))}
              </div>

              {/* About Section */}
              <AnimatedSection direction="up">
                <div className="flex flex-col gap-8">
                   <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                         <div className="w-1.5 h-8 bg-accent rounded-full" />
                         Corporate Profile
                      </h2>
                      <div className="flex gap-4">
                         <div className="flex flex-col items-end">
                            <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Founded</p>
                            <p className="text-sm font-black">{vendor.founded}</p>
                         </div>
                         <div className="w-px h-8 bg-white/10" />
                         <div className="flex flex-col items-end">
                            <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Employees</p>
                            <p className="text-sm font-black">{vendor.employees}</p>
                         </div>
                      </div>
                   </div>
                   
                   <p className="text-lg text-text-secondary leading-relaxed font-medium">
                      {vendor.description}
                   </p>
                   
                   <div className="grid md:grid-cols-2 gap-10 mt-4">
                      <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                         <h3 className="font-black text-white flex items-center gap-2">
                            <Building2 className="text-accent" size={18} /> Rayong Facility
                         </h3>
                         <p className="text-sm text-text-secondary leading-relaxed">
                            Our primary manufacturing hub spans 15,000 sqm with dedicated zones for heavy fabrication, assembly, and testing.
                         </p>
                      </div>
                      <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                         <h3 className="font-black text-white flex items-center gap-2">
                            <Layers className="text-secondary" size={18} /> Tech Stack
                         </h3>
                         <p className="text-sm text-text-secondary leading-relaxed">
                            Utilizing high-precision Japanese and German machinery including 5-axis CNC centers and automated welding cells.
                         </p>
                      </div>
                   </div>
                </div>
              </AnimatedSection>

              {/* Services Grid */}
              <AnimatedSection direction="up">
                <div className="flex flex-col gap-8">
                   <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                      <div className="w-1.5 h-8 bg-secondary rounded-full" />
                      Core Capabilities
                   </h2>
                   <div className="grid md:grid-cols-2 gap-4">
                      {vendor.services.map((service, i) => (
                        <div key={service} className="p-6 rounded-3xl glass border border-white/5 flex items-center justify-between group hover:border-accent/30 hover:bg-accent/5 transition-all cursor-default">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-accent/20 group-hover:text-accent transition-all">
                                 <CheckCircle2 size={20} />
                              </div>
                              <span className="font-black text-white group-hover:translate-x-1 transition-transform">{service}</span>
                           </div>
                           <ChevronRight size={18} className="text-white/10 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                   </div>
                </div>
              </AnimatedSection>

              {/* Portfolio */}
              <AnimatedSection direction="up">
                 <div className="flex flex-col gap-10">
                    <div className="flex items-center justify-between">
                       <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
                          <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
                          Project Portfolio
                       </h2>
                       <Button variant="ghost" className="font-black text-xs uppercase tracking-[0.2em] text-text-secondary hover:text-white">View Full Archive →</Button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                       {vendor.portfolio.map((item) => (
                         <div key={item.title} className="group cursor-pointer">
                            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-4 border border-white/5 shadow-2xl">
                               <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                               <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                  <Badge className="w-fit bg-accent text-white font-black text-[9px] px-3 py-1 uppercase tracking-widest">{item.year}</Badge>
                                  <p className="text-xl font-black text-white leading-tight">{item.title}</p>
                               </div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </AnimatedSection>

              {/* Reviews */}
              <AnimatedSection direction="up">
                 <div className="flex flex-col gap-10">
                    <div className="flex items-center justify-between">
                       <h2 className="text-2xl font-black text-white tracking-tight">Verified Feedback ({vendor.reviews})</h2>
                       <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="text-amber-500" fill="currentColor" />)}
                       </div>
                    </div>
                    <div className="flex flex-col gap-6">
                       {[1, 2].map((i) => (
                         <GlassCard key={i} className="p-8 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors relative">
                            <div className="absolute top-8 right-8 text-white/5">
                               <MessageSquare size={40} />
                            </div>
                            <div className="flex items-center justify-between mb-8">
                               <div className="flex items-center gap-4">
                                  <Avatar fallback="JB" className="w-14 h-14 font-black border-2 border-white/10" />
                                  <div>
                                     <p className="font-black text-lg">Senior Procurement Lead</p>
                                     <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Global Energy Infrastructure • Oct 2024</p>
                                  </div>
                               </div>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed font-medium italic relative z-10">
                               "Excellent quality of work and delivered ahead of schedule. Their team in Rayong was very professional and handled all site installations with great care for safety. Highly recommended for heavy steel works."
                            </p>
                         </GlassCard>
                       ))}
                       <Button variant="outline" className="w-full h-16 font-black uppercase tracking-widest border-white/5 bg-white/5 hover:bg-white/10">Load More Reviews</Button>
                    </div>
                 </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Contact & Certs */}
            <div className="flex flex-col gap-10 sticky top-32">
               
               {/* Quick RFQ Form - The "Money" Card */}
               <GlassCard className="p-10 border-accent/30 bg-accent/[0.02] relative overflow-hidden group/rfq">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 blur-[80px] rounded-full group-hover/rfq:bg-accent/30 transition-colors" />
                  
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Rapid RFQ</h3>
                  <p className="text-sm font-bold text-text-secondary mb-8 leading-relaxed">Direct line to the sales engineering team. Average response: <span className="text-accent font-black">2h</span></p>
                  
                  <div className="flex flex-col gap-6 relative z-10">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-white/40 tracking-[0.2em] ml-1">Subject</label>
                        <Input placeholder="e.g. Structural Steel Supply" className="h-14 bg-background border-white/5 focus:border-accent/50 text-sm font-bold rounded-2xl" />
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-black text-white/40 tracking-[0.2em] ml-1">Quantity</label>
                           <Input placeholder="500" className="h-14 bg-background border-white/5 font-bold rounded-2xl" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-black text-white/40 tracking-[0.2em] ml-1">Unit</label>
                           <select className="w-full h-14 bg-background border border-white/5 rounded-2xl px-4 text-xs font-black uppercase tracking-widest text-white/70 outline-none focus:ring-2 focus:ring-accent/50 appearance-none">
                              <option>Tons</option>
                              <option>Units</option>
                              <option>Meters</option>
                           </select>
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-white/40 tracking-[0.2em] ml-1">Specifications</label>
                        <textarea 
                           className="w-full h-40 rounded-2xl border border-white/5 bg-background p-5 text-sm font-medium focus:ring-2 focus:ring-accent/50 outline-none transition-all placeholder:text-white/20"
                           placeholder="Describe technical requirements, standards, or deadlines..."
                        />
                     </div>
                     
                     <div className="space-y-4 mt-2">
                        <Button className="w-full h-16 font-black text-lg shadow-2xl shadow-accent/20 rounded-2xl group/send">
                           Submit RFQ <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Button>
                        <div className="flex items-center justify-center gap-2 text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                           <Clock size={12} /> Priority Handling Enabled
                        </div>
                     </div>
                  </div>
               </GlassCard>

               {/* Downloadable Assets */}
               <GlassCard className="p-8 border-white/5 flex flex-col gap-6">
                  <h3 className="font-black text-white uppercase tracking-[0.2em] text-xs flex items-center gap-2">
                     <Download size={16} className="text-accent" /> Company Assets
                  </h3>
                  <div className="flex flex-col gap-3">
                     {[
                       { name: "Capability Profile 2024", size: "4.2 MB", type: "PDF" },
                       { name: "ISO Certifications Bundle", size: "12.8 MB", type: "ZIP" },
                       { name: "Project Reference List", size: "2.1 MB", type: "PDF" }
                     ].map((doc) => (
                        <button key={doc.name} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/30 group transition-all text-left">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-card border border-white/5 flex items-center justify-center text-text-secondary group-hover:text-accent transition-colors">
                                 <FileText size={20} />
                              </div>
                              <div>
                                 <p className="text-sm font-black text-white group-hover:text-accent transition-colors">{doc.name}</p>
                                 <p className="text-[10px] font-bold text-text-secondary uppercase">{doc.type} • {doc.size}</p>
                              </div>
                           </div>
                           <Download size={14} className="text-white/10 group-hover:text-accent" />
                        </button>
                     ))}
                  </div>
               </GlassCard>

               {/* Verification & Trust */}
               <GlassCard className="p-8 border-white/5">
                  <h3 className="font-black text-white uppercase tracking-[0.2em] text-xs mb-6">Verification Shield</h3>
                  <div className="flex flex-col gap-4">
                     {[
                       { label: "Identity Verified", desc: "Government ID & Tax Registration", icon: <ShieldCheck size={18} className="text-blue-400" /> },
                       { label: "On-site Audit", desc: "Facility visit completed Jan 2024", icon: <CheckCircle2 size={18} className="text-emerald-400" /> },
                       { label: "Premium Partner", desc: "Top 5% of suppliers in Thailand", icon: <Star size={18} className="text-amber-500" /> }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="shrink-0">{item.icon}</div>
                           <div>
                              <p className="text-sm font-black text-white">{item.label}</p>
                              <p className="text-[10px] font-medium text-text-secondary">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </GlassCard>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorProfile;
