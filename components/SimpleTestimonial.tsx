    'use client';

    import React from 'react';
    import Image from 'next/image';

    const SimpleTestimonial: React.FC = () => {
    return (
        <section className="w-full pb-15">
        <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Author Image */}
                <div className="flex-shrink-0">
                <div className="relative">
                    <Image
                    src="/avatar.jpg"
                    alt="Gabriella Fishkind"
                    width={120}
                    height={120}
                    className="w-32 h-32 rounded-full object-cover"
                    />
                    {/* <div className="absolute -bottom-3 -right-1 bg-white rounded-lg p-2">
                        <span className="text-black text-sm font-medium">ceros</span>
                    </div> */}
                </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed mb-2">
                    <span className="text-3xl text-gray-400 leading-none">"</span>
                    Amplemarket is like having a super assistant that doesn't sleep. The AI is top-notch, helping me find the right leads quickly and easily.
                    <span className="text-3xl text-gray-400 leading-none">"</span>
                </blockquote>
                
                <div className="text-gray-600">
                    <p className="font-medium text-sm">Gabriella Fishkind - CEO at Ceros</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default SimpleTestimonial;
