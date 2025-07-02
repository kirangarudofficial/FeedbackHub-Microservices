import React, { useState, useMemo } from 'react';
import { BarChart3, TrendingUp, MessageSquare, Users, Search } from 'lucide-react';
import type { Feedback, FeedbackFilters } from '../types/feedback';
import { FilterPanel } from './FilterPanel';
import { FeedbackItem } from './FeedbackItem';

interface FeedbackDashboardProps {
  feedback: Feedback[];
}

export const FeedbackDashboard: React.FC<FeedbackDashboardProps> = ({ feedback }) => {
  const [filters, setFilters] = useState<FeedbackFilters>({
    sentiment: 'all',
    category: 'all',
    status: 'all',
    dateRange: 'all',
    search: ''
  });

  const filteredFeedback = useMemo(() => {
    return feedback.filter((item) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          item.title.toLowerCase().includes(searchLower) ||
          item.content.toLowerCase().includes(searchLower) ||
          item.userInfo.name.toLowerCase().includes(searchLower) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Sentiment filter
      if (filters.sentiment !== 'all' && item.sentiment !== filters.sentiment) {
        return false;
      }

      // Category filter
      if (filters.category !== 'all' && item.category !== filters.category) {
        return false;
      }

      // Status filter
      if (filters.status !== 'all' && item.status !== filters.status) {
        return false;
      }

      // Date range filter
      if (filters.dateRange !== 'all') {
        const now = new Date();
        const itemDate = item.createdAt;
        
        switch (filters.dateRange) {
          case 'today':
            if (itemDate.toDateString() !== now.toDateString()) return false;
            break;
          case 'week':
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            if (itemDate < weekAgo) return false;
            break;
          case 'month':
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            if (itemDate < monthAgo) return false;
            break;
        }
      }

      return true;
    });
  }, [feedback, filters]);

  const stats = useMemo(() => {
    const total = filteredFeedback.length;
    const positive = filteredFeedback.filter(f => f.sentiment === 'positive').length;
    const negative = filteredFeedback.filter(f => f.sentiment === 'negative').length;
    const avgSentiment = total > 0 
      ? filteredFeedback.reduce((sum, f) => sum + f.sentimentScore, 0) / total 
      : 0;

    return { total, positive, negative, avgSentiment };
  }, [filteredFeedback]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Feedback Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor and analyze user feedback</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Feedback</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Positive</p>
              <p className="text-2xl font-bold text-green-600">{stats.positive}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Needs Attention</p>
              <p className="text-2xl font-bold text-red-600">{stats.negative}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Sentiment</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(stats.avgSentiment)}%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <FilterPanel filters={filters} onFiltersChange={setFilters} />

      {/* Results */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Feedback Results ({filteredFeedback.length})
        </h2>
        {filters.search && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Search className="w-4 h-4" />
            <span>Searching for "{filters.search}"</span>
          </div>
        )}
      </div>

      {/* Feedback List */}
      <div className="space-y-6">
        {filteredFeedback.length > 0 ? (
          filteredFeedback.map((item) => (
            <FeedbackItem key={item.id} feedback={item} />
          ))
        ) : (
          <div className="text-center py-12">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No feedback found</h3>
            <p className="text-gray-600">
              {filters.search || filters.sentiment !== 'all' || filters.category !== 'all'
                ? 'Try adjusting your filters to see more results.'
                : 'No feedback has been submitted yet.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};