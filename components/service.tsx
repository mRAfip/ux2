'use client';

import { FC } from 'react';
import {
  Zap,
  BarChart3,
  Mail,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Smart Automation',
    description: 'Automate your workflows and let Cloudo handle the heavy lifting. From lead nurturing to campaign scheduling.',
    icon: <Zap className="w-8 h-8 text-blue-500" />,
  },
  {
    title: 'Real-Time Analytics',
    description: 'Save time and reduce repetitive tasks with powerful automation that keeps your team on what matters most.',
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
  },
  {
    title: 'Advanced Analytics',
    description: 'Get clear insights into sales performance, customer behavior, and trends. Make data-driven reports.',
    icon: <Mail className="w-8 h-8 text-blue-500" />,
  },
];

const ServicesSection: FC = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful tools to grow, <br/> engage, and convert
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
