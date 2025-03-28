import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ProjectComponent from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Pages/Project';  // Assuming Project is in pages folder

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Services />
                <About />
                <ProjectComponent />
                <Contact />
              </>
            } 
          />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;