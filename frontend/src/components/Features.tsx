import React from 'react';
import { Brain, Users, Award, Zap, Target, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized learning paths that adapt to your pace, strengths, and goals using advanced AI algorithms."
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry leaders and certified professionals with real-world experience and proven expertise."
  },
  {
    icon: Award,
    title: "Verified Certificates",
    description: "Earn recognized certificates that boost your career prospects and validate your new skills."
  },
  {
    icon: Zap,
    title: "Interactive Learning",
    description: "Engage with hands-on projects, coding challenges, and real-world simulations for practical experience."
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set learning objectives, track progress, and receive insights to stay motivated and on track."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Content",
    description: "Access thousands of courses, tutorials, and resources across multiple domains and skill levels."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/50 to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">LearnAI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of education with cutting-edge technology and proven methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}