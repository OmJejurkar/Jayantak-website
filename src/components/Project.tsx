import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

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

// import yashwantrao1 from "./images/Yashwantrao Chavan Maharashtra Open L/image1.jpg";
// import yashwantrao2 from "./images/Yashwantrao Chavan Maharashtra Open L/image2.jpg";
// import yashwantrao3 from "./images/Yashwantrao Chavan Maharashtra Open L/images3.jpg";
// import yashwantrao4 from "./images/Yashwantrao Chavan Maharashtra Open L/image4.jpg";

// Project data with correct image references
const projects: Project[] = [
  {
    title: "Pune Book Festival 2023",
    folder: "pune_book_festival_2023",
    coverImage: puneBookFest1,
  },
  {
    title: "Pune Lit Festival",
    folder: "pune_lit_fest",
    category: "Digital Marketing",
    coverImage: puneLitFest1,
  },
  // {
  //   title: "Yashwantrao Chavan Maharashtra Open University",
  //   folder: "yashwantrao_chavan",
  //   coverImage: yashwantrao1,
  // }
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
  // yashwantrao_chavan: [
  //   { src: yashwantrao1, alt: "Yashwantrao Image 1" },
  //   { src: yashwantrao2, alt: "Yashwantrao Image 2" },
  //   { src: yashwantrao3, alt: "Yashwantrao Image 3" },
  //   { src: yashwantrao4, alt: "Yashwantrao Image 4" },
  // ],
};

const ProjectComponent = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openProjectGallery = (folderName: string) => {
    const images = projectImages[folderName] || [];
    setCurrentImages(images);
    setCurrentIndex(0); // Reset to first image when opening gallery
    setGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Projects Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of successful projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openProjectGallery(project.folder)}
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    {project.category && (
                      <p className="text-orange-500">{project.category}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-4xl">
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-orange-500 z-10"
            >
              <ArrowRight size={24} className="rotate-180" />
            </button>

            <div className="overflow-hidden">
              <div className="flex flex-col items-center">
                {currentImages.length > 0 && (
                  <>
                    <img
                      src={currentImages[currentIndex].src}
                      alt={currentImages[currentIndex].alt}
                      className="max-h-[70vh] max-w-full object-contain"
                    />
                    <p className="text-gray-400 mt-2">
                      {currentIndex + 1} of {currentImages.length}
                    </p>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-orange-500 z-10"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectComponent;