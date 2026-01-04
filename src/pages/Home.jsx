import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  return (
    // "h-[calc(100vh-80px)]" makes the container exactly the height of the screen minus the navbar
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }} 
        className="bg-hero-gradient w-full max-w-4xl p-10 md:p-14 rounded-[2rem] shadow-2xl text-white text-center relative overflow-hidden"
      >
        <div className="relative z-10">
          {/* Compact Icon */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md"
          >
            <span className="text-4xl select-none">📅</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Bagami Booking App
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg mx-auto leading-snug">
            Effortlessly book your time slots with a clean and simple interface.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/book')}
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-xl transition-all shadow-lg"
          >
            Get Started
          </motion.button>
        </div>

        {/* Subtle Background Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  );
};

export default Home;