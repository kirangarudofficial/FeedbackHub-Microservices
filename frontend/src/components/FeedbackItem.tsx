import React from 'react';
import { Calendar, User, Mail, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';
import type { Feedback } from '../types/feedback';
import { SentimentBadge } from './SentimentBadge';

interface FeedbackItemProps {
  feedback: Feedback;
}

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'medium':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      default:
        return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return CheckCircle;
      case 'in-review':
        return Clock;
      case 'closed':
        return XCircle;
      default:
        return AlertCircle;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'text-green-600 bg-green-50';
      case 'in-review':
        return 'text-blue-600 bg-blue-50';
      case 'closed':
        return 'text-gray-600 bg-gray-50';
      default:
        return 'text-orange-600 bg-orange-50';
    }
  };

  const getCategoryIcon = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const StatusIcon = getStatusIcon(feedback.status);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {feedback.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{feedback.userInfo.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>{feedback.userInfo.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{feedback.createdAt.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SentimentBadge
            sentiment={feedback.sentiment}
            score={feedback.sentimentScore}
            size="sm"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">{feedback.content}</p>
      </div>

      {/* Tags */}
      {feedback.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {feedback.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className={`
              px-3 py-1 text-xs font-medium rounded-full border
              ${getPriorityColor(feedback.priority)}
            `}
          >
            {feedback.priority.toUpperCase()} PRIORITY
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
            {getCategoryIcon(feedback.category)}
          </span>
        </div>
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(feedback.status)}`}>
          <StatusIcon className="w-3 h-3" />
          <span>{feedback.status.replace('-', ' ').toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};