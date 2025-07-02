import React from 'react';
import { TrendingUp, Minus, TrendingDown } from 'lucide-react';

interface SentimentBadgeProps {
  sentiment: 'positive' | 'neutral' | 'negative';
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export const SentimentBadge: React.FC<SentimentBadgeProps> = ({
  sentiment,
  score,
  size = 'md'
}) => {
  const getConfig = () => {
    switch (sentiment) {
      case 'positive':
        return {
          bgColor: 'bg-green-100 hover:bg-green-200',
          textColor: 'text-green-800',
          borderColor: 'border-green-200',
          icon: TrendingUp,
          label: 'Positive'
        };
      case 'negative':
        return {
          bgColor: 'bg-red-100 hover:bg-red-200',
          textColor: 'text-red-800',
          borderColor: 'border-red-200',
          icon: TrendingDown,
          label: 'Negative'
        };
      default:
        return {
          bgColor: 'bg-amber-100 hover:bg-amber-200',
          textColor: 'text-amber-800',
          borderColor: 'border-amber-200',
          icon: Minus,
          label: 'Neutral'
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs gap-1';
      case 'lg':
        return 'px-4 py-2 text-base gap-2';
      default:
        return 'px-3 py-1.5 text-sm gap-1.5';
    }
  };

  const config = getConfig();
  const Icon = config.icon;

  return (
    <div
      className={`
        inline-flex items-center rounded-full border transition-colors duration-200
        ${config.bgColor} ${config.textColor} ${config.borderColor} ${getSizeClasses()}
      `}
      title={`${config.label} sentiment (${score}% confidence)`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{config.label}</span>
      <span className="opacity-75">({score}%)</span>
    </div>
  );
};