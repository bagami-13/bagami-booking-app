import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 no-scrollbar overflow-y-auto">
        <Navbar />
        <main className="pt-5 pb-12 max-w-7xl mx-auto">
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
      </div>
    </BrowserRouter>
  );
}

// THIS IS THE MISSING LINE:
export default App;