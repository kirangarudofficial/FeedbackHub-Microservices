import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, Users, BookOpen, ChevronDown, X } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  duration: string;
  students: number;
  image: string;
  description: string;
  featured?: boolean;
  slug: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    instructor: "Sarah Johnson",
    category: "Technology & Programming",
    difficulty: "Intermediate",
    rating: 4.9,
    reviewCount: 2847,
    price: 89.99,
    originalPrice: 199.99,
    duration: "42 hours",
    students: 15420,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    description: "Master React from basics to advanced concepts with hands-on projects",
    featured: true,
    slug: "complete-react-development-bootcamp"
  },
  {
    id: 2,
    title: "AI & Machine Learning Fundamentals",
    instructor: "Dr. Michael Chen",
    category: "Data Science & AI",
    difficulty: "Beginner",
    rating: 4.8,
    reviewCount: 1923,
    price: 129.99,
    originalPrice: 249.99,
    duration: "38 hours",
    students: 8750,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    description: "Learn AI and ML concepts with practical Python implementations",
    slug: "ai-machine-learning-fundamentals"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    instructor: "Emma Rodriguez",
    category: "Marketing & Sales",
    difficulty: "Intermediate",
    rating: 4.7,
    reviewCount: 3156,
    price: 79.99,
    duration: "28 hours",
    students: 12340,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    description: "Complete guide to digital marketing strategies and tools",
    slug: "digital-marketing-mastery"
  },
  {
    id: 4,
    title: "UX/UI Design Principles",
    instructor: "Alex Thompson",
    category: "Design & Creative",
    difficulty: "Beginner",
    rating: 4.9,
    reviewCount: 2134,
    price: 99.99,
    originalPrice: 179.99,
    duration: "35 hours",
    students: 9876,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    description: "Design beautiful and user-friendly interfaces",
    slug: "ux-ui-design-principles"
  },
  {
    id: 5,
    title: "Cybersecurity Essentials",
    instructor: "James Wilson",
    category: "Cybersecurity",
    difficulty: "Intermediate",
    rating: 4.6,
    reviewCount: 1567,
    price: 149.99,
    duration: "45 hours",
    students: 6543,
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    description: "Protect systems and networks from cyber threats",
    slug: "cybersecurity-essentials"
  },
  {
    id: 6,
    title: "Business Strategy & Leadership",
    instructor: "Lisa Anderson",
    category: "Business & Management",
    difficulty: "Advanced",
    rating: 4.8,
    reviewCount: 987,
    price: 199.99,
    duration: "32 hours",
    students: 4321,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    description: "Develop strategic thinking and leadership skills",
    slug: "business-strategy-leadership"
  },
  {
    id: 7,
    title: "Python for Data Science",
    instructor: "David Kumar",
    category: "Data Science & AI",
    difficulty: "Beginner",
    rating: 4.7,
    reviewCount: 2456,
    price: 69.99,
    originalPrice: 149.99,
    duration: "40 hours",
    students: 18750,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    description: "Learn Python programming for data analysis and visualization",
    slug: "python-for-data-science"
  },
  {
    id: 8,
    title: "Mobile App Development with Flutter",
    instructor: "Maria Garcia",
    category: "Technology & Programming",
    difficulty: "Intermediate",
    rating: 4.5,
    reviewCount: 1234,
    price: 119.99,
    duration: "50 hours",
    students: 7890,
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    description: "Build cross-platform mobile apps with Flutter and Dart",
    slug: "mobile-app-development-flutter"
  }
];

const categories = [
  "All Categories",
  "Technology & Programming",
  "Data Science & AI",
  "Design & Creative",
  "Business & Management",
  "Marketing & Sales",
  "Cybersecurity"
];

const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Free", min: 0, max: 0 },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "Over $200", min: 200, max: Infinity }
];

const sortOptions = [
  { label: "Popularity", value: "popularity" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating" }
];

export default function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All Levels' || course.difficulty === selectedDifficulty;
      const matchesPrice = course.price >= selectedPriceRange.min && course.price <= selectedPriceRange.max;
      const matchesRating = course.rating >= minRating;

      return matchesSearch && matchesCategory && matchesDifficulty && matchesPrice && matchesRating;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.students - a.students;
        case 'newest':
          return b.id - a.id; // Assuming higher ID means newer
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedPriceRange, minRating, sortBy]);

  const featuredCourse = courses.find(course => course.featured);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSelectedDifficulty('All Levels');
    setSelectedPriceRange(priceRanges[0]);
    setMinRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Featured Course Banner */}
      {featuredCourse && (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured Course
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {featuredCourse.title}
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  {featuredCourse.description}
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{featuredCourse.rating}</span>
                    <span className="text-white/70">({featuredCourse.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-white/70">
                    <Users className="w-4 h-4" />
                    <span>{featuredCourse.students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-white">${featuredCourse.price}</span>
                  {featuredCourse.originalPrice && (
                    <span className="text-xl text-white/60 line-through">${featuredCourse.originalPrice}</span>
                  )}
                  <Link
                    to={`/course/${featuredCourse.slug}`}
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    View Course
                  </Link>
                </div>
              </div>
              <div className="lg:flex justify-end hidden">
                <img
                  src={featuredCourse.image}
                  alt={featuredCourse.title}
                  className="rounded-2xl shadow-2xl max-w-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Course Catalog</h1>
          <p className="text-xl text-gray-300">Discover your next learning adventure from our extensive course library</p>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-lg"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white hover:bg-white/10 transition-colors backdrop-blur-lg"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/5 border border-white/20 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-lg"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-purple-500 focus:ring-purple-500 bg-transparent border-gray-600"
                      />
                      <span className="text-gray-300 text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Difficulty</h4>
                <div className="space-y-2">
                  {difficulties.map(difficulty => (
                    <label key={difficulty} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="difficulty"
                        value={difficulty}
                        checked={selectedDifficulty === difficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                        className="text-purple-500 focus:ring-purple-500 bg-transparent border-gray-600"
                      />
                      <span className="text-gray-300 text-sm">{difficulty}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range.label} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange.label === range.label}
                        onChange={() => setSelectedPriceRange(range)}
                        className="text-purple-500 focus:ring-purple-500 bg-transparent border-gray-600"
                      />
                      <span className="text-gray-300 text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="text-white font-medium mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0, 0].map(rating => (
                    <label key={rating} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={minRating === rating}
                        onChange={(e) => setMinRating(Number(e.target.value))}
                        className="text-purple-500 focus:ring-purple-500 bg-transparent border-gray-600"
                      />
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-300 text-sm">
                          {rating === 0 ? 'All Ratings' : `${rating}+ stars`}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-300">
                Showing {filteredAndSortedCourses.length} of {courses.length} courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedCourses.map(course => (
                <Link
                  key={course.id}
                  to={`/course/${course.slug}`}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {course.originalPrice && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-400 text-sm font-medium">{course.category}</span>
                      <span className="text-gray-400 text-sm">{course.difficulty}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{course.rating}</span>
                        <span className="text-gray-400 text-sm">({course.reviewCount})</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">${course.price}</div>
                        {course.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">${course.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-gray-300 text-sm mb-4">
                      by {course.instructor}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform group-hover:scale-105">
                      View Course
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {filteredAndSortedCourses.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
                <p className="text-gray-400 mb-4">Try adjusting your search criteria or filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}