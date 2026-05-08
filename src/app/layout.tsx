import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "ThaiSource Pro | Premium Industrial B2B Marketplace",
  description: "Connecting Thailand's industrial sector with verified suppliers, manufacturers, and contractors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={cn(
        inter.variable, 
        jetbrainsMono.variable,
        "min-h-full bg-background font-sans antialiased text-white selection:bg-accent/30"
      )}>
        {children}
      </body>
    </html>
  );
}
