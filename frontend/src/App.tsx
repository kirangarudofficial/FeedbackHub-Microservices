import React, { useState } from 'react';
import { Plus, BarChart3 } from 'lucide-react';
import { FeedbackForm } from './components/FeedbackForm';
import { FeedbackDashboard } from './components/FeedbackDashboard';
import { mockFeedback } from './data/mockFeedback';
import type { Feedback } from './types/feedback';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'form'>('dashboard');
  const [feedback, setFeedback] = useState<Feedback[]>(mockFeedback);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmitFeedback = (newFeedback: Omit<Feedback, 'id' | 'createdAt' | 'sentiment' | 'sentimentScore' | 'status'>) => {
    // Simulate sentiment analysis
    const getSentimentAnalysis = (content: string) => {
      const positiveWords = ['great', 'excellent', 'love', 'amazing', 'fantastic', 'good', 'helpful', 'wonderful'];
      const negativeWords = ['bug', 'issue', 'problem', 'error', 'crash', 'broken', 'terrible', 'bad', 'horrible'];
      
      const words = content.toLowerCase().split(' ');
      const positiveCount = words.filter(word => positiveWords.some(pw => word.includes(pw))).length;
      const negativeCount = words.filter(word => negativeWords.some(nw => word.includes(nw))).length;
      
      if (positiveCount > negativeCount) {
        return { sentiment: 'positive' as const, score: Math.min(85 + positiveCount * 5, 95) };
      } else if (negativeCount > positiveCount) {
        return { sentiment: 'negative' as const, score: Math.max(15 + negativeCount * 5, 35) };
      } else {
        return { sentiment: 'neutral' as const, score: 50 + Math.random() * 30 };
      }
    };

    const { sentiment, score } = getSentimentAnalysis(newFeedback.content);

    const completeFeedback: Feedback = {
      ...newFeedback,
      id: Date.now().toString(),
      createdAt: new Date(),
      sentiment,
      sentimentScore: Math.round(score),
      status: 'new'
    };

    setFeedback(prev => [completeFeedback, ...prev]);
    setShowSuccessMessage(true);
    setCurrentView('dashboard');
    
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">FeedbackHub</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === 'dashboard'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('form')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === 'form'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Plus className="w-4 h-4" />
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-green-800">Feedback submitted successfully!</h4>
                <p className="text-sm text-green-700">Thank you for your feedback. We'll review it shortly.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'dashboard' ? (
          <FeedbackDashboard feedback={feedback} />
        ) : (
          <FeedbackForm onSubmit={handleSubmitFeedback} />
        )}
      </main>
    </div>
  );
}

export default App;