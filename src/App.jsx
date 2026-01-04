import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <BrowserRouter>
      {/* min-h-screen on mobile can cause large gaps; we use flex-col to keep things tight */}
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white text-slate-900">
        <Navbar />
        
        {/* pt-20: Reduced top padding for mobile 
            pb-4: Reduced bottom padding to bring footer closer
            flex-grow: ensures footer stays at bottom only if content is long
        */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 pt-20 md:pt-32 pb-4">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
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