"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Server, Cpu, Globe } from "lucide-react";

const techItems = [
  { label: "AI/ML Models", value: "Deep Learning, Computer Vision", icon: <Cpu /> },
  { label: "Pipelines", value: "Real-time processing", icon: <Server /> },
  { label: "Infrastructure", value: "Secure Cloud Scale", icon: <Database /> },
  { label: "Connectivity", value: "Secure Enterprise APIs", icon: <Globe /> },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-deep-blue">
      <div className="container mx-auto px-6">
        <div className="p-12 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <Cpu size={200} />
           </div>
           
           <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-white mb-6">Built on Advanced Technology</h2>
              <p className="text-slate-400 text-lg mb-12">
                Our architecture is designed for high-performance inference at scale, ensuring every scan is accurate and every second counts.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {techItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                       <div className="text-blue-500 mt-1">{item.icon}</div>
                       <div>
                          <h4 className="text-white font-bold">{item.label}</h4>
                          <p className="text-slate-400 text-sm">{item.value}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
