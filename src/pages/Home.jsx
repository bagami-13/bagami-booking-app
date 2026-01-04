import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full flex justify-center"> 
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-gradient-to-br from-indigo-500 to-purple-500 rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-xl"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
            {/* Calendar Icon */}
            <span className="text-4xl">📅</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bagami Booking App</h1>
        <p className="text-lg opacity-90 mb-10 max-w-md mx-auto">
          Effortlessly book your time slots with a clean and simple interface.
        </p>

        <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-xl hover:shadow-lg transition-all active:scale-95">
          Get Started
        </button>
      </motion.section>
    </div>
  );
};

export default Home;