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
  CalendarCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ScienceActivityParentPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showRegistrationInfo, setShowRegistrationInfo] = useState(false);
  
  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  const toggleRegistrationInfo = () => {
    setShowRegistrationInfo(!showRegistrationInfo);
  };

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

  const activityHighlights = [
    {
      id: 'handson',
      icon: <FlaskRound className="w-6 h-6 text-purple-600" />,
      title: 'Hands-On Baking Experiment',
      description: 'Students make their own dough and watch the science of yeast in action',
      details: 'Your child will prepare real bread dough using scientific principles, observing how yeast converts sugar into carbon dioxide to create those wonderful bubbles that make bread rise. This hands-on experience connects abstract scientific concepts to everyday cooking skills.'
    },
    {
      id: 'balloon',
      icon: <Star className="w-6 h-6 text-purple-600" />,
      title: 'Exciting Balloon Demonstration',
      description: 'Watch balloons inflate using only yeast, sugar and water!',
      details: 'The highlight of our session is our dramatic balloon demonstration where students will see yeast respiration inflate balloons right before their eyes! This visual demonstration perfectly illustrates gas production and pressure concepts in a memorable way that sticks with students long after the class ends.'
    },
    {
      id: 'skills',
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: 'Critical STEM Skills Development',
      description: 'Build data collection, analysis, and scientific reasoning abilities',
      details: 'Throughout the activity, students will collect real scientific data, create graphs, analyze results, and apply scientific principles including gas laws and cellular respiration. These are the exact skills needed to excel in high school science courses and beyond.'
    },
    {
      id: 'teamwork',
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: 'Collaborative Learning',
      description: 'Students work in small teams to conduct experiments and share discoveries',
      details: 'Working in small groups, your child will develop crucial teamwork and communication skills as they collaborate on experiments, share observations, and present their findings. Our instructors facilitate positive group dynamics to ensure every student contributes and feels valued.'
    },
    {
      id: 'connections',
      icon: <Medal className="w-6 h-6 text-purple-600" />,
      title: 'Real-World Applications',
      description: 'Discover how these scientific principles appear in daily life and careers',
      details: 'This isn\'t just about baking bread! Students will learn how the same processes of fermentation and gas production are used in numerous industries and scientific fields, from food production to biotechnology and renewable energy development.'
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-purple-700 text-white py-20 px-8"
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
                  className="bg-purple-900 text-purple-100 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block"
                >
                  Upcoming STEM Workshop
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl font-bold mb-4"
                >
                  Rise to the Occasion
                </motion.h1>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-2xl mb-6"
                >
                  A Delicious Journey into Science for Grades 9-10
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg mb-8"
                >
                  Give your teen the gift of discovery with our engaging, hands-on workshop that explores biology, chemistry, and physics through the science of bread-making!
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
                    className="bg-white text-purple-700 hover:bg-purple-100 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    Reserve a Spot
                  </motion.button>
                  <motion.a 
                    href="#activity-details"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHover}
                    className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg font-semibold transition-colors"
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
                <div className="aspect-w-16 aspect-h-9 bg-purple-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      src="/yeast.jpg" 
                      alt="Interactive bread science experiment" 
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
              className="bg-purple-100 py-8 px-4 border-b-2 border-purple-200"
            >
              <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-purple-800">Registration Details</h3>
                  <motion.button 
                    onClick={toggleRegistrationInfo}
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHover}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <ChevronUp className="w-6 h-6" />
                  </motion.button>
                </div>
                
                <motion.div 
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                >
                  <motion.div variants={fadeIn} className="flex items-start gap-3">
                    <CalendarCheck className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Upcoming Sessions</h4>
                      <p>Saturday, May 10th, 2025 - 10:00am to 11:30am</p>
                      <p>Saturday, May 24th, 2025 - 10:00am to 11:30am</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Class Size</h4>
                      <p>Limited to 16 students to ensure personalized attention</p>
                      <p className="text-purple-700 font-medium">Only 5 spots left for May 10th!</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Registration Fee</h4>
                      <p>$45 per student (all materials included)</p>
                      <p>10% sibling discount available</p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Duration</h4>
                      <p>90 minutes of engaging, hands-on learning</p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.button 
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonHover}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-5xl mx-auto p-8" id="activity-details">
          {/* Quick Info Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            <motion.span 
              whileHover="hover"
              variants={cardHover}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Clock className="w-4 h-4" /> 90 Minute Session
            </motion.span>
            <motion.span 
              whileHover="hover"
              variants={cardHover}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> Grades 9-10
            </motion.span>
            <motion.span 
              whileHover="hover"
              variants={cardHover}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <FlaskRound className="w-4 h-4" /> All Materials Provided
            </motion.span>
            <motion.span 
              whileHover="hover"
              variants={cardHover}
              className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Curriculum-Aligned
            </motion.span>
          </motion.div>
          
          {/* Activity Highlights */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-purple-800 mb-10"
          >
            What Your Child Will Experience
          </motion.h2>
          
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="space-y-4 mb-16"
          >
            {activityHighlights.map((highlight) => (
              <motion.div 
                key={highlight.id} 
                variants={fadeIn}
                whileHover="hover"
                className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-purple-500"
              >
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(highlight.id)}
                >
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    {highlight.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800">{highlight.title}</h4>
                    <p className="text-gray-600 mt-1">{highlight.description}</p>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === highlight.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedSection === highlight.id && (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={slideDown}
                      className="px-4 pb-4 pt-2 bg-purple-50 border-t border-gray-200"
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
            className="bg-white rounded-xl shadow-lg p-8 mb-16 border-t-4 border-purple-500"
          >
            <h3 className="text-2xl font-bold text-purple-800 mb-6">What Your Child Will Learn</h3>
            
            <motion.div 
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={fadeIn} className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Biology Concepts</h4>
                    <p className="text-gray-600">Understanding cellular respiration, fermentation, and how organisms produce energy</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Chemistry Knowledge</h4>
                    <p className="text-gray-600">Exploring chemical reactions, gas production, and the role of catalysts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Physics Principles</h4>
                    <p className="text-gray-600">Applying gas laws to understand pressure, volume, and temperature relationships</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Data Analysis Skills</h4>
                    <p className="text-gray-600">Collecting, graphing, and interpreting scientific data from experiments</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Scientific Method</h4>
                    <p className="text-gray-600">Forming hypotheses, conducting controlled experiments, and drawing conclusions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Practical Kitchen Science</h4>
                    <p className="text-gray-600">Understanding how scientific principles apply to cooking and food production</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Testimonials */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center text-purple-800 mb-6"
          >
            What Parents Are Saying
          </motion.h3>
          
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-400 flex flex-col"
              >
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                </div>
                <p className="text-purple-800 font-medium">{testimonial.parent}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-purple-700 text-white rounded-xl shadow-xl p-8 text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to ignite your child's passion for science?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Spaces fill quickly for our popular STEM workshops. Reserve your child's spot today!
            </p>
            <motion.button 
              onClick={toggleRegistrationInfo}
              whileHover="hover"
              whileTap="tap"
              variants={buttonHover}
              className="bg-white text-purple-700 hover:bg-purple-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors"
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
            <h3 className="text-2xl font-bold text-center text-purple-800 mb-8">Frequently Asked Questions</h3>
            
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