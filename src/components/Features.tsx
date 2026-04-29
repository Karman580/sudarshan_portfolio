"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fingerprint, Video, Image as ImageIcon, Users } from "lucide-react";

const features = [
  {
    title: "Aadhaar Verification",
    description: "Secure identity authentication and fraud prevention via robust KYC validation models.",
    icon: <Fingerprint className="text-blue-500" size={32} />,
    image: "/images/aadhaar.png",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Video Deepfake Detection",
    description: "Detect manipulated videos using advanced AI models with frame-by-frame forensic analysis.",
    icon: <Video className="text-purple-500" size={32} />,
    image: "/images/video-detection.png",
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Image Deepfake Detection",
    description: "Identify AI-generated or edited images with high accuracy using deep learning vision models.",
    icon: <ImageIcon className="text-cyan-500" size={32} />,
    image: "/images/image-detection.png",
    color: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Live Interview Monitoring",
    description: "Real-time fraud detection during remote interviews to prevent impersonation and synthetic media.",
    icon: <Users className="text-emerald-500" size={32} />,
    image: "/images/interview.png",
    color: "from-emerald-500/20 to-transparent",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-deep-blue relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Core <span className="text-blue-500">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Our advanced AI engine is trained on millions of data points to provide unparalleled accuracy in digital forensic detection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl overflow-hidden glass border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-60`} />
              </div>

              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end min-h-[400px]">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-md group-hover:bg-white/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-200 transition-colors">
                  {feature.description}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-blue-400 font-semibold cursor-pointer group/btn">
                  Learn More
                  <div className="w-6 h-0.5 bg-blue-400 transform origin-left group-hover/btn:scale-x-150 transition-transform" />
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[100px] group-hover:bg-blue-500/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
