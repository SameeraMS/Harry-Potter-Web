import React from 'react';
import {Wand2, Github, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-bg border-t border-[#1F3347]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Wand2 className="h-8 w-8 text-[#E2B53E]" />
            <span className="text-xl font-bold text-[#E2B53E]">Hogwarts Legacy</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/SameeraMS" className="text-gray-400 hover:text-[#E2B53E]">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E2B53E]">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hogwarts Legacy. All rights reserved.</p>
          <p className="mt-2">Made with magic for Potterheads worldwide.</p>
          <p className="mt-2">Developed by <a href="https://github.com/SameeraMS" className="text-[#E2B53E] hover:underline">Sameera Madushan</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;