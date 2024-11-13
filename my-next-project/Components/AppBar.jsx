import React from 'react';
import { motion } from 'framer-motion';

// Reusable component for animated list items
const AnimatedListItem = ({ children, delay }) => {
  return (
    <motion.li
      className="text-gray-500 hover:text-gray-800 cursor-pointer text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      {children}
    </motion.li>
  );
};

export default function AppBar() {
  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav className="absolute w-full z-10">
        <div className="flex items-start text-white p-6">
          {/* Logo and Mobile Menu Container */}
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* Logo */}
            <div className="text-2xl font-bold">
              Opal
            </div>

            {/* Mobile Menu Button */}
            <label htmlFor="mobile-menu" className="md:hidden cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </label>
          </div>

          {/* Hidden Checkbox for Mobile Menu Toggle */}
          <input type="checkbox" id="mobile-menu" className="hidden peer" />
          
          {/* Navigation Menu */}
          <div className="fixed inset-0 bg-black/95 md:bg-transparent -translate-x-full peer-checked:translate-x-0 md:translate-x-0 transition-transform duration-300 md:relative md:flex md:ml-8 md:space-x-10 pt-20 md:pt-0 px-6 md:px-0">
            {/* Close Button for Mobile */}
            <label htmlFor="mobile-menu" className="absolute top-6 right-6 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </label>

            {/* Products Column */}
            <div className="mb-8 md:mb-0">
              <h4 className="font-semibold hover:text-gray-400 cursor-pointer">Products</h4>
              <ul className="mt-2 space-y-3 md:space-y-1">
                <AnimatedListItem delay={0.2}>Tadpole</AnimatedListItem>
                <AnimatedListItem delay={0.3}>C1</AnimatedListItem>
                <AnimatedListItem delay={0.4}>Composer</AnimatedListItem>
              </ul>
            </div>
            
            {/* Company Column */}
            <div className="mb-8 md:mb-0">
              <h4 className="font-semibold hover:text-gray-400 cursor-pointer">Company</h4>
              <ul className="mt-2 space-y-3 md:space-y-1">
                <AnimatedListItem delay={0.5}>About</AnimatedListItem>
                <AnimatedListItem delay={0.6}>Terms</AnimatedListItem>
                <AnimatedListItem delay={0.7}>Privacy</AnimatedListItem>
              </ul>
            </div>
            
            {/* Resources Column */}
            <div className="mb-8 md:mb-0">
              <h4 className="font-semibold hover:text-gray-400 cursor-pointer">Resources</h4>
              <ul className="mt-2 space-y-3 md:space-y-1">
                <AnimatedListItem delay={0.8}>Support</AnimatedListItem>
                <AnimatedListItem delay={0.9}>Media Kit</AnimatedListItem>
                <AnimatedListItem delay={1}>Downloads</AnimatedListItem>
                <AnimatedListItem delay={1.1}>Newsletter</AnimatedListItem>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:block ml-auto space-x-4">
            <button className="px-4 py-2 rounded-full text-gray-500 hover:text-gray-400 transition-colors">
              Sign In
            </button>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative h-screen bg-neutral-900">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0">
          <img 
            src="/opla.jpg" 
            alt="Person wearing headphones" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative pt-48 px-8 max-w-6xl mx-auto ">
          <h1 className="text-white text-xl md:text-4xl font-light mb-10 mt-20 max-w-md">
            The first webcam designed for laptops.
          </h1>
          
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition-colors">
            Available now for $149.
          </button>
        </div>
      </div>
    </div>
  );
}
