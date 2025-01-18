import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Jayantak
            </h3>
            <p className="text-gray-400 mb-6">
              Transforming visions into reality through expert political campaign management,
              photography, and event management services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-orange-500">Portfolio</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-orange-500">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Political Campaigns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Photography</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Event Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Brand Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jayantak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;