    'use client';

    import React from 'react';
    import Image from 'next/image';
    import { Highlighter } from "@/components/ui/highlighter";
    import { ShimmerButton } from "@/components/ui/shimmer-button";
    import { Phone, ArrowUpRight } from 'lucide-react';

      const Hero = () => {
        return (
          <section className="w-full h-[75vh] relative overflow-hidden bg-gray-950">
            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 h-full">
              <div className="pt-56 flex justify-center">
                {/* Center Column - Content */}
                <div className="space-y-8 max-w-4xl">
                  {/* Content will be added here based on reference image */}
                  <div className="text-center">
                     <h1 className="text-4xl lg:text-8xl font-bold text-white leading-tight">
                    Designing digital experiences
                    </h1>
                    
                     <p className="text-xl text-white mt-6 max-w-3xl mx-auto leading-loose">
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
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <ShimmerButton>
                        <Phone className="w-4 h-4 mr-2" />
                        Book a Call
                      </ShimmerButton>
                      
                       <button className="flex items-center gap-2 px-6 py-3 border border-white rounded-full font-semibold text-white hover:bg-white hover:text-black transition-colors">
                        View Work
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Banner SVG */}
                {/* <div className="relative flex justify-center lg:justify-end">
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
                </div> */}
              </div>
            </div>
          </section>
        );
      };

      export default Hero;
