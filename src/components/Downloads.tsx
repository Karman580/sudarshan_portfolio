"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlatformCard {
  id: "windows" | "macos" | "linux";
  title: string;
  description: string;
  buttonText: string;
  downloadLink: string;
  color: string;
  icon: React.ReactNode;
}

export default function Downloads() {
  const [detectedOS, setDetectedOS] = useState<"windows" | "macos" | "linux" | null>(null);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const fileName = href.split("/").pop() || "SUDARSHAN_AI.zip";
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ua = window.navigator.userAgent.toLowerCase();
      if (/win/i.test(ua)) {
        setDetectedOS("windows");
      } else if (/mac/i.test(ua)) {
        setDetectedOS("macos");
      } else if (/linux/i.test(ua)) {
        setDetectedOS("linux");
      }
    }
  }, []);

  const platforms: PlatformCard[] = [
    {
      id: "windows",
      title: "Windows",
      description: "One-click installation for Windows 10 and Windows 11 with automatic dependency validation.",
      buttonText: "Download for Windows",
      downloadLink: "/downloads/SUDARSHAN_AI_Windows_v1.0.zip",
      color: "from-blue-500/10 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-blue-400 group-hover:text-blue-300 transition-colors" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM11.25 1.899L24 0v11.55H11.25V1.899zM11.25 12.45H24v11.55l-12.75-1.9v-9.65z" />
        </svg>
      ),
    },
    {
      id: "macos",
      title: "macOS",
      description: "Native macOS setup with automated environment checks and guided installation.",
      buttonText: "Download for macOS",
      downloadLink: "/downloads/SUDARSHAN_AI_Macos_v1.0.zip",
      color: "from-slate-400/10 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-slate-300 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.63.73-1.18 1.87-1.03 2.98.12.01.24.02.37.02.88 0 2-.63 2.61-1.44z" />
        </svg>
      ),
    },
    {
      id: "linux",
      title: "Linux",
      description: "Lightweight Linux package with dependency verification and simple deployment workflow.",
      buttonText: "Download for Linux",
      downloadLink: "/downloads/SUDARSHAN_AI_Linux_v1.0.zip",
      color: "from-amber-500/10 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-amber-500 group-hover:text-amber-400 transition-colors" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c-.6 0-1.1.2-1.5.5C10.1 2.8 9.9 3.2 9.9 3.7c0 .5.2.9.6 1.2.4.3.9.5 1.5.5s1.1-.2 1.5-.5c.4-.3.6-.7.6-1.2 0-.5-.2-.9-.6-1.2C13.1 2.2 12.6 2 12 2zm0 4.5c-2.2 0-4 1.8-4 4v3.5c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3.5c0-2.2-1.8-4-4-4zm-3 8c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zm-6 5c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1s1-.4 1-1v-1c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1s1-.4 1-1v-1c0-.6-.4-1-1-1z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="downloads" className="py-24 bg-deep-blue relative overflow-hidden">
      {/* Background glowing elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Download <span className="text-blue-500">SUDARSHAN AI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Choose your platform and start detecting deepfakes within minutes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => {
            const isRecommended = detectedOS === platform.id;
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={cn(
                  "group relative rounded-3xl overflow-hidden glass transition-all duration-500 flex flex-col justify-between p-8 md:p-10 min-h-[420px]",
                  isRecommended 
                    ? "border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-blue-500/[0.03]" 
                    : "border-white/5 hover:border-white/10"
                )}
              >
                {/* Background glowing gradient tailored for each card */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-500", platform.color)} />

                <div>
                  {/* Recommended Badge */}
                  {isRecommended && (
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold flex items-center gap-1 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      ✓ Recommended for You
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-md group-hover:bg-white/10 transition-colors shadow-inner">
                    {platform.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    {platform.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-200 transition-colors mb-8">
                    {platform.description}
                  </p>
                </div>

                {/* Direct Download Button */}
                <a
                  href={platform.downloadLink}
                  download={platform.downloadLink.split("/").pop()}
                  onClick={(e) => handleDownload(e, platform.downloadLink)}
                  className={cn(
                    "w-full py-4 px-6 rounded-2xl text-center font-bold transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 group/btn",
                    isRecommended
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-white"
                  )}
                >
                  <Download size={20} className={cn("transition-transform group-hover/btn:translate-y-0.5", isRecommended ? "text-white" : "text-slate-400 group-hover:text-white")} />
                  {platform.buttonText}
                </a>

                {/* Visual Glow Effect on Hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 blur-[100px] group-hover:bg-blue-500/15 transition-all duration-700 pointer-events-none rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
