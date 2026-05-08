"use client";

import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
  Plus, 
  FileText, 
  Users, 
  CreditCard, 
  ArrowUpRight, 
  Clock, 
  ChevronRight,
  TrendingUp,
  Briefcase
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
            {trend === "up" ? <ArrowUpRight size={10} /> : <ArrowUpRight size={10} className="rotate-90" />}
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

const BuyerDashboard = () => {
  const recentRfqs = [
    { id: "RFQ-BKK-001", title: "Industrial Steel Grid (Rayong Project)", category: "Steel Fabrication", date: "2m ago", status: "Negotiation", quotes: 8 },
    { id: "RFQ-BKK-002", title: "HVAC Maintenance - Tower A", category: "HVAC", date: "1h ago", status: "Pending", quotes: 3 },
    { id: "RFQ-BKK-003", title: "Delta PLC Controllers x 50", category: "Automation", date: "Yesterday", status: "Closed", quotes: 15 },
  ];

  return (
    <DashboardLayout role="buyer">
      <div className="flex flex-col gap-12">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Badge variant="glass" dot className="mb-4">Live Dashboard</Badge>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">Welcome, <span className="text-accent">Somchai.</span></h1>
            <p className="text-text-secondary text-lg font-medium leading-relaxed">
              Your industrial procurement pipeline is performing at <span className="text-white font-bold underline decoration-accent underline-offset-4">98% efficiency</span> this month.
            </p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="h-14 px-8 rounded-xl font-black uppercase tracking-widest text-[10px]">
               Export Reports
             </Button>
             <Button className="h-14 px-10 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-2xl">
               <Plus className="mr-2" size={18} strokeWidth={3} /> Post New RFQ
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCard title="Active RFQs" value="14" icon={FileText} trend="up" trendValue="12" delay={0.1} color="bg-blue-600/10 text-blue-500" />
          <StatsCard title="Quotes Received" value="86" icon={Briefcase} trend="up" trendValue="24" delay={0.2} color="bg-purple-600/10 text-purple-500" />
          <StatsCard title="Network Size" value="2.4k" icon={Users} delay={0.3} color="bg-amber-600/10 text-amber-500" />
          <StatsCard title="Monthly Spend" value="฿4.2M" icon={CreditCard} trend="down" trendValue="2.1" delay={0.4} color="bg-emerald-600/10 text-emerald-500" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Recent RFQs */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-white tracking-tight">Active Procurements</h2>
              <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase tracking-widest text-accent hover:bg-accent/10">
                Manage All <ChevronRight size={14} className="ml-1" />
              </Button>
            </div>
            
            <GlassCard className="p-0 overflow-hidden border-white/5 bg-white/[0.01]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/5">
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary/50">Details</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary/50">Category</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary/50">Status</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary/50">Quotations</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary/50"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentRfqs.map((rfq) => (
                      <tr key={rfq.id} className="hover:bg-white/[0.02] transition-all group">
                        <td className="px-8 py-6">
                          <p className="font-black text-white group-hover:text-accent transition-colors mb-1.5">{rfq.title}</p>
                          <div className="flex items-center gap-3">
                             <span className="text-[10px] font-mono text-text-secondary uppercase">{rfq.id}</span>
                             <div className="h-1 w-1 rounded-full bg-white/10" />
                             <span className="text-[10px] font-bold text-text-secondary/60 uppercase">{rfq.date}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                           <Badge variant="outline" className="font-bold text-[9px]">{rfq.category}</Badge>
                        </td>
                        <td className="px-8 py-6">
                          <Badge variant={rfq.status === "Pending" ? "warning" : rfq.status === "Closed" ? "error" : "success"} dot>
                            {rfq.status}
                          </Badge>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-3">
                              <span className="text-sm font-black text-white">{rfq.quotes}</span>
                              <div className="w-12 bg-white/5 h-1 rounded-full overflow-hidden">
                                 <div className="h-full bg-accent w-2/3" />
                              </div>
                           </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center text-text-secondary group-hover:text-white group-hover:border-white/20 transition-all">
                            <ChevronRight size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>

          {/* Quick Actions & Analytics */}
          <div className="lg:col-span-4 flex flex-col gap-10">
             <div className="flex flex-col gap-6">
                <h2 className="text-xl font-black text-white tracking-tight uppercase tracking-widest text-xs opacity-60">Smart Actions</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "Post Instant RFQ", desc: "Broadcast to 12k+ suppliers", icon: Plus, color: "bg-accent" },
                    { title: "AI Supplier Match", desc: "Find partners with GPT-4", icon: TrendingUp, color: "bg-purple-600" },
                  ].map((act) => (
                    <GlassCard key={act.title} className="p-6 hover:border-white/20 transition-all cursor-pointer bg-white/[0.02] border-white/5 group">
                      <div className="flex items-center gap-5">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform", act.color)}>
                          <act.icon className="text-white" size={24} strokeWidth={3} />
                        </div>
                        <div>
                          <p className="font-black text-white text-sm tracking-tight mb-1">{act.title}</p>
                          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">{act.desc}</p>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
             </div>

             <div className="flex flex-col gap-6">
                <h2 className="text-xl font-black text-white tracking-tight uppercase tracking-widest text-xs opacity-60">System Feed</h2>
                <GlassCard className="p-0 border-white/5 bg-white/[0.01] flex flex-col divide-y divide-white/5">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="p-6 flex gap-5 items-start group cursor-pointer hover:bg-white/[0.01] transition-colors">
                        <div className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        <div>
                          <p className="text-xs font-black text-white leading-relaxed tracking-tight group-hover:text-accent transition-colors">New Platinum Quote Received</p>
                          <p className="text-[10px] font-bold text-text-secondary/60 mt-1 uppercase tracking-widest">Siam Dynamics sent a formal bid</p>
                          <div className="flex items-center gap-3 mt-4">
                             <Badge variant="glass" className="text-[8px] px-1.5">Quote: ฿840k</Badge>
                             <span className="text-[9px] font-bold text-text-secondary/40 uppercase">12m ago</span>
                          </div>
                        </div>
                     </div>
                   ))}
                   <div className="p-5 text-center">
                     <button className="text-[10px] font-black text-accent uppercase tracking-[0.2em] hover:underline">Audits & Logs</button>
                   </div>
                </GlassCard>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BuyerDashboard;
