import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          © {currentYear} Bitxbase Events Hub • Developed by <span className="text-indigo-600 dark:text-indigo-400 font-bold">Bagami</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;