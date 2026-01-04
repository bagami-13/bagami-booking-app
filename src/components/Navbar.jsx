import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Bagami Booking
        </Link>
        <div className="flex items-center gap-8">
          
          <Link to="/home" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Home</Link>
          <Link to="/book" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Book Slot</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;