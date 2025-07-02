import React from 'react';
import { Search, Filter, Calendar, Tag } from 'lucide-react';
import type { FeedbackFilters } from '../types/feedback';

interface FilterPanelProps {
  filters: FeedbackFilters;
  onFiltersChange: (filters: FeedbackFilters) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFiltersChange
}) => {
  const updateFilter = (key: keyof FeedbackFilters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Search */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <Search className="w-4 h-4 inline mr-2" />
            Search
          </label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            placeholder="Search feedback..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Sentiment Filter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <Tag className="w-4 h-4 inline mr-2" />
            Sentiment
          </label>
          <select
            value={filters.sentiment}
            onChange={(e) => updateFilter('sentiment', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="all">All Sentiments</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => updateFilter('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="all">All Categories</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="improvement">Improvement</option>
            <option value="general">General</option>
          </select>
        </div>

        {/* Date Range Filter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 inline mr-2" />
            Date Range
          </label>
          <select
            value={filters.dateRange}
            onChange={(e) => updateFilter('dateRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>
    </div>
  );
};