import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Homepage (Hero Section) */}
        <Hero />

        {/* 3. About Us Section */}
        <About />

        {/* 4. Projects / Showcase Grid */}
        <Projects />

        {/* 5. Contact Person Section */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default App;
