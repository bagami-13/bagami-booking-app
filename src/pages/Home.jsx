import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-12 md:py-24 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Discover What's Happening on <span className="text-blue-600">Campus</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 px-4">
            Bitxbase Events Hub is your digital notice board for workshops, sports, 
            and social gatherings. Stay connected with your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
            <Link to="/book" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              Add Your Event <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white rounded-3xl border border-slate-100 shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Calendar size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Scheduling</h3>
            <p className="text-slate-500">Quickly find or post events with our simple date-picking system.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="text-slate-500">Built for students, by students. Growing the campus network together.</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Live Locations</h3>
            <p className="text-slate-500">Know exactly where the action is happening with clear venue tags.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;