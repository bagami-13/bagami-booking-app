import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-auto border-t border-slate-800 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-slate-500 font-medium">
          © {currentYear} Bitxbase Events Hub • Developed by 
          <span className="text-blue-500 font-bold ml-1">Bagami</span>
        </p>

        <div className="flex items-center gap-5 text-slate-500">
          <a href="https://github.com/bagami-13" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-transform hover:scale-110">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-transform hover:scale-110">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your-email@example.com" className="hover:text-blue-400 transition-transform hover:scale-110">
            <Mail size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;