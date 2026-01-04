import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Confirm = () => {
  const navigate = useNavigate();
  const booking = JSON.parse(localStorage.getItem('latestBooking')) || {};

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-2xl max-w-md w-full text-center border border-slate-100 dark:border-slate-800"
      >
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-black text-green-600 mb-6">Booking Confirmed!</h2>
        
        <div className="space-y-4 text-left border-t border-slate-100 dark:border-slate-800 pt-6 mb-8">
          <p className="flex justify-between font-medium">
            <span className="text-slate-400 uppercase text-xs">Name:</span> 
            <span className="dark:text-white">{booking.name}</span>
          </p>
          <p className="flex justify-between font-medium">
            <span className="text-slate-400 uppercase text-xs">Time:</span> 
            <span className="dark:text-white">{booking.time}</span>
          </p>
          <p className="flex justify-between font-medium">
            <span className="text-slate-400 uppercase text-xs">Purpose:</span> 
            <span className="dark:text-white">{booking.purpose}</span>
          </p>
          <p className="flex justify-between font-medium">
            <span className="text-slate-400 uppercase text-xs">Contact:</span> 
            <span className="dark:text-white">{booking.contact}</span>
          </p>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
};

export default Confirm;