'use client';

import React, { useState } from 'react';
import { 
  Clock, 
  Calculator, 
  BookOpen, 
  FileText, 
  Lightbulb, 
  Users,
  Star,
  Medal,
  Brain,
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CalendarCheck,
  Divide,
  PieChart,
  Percent,
  Scale,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CookieMathParentPage() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showRegistrationInfo, setShowRegistrationInfo] = useState(false);
  
  const toggleSection = (sectionId: string | React.SetStateAction<null>) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId as any);
    }
  };

  const toggleRegistrationInfo = () => {
    setShowRegistrationInfo(!showRegistrationInfo);
  };

  const activityHighlights = [
    {
      id: 'ratio',
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      title: 'Ratio & Proportion Laboratory',
      description: 'Students scale recipes while maintaining perfect flavor balance',
      details: 'Your student will dive into the practical world of ratios by scaling cookie recipes up and down. They\'ll learn how to maintain the critical balance between ingredients when doubling, tripling, or halving recipes. This hands-on experience transforms abstract ratio concepts into delicious, tangible results that demonstrate how mathematics is essential in everyday life.'
    },
    {
      id: 'fraction',
      icon: <PieChart className="w-6 h-6 text-blue-600" />,
      title: 'Fraction Operations Workshop',
      description: 'Master adding, subtracting, multiplying and dividing fractions with precision',
      details: 'The workshop\'s highlight is our fraction investigation where students use measuring cups and spoons to physically add, subtract, multiply and divide fractions. Through combining ingredients, students will directly observe how fractions interact, convert between mixed numbers and improper fractions, and find common denominators—all while creating perfectly balanced cookie dough.'
    },
    {
      id: 'algebra',
      icon: <Calculator className="w-6 h-6 text-blue-600" />,
      title: 'Applied Algebraic Expressions',
      description: 'Convert word problems into algebraic equations to solve batch sizing challenges',
      details: 'Students will create algebraic expressions to determine exactly how much of each ingredient is needed for different batch sizes. They\'ll learn to identify variables, constants, and coefficients in real-world contexts, then use these equations to calculate precise measurements. This approach transforms abstract algebraic concepts into practical tools for solving everyday problems.'
    },
    {
      id: 'percent',
      icon: <Percent className="w-6 h-6 text-blue-600" />,
      title: 'Percentage & Conversion Skills',
      description: 'Calculate percentage changes when modifying recipes',
      details: 'Throughout the workshop, students apply percentage calculations to modify recipes, convert between different measurement systems (cups to grams, teaspoons to milliliters), and determine how ingredient proportions affect the final product. They\'ll create comparison charts showing how changes in measurements create different textures and flavors—applying mathematical analysis to improve their results.'
    },
    {
      id: 'problem',
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: 'Mathematical Problem-Solving',
      description: 'Develop multiple approaches to solving complex, multi-step problems',
      details: 'This isn\'t just about baking cookies! Students will learn structured problem-solving approaches including working backward from a desired outcome, using proportional reasoning, creating data tables, and employing estimation techniques. These same mathematical thinking strategies apply directly to standardized tests, higher mathematics courses, and numerous real-world scenarios.'
    },
  ];

  const testimonials = [
    {
      quote: "Fusce pellentesque placerat lacus at interdum. Curabitur congue vehicula purus sed accumsan. Integer ultrices dolor vestibulum, volutpat tellus a, accumsan purus. Nunc tincidunt sem ut viverra vulputate. ",
      parent: "Maria T., parent of 9th grader"
    },
    {
      quote: "Eleifend ultricies. Nunc fringilla ex et elit finibus, non imperdiet quam consequat.Integer ultrices dolor vestibulum,  Proin porta magna quis felis vehicula tristique.",
      parent: "David K., parent of 10th grader"
    },
    {
      quote: "Phasellus sit amet maximus mauris. Vivamus vestibulum maximus interdum. Nunc ut sagittis ex. Duis molestie consequat rutrum. Aliquam eu sagittis purus. Fusce bibendum cursus diam sed mollis. Nulla at arcu ut ero",
      parent: "Jennifer L., parent of 9th grader"
    }
  ];
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const slideDown = {
    hidden: { height: 0, opacity: 0, overflow: 'hidden' },
    visible: { 
      height: 'auto', 
      opacity: 1, 
      transition: { 
        height: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      } 
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: { 
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      } 
    }
  };

  const buttonHover = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  };

  const cardHover = {
    rest: { scale: 1, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
    hover: { 
      scale: 1.02, 
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.2 }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-700 text-white py-20 px-8"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="md:w-1/2"
              >
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-blue-900 text-blue-100 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block"
                >
                  Interactive Mathematics Workshop
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl font-bold mb-4"
                >
                  Cookie Calculations
                </motion.h1>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-2xl mb-6"
                >
                  Mastering Ratios, Fractions & Algebraic Expressions Through Baking
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg mb-8"
                >
                  Transform your middle schooler's math experience with our engaging workshop that turns abstract mathematical concepts into delicious, hands-on learning they'll remember!
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button 
                    onClick={toggleRegistrationInfo}
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHover}
                    className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    Reserve a Spot
                  </motion.button>
                  <motion.a 
                    href="#activity-details"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHover}
                    className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Learn More
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="md:w-1/2 rounded-lg overflow-hidden shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9 bg-blue-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      src="/cookies.jpg" 
                      alt="Students calculating ratios for cookie recipes" 
                      className="w-full max-w-md rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Registration Info - Conditionally rendered with AnimatePresence */}
        <AnimatePresence>
          {showRegistrationInfo && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideDown}
              className="bg-blue-100 py-8 px-4 border-b-2 border-blue-200"
            >
              <motion.div 
                variants={fadeIn}
                className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-blue-800">Registration Details</h3>
                  <motion.button 
                    onClick={toggleRegistrationInfo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <ChevronUp className="w-6 h-6" />
                  </motion.button>
                </div>
                
                <motion.div 
                  variants={staggerChildren}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                >
                  <motion.div 
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <CalendarCheck className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Upcoming Sessions</h4>
                      <p>Saturday, May 24th, 2025 - 10:00am to 12:30pm</p>
                      <p>Saturday, June 14th, 2025 - 10:00am to 12:30pm</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <Users className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Class Size</h4>
                      <p>Limited to 14 students to ensure personalized instruction and kitchen safety</p>
                      <p className="text-blue-700 font-medium">Only 5 spots left for May 24th!</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <Star className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Registration Fee</h4>
                      <p>$55 per student (all ingredients and mathematical tools included)</p>
                      <p>15% sibling discount available for multiple registrations</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Duration</h4>
                      <p>2.5 hours of hands-on mathematical exploration and baking</p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.button 
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonHover}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Register Now
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-5xl mx-auto p-8" id="activity-details">
          {/* Quick Info Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Clock className="w-4 h-4" /> 2.5 Hour Workshop
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> Grades 7-9
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" /> All Materials Provided
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Aligned with Math Standards
            </motion.span>
          </motion.div>
          
          {/* Activity Highlights */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-blue-800 mb-10"
          >
            What Your Student Will Experience
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="space-y-4 mb-16"
          >
            {activityHighlights.map((highlight, index) => (
              <motion.div 
                key={highlight.id} 
                variants={{
                  ...fadeIn,
                  rest: { scale: 1, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
                  hover: { 
                    scale: 1.02, 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transition: { duration: 0.2 }
                  }
                }}
                custom={index}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-blue-500"
              >
                <motion.div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(highlight.id)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="p-2 bg-blue-100 rounded-lg mr-4"
                  >
                    {highlight.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800">{highlight.title}</h4>
                    <p className="text-gray-600 mt-1">{highlight.description}</p>
                  </div>
                  
                  <motion.div 
                    animate={{ rotate: expandedSection === highlight.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </motion.div>
                </motion.div>
                
                <AnimatePresence>
                  {expandedSection === highlight.id && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={slideDown}
                      className="px-4 pb-4 pt-2 bg-blue-50 border-t border-gray-200"
                    >
                      <p className="text-gray-700">{highlight.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Learning Outcomes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-16 border-t-4 border-blue-500"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-blue-800 mb-6"
            >
              What Your Student Will Learn
            </motion.h3>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#93c5fd" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-blue-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ratio & Proportion Mastery</h4>
                    <p className="text-gray-600">Understanding equivalent ratios, scale factors, and proportional relationships through recipe scaling</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#93c5fd" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-blue-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fraction Operations</h4>
                    <p className="text-gray-600">Mastering addition, subtraction, multiplication, and division of fractions with practical applications</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#93c5fd" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-blue-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Algebraic Expressions</h4>
                    <p className="text-gray-600">Creating and solving equations to determine exact measurements for different batch sizes</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#93c5fd" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-blue-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Measurement & Conversion</h4>
                    <p className="text-gray-600">Converting between measurement systems and understanding equivalence relationships</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#93c5fd" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-blue-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Percentages & Decimals</h4>
                    <p className="text-gray-600">Calculating percentage changes and converting between fractions, decimals, and percentages</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#93c5fd" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-blue-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Problem-Solving Strategies</h4>
                    <p className="text-gray-600">Developing methodical approaches to multi-step mathematical problems</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Testimonials */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center text-blue-800 mb-6"
          >
            What Parents Are Saying
          </motion.h3>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400 flex flex-col"
              >
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                </div>
                <p className="text-blue-800 font-medium">{testimonial.parent}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-blue-700 text-white rounded-xl shadow-xl p-8 text-center"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-4"
            >
              Make math deliciously engaging!
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Perfect for middle school students who need to strengthen their math fundamentals or are ready for more advanced concepts. Limited spots available!
            </motion.p>
            <motion.button 
              onClick={toggleRegistrationInfo}
              whileHover="hover"
              whileTap="tap"
              variants={buttonHover}
              className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors"
            >
              Reserve Your Spot Now
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h3>
            
            <motion.div 
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <motion.div 
                variants={fadeIn}
                whileHover="hover"
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('faq1')}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">Do students need any prior science knowledge?</h4>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === 'faq1' ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedSection === 'faq1' && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={slideDown}
                      className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200"
                    >
                      <p className="text-gray-700">
                        No prior knowledge is required! Our activities are designed to meet students where they are and 
                        build from there. Instructors explain all concepts clearly and provide appropriate scaffolding.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                whileHover="hover"
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('faq2')}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">What should my child wear to the workshop?</h4>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === 'faq2' ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedSection === 'faq2' && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={slideDown}
                      className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200"
                    >
                      <p className="text-gray-700">
                        Students should wear comfortable clothes that can get a little messy. While we provide aprons, 
                        flour can sometimes find its way onto clothing. Closed-toe shoes are recommended.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                whileHover="hover"
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('faq3')}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">Are there accommodations for allergies?</h4>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === 'faq3' ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedSection === 'faq3' && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={slideDown}
                      className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200"
                    >
                      <p className="text-gray-700">
                        Yes! Please note any allergies during registration. We can provide gluten-free flour alternatives, 
                        and our facility is nut-free. Contact us directly with specific concerns.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                whileHover="hover"
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('faq4')}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">Will my child take anything home?</h4>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === 'faq4' ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedSection === 'faq4' && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={slideDown}
                      className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200"
                    >
                      <p className="text-gray-700">
                        Yes! Students will take home their data collection sheets, a recipe card with scientific annotations,
                        and instructions for continuing the experiment at home if desired.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}