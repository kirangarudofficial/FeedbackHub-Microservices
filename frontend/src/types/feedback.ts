export interface Feedback {
  id: string;
  title: string;
  content: string;
  userInfo: {
    name: string;
    email: string;
    role?: string;
  };
  category: 'bug' | 'feature' | 'improvement' | 'general';
  sentiment: 'positive' | 'neutral' | 'negative';
  sentimentScore: number; // 0-100
  priority: 'low' | 'medium' | 'high';
  status: 'new' | 'in-review' | 'resolved' | 'closed';
  createdAt: Date;
  tags: string[];
}

export interface FeedbackFilters {
  sentiment: 'all' | 'positive' | 'neutral' | 'negative';
  category: 'all' | 'bug' | 'feature' | 'improvement' | 'general';
  status: 'all' | 'new' | 'in-review' | 'resolved' | 'closed';
  dateRange: 'all' | 'today' | 'week' | 'month';
  search: string;
}