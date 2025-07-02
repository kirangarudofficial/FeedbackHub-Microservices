import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LearnAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link 
                to="/courses"
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
            </div>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Sign In</Link>
            <Link to="/signup" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/courses" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Courses</Link>
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Features</a>
              <Link to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">About</a>
              <div className="px-3 py-2 space-y-2">
                <Link to="/login" className="block w-full text-left text-gray-300 hover:text-white transition-colors">Sign In</Link>
                <Link to="/signup" className="block w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all text-center">
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}