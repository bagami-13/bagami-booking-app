import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-white">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Bitxbase Events Hub • Developed by 
          <span className="text-indigo-600 font-bold ml-1">Bagami</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;