import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  Users, 
  Award, 
  PlayCircle, 
  ChevronDown, 
  ChevronUp,
  BookOpen,
  CheckCircle,
  Globe,
  Download,
  Smartphone,
  Trophy,
  MessageCircle,
  ThumbsUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Mock course data - in a real app, this would come from an API
const courseData = {
  id: 1,
  title: "Complete React Development Bootcamp",
  subtitle: "Master React from basics to advanced concepts with hands-on projects and real-world applications",
  instructor: {
    name: "Sarah Johnson",
    title: "Senior Software Engineer at Google",
    avatar: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    bio: "Sarah is a senior software engineer with 8+ years of experience building scalable web applications. She has worked at top tech companies and has taught over 50,000 students worldwide.",
    courses: 12,
    students: 45000,
    rating: 4.9
  },
  category: "Technology & Programming",
  difficulty: "Intermediate",
  rating: 4.9,
  reviewCount: 2847,
  price: 89.99,
  originalPrice: 199.99,
  duration: "42 hours",
  students: 15420,
  language: "English",
  lastUpdated: "December 2024",
  certificate: true,
  lifetime: true,
  mobile: true,
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
  description: "This comprehensive React bootcamp will take you from a complete beginner to an advanced React developer. You'll learn modern React concepts, hooks, state management, and build real-world projects that you can add to your portfolio.",
  whatYouLearn: [
    "Build modern React applications from scratch",
    "Master React Hooks and functional components",
    "Implement state management with Redux and Context API",
    "Create responsive and interactive user interfaces",
    "Work with APIs and handle asynchronous operations",
    "Deploy React applications to production",
    "Write clean, maintainable, and scalable code",
    "Build a complete e-commerce application"
  ],
  requirements: [
    "Basic knowledge of HTML, CSS, and JavaScript",
    "Familiarity with ES6+ JavaScript features",
    "A computer with internet connection",
    "Willingness to learn and practice coding"
  ],
  curriculum: [
    {
      title: "Getting Started with React",
      lectures: 8,
      duration: "2h 30m",
      lessons: [
        { title: "Introduction to React", duration: "15:30", preview: true },
        { title: "Setting up Development Environment", duration: "20:45", preview: false },
        { title: "Your First React Component", duration: "18:20", preview: true },
        { title: "JSX Fundamentals", duration: "25:15", preview: false },
        { title: "Props and Component Communication", duration: "22:30", preview: false },
        { title: "Handling Events", duration: "19:45", preview: false },
        { title: "Conditional Rendering", duration: "16:20", preview: false },
        { title: "Lists and Keys", duration: "21:35", preview: false }
      ]
    },
    {
      title: "React Hooks Deep Dive",
      lectures: 12,
      duration: "4h 15m",
      lessons: [
        { title: "Introduction to Hooks", duration: "18:30", preview: false },
        { title: "useState Hook", duration: "25:45", preview: false },
        { title: "useEffect Hook", duration: "32:20", preview: false },
        { title: "useContext Hook", duration: "28:15", preview: false },
        { title: "useReducer Hook", duration: "35:30", preview: false },
        { title: "Custom Hooks", duration: "29:45", preview: false },
        { title: "useMemo and useCallback", duration: "26:20", preview: false },
        { title: "useRef Hook", duration: "19:35", preview: false },
        { title: "Advanced Hook Patterns", duration: "31:45", preview: false },
        { title: "Hook Best Practices", duration: "22:30", preview: false },
        { title: "Testing Hooks", duration: "24:15", preview: false },
        { title: "Hook Performance Optimization", duration: "27:40", preview: false }
      ]
    },
    {
      title: "State Management",
      lectures: 10,
      duration: "3h 45m",
      lessons: [
        { title: "State Management Overview", duration: "16:30", preview: false },
        { title: "Context API Deep Dive", duration: "28:45", preview: false },
        { title: "Introduction to Redux", duration: "24:20", preview: false },
        { title: "Redux Toolkit", duration: "32:15", preview: false },
        { title: "Async Actions with Redux Thunk", duration: "29:30", preview: false },
        { title: "Redux DevTools", duration: "18:45", preview: false },
        { title: "Zustand State Management", duration: "25:20", preview: false },
        { title: "State Management Best Practices", duration: "21:35", preview: false },
        { title: "Performance Optimization", duration: "26:45", preview: false },
        { title: "Testing State Management", duration: "22:30", preview: false }
      ]
    },
    {
      title: "Building Real-World Projects",
      lectures: 15,
      duration: "6h 20m",
      lessons: [
        { title: "Project Setup and Planning", duration: "22:30", preview: false },
        { title: "Building a Todo Application", duration: "35:45", preview: false },
        { title: "Weather App with API Integration", duration: "42:20", preview: false },
        { title: "E-commerce Product Catalog", duration: "38:15", preview: false },
        { title: "Shopping Cart Implementation", duration: "33:30", preview: false },
        { title: "User Authentication", duration: "29:45", preview: false },
        { title: "Payment Integration", duration: "31:20", preview: false },
        { title: "Admin Dashboard", duration: "36:35", preview: false },
        { title: "Real-time Chat Application", duration: "44:45", preview: false },
        { title: "Testing Strategies", duration: "25:30", preview: false },
        { title: "Performance Optimization", duration: "28:15", preview: false },
        { title: "SEO and Accessibility", duration: "24:40", preview: false },
        { title: "Deployment to Vercel", duration: "19:30", preview: false },
        { title: "CI/CD Pipeline Setup", duration: "26:15", preview: false },
        { title: "Final Project Review", duration: "22:45", preview: false }
      ]
    }
  ]
};

const reviews = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    rating: 5,
    date: "2 weeks ago",
    comment: "Absolutely fantastic course! Sarah explains complex concepts in a very clear and understandable way. The projects are practical and really help solidify the learning.",
    helpful: 24
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    rating: 5,
    date: "1 month ago",
    comment: "This course helped me land my first React developer job! The curriculum is comprehensive and up-to-date with the latest React features.",
    helpful: 18
  },
  {
    id: 3,
    name: "David Kim",
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    rating: 4,
    date: "3 weeks ago",
    comment: "Great course with lots of hands-on practice. The instructor is knowledgeable and the content is well-structured. Highly recommended!",
    helpful: 12
  }
];

const relatedCourses = [
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    instructor: "John Doe",
    rating: 4.8,
    price: 79.99,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    instructor: "Jane Smith",
    rating: 4.7,
    price: 99.99,
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    instructor: "Mike Johnson",
    rating: 4.9,
    price: 149.99,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  }
];

export default function CourseDetail() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-purple-400 font-medium">{courseData.category}</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-400">{courseData.difficulty}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {courseData.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {courseData.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">{courseData.rating}</span>
                <span className="text-gray-400">({courseData.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Users className="w-4 h-4" />
                <span>{courseData.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{courseData.duration}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Globe className="w-4 h-4" />
                <span>{courseData.language}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={courseData.instructor.avatar}
                alt={courseData.instructor.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="text-white font-medium">{courseData.instructor.name}</div>
                <div className="text-gray-400 text-sm">{courseData.instructor.title}</div>
              </div>
            </div>
          </div>

          {/* Enrollment Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sticky top-24">
              {/* Video Preview */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={courseData.image}
                  alt={courseData.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-lg rounded-full p-4 hover:bg-white/30 transition-colors">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </button>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl font-bold text-white">${courseData.price}</span>
                  {courseData.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">${courseData.originalPrice}</span>
                  )}
                  {courseData.originalPrice && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {Math.round((1 - courseData.price / courseData.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">30-day money-back guarantee</p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 mb-4">
                Enroll Now
              </button>

              <button className="w-full border border-white/20 text-white py-3 rounded-xl font-medium hover:bg-white/5 transition-colors mb-6">
                Add to Wishlist
              </button>

              {/* Course Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>{courseData.duration} on-demand video</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Download className="w-5 h-5 text-purple-400" />
                  <span>Downloadable resources</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Smartphone className="w-5 h-5 text-purple-400" />
                  <span>Access on mobile and TV</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Trophy className="w-5 h-5 text-purple-400" />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>Full lifetime access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-700 mb-8">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* What You'll Learn */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">What you'll learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courseData.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Description */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Course Description</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed">
                      {courseData.description}
                    </p>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
                  <ul className="space-y-2">
                    {courseData.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {courseData.curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{section.title}</h3>
                          <p className="text-gray-400 text-sm">{section.lectures} lectures • {section.duration}</p>
                        </div>
                        {expandedSections.includes(sectionIndex) ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      
                      {expandedSections.includes(sectionIndex) && (
                        <div className="border-t border-white/10">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="p-4 border-b border-white/5 last:border-b-0 flex items-center justify-between hover:bg-white/5 transition-colors">
                              <div className="flex items-center space-x-3">
                                <PlayCircle className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300">{lesson.title}</span>
                                {lesson.preview && (
                                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Preview</span>
                                )}
                              </div>
                              <span className="text-gray-400 text-sm">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">About the Instructor</h2>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <img
                      src={courseData.instructor.avatar}
                      alt={courseData.instructor.name}
                      className="w-24 h-24 rounded-full"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{courseData.instructor.name}</h3>
                      <p className="text-purple-400 mb-4">{courseData.instructor.title}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{courseData.instructor.rating}</div>
                          <div className="text-gray-400 text-sm">Instructor Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{courseData.instructor.courses}</div>
                          <div className="text-gray-400 text-sm">Courses</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{courseData.instructor.students.toLocaleString()}</div>
                          <div className="text-gray-400 text-sm">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white font-bold">{courseData.instructor.rating}</span>
                          </div>
                          <div className="text-gray-400 text-sm">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{courseData.instructor.bio}</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Student Reviews</h2>
                
                {/* Review Summary */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-2">{courseData.rating}</div>
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-gray-400">{courseData.reviewCount} reviews</div>
                    </div>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="flex items-center space-x-3">
                          <span className="text-gray-300 w-8">{rating}★</span>
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full" 
                              style={{ width: `${rating === 5 ? 75 : rating === 4 ? 20 : 5}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-400 text-sm w-8">{rating === 5 ? '75%' : rating === 4 ? '20%' : '5%'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <img
                        src={reviews[currentReviewIndex].avatar}
                        alt={reviews[currentReviewIndex].name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-semibold">{reviews[currentReviewIndex].name}</h4>
                          <span className="text-gray-400 text-sm">{reviews[currentReviewIndex].date}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-3">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= reviews[currentReviewIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">{reviews[currentReviewIndex].comment}</p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-sm">Helpful ({reviews[currentReviewIndex].helpful})</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm">Reply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Navigation */}
                  <button
                    onClick={prevReview}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Review Dots */}
                  <div className="flex items-center justify-center space-x-2 mt-6">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReviewIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentReviewIndex ? 'bg-purple-500' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Related Courses Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Related Courses</h3>
              <div className="space-y-4">
                {relatedCourses.map(course => (
                  <div key={course.id} className="group cursor-pointer">
                    <div className="flex space-x-3">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-20 h-14 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm mb-1 group-hover:text-purple-300 transition-colors line-clamp-2">
                          {course.title}
                        </h4>
                        <p className="text-gray-400 text-xs mb-2">{course.instructor}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-gray-300 text-xs">{course.rating}</span>
                          </div>
                          <span className="text-white font-semibold text-sm">${course.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}