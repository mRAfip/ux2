'use client';

import { FC } from 'react';
import {
  Database,
  Lock,
  Server,
  Folder,
  RefreshCw,
  Search,
  Globe,
  UserPlus,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'User Experience Design (UX)',
    description:
      "Every project is a full Postgres database, the world's most trusted relational database.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Authentication',
    description:
      'Add user sign ups and logins, securing your data with Row Level Security.',
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: 'Edge Functions',
    description:
      'Easily write custom code without deploying or scaling servers.',
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'Storage',
    description:
      'Store, organize, and serve large files, from videos to images.',
    icon: <Folder className="w-6 h-6" />,
  },
  {
    title: 'Realtime',
    description:
      'Build multiplayer experiences with real-time data synchronization.',
    icon: <RefreshCw className="w-6 h-6" />,
  },
  {
    title: 'Vector',
    description:
      'Integrate ML-models to store, index, and search vector embeddings.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Global Reach',
    description:
      'Deliver your product to users around the world with scalable infrastructure.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'User Onboarding',
    description:
      'Seamless onboarding flows to increase engagement and retention.',
    icon: <UserPlus className="w-6 h-6" />,
  },
];

const ServicesSection: FC = () => {
  return (
    <section className=" text-black py-20 px-4 md:px-8">
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
            <Card
              key={index}
              className=" border  rounded-2xl "
            >
              <CardContent className="p-6 flex flex-col space-y-3">
                <div className="text-gray-500">{service.icon}</div>
                <h3 className="text-base font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}

          {/* Row 2: Cards 4–7 (normal size) */}
          {services.slice(3, 7).map((service, index) => (
            <Card
              key={index}
              className=" border  rounded-2xl "
            >
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
