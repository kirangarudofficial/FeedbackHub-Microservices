import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Tag, Star } from 'lucide-react';
import type { Feedback } from '../types/feedback';

interface FeedbackFormProps {
  onSubmit: (feedback: Omit<Feedback, 'id' | 'createdAt' | 'sentiment' | 'sentimentScore' | 'status'>) => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    name: '',
    email: '',
    role: '',
    category: 'general' as const,
    priority: 'medium' as const,
    tags: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const feedback = {
      title: formData.title,
      content: formData.content,
      userInfo: {
        name: formData.name,
        email: formData.email,
        role: formData.role || undefined
      },
      category: formData.category,
      priority: formData.priority,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    onSubmit(feedback);

    // Reset form
    setFormData({
      title: '',
      content: '',
      name: '',
      email: '',
      role: '',
      category: 'general',
      priority: 'medium',
      tags: ''
    });

    setIsSubmitting(false);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Submit Feedback</h2>
          <p className="text-gray-600">Help us improve by sharing your thoughts</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Feedback Title *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => updateField('title', e.target.value)}
            placeholder="Brief summary of your feedback"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* User Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <User className="w-4 h-4" />
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Mail className="w-4 h-4" />
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="your.email@company.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Role (Optional) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Role/Position (Optional)
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => updateField('role', e.target.value)}
            placeholder="e.g., Product Manager, Developer, Designer"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Category and Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Tag className="w-4 h-4" />
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => updateField('category', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="general">General Feedback</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="improvement">Improvement Suggestion</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Star className="w-4 h-4" />
              Priority
            </label>
            <select
              value={formData.priority}
              onChange={(e) => updateField('priority', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Detailed Feedback *
          </label>
          <textarea
            required
            value={formData.content}
            onChange={(e) => updateField('content', e.target.value)}
            placeholder="Please provide detailed feedback, including any steps to reproduce issues, expected behavior, or suggestions for improvement..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
          />
          <p className="text-sm text-gray-500">
            {formData.content.length}/1000 characters
          </p>
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Tags (Optional)
          </label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => updateField('tags', e.target.value)}
            placeholder="ui, performance, mobile (comma-separated)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          <p className="text-sm text-gray-500">
            Add relevant tags to help categorize your feedback
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Submit Feedback
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};