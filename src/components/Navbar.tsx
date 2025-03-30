import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://raw.githubusercontent.com/OmJejurkar/Jayantak-website/main/src/components/images/logoWBG.JPG" 
              alt="Jayantak Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2l font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Jayantak Media Solutions Pvt. Ltd.
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-orange-500 px-3 py-2">Home</a>
              <a href="#about" className="hover:text-orange-500 px-3 py-2">About</a>
              <a href="#services" className="hover:text-orange-500 px-3 py-2">Services</a>
              <a href="#portfolio" className="hover:text-orange-500 px-3 py-2">Projects</a>
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - now positioned on the right */}
      {isOpen && (
        <div className="md:hidden fixed right-0 top-16 w-64 h-full bg-black shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="#home" onClick={closeMenu} className="block hover:text-orange-500 px-3 py-2">Home</a>
            <a href="#about" onClick={closeMenu} className="block hover:text-orange-500 px-3 py-2">About</a>
            <a href="#services" onClick={closeMenu} className="block hover:text-orange-500 px-3 py-2">Services</a>
            <a href="#portfolio" onClick={closeMenu} className="block hover:text-orange-500 px-3 py-2">Portfolio</a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md mt-4 text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;