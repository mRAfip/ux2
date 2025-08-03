"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Lock, Server,UserPlus, Folder, RefreshCw, Search, Globe } from "lucide-react";
import Link from 'next/link';

const services = [
  {
    title: "User Experience Design (UX)",
    description:
      "Every project is a full Postgres database, the world's most trusted relational database.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Authentication",
    description:
      "Add user sign ups and logins, securing your data with Row Level Security.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "Edge Functions",
    description:
      "Easily write custom code without deploying or scaling servers.",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "Storage",
    description:
      "Store, organize, and serve large files, from videos to images.",
    icon: <Folder className="w-6 h-6" />,
  },
  {
    title: "Realtime",
    description:
      "Build multiplayer experiences with real-time data synchronization.",
    icon: <RefreshCw className="w-6 h-6" />,
  },
  {
    title: "Vector",
    description:
      "Integrate ML-models to store, index, and search vector embeddings.",
    icon: <Search className="w-6 h-6" />,
  },
];

const ServicesSection: FC = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-gray-400">
              I offer full-stack solutions including databases, APIs, and
              real-time experiences, ensuring scalable and secure applications.
            </p>
          </div>
            <Link
              href="/pages/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 w-fit"
            >
              <UserPlus className="w-4 h-4" />
              Hire Me
            </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a] border border-[#2a2a2a] text-gray-50 rounded-2xl shadow-md"
            >
              <CardContent className="p-6 flex flex-col space-y-3">
                <div className="text-gray-500">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
