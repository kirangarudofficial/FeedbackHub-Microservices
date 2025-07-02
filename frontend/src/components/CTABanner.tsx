import React from 'react';
import { ArrowRight, Users, Award } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Join 10,000+ Learners —{' '}
            <span className="block">Get Started Free!</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Start your learning journey today with our free tier. Upgrade anytime to unlock premium features and accelerate your growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-2xl">
              <span>Start Free Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center space-x-2 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-lg">
              <span>View Pricing</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-6 h-6 text-white/80" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-white/70 text-sm">Active Students</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-6 h-6 text-white/80" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">5,000+</div>
                <div className="text-white/70 text-sm">Certificates Earned</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-white/70 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}