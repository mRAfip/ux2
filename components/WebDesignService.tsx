'use client';

import { FC, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Sparkles } from 'lucide-react';

const webDesignFeatures = [
  {
    id: 1,
    title: 'Intelligence',
    description: 'AI-powered design insights and recommendations',
    color: 'bg-blue-500',
    content: {
      title: 'Smart Design Intelligence',
      description: 'Leverage AI to analyze user behavior and optimize your designs for maximum conversion.',
      features: ['User behavior analysis', 'A/B testing insights', 'Performance optimization']
    }
  },
  {
    id: 2,
    title: 'Deliverability Optimization',
    description: 'Ensure your designs work across all devices and browsers',
    color: 'bg-green-500',
    content: {
      title: 'Cross-Platform Excellence',
      description: 'Your designs will look perfect on every device, from mobile to desktop.',
      features: ['Responsive design', 'Cross-browser compatibility', 'Performance optimization']
    }
  },
  {
    id: 3,
    title: 'Multichannel Engagement',
    description: 'Create cohesive experiences across all touchpoints',
    color: 'bg-yellow-500',
    content: {
      title: 'Unified Brand Experience',
      description: 'Consistent design language across web, mobile, and marketing materials.',
      features: ['Brand consistency', 'Multi-platform design', 'User journey optimization']
    }
  },
  {
    id: 4,
    title: 'Data & Lead Generation',
    description: 'Designs that convert visitors into customers',
    color: 'bg-red-500',
    content: {
      title: 'Conversion-Focused Design',
      description: 'Every element is designed to guide users toward your business goals.',
      features: ['Conversion optimization', 'Lead capture forms', 'Analytics integration']
    }
  }
];

const suggestions = [
  {
    title: 'RevOps Professionals in Tech Companies',
    description: 'Streamline your revenue operations with data-driven design',
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    title: 'Founders of Growing Companies',
    description: 'Scale your brand with professional web design',
    gradient: 'from-green-400 to-yellow-400'
  }
];

const WebDesignService: FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState('Q CEOs of startups that have doubled their headcount in the past year |');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % webDesignFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            All-in-one platform to level up your sales process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Give your team the power to sell smarter and faster from day one.
          </p>
        </div>

        <div className="">
          {/* Left Column - Animated Layered Cards */}
          <div className="relative">
            <div className="relative h-96">
              {webDesignFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeCard
                      ? 'z-20 transform translate-x-0 translate-y-0 scale-100 opacity-100'
                      : index === (activeCard + 1) % webDesignFeatures.length
                      ? 'z-10 transform translate-x-4 translate-y-4 scale-95 opacity-80'
                      : index === (activeCard + 2) % webDesignFeatures.length
                      ? 'z-5 transform translate-x-8 translate-y-8 scale-90 opacity-60'
                      : 'z-0 transform translate-x-12 translate-y-12 scale-85 opacity-40'
                  }`}
                  style={{
                    transform: index === activeCard 
                      ? 'translateX(0) translateY(0) scale(1)' 
                      : `translateX(${Math.min((index - activeCard + webDesignFeatures.length) % webDesignFeatures.length * 16, 48)}px) translateY(${Math.min((index - activeCard + webDesignFeatures.length) % webDesignFeatures.length * 16, 48)}px) scale(${1 - (index - activeCard + webDesignFeatures.length) % webDesignFeatures.length * 0.05})`
                  }}
                >
                  <Card className="h-full bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-3 h-3 rounded-full ${feature.color}`}></div>
                          <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-6">{feature.description}</p>
                      </div>
                      
                      {index === activeCard && (
                        <div className="space-y-4 animate-fadeIn">
                          <h4 className="text-lg font-semibold text-gray-900">{feature.content.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.content.description}</p>
                          <ul className="space-y-2">
                            {feature.content.features.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <Sparkles className="w-3 h-3 text-blue-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default WebDesignService;
