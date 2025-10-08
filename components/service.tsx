'use client';

import { FC } from 'react';
import {
  Check,
  ArrowRight,
  Palette,
  Code,
  Smartphone,
  Search,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: '75% of users base a company\'s credibility on its website\'s design (UX and UI). Make sure it stands out—entrust your website design to a specialized web design agency.',
    features: [
      {
        title: 'UX/UI Design',
        description: 'We focus on both aesthetics and functionality to ensure your website not only looks great but drives conversions.'
      },
      {
        title: 'Design Systems & Components',
        description: 'We create assets that ensure consistency and make future updates faster and more efficient.'
      }
    ],
    demoImages: ['/work/1.jpg', '/work/2.jpg'],
    cta: 'See our design process →'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    description: 'Create engaging mobile experiences that users love. Our mobile-first approach ensures your app stands out in the competitive app market.',
    features: [
      {
        title: 'iOS & Android Design',
        description: 'Native design patterns and guidelines for both platforms to ensure optimal user experience.'
      },
      {
        title: 'Prototyping & Testing',
        description: 'Interactive prototypes and user testing to validate design decisions before development.'
      }
    ],
    demoImages: ['/work/3.jpg', '/work/4.jpg'],
    cta: 'View mobile portfolio →'
  },
  {
    id: 3,
    title: 'Brand Identity',
    description: 'Build a strong brand presence that resonates with your audience. From logo design to complete brand guidelines.',
    features: [
      {
        title: 'Logo & Visual Identity',
        description: 'Memorable logos and visual elements that represent your brand values and personality.'
      },
      {
        title: 'Brand Guidelines',
        description: 'Comprehensive brand guidelines to maintain consistency across all touchpoints.'
      }
    ],
    demoImages: ['/work/5.jpg', '/work/1.jpg'],
    cta: 'Explore brand work →'
  }
];

const ServicesSection: FC = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Tailored to your needs <br /> and technical challenges
          </h2>

        </div>


        <div className='flex flex-col gap-5'>


                  {/* Single Service Card - Web Design */}
        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-[60%_40%] gap-0">
            {/* Left Column - Content */}
            <div className="p-12 lg:p-16">
              <div className="space-y-8">
                {/* Service Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Web Design
                </h3>
                
                {/* Service Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  75% of users base a company's credibility on its website's design (UX and UI). Make sure it stands out—entrust your website design to a specialized web design agency.
                </p>
                
                {/* Features List */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        UX/UI Design
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We focus on both aesthetics and functionality to ensure your website not only looks great but drives conversions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Design Systems & Components
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We create assets that ensure consistency and make future updates faster and more efficient.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="pt-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-200 group"
                  >
                    See our design process
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative bg-gray-50">
              <div className="absolute bottom-0 right-0 w-[85%] h-[85%] overflow-hidden">
                <Image
                  src="/work/1.jpg"
                  alt="Web Design Example"
                  width={292}
                  height={228}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-[60%_40%] gap-0">
            {/* Left Column - Content */}
            <div className="p-12 lg:p-16">
              <div className="space-y-8">
                {/* Service Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Web Design
                </h3>
                
                {/* Service Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  75% of users base a company's credibility on its website's design (UX and UI). Make sure it stands out—entrust your website design to a specialized web design agency.
                </p>
                
                {/* Features List */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        UX/UI Design
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We focus on both aesthetics and functionality to ensure your website not only looks great but drives conversions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Design Systems & Components
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We create assets that ensure consistency and make future updates faster and more efficient.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="pt-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-200 group"
                  >
                    See our design process
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative bg-gray-50">
              <div className="absolute bottom-0 right-0 w-[85%] h-[85%] overflow-hidden">
                <Image
                  src="/work/1.jpg"
                  alt="Web Design Example"
                  width={292}
                  height={228}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-[60%_40%] gap-0">
            {/* Left Column - Content */}
            <div className="p-12 lg:p-16">
              <div className="space-y-8">
                {/* Service Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Web Design
                </h3>
                
                {/* Service Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  75% of users base a company's credibility on its website's design (UX and UI). Make sure it stands out—entrust your website design to a specialized web design agency.
                </p>
                
                {/* Features List */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        UX/UI Design
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We focus on both aesthetics and functionality to ensure your website not only looks great but drives conversions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Design Systems & Components
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We create assets that ensure consistency and make future updates faster and more efficient.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="pt-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-200 group"
                  >
                    See our design process
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative bg-gray-50">
              <div className="absolute bottom-0 right-0 w-[85%] h-[85%] overflow-hidden">
                <Image
                  src="/work/1.jpg"
                  alt="Web Design Example"
                  width={292}
                  height={228}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        </div>

        
      </div>
    </section>
  );
};

export default ServicesSection;
