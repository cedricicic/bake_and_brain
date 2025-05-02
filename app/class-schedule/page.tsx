'use client';

import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Users, 
  Tag, 
  ChevronRight, 
  X, 
  GraduationCap, 
  BookOpen, 
  Star, 
  Calendar as CalendarIcon 
} from 'lucide-react';

interface Class {
  id: number;
  title: string;
  date: Date;
  description: string;
  capacity: number;
  spotsLeft: number;
  category: string;
  price: string;
}

export default function ClassSchedule() {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [filteredClasses, setFilteredClasses] = useState<Class[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const classes: Class[] = [
    {
      id: 1,
      title: "Rise to the Occasion",
      date: new Date(2024, 2, 10, 10, 0), // March 10, 2024 - 10:00 AM
      description: "A hands-on science experiment that combines baking with biology, teaching students about yeast fermentation and gas laws.",
      capacity: 12,
      spotsLeft: 7,
      category: "STEM",
      price: "$50"
    },
    {
      id: 2,
      title: "Sweet Chemistry",
      date: new Date(2024, 2, 12, 14, 0), // March 12, 2024 - 2:00 PM
      description: "Discover the world of crystallization by watching sugar molecules organize into intricate geometric structures.",
      capacity: 10,
      spotsLeft: 4,
      category: "STEM",
      price: "$55"
    },
    {
      id: 3,
      title: "Measurement Matters",
      date: new Date(2024, 2, 14, 11, 0), // March 14, 2024 - 11:00 AM
      description: "Learn about fractions, ratios, and conversions through practical baking measurements.",
      capacity: 8,
      spotsLeft: 6,
      category: "Math",
      price: "$40"
    },
    {
      id: 4,
      title: "Team Baking Challenge",
      date: new Date(2024, 2, 16, 13, 0), // March 16, 2024 - 1:00 PM
      description: "Mastering Circle Geometry, Surface Area & Volume Through Pizza Making, learn to calculate the optimal size for different serving needs",
      capacity: 10,
      spotsLeft: 3,
      category: "Math",
      price: "$50"
    }
  ];

  useEffect(() => {
    // Filter classes based on selected date
    const filtered = classes.filter(cls => {
      return cls.date.toDateString() === date.toDateString();
    });
    setFilteredClasses(filtered);
  }, [date]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'STEM':
        return <BookOpen size={16} className="mr-1" />;
      case 'Math':
        return <GraduationCap size={16} className="mr-1" />;
      default:
        return <Tag size={16} className="mr-1" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'STEM':
        return "bg-indigo-100 text-indigo-800";
      case 'Math':
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold text-gray-900"
            >
              Class Schedule
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-2 text-lg text-gray-600"
            >
              View and book our upcoming baking and STEM classes
            </motion.p>
          </div>
          
          <AnimatePresence mode="wait">
            {selectedClass ? (
              <motion.div 
                key="class-detail"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(selectedClass.category)}`}>
                        {getCategoryIcon(selectedClass.category)}
                        {selectedClass.category}
                      </span>
                      <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="mt-2 text-2xl font-bold text-gray-900"
                      >
                        {selectedClass.title}
                      </motion.h2>
                      <div className="mt-1 flex items-center text-gray-500">
                        <Clock size={16} className="mr-1" />
                        <span>{formatDate(selectedClass.date)} at {formatTime(selectedClass.date)}</span>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedClass(null)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close</span>
                      <X size={24} />
                    </motion.button>
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-4 text-gray-600"
                  >
                    {selectedClass.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-6 border-t border-gray-200 pt-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users size={18} className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">{selectedClass.spotsLeft} spots left</span>
                      </div>
                      <div className="text-lg font-medium text-gray-900">{selectedClass.price}</div>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 w-full bg-blue-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out"
                    >
                      Book Class
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="class-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-1">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <CalendarIcon size={18} className="text-blue-500 mr-2" />
                      <h2 className="text-xl font-bold text-gray-900">Calendar</h2>
                    </div>
                    <Calendar
                      onChange={(value) => {
                        if (value instanceof Date) {
                          setDate(value);
                        }
                      }}
                      value={date}
                      className="w-full border-none text-black"
                      tileClassName={({ date: tileDate }) => {
                        // Highlight dates with classes
                        const hasClass = classes.some(cls => cls.date.toDateString() === tileDate.toDateString());
                        return hasClass ? 'bg-blue-100 text-blue-800 rounded-full' : null;
                      }}
                    />
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-500">{filteredClasses.length} classes on {formatDate(date)}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-md mt-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Tag size={18} className="text-blue-500 mr-2" />
                        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="text-blue-500 text-sm"
                      >
                        {isFilterOpen ? 'Hide' : 'Show'} filters
                      </motion.button>
                    </div>
                    
                    <AnimatePresence>
                      {isFilterOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 overflow-hidden"
                        >
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <div className="mt-2 space-y-2">
                              <div className="flex items-center">
                                <input id="stem" name="category" type="checkbox" className="h-4 w-4 text-blue-500 focus:ring-blue-500" />
                                <label htmlFor="stem" className="ml-2 text-sm text-gray-700">STEM</label>
                              </div>
                              <div className="flex items-center">
                                <input id="math" name="category" type="checkbox" className="h-4 w-4 text-blue-500 focus:ring-blue-500" />
                                <label htmlFor="math" className="ml-2 text-sm text-gray-700">Math</label>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Availability</label>
                            <div className="mt-2 space-y-2">
                              <div className="flex items-center">
                                <input id="available" name="availability" type="checkbox" className="h-4 w-4 text-blue-500 focus:ring-blue-500" />
                                <label htmlFor="available" className="ml-2 text-sm text-gray-700">Spots available</label>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <div className="lg:col-span-2">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <BookOpen size={18} className="text-gray-500 mr-2" />
                        <h2 className="text-xl font-bold text-gray-900">Available Classes</h2>
                      </div>
                      <div className="text-sm text-gray-500">
                        Showing {classes.length} classes
                      </div>
                    </div>
                    
                    <motion.div 
                      className="space-y-4"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                      initial="hidden"
                      animate="show"
                    >
                      {classes.map((cls) => (
                        <motion.div 
                          key={cls.id}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 }
                          }}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                          }}
                          className="border border-gray-100 rounded-lg p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer"
                          onClick={() => setSelectedClass(cls)}
                        >
                          <div className="flex justify-between">
                            <div>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(cls.category)}`}>
                                {getCategoryIcon(cls.category)}
                                {cls.category}
                              </span>
                              <h3 className="mt-1 font-medium text-gray-900">{cls.title}</h3>
                              <p className="text-sm text-gray-500 mt-1 flex items-center">
                                <Clock size={14} className="mr-1" />
                                {formatDate(cls.date)} at {formatTime(cls.date)}
                              </p>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                              <div className="text-lg font-medium text-blue-500">{cls.price}</div>
                              <div className="flex items-center text-xs text-gray-500 mt-auto">
                                <Users size={14} className="mr-1" />
                                {cls.spotsLeft} spots left
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <p className="text-sm text-gray-600 line-clamp-2">{cls.description}</p>
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight size={16} className="text-blue-500" />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}