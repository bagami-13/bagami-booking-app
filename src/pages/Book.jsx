import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SLOTS = ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM", "3:00 PM - 4:00 PM"];

const Book = () => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [formData, setFormData] = useState({ name: '', contact: '', purpose: '' });

  // Load already booked slots from localStorage when the page opens
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('allBookings')) || [];
    // We only need the time strings for the buttons
    setBookedSlots(savedBookings.map(b => b.time));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const newBooking = { ...formData, time: selectedSlot };
    
    // Save to the list of all bookings
    const existingBookings = JSON.parse(localStorage.getItem('allBookings')) || [];
    const updatedBookings = [...existingBookings, newBooking];
    
    localStorage.setItem('allBookings', JSON.stringify(updatedBookings));
    localStorage.setItem('latestBooking', JSON.stringify(newBooking)); // For the confirm page
    
    navigate('/confirm');
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-2 text-slate-800 dark:text-white">Welcome to Bagami Booking</h2>
        <p className="text-slate-500">Choose an available slot and book your time in seconds.</p>
      </div>

      {!selectedSlot ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SLOTS.map((slot) => {
            const isBooked = bookedSlots.includes(slot);
            
            return (
              <motion.div 
                key={slot}
                whileHover={!isBooked ? { y: -5 } : {}}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 text-center"
              >
                <h3 className="font-bold text-lg mb-2">{slot}</h3>
                
                {/* Dynamic Status Text */}
                <p className={`font-semibold mb-6 ${isBooked ? 'text-red-500' : 'text-green-500'}`}>
                  {isBooked ? 'Booked' : 'Available'}
                </p>

                {/* Dynamic Button Style */}
                <button 
                  disabled={isBooked}
                  onClick={() => setSelectedSlot(slot)}
                  className={`w-full py-3 rounded-2xl font-bold transition-all ${
                    isBooked 
                    ? 'bg-slate-400 cursor-not-allowed text-white' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
                  }`}
                >
                  {isBooked ? 'Unavailable' : 'Book Now'}
                </button>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* Form Section - Stay the same as before */
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-2xl">
          <h3 className="text-2xl font-bold text-center mb-6">Fill Your Details</h3>
          <form onSubmit={handleConfirmBooking} className="space-y-4">
            <input required name="name" placeholder="Full Name" onChange={handleInputChange} className="w-full p-4 rounded-xl border dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500" />
            <input required name="contact" placeholder="Contact Info" onChange={handleInputChange} className="w-full p-4 rounded-xl border dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500" />
            <input required name="purpose" placeholder="Purpose" onChange={handleInputChange} className="w-full p-4 rounded-xl border dark:bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500" />
            <div className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-center font-bold">{selectedSlot}</div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg">Confirm Booking</button>
            <button type="button" onClick={() => setSelectedSlot(null)} className="w-full text-slate-400 text-sm mt-2">Back to Slots</button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Book;