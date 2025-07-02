import React, { useState } from 'react';
import { 
  Brain, 
  User, 
  BookOpen, 
  Award, 
  TrendingUp, 
  Clock, 
  Play, 
  Star,
  Calendar,
  Target,
  Users,
  Settings,
  Bell,
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
  CheckCircle,
  BarChart3,
  PlusCircle
} from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  image: string;
  category: string;
  nextLesson: string;
  dueDate?: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    instructor: "Sarah Johnson",
    progress: 65,
    totalLessons: 42,
    completedLessons: 27,
    duration: "42 hours",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    category: "Technology",
    nextLesson: "React Hooks Deep Dive",
    dueDate: "2025-01-15"
  },
  {
    id: 2,
    title: "AI & Machine Learning Fundamentals",
    instructor: "Dr. Michael Chen",
    progress: 30,
    totalLessons: 35,
    completedLessons: 11,
    duration: "38 hours",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    category: "Data Science",
    nextLesson: "Introduction to Neural Networks"
  },
  {
    id: 3,
    title: "UX/UI Design Principles",
    instructor: "Alex Thompson",
    progress: 85,
    totalLessons: 28,
    completedLessons: 24,
    duration: "35 hours",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    category: "Design",
    nextLesson: "Advanced Prototyping"
  }
];

const mockAchievements: Achievement[] = [
  {
    id: 1,
    title: "First Course Completed",
    description: "Completed your first course",
    icon: "🎓",
    earned: true,
    earnedDate: "2024-12-01"
  },
  {
    id: 2,
    title: "Week Streak",
    description: "Learned for 7 days in a row",
    icon: "🔥",
    earned: true,
    earnedDate: "2024-12-10"
  },
  {
    id: 3,
    title: "Quick Learner",
    description: "Complete 5 lessons in one day",
    icon: "⚡",
    earned: false
  },
  {
    id: 4,
    title: "Certificate Collector",
    description: "Earn 3 certificates",
    icon: "🏆",
    earned: false
  }
];

const roles = [
  { id: 'learner', name: 'Learner', description: 'Student dashboard' },
  { id: 'instructor', name: 'Instructor', description: 'Teaching tools' },
  { id: 'admin', name: 'Admin', description: 'Platform management' },
  { id: 'developer', name: 'Developer', description: 'API & integrations' }
];

export default function Dashboard() {
  const [currentRole, setCurrentRole] = useState('learner');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const currentRoleData = roles.find(role => role.id === currentRole);

  const renderLearnerDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-white/90 mb-6">You're making great progress. Keep up the momentum!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8" />
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-white/80 text-sm">Active Courses</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8" />
                <div>
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-white/80 text-sm">Certificates</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-8 h-8" />
                <div>
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-white/80 text-sm">Day Streak</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Continue Learning */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Continue Learning</h2>
              <button className="text-purple-400 hover:text-purple-300 transition-colors">View All</button>
            </div>
            <div className="space-y-4">
              {mockCourses.map(course => (
                <div key={course.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-20 h-14 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-white font-semibold mb-1">{course.title}</h3>
                          <p className="text-gray-400 text-sm">by {course.instructor}</p>
                        </div>
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                          {course.category}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
                          <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-gray-300 text-sm">
                          Next: <span className="text-white">{course.nextLesson}</span>
                        </div>
                        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>Continue</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white">Completed "React Components" lesson</p>
                    <p className="text-gray-400 text-sm">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white">Earned "Week Streak" achievement</p>
                    <p className="text-gray-400 text-sm">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white">Started "AI & Machine Learning Fundamentals"</p>
                    <p className="text-gray-400 text-sm">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Learning Goals */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">This Week's Goals</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Complete 5 lessons</span>
                </div>
                <span className="text-green-400 font-semibold">3/5</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Study 10 hours</span>
                </div>
                <span className="text-yellow-400 font-semibold">7/10</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Earn 1 certificate</span>
                </div>
                <span className="text-gray-400 font-semibold">0/1</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              {mockAchievements.slice(0, 3).map(achievement => (
                <div key={achievement.id} className={`flex items-center space-x-3 p-3 rounded-lg ${achievement.earned ? 'bg-green-500/10' : 'bg-gray-500/10'}`}>
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <p className={`font-medium ${achievement.earned ? 'text-white' : 'text-gray-400'}`}>
                      {achievement.title}
                    </p>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm">
              View All Achievements
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <PlusCircle className="w-4 h-4" />
                <span>Browse Courses</span>
              </button>
              <button className="w-full border border-white/20 text-white py-3 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>View Progress</span>
              </button>
              <button className="w-full border border-white/20 text-white py-3 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Schedule Study</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRolePlaceholder = (role: string) => (
    <div className="text-center py-20">
      <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <Brain className="w-12 h-12 text-purple-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">
        {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
      </h2>
      <p className="text-gray-300 mb-8 max-w-md mx-auto">
        This dashboard view is coming soon. Switch back to Learner to see the full experience.
      </p>
      <button
        onClick={() => setCurrentRole('learner')}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
      >
        Switch to Learner View
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <header className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">LearnAI</span>
              </div>
              
              {/* Role Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                  className="flex items-center space-x-2 bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white hover:bg-white/10 transition-colors"
                >
                  <span className="font-medium">{currentRoleData?.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showRoleDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50">
                    <div className="p-2">
                      {roles.map(role => (
                        <button
                          key={role.id}
                          onClick={() => {
                            setCurrentRole(role.id);
                            setShowRoleDropdown(false);
                          }}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            currentRole === role.id 
                              ? 'bg-purple-500/20 text-purple-300' 
                              : 'text-gray-300 hover:bg-white/5'
                          }`}
                        >
                          <div className="font-medium">{role.name}</div>
                          <div className="text-sm text-gray-400">{role.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                />
              </div>
              
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentRole === 'learner' ? renderLearnerDashboard() : renderRolePlaceholder(currentRole)}
      </main>
    </div>
  );
}