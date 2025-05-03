'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.04, 0.62, 0.23, 0.98],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98],
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for individual menu items
  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Animation variants for the hamburger icon
  const lineOneVariants = {
    open: { rotate: 45, y: 8, width: '150%', transition: { duration: 0.4 } },
    closed: { rotate: 0, y: 0, width: '100%', transition: { duration: 0.4 } }
  };
  
  const lineTwoVariants = {
    open: { opacity: 0, x: -20, transition: { duration: 0.2 } },
    closed: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 } }
  };
  
  const lineThreeVariants = {
    open: { rotate: -45, y: -8, width: '150%', transition: { duration: 0.4 } },
    closed: { rotate: 0, y: 0, width: '100%', transition: { duration: 0.4 } }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Bake & Brain
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link href="/lessons" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Lessons
              </Link>
              <Link href="/class-schedule" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Schedule
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </Link>
            </div>
          </div>
          
          {/* Hamburger menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.div
                  variants={lineOneVariants}
                  animate={isMenuOpen ? "open" : "closed"}
                  className="w-6 h-0.5 bg-gray-800 mb-1.5"
                />
                <motion.div
                  variants={lineTwoVariants}
                  animate={isMenuOpen ? "open" : "closed"}
                  className="w-6 h-0.5 bg-gray-800 mb-1.5"
                />
                <motion.div
                  variants={lineThreeVariants}
                  animate={isMenuOpen ? "open" : "closed"}
                  className="w-6 h-0.5 bg-gray-800"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - using AnimatePresence for smooth enter/exit */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { href: '/', text: 'Home' },
                { href: '/lessons', text: 'Lessons' },
                { href: '/class-schedule', text: 'Schedule' },
                { href: '/contact', text: 'Contact' },
                { href: '/about', text: 'About' }
              ].map((item, index) => (
                <motion.div key={index} variants={menuItemVariants}>
                  <Link 
                    href={item.href} 
                    className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}