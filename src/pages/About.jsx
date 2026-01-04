import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-[#0a0f1e] text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-blue-500 mb-8"
        >
          About Bitxbase Events Hub
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Bitxbase Events Hub is a simple campus event listing platform that allows 
          students to view and share campus activities. It's a digital notice board 
          designed to make event discovery effortless and engaging.
        </motion.p>

        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#161b2b] border border-slate-800 rounded-3xl p-8 md:p-12 max-w-md mx-auto shadow-2xl"
        >
          {/* Profile Image - This pulls your GitHub profile picture automatically */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>
            <img 
              src="https://github.com/bagami-13.png" 
              alt="Bagami" 
              className="w-full h-full rounded-full object-cover border-4 border-transparent"
            />
          </div>

          <h2 className="text-3xl font-bold text-blue-400 mb-1">Bagami</h2>
          <p className="text-blue-500 font-medium mb-4">Frontend Developer</p>
          
          <p className="text-slate-400 leading-snug mb-8">
            Frontend Developer • Passionate interactive web applicative web applications 
            and crafting smooth user experiences.
          </p>

          {/* Social Links inside Card */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/bagami-13" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
              <Github size={28} />
            </a>
            <a href="mailto:your-email@example.com" className="text-slate-300 hover:text-white transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;