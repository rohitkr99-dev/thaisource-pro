"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { MessageCircle, QrCode, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

interface LineContactProps {
  lineId: string;
  qrUrl?: string;
  className?: string;
}

export const LineContact: React.FC<LineContactProps> = ({ lineId, qrUrl, className }) => {
  const lineUrl = `https://line.me/ti/p/~${lineId}`;

  return (
    <GlassCard className={`p-6 border-[#00B900]/20 bg-[#00B900]/5 ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-[#00B900] flex items-center justify-center text-white shadow-lg shadow-[#00B900]/20">
          <MessageCircle size={24} fill="currentColor" />
        </div>
        <div>
          <h3 className="font-black text-white">Contact via LINE</h3>
          <p className="text-xs font-bold text-[#00B900] uppercase tracking-widest">Official Support</p>
        </div>
      </div>

      {qrUrl && (
        <div className="bg-white p-3 rounded-2xl w-fit mx-auto mb-4 border border-[#00B900]/10">
           <img src={qrUrl} alt="LINE QR Code" className="w-32 h-32 object-contain" />
        </div>
      )}

      <div className="flex flex-col gap-3">
        <div className="bg-background/50 rounded-xl px-4 py-3 border border-white/5 flex items-center justify-between">
           <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">LINE ID</span>
           <span className="text-sm font-black text-white">@{lineId}</span>
        </div>
        
        <Button 
          className="w-full h-12 bg-[#00B900] hover:bg-[#00a000] text-white font-black"
          onClick={() => window.open(lineUrl, '_blank')}
        >
          Add Friend on LINE <ExternalLink size={16} className="ml-2" />
        </Button>
      </div>
    </GlassCard>
  );
};
