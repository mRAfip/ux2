'use client';

import { FC } from 'react';
import {
  LayoutDashboard,
  Brush,
  Code,
  Compass,
  Layers,
  MousePointerClick,
  Zap,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'User Experience Design (UX)',
    description: (
      <>
        I design intuitive and goal-oriented user experiences through
        <span className="font-medium text-primary"> persona development</span>,
        <span className="font-medium text-primary"> user flow mapping</span>, and
        <span className="font-medium text-primary"> information architecture</span>. By combining
        user research with <span className="font-medium text-primary">UX strategy</span>, I ensure
        every product is easy to use, highly functional, and aligned with user needs.
      </>
    ),
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
  {
    title: 'Visual & UI Design',
    description: (
      <>
        Designing clean, modern interfaces in
        <span className="font-medium text-primary"> Figma</span> that align with your brand and
        engage users.
      </>
    ),
    icon: <Brush className="w-6 h-6" />,
  },
  {
    title: 'Front-End Development',
    description: (
      <>
        Building fast, responsive websites and apps using
        <span className="font-medium text-primary"> React</span>,
        <span className="font-medium text-primary"> Next.js</span>, and
        <span className="font-medium text-primary"> Tailwind CSS</span>.
      </>
    ),
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: 'Project Management & Consulting',
    description: (
      <>
        Leading digital projects from idea to launch with
        <span className="font-medium text-primary"> UX strategy</span>,
        <span className="font-medium text-primary"> design direction</span>, and
        <span className="font-medium text-primary"> creative oversight</span>.
      </>
    ),
    icon: <Compass className="w-6 h-6" />,
  },
  {
    title: 'Design Systems & Component Libraries',
    description: (
      <>
        Creating reusable design systems in
        <span className="font-medium text-primary"> Figma</span> and code (
        <span className="font-medium text-primary">React</span> +
        <span className="font-medium text-primary"> Tailwind CSS</span>) to ensure consistency and
        speed up development.
      </>
    ),
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: 'Landing Page Optimization',
    description: (
      <>
        Designing high-converting landing pages with clear
        <span className="font-medium text-primary"> UX copy</span> and strong
        <span className="font-medium text-primary"> calls to action</span>.
      </>
    ),
    icon: <MousePointerClick className="w-6 h-6" />,
  },
  {
    title: 'No-Code MVP Prototyping',
    description: (
      <>
        Helping startups launch fast with interactive prototypes or MVPs using
        <span className="font-medium text-primary"> Figma</span>,
        <span className="font-medium text-primary"> Framer</span>, or
        <span className="font-medium text-primary"> Webflow</span>.
      </>
    ),
    icon: <Zap className="w-6 h-6" />,
  },
];

const ServicesSection: FC = () => {
  return (
    <section className="text-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Custom 2-row grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Card 1 (spans 2 columns) */}
          <Card className="md:col-span-2 bg-white border rounded-2xl">
            <CardContent className="p-6 flex flex-col space-y-3">
              <div className="text-gray-500">{services[0].icon}</div>
              <h3 className="text-xl font-semibold">{services[0].title}</h3>
              <p className="text-gray-600 text-sm">{services[0].description}</p>
            </CardContent>
          </Card>

          {/* Card 2 & 3 */}
          {services.slice(1, 3).map((service, index) => (
            <Card key={index} className="border rounded-2xl">
              <CardContent className="p-6 flex flex-col space-y-3">
                <div className="text-gray-500">{service.icon}</div>
                <h3 className="text-base font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}

          {/* Row 2: Cards 4–7 (normal size) */}
          {services.slice(3, 7).map((service, index) => (
            <Card key={index} className="border rounded-2xl">
              <CardContent className="p-6 flex flex-col space-y-3">
                <div className="text-gray-500">{service.icon}</div>
                <h3 className="text-base font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
