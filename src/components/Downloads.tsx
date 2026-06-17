"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, ShieldAlert, Mail, Lock, CheckCircle, FileArchive } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Downloads() {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const fileName = href.split("/").pop() || "download";
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="downloads" className="py-24 bg-deep-blue relative overflow-hidden">
      {/* Background glowing elements */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-96 h-96 bg-purple-600/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Get <span className="text-blue-500">SUDARSHAN</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Access the complete software package by following our academic licensing workflow.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Important Licensing Information Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Important Licensing Information</h3>
                <p className="text-slate-300 mb-4 font-medium">
                  SUDARSHAN is licensed solely for academic and research purposes. Redistribution, sharing, sublicensing, hosting, or distribution without prior written permission is strictly prohibited.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Academic and research use only.",
                    "Proper citation is mandatory.",
                    "Redistribution without permission is prohibited.",
                    "Modification is permitted only with proper attribution and citation.",
                    "Intellectual Property Rights remain with CoDSAI and the Visual Signal and Information Processing Research Group, TIET.",
                    "Patent rights belong to TIET Patiala."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-300 text-sm font-semibold">
                    Users must sign and submit the License Agreement to suresh.raikwar@thapar.edu before obtaining access credentials for the software package.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Software Package",
                desc: "Complete Sudarshan-beta version distribution package (Password Protected)",
                icon: <FileArchive className="w-8 h-8 text-blue-400" />,
                link: "https://github.com/Karman580/sudarshan_portfolio/releases/download/v1.0.0/SUDARSHAN_AI_Software_Package.zip",
                btnText: "Download Package",
                color: "from-blue-500/10 to-transparent",
                btnColor: "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20"
              },
              {
                title: "User Manual",
                desc: "Comprehensive guide for installation, configuration, and usage",
                icon: <FileText className="w-8 h-8 text-amber-400" />,
                link: "/downloads/User_Manual.pdf",
                btnText: "Download Manual",
                color: "from-amber-500/10 to-transparent",
                btnColor: "bg-white/10 hover:bg-white/15 text-white border border-white/10"
              },
              {
                title: "License Agreement",
                desc: "Software License Agreement required for access approval",
                icon: <FileText className="w-8 h-8 text-emerald-400" />,
                link: "/downloads/Software_License_Agreement.pdf",
                btnText: "Download License",
                color: "from-emerald-500/10 to-transparent",
                btnColor: "bg-white/10 hover:bg-white/15 text-white border border-white/10"
              }
            ].map((card, i) => (
              <div key={i} className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col h-full">
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 pointer-events-none", card.color)} />
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-slate-400 text-sm mb-8 flex-grow">{card.desc}</p>
                  <a
                    href={card.link}
                    onClick={(e) => handleDownload(e, card.link)}
                    className={cn(
                      "w-full py-3 px-4 rounded-xl text-center font-bold transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 text-sm",
                      card.btnColor
                    )}
                  >
                    <Download size={18} />
                    {card.btnText}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Software Access Procedure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-8">
              <Lock className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Software Access Procedure</h3>
            </div>
            <div className="space-y-6">
              {[
                "Download the Software License Agreement.",
                "Read and sign the License Agreement.",
                "Email the signed License Agreement to: suresh.raikwar@thapar.edu",
                "Await review and approval.",
                "Upon approval, authorized administrators will separately provide the software package password.",
                "Extract the software package using the provided password.",
                "Follow the User Manual for installation and usage."
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <p className="text-slate-300 text-lg group-hover:text-white transition-colors">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">License Submission & Access Requests</h3>
              <p className="text-slate-400 mb-6">For any queries and to submit your signed agreement, please contact us.</p>
              <a 
                href="mailto:suresh.raikwar@thapar.edu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 transition-colors"
              >
                <Mail size={18} />
                suresh.raikwar@thapar.edu
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
