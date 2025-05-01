'use client';

import React, { useState } from 'react';
import { 
  Clock, 
  FlaskRound, 
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
  Thermometer,
  Sparkles,
  Beaker,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CandyScienceParentPage() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showRegistrationInfo, setShowRegistrationInfo] = useState(false);
  
  const toggleSection = (sectionId: string) => {
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
      id: 'crystal',
      icon: <Sparkles className="w-6 h-6 text-teal-600" />,
      title: 'Crystal Formation Laboratory',
      description: 'Students create rock candy while studying crystallization processes',
      details: 'Your teen will explore the fascinating world of crystallization by creating their own rock candy. They\'ll learn about nucleation, supersaturation, and crystal lattice formation while watching sugar molecules organize into intricate geometric structures. This hands-on experience transforms abstract crystallography concepts into visible, delicious science.'
    },
    {
      id: 'thermo',
      icon: <Thermometer className="w-6 h-6 text-teal-600" />,
      title: 'Thermodynamics in Action',
      description: 'Master precise temperature control to create perfect caramel',
      details: 'The workshop\'s highlight is our caramelization investigation where students use precise temperature control to observe how heat energy transforms simple sugar molecules into complex flavor compounds. Through this process, students will directly observe enthalpy changes, phase transitions, and the Maillard reaction that produces both color and flavor changes.'
    },
    {
      id: 'solution',
      icon: <Beaker className="w-6 h-6 text-teal-600" />,
      title: 'Advanced Solution Chemistry',
      description: 'Investigate saturation, supersaturation, and solubility curves',
      details: 'Students will prepare solutions of varying concentrations, exploring fundamental concepts of solubility, saturation points, and the effects of temperature on dissolution rates. They\'ll construct solubility curves from experimental data and apply these principles to create perfectly smooth fondant and fudge textures.'
    },
    {
      id: 'skills',
      icon: <Brain className="w-6 h-6 text-teal-600" />,
      title: 'College-Level Laboratory Skills',
      description: 'Develop precision measurement, data analysis, and scientific methodology',
      details: 'Throughout the workshop, students use professional-grade equipment including digital thermometers, precision scales, and refractometers to collect quantitative data. They\'ll apply statistical analysis to their findings, create graphs showing phase transitions, and develop hypotheses about molecular behaviors—the exact skills needed for success in university chemistry courses.'
    },
    {
      id: 'careers',
      icon: <Medal className="w-6 h-6 text-teal-600" />,
      title: 'Real-World Career Applications',
      description: 'Connect concepts to careers in food science, chemical engineering and more',
      details: 'This isn\'t just about making candy! Students will discover how the same principles of thermodynamics and crystallization are applied in numerous STEM fields including pharmaceutical development, materials science, chemical engineering, and food technology. Guest speakers from industry partners will share insights about how these concepts appear in their daily work.'
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
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white text-gray-800">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-teal-700 text-white py-20 px-8"
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
                  className="bg-teal-900 text-teal-100 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block"
                >
                  Advanced Chemistry Workshop
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl font-bold mb-4"
                >
                  Sweet Chemistry
                </motion.h1>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-2xl mb-6"
                >
                  Exploring Thermodynamics & Crystal Formation through Candy Science
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg mb-8"
                >
                  Give your high school student the competitive edge with our college-level workshop that transforms complex chemistry concepts into delicious experiments they'll never forget!
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
                    className="bg-white text-teal-700 hover:bg-teal-100 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    Reserve a Spot
                  </motion.button>
                  <motion.a 
                    href="#activity-details"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHover}
                    className="bg-teal-600 hover:bg-teal-500 px-6 py-3 rounded-lg font-semibold transition-colors"
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
                <div className="aspect-w-16 aspect-h-9 bg-teal-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      src="/candy.jpg" 
                      alt="Students creating crystal candy formations" 
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
              className="bg-teal-100 py-8 px-4 border-b-2 border-teal-200"
            >
              <motion.div 
                variants={fadeIn}
                className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-teal-800">Registration Details</h3>
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
                    <CalendarCheck className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Upcoming Sessions</h4>
                      <p>Saturday, May 17th, 2025 - 1:00pm to 3:30pm</p>
                      <p>Saturday, June 7th, 2025 - 1:00pm to 3:30pm</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <Users className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Class Size</h4>
                      <p>Limited to 12 students to ensure laboratory safety and individualized guidance</p>
                      <p className="text-teal-700 font-medium">Only 3 spots left for May 17th!</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <Star className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Registration Fee</h4>
                      <p>$65 per student (all materials and safety equipment included)</p>
                      <p>20% discount for AP Chemistry students (verification required)</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <Clock className="w-5 h-5 text-teal-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Duration</h4>
                      <p>2.5 hours of college-level laboratory investigation and analysis</p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.button 
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonHover}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-colors"
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
              className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Clock className="w-4 h-4" /> 2.5 Hour Workshop
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> Grades 11-12
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <FlaskRound className="w-4 h-4" /> Lab Equipment Provided
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> AP/IB Chemistry Aligned
            </motion.span>
          </motion.div>
          
          {/* Activity Highlights */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-teal-800 mb-10"
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
                className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-teal-500"
              >
                <motion.div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(highlight.id)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="p-2 bg-teal-100 rounded-lg mr-4"
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
                      className="px-4 pb-4 pt-2 bg-teal-50 border-t border-gray-200"
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
            className="bg-white rounded-xl shadow-lg p-8 mb-16 border-t-4 border-teal-500"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-teal-800 mb-6"
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
                    whileHover={{ scale: 1.1, backgroundColor: "#5eead4" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-teal-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-teal-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Thermodynamic Principles</h4>
                    <p className="text-gray-600">Understanding enthalpy, entropy, heat transfer, and phase transitions through precise temperature control</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#5eead4" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-teal-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-teal-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Crystallography Concepts</h4>
                    <p className="text-gray-600">Exploring nucleation, crystal lattice structures, and factors affecting crystal growth and morphology</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#5eead4" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-teal-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-teal-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Solution Chemistry</h4>
                    <p className="text-gray-600">Mastering concepts of solubility, supersaturation, and concentration gradients</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#5eead4" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-teal-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-teal-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Molecular Interactions</h4>
                    <p className="text-gray-600">Analyzing intermolecular forces, hydrogen bonding, and their effects on physical properties</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#5eead4" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-teal-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-teal-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Laboratory Techniques</h4>
                    <p className="text-gray-600">Developing skills in precise measurement, controlled variable manipulation, and quantitative analysis</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#5eead4" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-teal-100 p-2 rounded-full"
                  >
                    <Check className="w-5 h-5 text-teal-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Chemical Reactions</h4>
                    <p className="text-gray-600">Understanding caramelization, the Maillard reaction, and reaction kinetics as applied to food chemistry</p>
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
            className="text-2xl font-bold text-center text-teal-800 mb-6"
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
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-400 flex flex-col"
              >
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                </div>
                <p className="text-teal-800 font-medium">{testimonial.parent}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-teal-700 text-white rounded-xl shadow-xl p-8 text-center"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-4"
            >
              Give your teen the chemistry advantage!
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Perfect for AP/IB Chemistry students and college-bound STEM enthusiasts. Limited spots available!
            </motion.p>
            <motion.button 
              onClick={toggleRegistrationInfo}
              whileHover="hover"
              whileTap="tap"
              variants={buttonHover}
              className="bg-white text-teal-700 hover:bg-teal-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors"
            >
              Reserve Your Spot Now
            </motion.button>
          </motion.div>
          
          {/* FAQ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-center text-teal-800 mb-8"
            >
              Frequently Asked Questions
            </motion.h3>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-4"
            >
              {[
                {
                  id: 'faq1',
                  question: 'What level of chemistry knowledge is required?',
                  answer: 'This workshop is designed for 11th-12th grade students who have completed or are currently enrolled in chemistry. While we recommend at least one semester of high school chemistry, our instructors provide appropriate scaffolding to ensure students at different levels can engage meaningfully with the content.'
                },
                {
                  id: 'faq2',
                  question: 'Is this workshop beneficial for AP/IB Chemistry students?',
                  answer: 'Absolutely! This workshop directly addresses several key concepts from both AP and IB Chemistry curricula, including thermodynamics, solutions, intermolecular forces, and reaction rates. Many students find our hands-on approach helps solidify their understanding of these challenging topics before exams.'
                },
                {
                  id: 'faq3',
                  question: 'Are there accommodations for dietary restrictions?',
                  answer: 'Yes! Please note any allergies or dietary restrictions during registration. We can provide vegan, gluten-free, and allergen-free alternatives. For safety reasons, students with severe allergies should bring their own gloves to avoid cross-contamination. All participants will receive detailed instructions on which candy products are safe for consumption based on their specific needs.'
                },
                {
                  id: 'faq4',
                  question: 'What materials will my student take home?',
                  answer: 'Students will take home their laboratory notebook with recorded data and analysis, samples of their successful candy creations, a digital thermometer for continued experimentation, comprehensive recipe cards with scientific annotations, and a certificate of completion that can be included in college applications as evidence of extracurricular STEM engagement.'
                },
                {
                  id: 'faq5',
                  question: 'How does this workshop benefit college applications?',
                  answer: 'This workshop demonstrates initiative and passion for chemistry beyond regular coursework. Students receive a certificate of completion that details the college-level concepts covered and laboratory skills developed. Additionally, the experience provides excellent material for college essays about hands-on learning and scientific curiosity. Many past participants have referenced this workshop in successful applications to competitive STEM programs.'
                }
              ].map((faq, index) => (
                <motion.div 
                  key={faq.id}
                  variants={fadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <motion.div 
                    className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleSection(faq.id)}
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
                    </div>
                    
                    <motion.div 
                      animate={{ rotate: expandedSection === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    </motion.div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {expandedSection === faq.id && (
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={slideDown}
                        className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200"
                      >
                        <p className="text-gray-700">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}