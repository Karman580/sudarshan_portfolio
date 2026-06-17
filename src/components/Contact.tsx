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
               <a
                  href="#downloads"
                  className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-deep-blue font-black text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group text-center"
               >
                  Download App
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
               </a>
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
           <div className="mb-12 p-8 rounded-3xl bg-white/[0.02] border border-white/5 max-w-lg mx-auto backdrop-blur-sm relative overflow-hidden">
              <p className="text-slate-300 text-base mb-4">Tried Sudarshan and have feedback?</p>
              <a
                 href="https://docs.google.com/forms/d/e/1FAIpQLSfH70oEf2Z3x0-XNP0IkQH5pXjijHzk-hy1n2gIjJiIt3BMGw/viewform?usp=dialog"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/10 active:scale-95"
              >
                 Submit your feedback
                 <ArrowRight size={16} />
              </a>
           </div>
           <div className="flex justify-center gap-8 mb-8">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Documentation</span>
           </div>
           <p className="text-sm">&copy; {new Date().getFullYear()} Sudarshan. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
