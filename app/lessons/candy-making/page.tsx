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
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CandyScienceParentPage() {
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
      quote: "My daughter came home from the Candy Science workshop absolutely buzzing with excitement about crystallization and thermodynamics. She's now considering food science as a potential college major, which wasn't even on her radar before!",
      parent: "Rebecca M., parent of 11th grader"
    },
    {
      quote: "The instructors perfectly balanced rigorous chemistry with engaging hands-on activities. My son actually texted me during the workshop to tell me how cool it was to see supersaturation in action. As a chemist myself, I was impressed by the college-level concepts they covered.",
      parent: "Dr. James T., parent of 12th grader"
    },
    {
      quote: "This workshop gave my daughter confidence she desperately needed before her AP Chemistry exam. Seeing abstract concepts like enthalpy and phase changes demonstrated through candy-making made everything 'click' for her in a way textbooks never could.",
      parent: "Sophia L., parent of 12th grader"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white text-gray-800">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        {/* Hero Section */}
        <div className="bg-teal-700 text-white py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="md:w-1/2">
                <span className="bg-teal-900 text-teal-100 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Advanced Chemistry Workshop
                </span>
                <h1 className="text-5xl font-bold mb-4">Sweet Chemistry</h1>
                <h2 className="text-2xl mb-6">Exploring Thermodynamics & Crystal Formation through Candy Science</h2>
                <p className="text-lg mb-8">
                  Give your high school student the competitive edge with our college-level workshop that transforms complex chemistry concepts into delicious experiments they'll never forget!
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={toggleRegistrationInfo}
                    className="bg-white text-teal-700 hover:bg-teal-100 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    Reserve a Spot
                  </button>
                  <a 
                    href="#activity-details" 
                    className="bg-teal-600 hover:bg-teal-500 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-teal-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <img 
                      src="/candy.jpg" 
                      alt="Students creating crystal candy formations" 
                      className="w-full max-w-md rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Info - Conditionally rendered */}
        {showRegistrationInfo && (
          <div className="bg-teal-100 py-8 px-4 border-b-2 border-teal-200">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-teal-800">Registration Details</h3>
                <button 
                  onClick={toggleRegistrationInfo}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <ChevronUp className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <CalendarCheck className="w-5 h-5 text-teal-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Upcoming Sessions</h4>
                    <p>Saturday, May 17th, 2025 - 1:00pm to 3:30pm</p>
                    <p>Saturday, June 7th, 2025 - 1:00pm to 3:30pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-teal-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Class Size</h4>
                    <p>Limited to 12 students to ensure laboratory safety and individualized guidance</p>
                    <p className="text-teal-700 font-medium">Only 3 spots left for May 17th!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-teal-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Registration Fee</h4>
                    <p>$65 per student (all materials and safety equipment included)</p>
                    <p>20% discount for AP Chemistry students (verification required)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Duration</h4>
                    <p>2.5 hours of college-level laboratory investigation and analysis</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Register Now
              </button>
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto p-8" id="activity-details">
          {/* Quick Info Badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" /> 2.5 Hour Workshop
            </span>
            <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Users className="w-4 h-4" /> Grades 11-12
            </span>
            <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <FlaskRound className="w-4 h-4" /> Lab Equipment Provided
            </span>
            <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> AP/IB Chemistry Aligned
            </span>
          </div>
          
          {/* Activity Highlights */}
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">What Your Student Will Experience</h2>
          
          <div className="space-y-4 mb-16">
            {activityHighlights.map((highlight) => (
              <div key={highlight.id} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-teal-500">
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(highlight.id)}
                >
                  <div className="p-2 bg-teal-100 rounded-lg mr-4">
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
                
                {expandedSection === highlight.id && (
                  <div className="px-4 pb-4 pt-2 bg-teal-50 border-t border-gray-200">
                    <p className="text-gray-700">{highlight.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Learning Outcomes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border-t-4 border-teal-500">
            <h3 className="text-2xl font-bold text-teal-800 mb-6">What Your Student Will Learn</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Thermodynamic Principles</h4>
                    <p className="text-gray-600">Understanding enthalpy, entropy, heat transfer, and phase transitions through precise temperature control</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Crystallography Concepts</h4>
                    <p className="text-gray-600">Exploring nucleation, crystal lattice structures, and factors affecting crystal growth and morphology</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Solution Chemistry</h4>
                    <p className="text-gray-600">Mastering concepts of solubility, supersaturation, and concentration gradients</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Molecular Interactions</h4>
                    <p className="text-gray-600">Analyzing intermolecular forces, hydrogen bonding, and their effects on physical properties</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Laboratory Techniques</h4>
                    <p className="text-gray-600">Developing skills in precise measurement, controlled variable manipulation, and quantitative analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Chemical Reactions</h4>
                    <p className="text-gray-600">Understanding caramelization, the Maillard reaction, and reaction kinetics as applied to food chemistry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <h3 className="text-2xl font-bold text-center text-teal-800 mb-6">What Parents Are Saying</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-400 flex flex-col">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                </div>
                <p className="text-teal-800 font-medium">{testimonial.parent}</p>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="bg-teal-700 text-white rounded-xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Give your teen the chemistry advantage!</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Perfect for AP/IB Chemistry students and college-bound STEM enthusiasts. Limited spots available!
            </p>
            <button 
              onClick={toggleRegistrationInfo}
              className="bg-white text-teal-700 hover:bg-teal-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors"
            >
              Reserve Your Spot Now
            </button>
          </div>
          
          {/* FAQ */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-teal-800 mb-8">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('faq1')}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">What level of chemistry knowledge is required?</h4>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === 'faq1' ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                {expandedSection === 'faq1' && (
                  <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">
                      This workshop is designed for 11th-12th grade students who have completed or are currently enrolled in chemistry. 
                      While we recommend at least one semester of high school chemistry, our instructors provide appropriate scaffolding 
                      to ensure students at different levels can engage meaningfully with the content.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('faq2')}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">Is this workshop beneficial for AP/IB Chemistry students?</h4>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === 'faq2' ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                {expandedSection === 'faq2' && (
                  <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">
                      Absolutely! This workshop directly addresses several key concepts from both AP and IB Chemistry curricula, 
                      including thermodynamics, solutions, intermolecular forces, and reaction rates. Many students find our 
                      hands-on approach helps solidify their understanding of these challenging topics before exams.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('faq3')}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">Are there accommodations for dietary restrictions?</h4>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === 'faq3' ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                {expandedSection === 'faq3' && (
                  <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">
                      Yes! Please note any allergies or dietary restrictions during registration. We can provide vegan, 
                      gluten-free, and allergen-free alternatives. For safety reasons, students with severe allergies should 
                      bring their own gloves to avoid cross-contamination. All participants will receive detailed instructions 
                      on which candy products are safe for consumption based on their specific needs.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('faq4')}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">What materials will my student take home?</h4>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === 'faq4' ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                {expandedSection === 'faq4' && (
                  <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">
                      Students will take home their laboratory notebook with recorded data and analysis, samples of their 
                      successful candy creations, a digital thermometer for continued experimentation, comprehensive recipe 
                      cards with scientific annotations, and a certificate of completion that can be included in college applications 
                      as evidence of extracurricular STEM engagement.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection('faq5')}
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">How does this workshop benefit college applications?</h4>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === 'faq5' ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
                
                {expandedSection === 'faq5' && (
                  <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">
                      This workshop demonstrates initiative and passion for chemistry beyond regular coursework. Students receive 
                      a certificate of completion that details the college-level concepts covered and laboratory skills developed. 
                      Additionally, the experience provides excellent material for college essays about hands-on learning and 
                      scientific curiosity. Many past participants have referenced this workshop in successful applications to 
                      competitive STEM programs.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}