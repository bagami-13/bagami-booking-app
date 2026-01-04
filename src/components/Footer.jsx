import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Social Icons Grouped Together */}
        <div className="flex items-center gap-6 text-slate-600">
          <a href="https://github.com/bagami-13" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-all hover:scale-110">
            <Github size={22} />
          </a>
          <a href="#" className="hover:text-blue-600 transition-all hover:scale-110">
            <Linkedin size={22} />
          </a>
          <a href="mailto:your-email@example.com" className="hover:text-blue-600 transition-all hover:scale-110">
            <Mail size={22} />
          </a>
        </div>

        {/* Text centered below icons */}
        <p className="text-slate-500 font-medium text-sm md:text-base">
          © {currentYear} Bitxbase Events Hub • Developed by 
          <span className="text-blue-600 font-bold ml-1">Bagami</span>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;