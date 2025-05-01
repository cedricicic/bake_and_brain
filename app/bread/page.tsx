'use client';

import React, { useState } from 'react';
import { 
  Clock, 
  FlaskRound, 
  BookOpen, 
  FileText, 
  Lightbulb, 
  Download, 
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

export default function EnhancedBreadPage() {
  const [expandedSection, setExpandedSection] = useState(null);
  
  // Toggle section expansion
  const toggleSection = (sectionId: string | React.SetStateAction<null>) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId as null);
    }
  };
  
  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Rise to the Occasion – Exploring Yeast, Gas, and Growth</title>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #333; line-height: 1.6; }
              h1 { font-size: 28px; margin-bottom: 20px; color: #2c3e50; }
              h2 { font-size: 22px; margin-bottom: 15px; color: #3498db; }
              h3 { font-size: 18px; margin-bottom: 10px; color: #2980b9; }
              ul { margin-left: 20px; }
              li { margin-bottom: 8px; }
              .header { border-bottom: 2px solid #3498db; padding-bottom: 15px; margin-bottom: 25px; }
              .section { margin-bottom: 25px; }
              .tips { background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #3498db; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Rise to the Occasion – Exploring Yeast, Gas, and Growth</h1>
              <h2>Grade Level: 9–10 Science (Biology & Chemistry)</h2>
            </div>
            
            <div class="section">
              <h3>Learning Objectives</h3>
              <ul>
                <li>Understand the biological process of aerobic and anaerobic respiration in yeast</li>
                <li>Observe how CO₂ production causes dough to rise</li>
                <li>Apply gas law principles (volume, temperature, pressure)</li>
                <li>Interpret data from yeast activity to discuss exponential growth</li>
              </ul>
            </div>

            <div class="section">
              <h3>Activity Timeline</h3>
              <ul>
                <li><strong>Introduction (5 min):</strong> Ask: "What do you think makes bread rise?"</li>
                <li><strong>Baking Setup (15 min):</strong> Students prepare dough in small bowls with yeast, sugar, flour, water.</li>
                <li><strong>Downtime Experiment (30 min):</strong> While dough rises: run yeast-in-a-bottle demo (yeast, sugar, warm water in bottle with balloon on top). Ask students to record balloon inflation over time.</li>
                <li><strong>Guided STEM Discussion (15 min):</strong> Review yeast respiration (glucose → ethanol + CO₂), tie to balloon/dough</li>
                <li><strong>Worksheet (10–15 min):</strong> Students complete activity sheet on respiration, gas laws, and growth</li>
                <li><strong>Wrap-Up (5 min):</strong> Recap: where did the bubbles come from? What would affect rising speed?</li>
              </ul>
            </div>

            <div class="tips">
              <h3>Tips for Success</h3>
              <ul>
                <li>Ensure warm water (~38–40°C) to activate the yeast</li>
                <li>Use clear containers for better visual observation</li>
                <li>Optional: time-lapse the dough rising for fun before-and-after photos</li>
                <li>Encourage students to hypothesise and graph results from the balloon demo</li>
              </ul>
            </div>
            
            <div class="section">
              <h3>Science Concepts Covered</h3>
              <ul>
                <li><strong>Biology:</strong> Cellular respiration, fermentation, enzymes</li>
                <li><strong>Chemistry:</strong> Gas laws, chemical reactions</li>
                <li><strong>Mathematics:</strong> Exponential growth, data collection and analysis</li>
              </ul>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const activitySteps = [
    {
      id: 'intro',
      icon: <Clock className="w-6 h-6 text-gray-600" />,
      title: 'Introduction',
      time: '5 min',
      description: 'Ask: "What do you think makes bread rise?"',
      details: 'Start with a question to activate prior knowledge. Have students discuss in pairs before sharing with the class. Record predictions on the board to revisit at the end of the lesson.'
    },
    {
      id: 'setup',
      icon: <FlaskRound className="w-6 h-6 text-gray-600" />,
      title: 'Baking Setup',
      time: '15 min',
      description: 'Students prepare dough in small bowls with yeast, sugar, flour, water.',
      details: 'Provide each group with: 2 cups flour, 1 packet (7g) active dry yeast, 2 tbsp sugar, 1 tsp salt, and 1 cup warm water (38-40°C). Have students mix ingredients, cover with plastic wrap, and mark the initial height.'
    },
    {
      id: 'experiment',
      icon: <FlaskRound className="w-6 h-6 text-gray-600" />,
      title: 'Downtime Experiment',
      time: '30 min',
      description: 'While dough rises: run yeast-in-a-bottle demo (yeast, sugar, warm water in bottle with balloon on top). Ask students to record balloon inflation over time.',
      details: 'For the balloon demo: use a clear plastic bottle, add 1 tbsp yeast, 2 tbsp sugar, and fill 1/3 with warm water. Secure balloon over bottle opening. Have students measure balloon circumference every 5 minutes and plot on graph paper.'
    },
    {
      id: 'discussion',
      icon: <BookOpen className="w-6 h-6 text-gray-600" />,
      title: 'Guided STEM Discussion',
      time: '15 min',
      description: 'Review yeast respiration (glucose → ethanol + CO₂), tie to balloon/dough.',
      details: 'Explain that yeast performs cellular respiration: in anaerobic conditions, it converts glucose (sugar) to ethanol and carbon dioxide. The CO₂ is what inflates the balloon and causes bread to rise. Discuss real-world applications of fermentation beyond bread (beer, wine, biofuels).'
    },
    {
      id: 'worksheet',
      icon: <FileText className="w-6 h-6 text-gray-600" />,
      title: 'Worksheet',
      time: '10–15 min',
      description: 'Students complete activity sheet on respiration, gas laws, and growth.',
      details: 'The worksheet should include: diagram labeling of yeast cell respiration process, calculation questions involving gas laws (P₁V₁=P₂V₂), and data analysis questions using the balloon measurements to discuss exponential growth patterns.'
    },
    {
      id: 'wrapup',
      icon: <Lightbulb className="w-6 h-6 text-gray-600" />,
      title: 'Wrap-Up',
      time: '5 min',
      description: 'Recap: where did the bubbles come from? What would affect rising speed?',
      details: 'Return to initial predictions and compare with observations. Discuss factors affecting yeast activity: temperature, sugar availability, pH levels. Connect to real-world applications in cooking and biotechnology.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#e6e6e6] text-black">
      <div className="max-w-5xl mx-auto p-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-black">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">Rise to the Occasion</h1>
              <h2 className="text-2xl text-black">Exploring Yeast, Gas, and Growth</h2>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Lesson Plan
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="mb-4">
                <span className="inline-block bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Grade Level: 9–10 Science
                </span>
                <span className="inline-block bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium ml-2">
                  Duration: 80 minutes
                </span>
              </div>
              
              <div className="bg-gray-100 p-5 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-3">Learning Objectives</h3>
                <ul className="list-disc pl-6 space-y-2 text-black">
                  <li>Understand the biological process of aerobic and anaerobic respiration in yeast</li>
                  <li>Observe how CO₂ production causes dough to rise</li>
                  <li>Apply gas law principles (volume, temperature, pressure)</li>
                  <li>Interpret data from yeast activity to discuss exponential growth</li>
                </ul>
              </div>
            </div>
            
            <div className="flex-1 bg-gray-100 p-5 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-black mb-3">Materials Needed</h3>
              <ul className="list-disc pl-6 space-y-2 text-black">
                <li>Active dry yeast (one packet per group)</li>
                <li>All-purpose flour (2 cups per group)</li>
                <li>Sugar (2 tbsp per group + extra for balloon demo)</li>
                <li>Salt (1 tsp per group)</li>
                <li>Warm water (38-40°C)</li>
                <li>Clear plastic bottles (one per class/group)</li>
                <li>Balloons (one per bottle)</li>
                <li>Measuring tools (cups, spoons, rulers)</li>
                <li>Graph paper for data collection</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-black mb-4">Lesson Timeline</h3>
          <div className="space-y-4">
            {activitySteps.map((step) => (
              <div key={step.id} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-black">
                <div 
                  className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(step.id)}
                >
                  <div className="p-2 bg-gray-100 rounded-lg mr-4">
                    {step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-semibold text-black">{step.title}</h4>
                      <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-black mt-1">{step.description}</p>
                  </div>
                  
                  <div className="ml-4">
                    {expandedSection === step.id ? (
                      <ChevronUp className="w-5 h-5 text-black" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-black" />
                    )}
                  </div>
                </div>
                
                {expandedSection === step.id && (
                  <div className="px-4 pb-4 pt-2 bg-gray-100 border-t border-gray-200">
                    <p className="text-black">{step.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Tips and Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-black">
            <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Tips for Success
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-black">
              <li>Ensure water temperature is between 38–40°C to properly activate the yeast without killing it</li>
              <li>Use clear containers for better visual observation of the bubbles forming</li>
              <li>Optional: time-lapse the dough rising for fun before-and-after photos</li>
              <li>Encourage students to hypothesize and graph results from the balloon demo</li>
              <li>If time permits, compare results with different sugar amounts or temperatures</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-black">
            <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Additional Resources
            </h3>
            <ul className="space-y-3 text-black">
              <li className="flex items-start gap-2">
                <ExternalLink className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                <a href="#" className="text-black hover:underline">Understanding Yeast Fermentation (Video)</a>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                <a href="#" className="text-black hover:underline">Printable Student Worksheet</a>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                <a href="#" className="text-black hover:underline">Extension Activities for Advanced Students</a>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                <a href="#" className="text-black hover:underline">Science of Baking - Interactive Diagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}