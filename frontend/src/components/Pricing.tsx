import React, { useState } from 'react';
import { Check, X, Star, Users, Brain, Award, Zap, Shield, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  badge?: string;
  badgeColor?: string;
  features: string[];
  limitations?: string[];
  cta: string;
  ctaVariant: 'primary' | 'secondary' | 'outline';
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    description: "Perfect for getting started with basic learning",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Access to 50+ free courses",
      "Basic progress tracking",
      "Community forum access",
      "Mobile app access",
      "Standard video quality"
    ],
    limitations: [
      "No certificates",
      "No AI-powered recommendations",
      "No instructor feedback",
      "Limited course downloads"
    ],
    cta: "Start Free",
    ctaVariant: "outline"
  },
  {
    name: "Pro",
    description: "Ideal for serious learners and professionals",
    monthlyPrice: 29,
    yearlyPrice: 290,
    badge: "Most Popular",
    badgeColor: "bg-purple-500",
    features: [
      "Access to 500+ premium courses",
      "AI-powered learning recommendations",
      "Verified certificates",
      "Instructor feedback and Q&A",
      "Advanced progress analytics",
      "Offline course downloads",
      "HD video quality",
      "Priority customer support",
      "Career guidance tools"
    ],
    cta: "Start Free Trial",
    ctaVariant: "primary",
    popular: true
  },
  {
    name: "Team",
    description: "Built for teams and organizations",
    monthlyPrice: 99,
    yearlyPrice: 990,
    badge: "Best Value",
    badgeColor: "bg-blue-500",
    features: [
      "Everything in Pro",
      "Team management dashboard",
      "Bulk user management",
      "Advanced team analytics",
      "Custom learning paths",
      "White-label options",
      "Dedicated account manager",
      "SSO integration",
      "API access",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    ctaVariant: "secondary"
  }
];

const comparisonFeatures = [
  {
    category: "Course Access",
    features: [
      { name: "Free courses", free: "50+", pro: "50+", team: "50+" },
      { name: "Premium courses", free: "0", pro: "500+", team: "500+" },
      { name: "New courses monthly", free: "Limited", pro: "Unlimited", team: "Unlimited" },
      { name: "Course downloads", free: "5", pro: "Unlimited", team: "Unlimited" }
    ]
  },
  {
    category: "Learning Features",
    features: [
      { name: "AI recommendations", free: false, pro: true, team: true },
      { name: "Progress tracking", free: "Basic", pro: "Advanced", team: "Advanced" },
      { name: "Learning analytics", free: false, pro: true, team: true },
      { name: "Custom learning paths", free: false, pro: false, team: true }
    ]
  },
  {
    category: "Certificates & Recognition",
    features: [
      { name: "Course completion badges", free: true, pro: true, team: true },
      { name: "Verified certificates", free: false, pro: true, team: true },
      { name: "LinkedIn integration", free: false, pro: true, team: true },
      { name: "Custom certificates", free: false, pro: false, team: true }
    ]
  },
  {
    category: "Support & Community",
    features: [
      { name: "Community forum", free: true, pro: true, team: true },
      { name: "Instructor Q&A", free: false, pro: true, team: true },
      { name: "Priority support", free: false, pro: true, team: true },
      { name: "Dedicated account manager", free: false, pro: false, team: true }
    ]
  }
];

const faqs = [
  {
    question: "Can I switch between plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll be charged the prorated amount for the remainder of your billing cycle. When you downgrade, the change will take effect at the end of your current billing period."
  },
  {
    question: "What's included in the free trial?",
    answer: "The free trial gives you full access to all Pro features for 14 days. No credit card required. You can explore premium courses, use AI recommendations, and earn certificates during your trial period."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with your learning experience, contact our support team for a full refund within 30 days of purchase."
  },
  {
    question: "How does team billing work?",
    answer: "Team plans are billed based on the number of active users. You can add or remove team members at any time, and billing is adjusted accordingly. We also offer volume discounts for larger teams (50+ users)."
  },
  {
    question: "Are there any setup fees?",
    answer: "No, there are no setup fees or hidden costs. The price you see is exactly what you'll pay. For Team plans, implementation support is included at no extra charge."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and you won't be charged again."
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-400 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-500 mx-auto" />
      );
    }
    return <span className="text-gray-300">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Learning Path</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Start free and upgrade as you grow. All plans include access to our community and mobile apps.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isYearly ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-lg border rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-white/10'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-gray-400 ml-2">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  )}
                </div>

                {isYearly && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-gray-400 mb-6">
                    ${(plan.monthlyPrice * 12).toFixed(0)} billed annually
                  </p>
                )}

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.ctaVariant === 'primary'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105'
                      : plan.ctaVariant === 'secondary'
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'border-2 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold mb-4">What's included:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations && (
                  <>
                    <h4 className="text-gray-400 font-semibold mt-6 mb-4">Limitations:</h4>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start space-x-3">
                        <X className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Compare All Features
          </h2>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">Free</th>
                    <th className="text-center p-6 text-white font-semibold bg-purple-500/10">Pro</th>
                    <th className="text-center p-6 text-white font-semibold">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <React.Fragment key={category.category}>
                      <tr>
                        <td colSpan={4} className="p-4 bg-white/5">
                          <h4 className="text-purple-400 font-semibold">{category.category}</h4>
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-white/5 hover:bg-white/5">
                          <td className="p-4 text-gray-300">{feature.name}</td>
                          <td className="p-4 text-center">{renderFeatureValue(feature.free)}</td>
                          <td className="p-4 text-center bg-purple-500/5">{renderFeatureValue(feature.pro)}</td>
                          <td className="p-4 text-center">{renderFeatureValue(feature.team)}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of learners who are advancing their careers with LearnAI. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-lg">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}