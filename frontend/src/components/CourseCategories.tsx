import React from 'react';
import { Code, Briefcase, Palette, TrendingUp, Shield, Database } from 'lucide-react';

const categories = [
  {
    icon: Code,
    title: "Technology & Programming",
    description: "Master coding languages, frameworks, and development tools",
    courses: 150,
    students: 25000,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "Business & Management",
    description: "Develop leadership skills and business acumen",
    courses: 89,
    students: 18500,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Palette,
    title: "Design & Creative",
    description: "Unleash your creativity with design and multimedia",
    courses: 76,
    students: 12300,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: TrendingUp,
    title: "Marketing & Sales",
    description: "Learn digital marketing and growth strategies",
    courses: 64,
    students: 15800,
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect digital assets and learn security protocols",
    courses: 45,
    students: 8900,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Database,
    title: "Data Science & AI",
    description: "Analyze data and build intelligent systems",
    courses: 67,
    students: 21200,
    gradient: "from-teal-500 to-blue-500"
  }
];

export default function CourseCategories() {
  return (
    <section className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-800/50 to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Course Categories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover your passion and build expertise across diverse fields with our comprehensive course catalog
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-400">
                  <span className="text-white font-medium">{category.courses}</span> courses
                </div>
                <div className="text-gray-400">
                  <span className="text-white font-medium">{category.students.toLocaleString()}</span> students
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors flex items-center group">
                  Explore Courses
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}