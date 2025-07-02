import { Feedback } from '../types/feedback';

export const mockFeedback: Feedback[] = [
  {
    id: '1',
    title: 'Love the new dashboard design!',
    content: 'The new dashboard is incredibly intuitive and visually appealing. The color scheme and layout make it so much easier to navigate. Great job on the user experience improvements!',
    userInfo: {
      name: 'Sarah Chen',
      email: 'sarah.chen@company.com',
      role: 'Product Manager'
    },
    category: 'general',
    sentiment: 'positive',
    sentimentScore: 92,
    priority: 'low',
    status: 'new',
    createdAt: new Date('2025-01-20T10:30:00'),
    tags: ['ui', 'dashboard', 'design']
  },
  {
    id: '2',
    title: 'Search functionality needs improvement',
    content: 'The search feature is quite slow when dealing with large datasets. It would be great if we could have more advanced filtering options and perhaps some autocomplete functionality.',
    userInfo: {
      name: 'Michael Rodriguez',
      email: 'michael.r@company.com',
      role: 'Developer'
    },
    category: 'improvement',
    sentiment: 'neutral',
    sentimentScore: 65,
    priority: 'medium',
    status: 'in-review',
    createdAt: new Date('2025-01-19T14:15:00'),
    tags: ['search', 'performance', 'filtering']
  },
  {
    id: '3',
    title: 'Critical bug in payment processing',
    content: 'There\'s a serious issue with the payment gateway integration. Transactions are failing intermittently, and users are getting charged multiple times. This needs immediate attention.',
    userInfo: {
      name: 'Jessica Park',
      email: 'jessica.park@company.com',
      role: 'QA Engineer'
    },
    category: 'bug',
    sentiment: 'negative',
    sentimentScore: 15,
    priority: 'high',
    status: 'new',
    createdAt: new Date('2025-01-20T09:45:00'),
    tags: ['payment', 'critical', 'bug']
  },
  {
    id: '4',
    title: 'Request for dark mode theme',
    content: 'Would love to see a dark mode option for the application. Many of us work late hours and it would be much easier on the eyes. This feature would be greatly appreciated!',
    userInfo: {
      name: 'David Kim',
      email: 'david.kim@company.com',
      role: 'Designer'
    },
    category: 'feature',
    sentiment: 'positive',
    sentimentScore: 78,
    priority: 'medium',
    status: 'in-review',
    createdAt: new Date('2025-01-18T16:20:00'),
    tags: ['theme', 'dark-mode', 'accessibility']
  },
  {
    id: '5',
    title: 'Mobile app crashes frequently',
    content: 'The mobile version keeps crashing when I try to upload images. This happens consistently on both iOS and Android devices. Very frustrating experience.',
    userInfo: {
      name: 'Emma Thompson',
      email: 'emma.t@company.com',
      role: 'Content Creator'
    },
    category: 'bug',
    sentiment: 'negative',
    sentimentScore: 25,
    priority: 'high',
    status: 'new',
    createdAt: new Date('2025-01-20T11:00:00'),
    tags: ['mobile', 'crash', 'upload']
  },
  {
    id: '6',
    title: 'Excellent customer support',
    content: 'I had an issue with my account settings and the support team resolved it within minutes. The live chat feature is fantastic and the agents are very knowledgeable and helpful.',
    userInfo: {
      name: 'Alex Morgan',
      email: 'alex.morgan@company.com',
      role: 'Marketing Specialist'
    },
    category: 'general',
    sentiment: 'positive',
    sentimentScore: 95,
    priority: 'low',
    status: 'resolved',
    createdAt: new Date('2025-01-17T13:30:00'),
    tags: ['support', 'customer-service', 'live-chat']
  }
];