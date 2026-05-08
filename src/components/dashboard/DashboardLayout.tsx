"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  User, 
  FileText, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  X,
  Shield,
  Briefcase,
  Users,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden",
        active 
          ? "bg-accent/10 text-accent border border-accent/20 shadow-lg shadow-accent/5" 
          : "text-text-secondary hover:text-white hover:bg-white/[0.03]"
      )}
    >
      <Icon size={20} strokeWidth={active ? 2.5 : 2} className={cn("transition-transform group-hover:scale-110", active ? "text-accent" : "group-hover:text-white")} />
      <span className={cn("font-bold text-xs uppercase tracking-[0.15em] transition-colors", active ? "text-accent" : "group-hover:text-white")}>{label}</span>
      
      {active && (
        <div className="absolute right-4 w-1 h-4 bg-accent rounded-full" />
      )}
    </Link>
  );
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "buyer" | "vendor" | "admin";
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = {
    buyer: [
      { icon: LayoutDashboard, label: "Overview", href: "/dashboard/buyer" },
      { icon: Search, label: "Marketplace", href: "/vendors" },
      { icon: FileText, label: "My RFQs", href: "/dashboard/buyer/rfqs" },
      { icon: User, label: "Favorites", href: "/dashboard/buyer/favorites" },
      { icon: Settings, label: "Settings", href: "/dashboard/settings" },
    ],
    vendor: [
      { icon: LayoutDashboard, label: "Overview", href: "/dashboard/vendor" },
      { icon: Inbox, label: "New Leads", href: "/dashboard/vendor/rfqs" },
      { icon: Briefcase, label: "Quotations", href: "/dashboard/vendor/quotations" },
      { icon: User, label: "Company", href: "/dashboard/vendor/profile" },
      { icon: Settings, label: "Settings", href: "/dashboard/settings" },
    ],
    admin: [
      { icon: LayoutDashboard, label: "Console", href: "/dashboard/admin" },
      { icon: Users, label: "Users", href: "/dashboard/admin/users" },
      { icon: Shield, label: "Approvals", href: "/dashboard/admin/approvals" },
      { icon: FileText, label: "RFQs", href: "/dashboard/admin/rfqs" },
      { icon: Settings, label: "Global", href: "/dashboard/admin/settings" },
    ],
  };

  const currentItems = menuItems[role];

  return (
    <div className="min-h-screen bg-background text-white flex selection:bg-accent/30 selection:text-white">
      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-[70] w-80 glass border-r border-white/5 flex flex-col transition-all duration-500 lg:translate-x-0 lg:static lg:inset-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-10 border-b border-white/5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shadow-xl shadow-accent/20">
              <span className="text-white font-black text-xl italic">T</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              ThaiSource<span className="text-accent">Pro</span>
            </span>
          </Link>
          <button className="lg:hidden text-text-secondary" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6 flex flex-col gap-2 overflow-y-auto custom-scrollbar mt-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary/40 px-5 mb-4">Main Menu</p>
          {currentItems.map((item) => (
            <SidebarItem 
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
            />
          ))}
        </div>

        <div className="p-8 border-t border-white/5">
          <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5 mb-8">
             <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-3">Enterprise Plan</p>
             <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold">Gold Status</span>
                <Badge variant="success" dot>Active</Badge>
             </div>
             <button className="text-[10px] font-black text-accent uppercase tracking-widest flex items-center group">
                Manage Billing <ArrowRight size={10} className="ml-1 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
          
          <button className="flex items-center gap-3 px-5 py-4 w-full rounded-2xl text-rose-400 hover:bg-rose-500/10 transition-all font-black text-[10px] uppercase tracking-widest border border-transparent hover:border-rose-500/20">
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-24 glass border-b border-white/5 px-10 flex items-center justify-between shrink-0 z-40">
          <div className="flex items-center gap-6">
            <button 
              className="p-3 text-white lg:hidden glass rounded-xl"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="flex flex-col">
               <h2 className="text-xl font-black text-white tracking-tight">
                 {currentItems.find(i => pathname === i.href)?.label || "Dashboard"}
               </h2>
               <p className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-widest">
                 System: Stable <span className="mx-1">•</span> Node: BKK-01
               </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent transition-colors" size={18} />
               <input 
                 placeholder="Search platform..." 
                 className="h-12 w-64 glass border-white/5 rounded-xl pl-12 pr-4 text-xs font-bold text-white placeholder:text-text-secondary/40 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all focus:w-80"
               />
            </div>

            <button className="relative w-12 h-12 glass rounded-xl flex items-center justify-center text-text-secondary hover:text-white transition-all hover:border-white/10 group">
              <Bell size={20} className="group-hover:scale-110 transition-transform" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full border-2 border-[#121826] animate-pulse" />
            </button>

            <div className="h-10 w-[1px] bg-white/5" />

            <div className="flex items-center gap-4 pl-2">
              <div className="text-right hidden xl:block">
                <p className="text-sm font-black text-white tracking-tight leading-none mb-1">Somchai Rattanakul</p>
                <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.1em] opacity-60">Verified {role}</p>
              </div>
              <Avatar fallback="SR" className="w-12 h-12 border-2 border-white/10 shadow-xl accent-glow rounded-xl" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-10 lg:p-12 bg-[#090D16] custom-scrollbar">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

import { Inbox } from "lucide-react";
export default DashboardLayout;
