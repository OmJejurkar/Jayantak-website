import React from 'react';
import { Menu, X, Camera, Calendar, Megaphone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://www.google.com/imgres?q=Jayantak%20Media%20solutions%20pune%20logo&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100054621151919&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FCCTVMEDIA.IN%2F&docid=-z2is5572vQcAM&tbnid=OWOqy-_xSkg3EM&vet=12ahUKEwiOp-Kc3f-KAxUlEVkFHQXAHiAQM3oECBcQAA..i&w=1932&h=2048&hcb=2&ved=2ahUKEwiOp-Kc3f-KAxUlEVkFHQXAHiAQM3oECBcQAA" 
              alt="Jayantak Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2l font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Jayantak Media Silutions Pvt. Ltd.
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-orange-500 px-3 py-2">Home</a>
              <a href="#about" className="hover:text-orange-500 px-3 py-2">About</a>
              <a href="#services" className="hover:text-orange-500 px-3 py-2">Services</a>
              <a href="#portfolio" className="hover:text-orange-500 px-3 py-2">Portfolio</a>
              <a href="#blog" className="hover:text-orange-500 px-3 py-2">Blog</a>
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

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:text-orange-500 px-3 py-2">Home</a>
            <a href="#about" className="block hover:text-orange-500 px-3 py-2">About</a>
            <a href="#services" className="block hover:text-orange-500 px-3 py-2">Services</a>
            <a href="#portfolio" className="block hover:text-orange-500 px-3 py-2">Portfolio</a>
            <a href="#blog" className="block hover:text-orange-500 px-3 py-2">Blog</a>
            <a href="#contact" className="block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md mt-4">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
