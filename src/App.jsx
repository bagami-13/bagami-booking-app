import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer"; // Import the new Footer
import Home from "./pages/Home";
import Book from "./pages/Book";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <BrowserRouter>
      {/* flex and flex-col ensures the footer stays at the bottom */}
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
        <Navbar />
        
        <main className="flex-grow pt-14 pb-12 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/book" element={<Book />} />
              <Route path="/confirm" element={<Confirm />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer /> {/* Add Footer here */}
      </div>
    </BrowserRouter>
  );
}

export default App;