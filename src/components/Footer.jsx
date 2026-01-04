import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 bg-white border-t border-slate-200 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-6 text-center">
        
        {/* Icons Row - Stays centered and spreads out nicely */}
        <div className="flex items-center justify-center gap-8 text-slate-600">
          <a href="https://github.com/bagami-13" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-all hover:scale-110 active:scale-95">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-blue-600 transition-all hover:scale-110 active:scale-95">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your-email@example.com" className="hover:text-blue-600 transition-all hover:scale-110 active:scale-95">
            <Mail size={24} />
          </a>
        </div>

        {/* Text centered below icons. text-xs/sm ensures it fits on tiny screens */}
        <p className="text-slate-500 font-medium text-xs sm:text-sm md:text-base leading-relaxed">
          © {currentYear} Bitxbase Events Hub • Developed by 
          <span className="text-blue-600 font-bold ml-1">Bagami</span>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;