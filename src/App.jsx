import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Confirm from "./pages/Confirm";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      {/* min-h-screen keeps footer at bottom; w-full + overflow-x-hidden prevents side-scrolling */}
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900">
        <Navbar />
        
        {/* Main takes up available space. px-4 provides the mobile 'gutters' */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<Book />} />
              <Route path="/confirm" element={<Confirm />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;