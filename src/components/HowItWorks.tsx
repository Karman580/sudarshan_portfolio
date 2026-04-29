"use client";

import React from "react";
import { motion } from "framer-motion";
import { Upload, Cpu, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Input Data",
    desc: "Upload video, image, or connect a live stream.",
    icon: <Upload size={24} />,
  },
  {
    title: "AI Processing",
    desc: "Neural networks analyze frame-by-frame forensics.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Detection Engine",
    desc: "Sudarshan Engine flags inconsistencies & patterns.",
    icon: <Search size={24} />,
  },
  {
    title: "Trust Score",
    desc: "Receive a detailed authenticity report and score.",
    icon: <CheckCircle size={24} />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-deep-blue relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-400">Our seamless pipeline ensures fast and reliable detection.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(37,99,235,0.4)] relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-deep-blue border border-white/10 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Animated Visualization (Conceptual) */}
        <div className="mt-24 h-64 rounded-3xl glass border-white/5 flex items-center justify-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
           <div className="flex items-center gap-10">
              <motion.div 
                animate={{ x: [0, 100, 200, 300], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white"
              >
                <Search size={20} />
              </motion.div>
              <div className="w-32 h-20 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center">
                 <Cpu className="text-slate-500 animate-pulse" />
              </div>
              <motion.div 
                animate={{ x: [-300, -200, -100, 0], opacity: [0, 1, 1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-bold text-sm flex items-center gap-2"
              >
                <CheckCircle size={16} /> Authenticity: 98%
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
