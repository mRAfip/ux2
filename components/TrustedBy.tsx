        'use client';

        import React from 'react';
        import Image from 'next/image';
        import { Star, Users } from 'lucide-react';

        const TrustedBy = () => {
        const companies = [
            { name: 'Amaala', logo: '/logos/amaala.png' },
            { name: 'Blended', logo: '/logos/blended.svg' },
            { name: 'Cyra', logo: '/logos/cyra.png' },
            { name: 'FTRIC', logo: '/logos/ftric.png' },
            { name: 'Hire You Soon', logo: '/logos/hireyousoon.png' },
            { name: 'Open edX', logo: '/logos/openedx.png' },
            { name: 'Phonix', logo: '/logos/phonix.png' },
            { name: 'Rahmania', logo: '/logos/rahmania.png' },
            { name: 'Relish', logo: '/logos/relish.png' },
            { name: 'Retrofit', logo: '/logos/retrofit.png' },
            { name: 'SNGC', logo: '/logos/sngc.png' },
            { name: 'Traveleo', logo: '/logos/traveleo.png' },
            { name: 'Xandy', logo: '/logos/xandy.png' }
        ];

         return (
             <section className="w-full pt-36 pb-24 bg-gray-950">
             <style jsx>{`
                 @keyframes scroll {
                     0% {
                         transform: translateX(0);
                     }
                     100% {
                         transform: translateX(-50%);
                     }
                 }
                 .animate-scroll {
                     animation: scroll 30s linear infinite;
                 }
             `}</style>
             <div className="max-w-7xl mx-auto px-6">
                {/* Header text */}
                <div className="text-center mb-8">
                        <h2 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
                            Trusted by more than 300,000 leading GTM teams of all sizes
                        </h2>
                        
                        {/* Rating details */}
                        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
                            <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center text-white font-bold text-sm">
                                G²
                            </div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-gray-400 text-gray-400" />
                                ))}
                            </div>
                            <span className="text-sm font-medium">4.9 rating</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-medium">20K + GTM engineering community</span>
                            </div>
                        </div> */}
                </div>

                 {/* Company logos ticker */}
                 <div className="overflow-hidden">
                     <div className="flex items-center gap-12 animate-scroll">
                         {/* First set of logos */}
                         {companies.map((company, index) => (
                             <div key={index} className="flex items-center justify-center flex-shrink-0">
                                 <Image
                                     src={company.logo}
                                     alt={`${company.name} logo`}
                                     width={120}
                                     height={40}
                                     className="h-8 w-auto grayscale brightness-100 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                                 />
                             </div>
                         ))}
                         {/* Duplicate set for seamless loop */}
                         {companies.map((company, index) => (
                             <div key={`duplicate-${index}`} className="flex items-center justify-center flex-shrink-0">
                                 <Image
                                     src={company.logo}
                                     alt={`${company.name} logo`}
                                     width={120}
                                     height={40}
                                     className="h-8 w-auto grayscale brightness-100 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                                 />
                             </div>
                         ))}
                     </div>
                 </div>
            </div>
            </section>
        );
        };

        export default TrustedBy;
