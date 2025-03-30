import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ProjectComponent from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Project from './components/Pages/Project'; // Assuming Project is in pages folder
import ServicesList from './components/Pages/ServicesList'; // Import the ServicesList component
import JayantakChatbot from './components/chatbot'; // Import the chatbot component
import OurClients from './components/OurClients'

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

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
                <OurClients />
                <ProjectComponent />
                <Blog />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Project />} />
          <Route path="/services-list" element={<ServicesList />} />
        </Routes>
        <Footer />

        {/* Chat button - fixed position */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-6 right-6 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition duration-300 z-50"
        >
          {isChatOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z" />
            </svg>
          )}
        </button>

        {/* Chatbot component - conditionally rendered */}
        {isChatOpen && (
          <div className="fixed bottom-24 right-6 z-50 shadow-2xl">
            <JayantakChatbot />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;