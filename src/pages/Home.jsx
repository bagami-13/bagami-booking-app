import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start h-[85vh] px-4">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5 }}
        /* Changed mt-12 to mt-4 to pull the card up toward the navbar */
        className="mt-4 bg-hero-gradient w-full max-w-4xl p-10 md:p-16 rounded-[2.5rem] shadow-2xl text-white text-center relative overflow-hidden"
      >
        <div className="relative z-10">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/30"
          >
            <span className="text-5xl">📅</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Bagami Booking App
          </h1>

          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Effortlessly book your time slots with a clean and simple interface.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/book')}
            className="bg-white text-purple-600 px-12 py-4 rounded-full font-bold text-2xl shadow-lg hover:bg-slate-50 transition-colors"
          >
            Get Started
          </motion.button>
        </div>

        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  );
};

export default Home;