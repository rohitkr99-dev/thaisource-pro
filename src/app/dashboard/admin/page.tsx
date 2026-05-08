"use client";

import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Avatar } from "@/components/ui/Avatar";
import { 
  Users, 
  ShieldCheck, 
  BarChart3, 
  Database, 
  ChevronRight, 
  AlertTriangle,
  Check,
  X,
  Activity,
  Terminal,
  Zap,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const StatsCard = ({ title, value, icon: Icon, color, delay }: any) => (
  <AnimatedSection delay={delay} direction="up" distance={20}>
    <GlassCard className="relative overflow-hidden group border-white/5 p-8 bg-white/[0.02]">
      <div className="flex items-center gap-6">
        <div className={cn("p-4 rounded-2xl shadow-2xl transition-transform group-hover:scale-110", color)}>
          <Icon size={24} strokeWidth={2.5} className="text-white" />
        </div>
        <div>
          <p className="text-[10px] text-text-secondary font-black uppercase tracking-[0.2em] opacity-60 mb-1">{title}</p>
          <h3 className="text-3xl font-black text-white tracking-tighter">{value}</h3>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-24 h-24 bg-white/[0.01] rounded-bl-full pointer-events-none" />
    </GlassCard>
  </AnimatedSection>
);

const AdminDashboard = () => {
  const pendingVendors = [
    { name: "Rayong Steel Co.", category: "Steel Fab", date: "Oct 12", logo: "RS", tier: "Gold" },
    { name: "Pattaya Automation", category: "Robotics", date: "Oct 13", logo: "PA", tier: "Free" },
    { name: "Bangkok MEP", category: "MEP", date: "Oct 14", logo: "BM", tier: "Gold" },
  ];

  const recentActivity = [
    { user: "Wichai P.", action: "submitted a platinum quote", target: "RFQ-BKK-001", time: "5m ago", type: "business" },
    { user: "Sarah J.", action: "posted a high-volume RFQ", target: "Solar Grid Project", time: "12m ago", type: "business" },
    { user: "System", action: "automatically verified", target: "Thai Tools Ltd.", time: "1h ago", type: "system" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <Badge variant="glass" dot className="mb-4">Internal Console</Badge>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">System <span className="text-accent italic">Overview.</span></h1>
            <p className="text-text-secondary text-lg font-medium">Monitoring Thailand's industrial procurement infrastructure in real-time.</p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="h-14 px-8 rounded-xl font-black uppercase tracking-widest text-[10px]">
               View Audit Logs
             </Button>
             <Button className="h-14 px-10 rounded-xl font-black uppercase tracking-widest text-[10px] bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20">
               <Terminal size={18} className="mr-2" /> Global Config
             </Button>
          </div>
        </div>

        {/* Admin Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCard title="Total Platform Users" value="12,421" icon={Users} color="bg-blue-600" delay={0.1} />
          <StatsCard title="Live RFQ Volume" value="1,860" icon={Database} color="bg-purple-600" delay={0.2} />
          <StatsCard title="Pending Verifications" value="42" icon={ShieldCheck} color="bg-amber-600" delay={0.3} />
          <StatsCard title="Net Ecosystem Volume" value="฿142M" icon={BarChart3} color="bg-emerald-600" delay={0.4} />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
           {/* Pending Approvals */}
           <div className="lg:col-span-8 flex flex-col gap-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-white tracking-tight uppercase tracking-widest text-xs opacity-60">Vendor Verification Queue</h2>
                <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase tracking-widest text-accent font-bold">
                  Review All <ChevronRight size={14} className="ml-1" />
                </Button>
              </div>

              <GlassCard className="p-0 border-white/5 overflow-hidden bg-white/[0.01]">
                 <div className="flex flex-col divide-y divide-white/5">
                    {pendingVendors.map((vendor) => (
                      <div key={vendor.name} className="p-8 flex items-center justify-between hover:bg-white/[0.02] transition-all group">
                        <div className="flex items-center gap-6">
                           <Avatar fallback={vendor.logo} className="w-16 h-16 border-2 border-white/10 shadow-2xl group-hover:accent-glow transition-all rounded-2xl" />
                           <div>
                              <div className="flex items-center gap-3 mb-1.5">
                                 <p className="font-black text-lg text-white group-hover:text-accent transition-colors">{vendor.name}</p>
                                 <Badge variant="glass" className="text-[8px] font-black">{vendor.tier}</Badge>
                              </div>
                              <p className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-widest">{vendor.category} <span className="mx-2">•</span> Applied {vendor.date}</p>
                           </div>
                        </div>
                        <div className="flex gap-3">
                           <button className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all">
                              <Check size={22} strokeWidth={3} />
                           </button>
                           <button className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center text-rose-500 hover:bg-rose-500/10 hover:border-rose-500/20 transition-all">
                              <X size={22} strokeWidth={3} />
                           </button>
                           <div className="w-[1px] bg-white/5 mx-2" />
                           <Button variant="outline" size="sm" className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest">
                              Audit Profile
                           </Button>
                        </div>
                      </div>
                    ))}
                 </div>
              </GlassCard>

              {/* Infrastructure Monitoring */}
              <div className="flex flex-col gap-8">
                 <h2 className="text-2xl font-black text-white tracking-tight uppercase tracking-widest text-xs opacity-60">Cloud Infrastructure</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="p-8 border-white/5 bg-white/[0.01]">
                       <div className="flex items-center gap-3 mb-8 text-emerald-500">
                          <Zap size={24} fill="currentColor" />
                          <h3 className="text-lg font-black text-white tracking-tight">Service Health</h3>
                       </div>
                       <div className="space-y-5">
                          {[
                            { name: "API Gateway", status: "Operational", load: "12%" },
                            { name: "PostgreSQL Cluster", status: "Operational", load: "34%" },
                            { name: "ElasticSearch", status: "Operational", load: "21%" },
                            { name: "Asset CDN", status: "Operational", load: "5%" }
                          ].map((service) => (
                            <div key={service.name} className="flex items-center justify-between">
                               <div className="flex flex-col">
                                  <span className="text-[10px] font-black text-white/90 uppercase tracking-widest">{service.name}</span>
                                  <span className="text-[9px] font-bold text-text-secondary/40 uppercase tracking-tighter">Load: {service.load}</span>
                               </div>
                               <Badge variant="success" dot className="bg-emerald-500/5 text-[8px]">Stable</Badge>
                            </div>
                          ))}
                       </div>
                    </GlassCard>
                    <GlassCard className="p-8 border-white/5 bg-white/[0.01]">
                       <div className="flex items-center gap-3 mb-8 text-amber-500">
                          <AlertTriangle size={24} fill="currentColor" />
                          <h3 className="text-lg font-black text-white tracking-tight">Platform Alerts</h3>
                       </div>
                       <div className="space-y-4">
                          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4 items-start">
                             <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                             <p className="text-[10px] font-bold text-amber-500 uppercase leading-relaxed tracking-wider">
                                Anomalous Login Attempt from IP: 124.82.X.X (BKK Node)
                             </p>
                          </div>
                          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-4 items-start opacity-60">
                             <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                             <p className="text-[10px] font-bold text-text-secondary uppercase leading-relaxed tracking-wider">
                                Scheduled maintenance in 48 hours
                             </p>
                          </div>
                       </div>
                    </GlassCard>
                 </div>
              </div>
           </div>

           {/* Real-time Activity Feed */}
           <div className="lg:col-span-4 flex flex-col gap-10">
              <h2 className="text-xl font-black text-white tracking-tight uppercase tracking-widest text-xs opacity-60 flex items-center gap-2">
                <Activity size={16} className="text-accent" /> Live Activity Stream
              </h2>
              <GlassCard className="p-10 border-white/5 bg-[#121826]/50 flex flex-col gap-10 relative">
                 <div className="absolute left-[47px] top-12 bottom-12 w-[1px] bg-white/[0.05]" />
                 
                 {recentActivity.map((act, i) => (
                   <div key={i} className="flex gap-6 relative z-10">
                      <div className={cn("w-3.5 h-3.5 rounded-full mt-1.5 shrink-0 border-4 border-[#121826] shadow-xl", act.type === "business" ? "bg-accent" : "bg-purple-500")} />
                      <div>
                        <p className="text-[13px] text-white/90 leading-relaxed font-medium tracking-tight">
                           <span className="font-black text-white italic">{act.user}</span> {act.action} for <span className="text-accent font-black tracking-tight underline decoration-accent/30 underline-offset-4">{act.target}</span>
                        </p>
                        <p className="text-[9px] font-black text-text-secondary/40 mt-2 uppercase tracking-widest">{act.time}</p>
                      </div>
                   </div>
                 ))}
                 
                 <Button variant="ghost" size="sm" className="w-full text-[9px] font-black uppercase tracking-[0.2em] text-text-secondary hover:text-white mt-4 glass border-white/5 py-4">
                    Initialize Full Stream
                 </Button>
              </GlassCard>

              {/* Maintenance Control */}
              <GlassCard className="p-8 border-accent/20 bg-accent/5">
                 <div className="flex items-center gap-3 mb-6">
                    <Globe size={20} className="text-accent" />
                    <h3 className="font-black text-white text-sm uppercase tracking-widest">Global Status</h3>
                 </div>
                 <p className="text-xs text-text-secondary font-medium mb-8 leading-relaxed italic">"Infrastructure scaling automatically to accommodate high peak volume (BKK-TIME 10:00-14:00)."</p>
                 <div className="flex flex-col gap-3">
                    <Button variant="primary" className="w-full h-12 text-[9px] font-black uppercase tracking-widest shadow-2xl">
                       Enter Maintenance Mode
                    </Button>
                    <p className="text-[8px] text-center text-text-secondary/40 font-bold uppercase tracking-widest">Root access required for this action</p>
                 </div>
              </GlassCard>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
