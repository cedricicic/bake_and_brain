'use client';

import { motion } from 'framer-motion';
import { 
  Clock, 
  FlaskRound, 
  BookOpen, 
  FileText, 
  Lightbulb, 
  ChevronRight,
  Users,
  Brain,
  GraduationCap
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { lessons } from '../data/lessons';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function LessonsPreview() {
  return (
    <div className="min-h-screen bg-[#e6e6e6] text-black">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Interactive Learning Through Baking
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Discover our collection of STEM-focused baking lessons that make learning fun and delicious
            </motion.p>
          </div>

          {/* Lesson Cards */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {lessons.map((lesson) => (
  <Link key={lesson.id} href={`/lessons/${lesson.id}`} className="block">
    <motion.div
      variants={item}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      <div className="h-48 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${lesson.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white">{lesson.title}</h3>
          <p className="text-white/90">{lesson.subtitle}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={`p-2 rounded-lg ${lesson.color} text-white`}>
            {lesson.icon}
          </span>
          <div className="flex gap-4">
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full ml-3">
              {lesson.duration}
            </span>
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
              Grade {lesson.grade}
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{lesson.description}</p>
        <div className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
          View Lesson Details
          <ChevronRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </motion.div>
  </Link>
))}
          </motion.div>

          {/* Features Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Efficient</h3>
              <p className="text-gray-600">Lessons designed to fit within standard class periods</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curriculum Aligned</h3>
              <p className="text-gray-600">Meets educational standards while being engaging</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-On Learning</h3>
              <p className="text-gray-600">Practical experiments that reinforce theoretical concepts</p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}