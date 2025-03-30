import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Define your project types
interface Project {
  title: string;
  folder: string;
  category?: string;
  coverImage: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

// Import all project images with correct paths
import puneBookFest1 from "./images/pune_book_festival_2023/image1.jpg";
import puneBookFest2 from "./images/pune_book_festival_2023/image2.jpg";
import puneBookFest3 from "./images/pune_book_festival_2023/image3.jpg";
import puneBookFest4 from "./images/pune_book_festival_2023/image4.jpg";
import puneBookFest5 from "./images/pune_book_festival_2023/image5.jpg";

import puneLitFest1 from "./images/pune_lit_fest/image1.jpg";
import puneLitFest2 from "./images/pune_lit_fest/image2.jpg";
import puneLitFest3 from "./images/pune_lit_fest/image3.jpg";
import puneLitFest4 from "./images/pune_lit_fest/image4.jpg";

import yashwantrao1 from "./images/Yashwantrao Chavan Maharashtra Open University  Samarth Yuva Foundation/image1.jpg";
import yashwantrao2 from "./images/Yashwantrao Chavan Maharashtra Open University  Samarth Yuva Foundation/image2.jpg";
import yashwantrao3 from "./images/Yashwantrao Chavan Maharashtra Open University  Samarth Yuva Foundation/image3.jpg";
import yashwantrao4 from "./images/Yashwantrao Chavan Maharashtra Open University  Samarth Yuva Foundation/image4.jpg";

// Project data with correct image references
const projects: Project[] = [
  {
    title: "Pune Book Festival 2023",
    folder: "pune_book_festival_2023",
    coverImage: puneBookFest1,
  },
  {
    title: "Pune Lit Fest",
    folder: "pune_lit_fest",
    category: "Digital Marketing",  
    coverImage: puneLitFest1,
  },
  {
    title: "Yashwantrao Chavan Maharashtra Open University",
    folder: "yashwantrao_chavan",
    category: "Event Management",
    coverImage: yashwantrao1,
  }
];

// Create a mapping of project folders to their images
const projectImages: Record<string, GalleryImage[]> = {
  pune_book_festival_2023: [
    { src: puneBookFest1, alt: "Pune Book Fest Image 1" },
    { src: puneBookFest2, alt: "Pune Book Fest Image 2" },
    { src: puneBookFest3, alt: "Pune Book Fest Image 3" },
    { src: puneBookFest4, alt: "Pune Book Fest Image 4" },
    { src: puneBookFest5, alt: "Pune Book Fest Image 5" },
  ],
  pune_lit_fest: [
    { src: puneLitFest1, alt: "Pune Lit Fest Image 1" },
    { src: puneLitFest2, alt: "Pune Lit Fest Image 2" },
    { src: puneLitFest3, alt: "Pune Lit Fest Image 3" },
    { src: puneLitFest4, alt: "Pune Lit Fest Image 4" },
  ],
  yashwantrao_chavan: [
    { src: yashwantrao1, alt: "Yashwantrao Image 1" },
    { src: yashwantrao2, alt: "Yashwantrao Image 2" },
    { src: yashwantrao3, alt: "Yashwantrao Image 3" },
    { src: yashwantrao4, alt: "Yashwantrao Image 4" },
  ],
};

const ProjectComponent = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [imageIndices, setImageIndices] = useState<Record<string, number>>({
    pune_book_festival_2023: 0,
    pune_lit_fest: 0,
    yashwantrao_chavan: 0
  });

  // Set up auto-slideshow effect for the expanded project
  useEffect(() => {
    if (!expandedProject) return;
    
    const interval = setInterval(() => {
      setImageIndices(prev => {
        const currentIndex = prev[expandedProject];
        const totalImages = projectImages[expandedProject].length;
        return {
          ...prev,
          [expandedProject]: (currentIndex + 1) % totalImages
        };
      });
    }, 3000); // Change image every 3 seconds
    
    // Clean up interval on component unmount or when expanded project changes
    return () => clearInterval(interval);
  }, [expandedProject]);

  const toggleProject = (folderName: string) => {
    if (expandedProject === folderName) {
      setExpandedProject(null); // Collapse if already expanded
    } else {
      setExpandedProject(folderName); // Expand the clicked project
      // Reset the image index for this folder when expanding
      setImageIndices(prev => ({
        ...prev,
        [folderName]: 0
      }));
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of successful projects.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Project Header - Always visible */}
              <div 
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleProject(project.folder)}
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.category && (
                      <p className="text-orange-500">{project.category}</p>
                    )}
                  </div>
                </div>
                {expandedProject === project.folder ? 
                  <ChevronUp className="text-gray-500" /> : 
                  <ChevronDown className="text-gray-500" />
                }
              </div>

              {/* Expandable Content */}
              {expandedProject === project.folder && (
                <div className="border-t border-gray-200 p-4">
                  <div className="relative">
                    {/* Image display with automatic slideshow */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-full">
                        <img
                          src={projectImages[project.folder][imageIndices[project.folder]].src}
                          alt={projectImages[project.folder][imageIndices[project.folder]].alt}
                          className="max-h-[50vh] w-full object-contain transition-opacity duration-300"
                        />
                        
                        {/* Progress indicators */}
                        <div className="flex justify-center mt-4 space-x-2">
                          {projectImages[project.folder].map((_, idx) => (
                            <div 
                              key={idx} 
                              className={`h-2 w-2 rounded-full ${idx === imageIndices[project.folder] ? 'bg-orange-500' : 'bg-gray-300'}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mt-2 text-center">
                        {imageIndices[project.folder] + 1} of {projectImages[project.folder].length}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;