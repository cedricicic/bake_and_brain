'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gray-700 py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
              >
                Our Story
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              >
                Two University of Waterloo students on a mission to revolutionize the way we think about baking and learning
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founders Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Founders</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are two passionate students from the University of Waterloo who share a love for baking and education. 
                Our journey began when we realized the potential of combining these two worlds to create something truly unique.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As young entrepreneurs, we are proud participants of the Ontario Summer Company program, 
                which supports student entrepreneurs aged 15 to 29 in launching their small businesses.
              </p>
            </motion.div>

            {/* Summer Company Program Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Summer Company Program</h2>
              <p className="text-gray-600 mb-4">
                Through the Summer Company program, we have received:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Comprehensive business fundamentals training</li>
                <li>One-on-one mentorship from experienced business professionals</li>
                <li>Access to a grant of up to $3,000 to help launch our business</li>
              </ul>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6"
              >
                <a
                  href="https://www.ontario.ca/page/summer-company"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-800 transform transition-transform duration-200 origin-left hover:scale-105"
                >
                  Learn more about the program
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600">
              We believe that learning should be as enjoyable as baking your favorite dessert. 
              Our platform combines the joy of baking with the power of education, creating a unique 
              experience that makes learning both fun and effective. Through our participation in the 
              Summer Company program, we're turning our vision into reality, one recipe at a time.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
