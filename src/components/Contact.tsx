"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-deep-blue relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass border-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 -z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to secure your platform?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Whether you need a custom integration or a standard demo, our team is here to help you navigate the future of digital trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-deep-blue font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group">
                  Request Demo
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="w-full sm:w-auto px-10 py-4 rounded-2xl border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                  <MessageSquare size={20} />
                  Collaborate With Us
               </button>
            </div>
            
            <p className="mt-12 text-slate-500 italic">
              "If you have any projects or collaboration opportunities, we’d love to contribute."
            </p>
          </motion.div>
        </div>
        
        <footer className="mt-24 pt-12 border-t border-white/5 text-center text-slate-500">
           <div className="flex justify-center gap-8 mb-8">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Documentation</span>
           </div>
           <p className="text-sm">&copy; {new Date().getFullYear()} Sudarshan AI. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
