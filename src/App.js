import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import '../index.css';
import Header from "./components/Header";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Profiles from "./components/Profiles";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

// Scroll to top button component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

const MainLayout = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header/>
      <section id="about" className="dark pb-16">
        <Home/>
      </section>
      <section id="education" className="dark pb-16">
        <Education/>
      </section>
      <section id="skills" className="dark pb-16">
        <Skills/>
      </section> 
      <section id="experience" className="dark pb-16">
        <Experience/>
      </section> 
      <section id="projects" className="dark pb-16">
        <Project/>
      </section> 
      <section id="contact" className="dark pb-16">
        <Contact/>
      </section>
      <section id="links" className="dark">
        <Footer/>
      </section>
      <ScrollToTop />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);