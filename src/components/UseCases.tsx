"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Landmark, Share2, ShieldAlert } from "lucide-react";

const useCases = [
  {
    title: "Hiring & Remote Interviews",
    desc: "Verify the authenticity of candidates in real-time during remote video calls.",
    icon: <Briefcase />,
  },
  {
    title: "Banking & KYC",
    desc: "Prevent identity fraud and account takeovers with advanced biometric verification.",
    icon: <Landmark />,
  },
  {
    title: "Social Media Verification",
    desc: "Identify and flag AI-generated misinformation and deepfake content.",
    icon: <Share2 />,
  },
  {
    title: "Law Enforcement",
    desc: "Provide forensic tools for investigative support and digital evidence validation.",
    icon: <ShieldAlert />,
  },
];

export default function UseCases() {
  return (
    <section className="py-24 bg-deep-blue/80">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Versatile <span className="text-blue-500">Applications</span></h2>
            <p className="text-slate-400 text-lg mb-8">
              Sudarshan AI is designed to integrate seamlessly into existing workflows across various industries, providing a robust layer of digital security.
            </p>
            <button className="px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white transition-all">
              View All Industries
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border-white/5 hover:bg-white/5 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4">
                  {useCase.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{useCase.title}</h4>
                <p className="text-slate-400 text-sm">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
