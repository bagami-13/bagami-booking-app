import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="text-xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
          Bagami Booking
        </Link>

        {/* Navigation Links & Toggle Section */}
        {/* 'gap-8' ensures there is plenty of space between the links and the button */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link 
            to="/home" 
            className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/book" 
            className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Book Slot
          </Link>
          
          {/* Theme Toggle Wrapper to ensure no overlap */}
          <div className="ml-2 border-l border-slate-200 dark:border-slate-700 pl-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;