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
    <div>
      <Header/>
      <Profiles/>
      <section id="about">
        <Home/>
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="skills">
        <Skills/>
      </section> 
      <section id="experience">
        <Experience/>
      </section> 
      <section id="projects">
        <Project/>
      </section> 
      <section id="contact">
        <Contact/>
      </section>
      <section id="links">
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
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);