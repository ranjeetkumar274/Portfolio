import React from "react";
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
import ProjectDetails from "./components/ProjectDetails";
import Profiles from "./components/Profiles";

const MainLayout = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header/>
      <Profiles/>
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
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project-details" element={
          <div className="bg-gray-900 min-h-screen text-white dark">
            <ProjectDetails />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);