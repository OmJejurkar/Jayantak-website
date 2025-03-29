// Modified ProjectComponent.jsx with scroll position reset
import React from "react";
import { ArrowRight } from "lucide-react";
import Y2India from "./images/Y2India.jpg";
import SPPU from "./images/SPPU.jpg";
import Rayat from "./images/Rayat.jpg";
import Punefest from "./images/Punefest.jpg";
import Yashwantrao from "./images/Yashwantrao.jpg";
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: "Political Campaign 2023",
    category: "Campaign Management",
    image: Y2India,
  },
  {
    title: "Corporate Event",
    category: "Event Management",
    image: SPPU,
  },
  {
    title: "Product Launch",
    category: "Photography",
    image: Rayat,
  },
  {
    title: "Brand Campaign",
    category: "Digital Marketing",
    image: Punefest,
  },
  {
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image: Yashwantrao,
  },
  {
    title: "Conference 2023",
    category: "Event Management",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
  },
];

const ProjectComponent = () => {
  const navigate = useNavigate();

  const handleSeeAllProjects = () => {
    // First, store that we want to reset scroll position
    sessionStorage.setItem('scrollToTop', 'true');
    
    // Then navigate to the projects page
    navigate('/projects');
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of successful projects across political
            campaigns, events, and creative services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-orange-500">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeAllProjects}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md flex items-center gap-2"
          >
            See All Projects <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;

