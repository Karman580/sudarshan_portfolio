"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "TIET", role: "Sponsor" },
  { name: "Samsung India", role: "Partner" },
  { name: "IIT BHU", role: "Partner" },
  { name: "UoQ", role: "Stakeholder" },
];

export default function Partners() {
  return (
    <section className="py-16 border-y border-white/5 bg-deep-blue/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm uppercase tracking-[0.3em] mb-12">
          Backed & Trusted By Industry Leaders
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                {partner.name}
              </span>
              <span className="text-[10px] uppercase text-blue-500 font-bold mt-1">
                {partner.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
