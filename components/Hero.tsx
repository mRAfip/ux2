  'use client';

  import React from 'react';
  import Image from 'next/image';
  import { Highlighter } from "@/components/ui/highlighter";
  import { ShimmerButton } from "@/components/ui/shimmer-button";
  import { Phone, ArrowUpRight } from 'lucide-react';

    const Hero = () => {
      return (
        <section className="w-full py-24 relative overflow-hidden bg-white">
          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-6 h-full">
            <div className="grid lg:grid-cols-2 gap-12 pt-48">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Content will be added here based on reference image */}
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Designing digital experiences that users love         
                  </h1>
                  
                  <p className="text-xl text-gray-600 mt-6 max-w-2xl leading-loose">
                  I work with startups and agencies to design and build{" "}
                  <Highlighter action="underline" color="#FF9800" strokeWidth={3}>
                    <span className="font-bold">websites</span>
                  </Highlighter>
                  ,{" "}
                  <Highlighter action="underline" color="#87CEFA" strokeWidth={3}>
                    <span className="font-bold">landing pages</span>
                  </Highlighter>
                  ,{" "}
                  <Highlighter action="underline" color="#98FB98" strokeWidth={3}>
                    <span className="font-bold">web apps</span>
                  </Highlighter>
                  , and{" "}
                  <Highlighter action="underline" color="#FFB6C1" strokeWidth={3}>
                    <span className="font-bold">mobile apps</span>
                  </Highlighter>
                  {" "}that are visually clean, user-friendly, and built to drive real results.
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <ShimmerButton>
                      <Phone className="w-4 h-4 mr-2" />
                      Book a Call
                    </ShimmerButton>
                    
                    <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                      View Work
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Banner SVG */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg">
                  <Image
                    src="/download.svg"
                    alt="Banner Animation"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
