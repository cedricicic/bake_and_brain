'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

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
import { LucideProps } from 'lucide-react';

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

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Map of icon names to their components
const iconMap = {
  Clock: Clock,
  FlaskRound: FlaskRound,
  BookOpen: BookOpen,
  FileText: FileText,
  Lightbulb: Lightbulb,
  Users: Users,
  Star: Star,
  Medal: Medal,
  Brain: Brain,
  Check: Check,
  ChevronDown: ChevronDown,
  ChevronUp: ChevronUp,
  ExternalLink: ExternalLink,
  CalendarCheck: CalendarCheck,
  Thermometer: Thermometer,
  Sparkles: Sparkles,
  Beaker: Beaker,
};

// Type definitions
interface WorkshopData {
  colors: {
    bgGradientFrom: string;
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    secondaryDark: string;
    secondaryLight: string;
  };
  meta: {
    activityHighlightsTitle: string;
    learningOutcomesTitle: string;
    testimonialsTitle: string;
    faqTitle: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    imageSrc: string;
    imageAlt: string;
  };
  registration: {
    details: Array<{
      icon: keyof typeof iconMap;
      title: string;
      items: Array<{
        text: string;
        highlight?: boolean;
      }>;
    }>;
    buttonText: string;
  };
  infoBadges: Array<{
    icon: keyof typeof iconMap;
    text: string;
  }>;
  activityHighlights: Array<{
    id: string;
    icon: keyof typeof iconMap;
    title: string;
    description: string;
    details: string;
  }>;
  learningOutcomes: Array<Array<{
    title: string;
    description: string;
  }>>;
  testimonials: Array<{
    quote: string;
    parent: string;
  }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export default function WorkshopTemplate({ workshopData }: { workshopData: WorkshopData }) {
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
  
  // Destructure the workshop data
  const {
    colors,
    meta,
    hero,
    registration,
    infoBadges,
    activityHighlights,
    learningOutcomes,
    testimonials,
    cta,
    faqs
  } = workshopData;

  // Helper function to render icons dynamically
  const renderIcon = (iconName: keyof typeof iconMap, className: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-${colors.bgGradientFrom} to-white text-gray-800`}>
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`bg-${colors.primary} text-white py-20 px-8`}
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
                  className={`bg-${colors.primaryDark} text-${colors.primaryLight} px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block`}
                >
                  {hero.tagline}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl font-bold mb-4"
                >
                  {hero.title}
                </motion.h1>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-2xl mb-6"
                >
                  {hero.subtitle}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg mb-8"
                >
                  {hero.description}
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
                    className={`bg-white text-${colors.primary} hover:bg-${colors.primaryLight} px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg`}
                  >
                    {hero.primaryButtonText}
                  </motion.button>
                  <motion.a 
                    href="#activity-details"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHover}
                    className={`bg-${colors.secondary} hover:bg-${colors.secondaryLight} px-6 py-3 rounded-lg font-semibold transition-colors`}
                  >
                    {hero.secondaryButtonText}
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="md:w-1/2 rounded-lg overflow-hidden shadow-xl"
              >
                <div className={`aspect-w-16 aspect-h-9 bg-${colors.secondaryLight} flex items-center justify-center`}>
                  <div className="text-center p-8">
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      src={hero.imageSrc} 
                      alt={hero.imageAlt} 
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
              className={`bg-${colors.primaryLight} py-8 px-4 border-b-2 border-${colors.secondaryLight}`}
            >
              <motion.div 
                variants={fadeIn}
                className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-bold text-${colors.primaryDark}`}>Registration Details</h3>
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
                  {registration.details.map((detail, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      {renderIcon(detail.icon, `w-5 h-5 text-${colors.secondary} mt-1`)}
                      <div>
                        <h4 className="font-semibold">{detail.title}</h4>
                        {detail.items.map((item, idx) => (
                          <p key={idx} className={item.highlight ? `text-${colors.primary} font-medium` : ""}>{item.text}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.button 
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonHover}
                  className={`w-full bg-${colors.secondary} hover:bg-${colors.secondaryDark} text-white py-3 rounded-lg font-semibold transition-colors`}
                >
                  {registration.buttonText}
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
            {infoBadges.map((badge, index) => (
              <motion.span 
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`bg-${colors.primaryLight} text-${colors.primaryDark} px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}
              >
                {renderIcon(badge.icon, "w-4 h-4")} {badge.text}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Activity Highlights */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-3xl font-bold text-center text-${colors.primaryDark} mb-10`}
          >
            {meta.activityHighlightsTitle}
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
                className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-${colors.secondary}`}
              >
                <motion.div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(highlight.id)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`p-2 bg-${colors.primaryLight} rounded-lg mr-4`}
                  >
                    {renderIcon(highlight.icon, `w-6 h-6 text-${colors.secondary}`)}
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
                      className={`px-4 pb-4 pt-2 bg-${colors.primaryLight} border-t border-gray-200`}
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
            className={`bg-white rounded-xl shadow-lg p-8 mb-16 border-t-4 border-${colors.secondary}`}
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-2xl font-bold text-${colors.primaryDark} mb-6`}
            >
              {meta.learningOutcomesTitle}
            </motion.h3>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {learningOutcomes.map((column, colIndex) => (
                <div key={colIndex} className="space-y-4">
                  {column.map((outcome, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, backgroundColor: colors.secondaryLight }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={`bg-${colors.primaryLight} p-2 rounded-full`}
                      >
                        <Check className={`w-5 h-5 text-${colors.secondary}`} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{outcome.title}</h4>
                        <p className="text-gray-600">{outcome.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Testimonials */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-bold text-center text-${colors.primaryDark} mb-6`}
          >
            {meta.testimonialsTitle}
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
                className={`bg-white p-6 rounded-lg shadow-md border-t-4 border-${colors.secondary} flex flex-col`}
              >
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                </div>
                <p className={`text-${colors.primaryDark} font-medium`}>{testimonial.parent}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`bg-${colors.primary} text-white rounded-xl shadow-xl p-8 text-center`}
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-4"
            >
              {cta.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              {cta.description}
            </motion.p>
            <motion.button 
              onClick={toggleRegistrationInfo}
              whileHover="hover"
              whileTap="tap"
              variants={buttonHover}
              className={`bg-white text-${colors.primary} hover:bg-${colors.primaryLight} px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors`}
            >
              {cta.buttonText}
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
              className={`text-2xl font-bold text-center text-${colors.primaryDark} mb-8`}
            >
              {meta.faqTitle}
            </motion.h3>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
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