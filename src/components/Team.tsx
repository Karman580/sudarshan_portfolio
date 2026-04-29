"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Globe } from "lucide-react";

const team = {
  inventors: [
    { name: "Suresh Raikwar", role: "Co-Inventor" },
    { name: "Mashhuda Glencross", role: "Co-Inventor" },
  ],
  developers: [
    { name: "Nikhil", role: "Core Developer" },
    { name: "Karman Singh Talwar", role: "Core Developer" },
    { name: "Shreya", role: "Core Developer" },
  ],
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-deep-blue relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Meet The <span className="text-blue-500">Mindset</span></h2>
          <p className="text-slate-400">The visionary researchers and engineers behind Sudarshan AI.</p>
        </div>

        {/* Inventors */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest text-center mb-10">Inventors</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {team.inventors.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Developers */}
        <div>
          <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest text-center mb-10">Development Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.developers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: { name: string; role: string } }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 rounded-3xl glass border-white/5 hover:border-blue-500/30 transition-all group relative"
    >
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-6 mx-auto flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 transition-transform">
        {member.name.charAt(0)}
      </div>
      <div className="text-center">
        <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
        <p className="text-blue-500 text-sm font-semibold mb-6">{member.role}</p>
        
        <div className="flex justify-center gap-4 text-slate-500">
          <Globe size={18} className="hover:text-white cursor-pointer transition-colors" />
          <User size={18} className="hover:text-white cursor-pointer transition-colors" />
          <Mail size={18} className="hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-3xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-all -z-10" />
    </motion.div>
  );
}
