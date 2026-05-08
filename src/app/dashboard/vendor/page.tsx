"use client";

import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
  Eye, 
  Inbox, 
  Send, 
  Target, 
  ChevronRight, 
  Star,
  Zap,
  TrendingUp,
  MapPin,
  Clock,
  User,
  ArrowUpRight,
  ShieldCheck,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const StatsCard = ({ title, value, icon: Icon, trend, trendValue, delay, color }: any) => (
  <AnimatedSection delay={delay} direction="up" distance={20}>
    <GlassCard className="relative overflow-hidden group border-white/5 p-8 bg-white/[0.02]">
      <div className="flex justify-between items-start mb-6">
        <div className={cn("p-4 rounded-2xl", color)}>
          <Icon size={24} strokeWidth={2.5} />
        </div>
        {trend && (
          <div className={cn(
            "flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest",
            trend === "up" ? "bg-success/10 text-success" : "bg-error/10 text-error"
          )}>
            {trendValue}%
          </div>
        )}
      </div>
      <div>
        <p className="text-[10px] text-text-secondary mb-2 font-black uppercase tracking-[0.2em] opacity-60">{title}</p>
        <h3 className="text-4xl font-black text-white tracking-tighter">{value}</h3>
      </div>
      <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.05] transition-all duration-700" />
    </GlassCard>
  </AnimatedSection>
);

const VendorDashboard = () => {
  const incomingRfqs = [
    { id: "RFQ-BKK-882", title: "CNC Machining for 500 Heavy Parts", buyer: "Indo-Tech Industries", category: "Machinery", budget: "฿150,000", deadline: "2 days" },
    { id: "RFQ-BKK-885", title: "Custom Structural Racking System", buyer: "Bangkok Logistics", category: "Steel Fab", budget: "฿45,000", deadline: "5 days" },
  ];

  return (
    <DashboardLayout role="vendor">
      <div className="flex flex-col gap-12">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Badge variant="glass" dot className="mb-4">Supplier Portal</Badge>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">Thai Steel <span className="text-secondary">Dynamics.</span></h1>
            <p className="text-text-secondary text-lg font-medium leading-relaxed">
              Your profile is <span className="text-white font-bold underline decoration-secondary underline-offset-4">85% complete</span>. Complete it to unlock Premium verified leads.
            </p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="h-14 px-8 rounded-xl font-black uppercase tracking-widest text-[10px]">
               Edit Portfolio
             </Button>
             <Button variant="secondary" className="h-14 px-10 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-2xl">
               <Plus className="mr-2" size={18} strokeWidth={3} /> Post Product
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCard title="Profile Views" value="2.8k" icon={Eye} trend="up" trendValue="15" delay={0.1} color="bg-blue-600/10 text-blue-500" />
          <StatsCard title="Inquiries" value="42" icon={Inbox} trend="up" trendValue="8" delay={0.2} color="bg-secondary/10 text-secondary" />
          <StatsCard title="Quotes Sent" value="38" icon={Send} delay={0.3} color="bg-purple-600/10 text-purple-500" />
          <StatsCard title="Win Rate" value="44%" icon={Target} trend="up" trendValue="5" delay={0.4} color="bg-emerald-600/10 text-emerald-500" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Incoming RFQs */}
          <div className="lg:col-span-8 flex flex-col gap-10">
             <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-white tracking-tight">Active Opportunities</h2>
                <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase tracking-widest text-secondary hover:bg-secondary/10 font-bold">
                  All Leads <ChevronRight size={14} className="ml-1" />
                </Button>
             </div>

             <div className="flex flex-col gap-6">
                {incomingRfqs.map((rfq) => (
                  <GlassCard key={rfq.id} className="p-8 border-white/5 hover:border-secondary/30 transition-all group relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary" className="bg-secondary/10 text-secondary font-black text-[9px] tracking-widest uppercase">{rfq.category}</Badge>
                          <span className="text-[10px] font-mono text-text-secondary/50 uppercase">{rfq.id}</span>
                        </div>
                        <h3 className="text-2xl font-black text-white group-hover:text-secondary transition-colors tracking-tight">{rfq.title}</h3>
                        <div className="flex items-center gap-8 text-[11px] font-bold text-text-secondary/60 uppercase tracking-wider">
                          <span className="flex items-center gap-2"><User size={16} className="text-secondary" /> {rfq.buyer}</span>
                          <span className="flex items-center gap-2 font-black text-white/80"><ShieldCheck size={16} className="text-blue-500" /> Enterprise</span>
                          <span className="flex items-center gap-2 text-white font-black">{rfq.budget}</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-end gap-6 shrink-0">
                        <div className="text-rose-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 glass px-3 py-1.5 rounded-full border-rose-500/10">
                          <Clock size={14} /> {rfq.deadline} Remaining
                        </div>
                        <Button variant="secondary" size="md" className="w-full md:w-auto h-12 px-10 text-xs font-black uppercase tracking-widest">
                          Submit Quote
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                ))}
             </div>

             {/* Visualization / Pipeline */}
             <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-black text-white tracking-tight">Lead Performance</h2>
                <GlassCard className="p-10 border-white/5 bg-white/[0.01]">
                   <div className="flex items-center justify-between gap-6 flex-wrap md:flex-nowrap">
                      {[
                        { label: "Incoming", value: 12, color: "bg-blue-600" },
                        { label: "Quoted", value: 24, color: "bg-purple-600" },
                        { label: "Negotiating", value: 8, color: "bg-amber-600" },
                        { label: "Closed", value: 15, color: "bg-emerald-600" }
                      ].map((stage) => (
                        <div key={stage.label} className="flex flex-col items-center gap-4 flex-1 text-center min-w-[120px]">
                          <div className={cn("w-20 h-20 rounded-[32px] flex items-center justify-center text-white text-2xl font-black shadow-2xl", stage.color)}>
                            {stage.value}
                          </div>
                          <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em]">{stage.label}</p>
                        </div>
                      ))}
                   </div>
                </GlassCard>
             </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="lg:col-span-4 flex flex-col gap-10">
             {/* Profile Strength */}
             <GlassCard className="p-8 border-white/5 bg-white/[0.02]">
                <h3 className="text-lg font-black text-white tracking-tight mb-6">Profile Power</h3>
                <div className="w-full bg-white/5 h-3 rounded-full mb-6 overflow-hidden border border-white/5">
                   <div className="bg-secondary h-full rounded-full w-[85%] secondary-glow" />
                </div>
                <p className="text-xs text-text-secondary font-medium mb-8 leading-relaxed">Your ranking in search results is <span className="text-white font-bold">Top 5%</span>. Boost it by adding project case studies.</p>
                <div className="space-y-4">
                   {[
                     { label: "Upload Certs", status: "pending", icon: Plus },
                     { label: "Add Project Gallery", status: "pending", icon: Plus },
                     { label: "Verify Location", status: "done", icon: ShieldCheck }
                   ].map((item) => (
                     <div key={item.label} className={cn("flex items-center justify-between p-4 rounded-xl border transition-all", item.status === "done" ? "bg-emerald-500/5 border-emerald-500/10 opacity-50" : "bg-white/5 border-white/5 hover:border-secondary/20 cursor-pointer")}>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{item.label}</span>
                        <item.icon size={14} className={item.status === "done" ? "text-emerald-500" : "text-secondary"} />
                     </div>
                   ))}
                </div>
             </GlassCard>

             {/* Subscription Plan */}
             <GlassCard className="p-1 border-secondary/20 bg-gradient-to-br from-secondary/20 to-transparent relative group">
                <div className="p-8 glass rounded-2xl border-none">
                  <div className="flex items-center justify-between mb-8">
                     <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary shadow-xl">
                        <Zap size={24} fill="currentColor" />
                     </div>
                     <Badge variant="glass" className="bg-white/5 border-white/10 text-white font-black">PRO PLAN</Badge>
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tighter mb-2 italic">Platinum Tier</h3>
                  <p className="text-[11px] text-text-secondary font-bold uppercase tracking-widest mb-8 leading-relaxed">
                     Unlimited RFQ Responses <span className="text-white/20 mx-1">•</span> Priority Bidding <span className="text-white/20 mx-1">•</span> AI Analytics
                  </p>
                  <Button variant="secondary" className="w-full h-12 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                     Upgrade Business
                  </Button>
                </div>
             </GlassCard>

             {/* Performance Widget */}
             <GlassCard className="p-8 border-white/5 bg-[#121826]/50">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-black text-white tracking-tight">Customer Trust</h3>
                  <div className="flex items-center gap-1.5 text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
                    <Star size={14} fill="currentColor" />
                    <span className="font-black text-xs text-amber-500">4.9</span>
                  </div>
                </div>
                <div className="space-y-6">
                   {[
                     { label: "Reliability", value: 98 },
                     { label: "Response Time", value: 95 },
                     { label: "Quality Scale", value: 92 }
                   ].map((metric) => (
                      <div key={metric.label}>
                         <div className="flex justify-between items-center mb-2.5">
                            <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary/60">{metric.label}</span>
                            <span className="text-[10px] font-black text-white">{metric.value}%</span>
                         </div>
                         <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-white/20 h-full rounded-full transition-all group-hover:bg-accent" style={{ width: `${metric.value}%` }} />
                         </div>
                      </div>
                   ))}
                </div>
             </GlassCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VendorDashboard;
