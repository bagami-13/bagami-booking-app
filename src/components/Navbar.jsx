import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            Bitxbase Events Hub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</Link>
            <Link to="/book" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all">
              Add Event
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 flex flex-col gap-4 animate-in slide-in-from-top">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium py-2">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium py-2">About</Link>
          <Link to="/book" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white text-center px-5 py-3 rounded-lg">
            Add Event
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;