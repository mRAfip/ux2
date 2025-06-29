'use client';

import { ArrowUpCircle } from 'lucide-react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-32 pt-32 pb-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 border-b border-white/10 pb-12">
        {/* CTA (left) */}
<div> 
  <h3 className="text-2xl text-gray-400 mb-2">Let’s work together</h3>
  
  <a
    href="mailto:hey@victorberbel.work"
    className="text-4xl md:text-5xl font-semibold border-b-2 border-orange-500 inline-block pb-1 hover:text-orange-400 transition"
  >
    hey@victorberbel.work
  </a>

  {/* Book a Call Button */}
  <div className="mt-6">
    <a
      href="https://calendly.com/yourusername" // <- replace with your booking link
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 transition px-5 py-3 rounded-full font-medium text-base"
    >
      <Calendar size={20} />
      Book a Call
    </a>
  </div>
</div>

        {/* Empty Spacer */}
        <div></div>

{/* Explore & Social Links (equally spaced on all screens) */}
<div className="flex flex-wrap justify-between gap-y-8 text-sm w-full">
  <div className="w-1/2 md:w-auto">
    <h4 className="text-gray-400 mb-2 font-medium">Explore</h4>
    <ul className="space-y-1">
      <li><Link href="#">Home</Link></li>
      <li><Link href="#">Services</Link></li>
      <li><Link href="#">Work</Link></li>
      <li><Link href="#">About</Link></li>
      <li><Link href="#">Contact</Link></li>
      <li><Link href="#">Newsletter</Link></li>
    </ul>
  </div>
  <div className="w-1/2 md:w-auto">
    <h4 className="text-gray-400 mb-2 font-medium">Socials</h4>
    <ul className="space-y-1">
      <li><Link href="#">LinkedIn</Link></li>
      <li><Link href="#">Dribbble</Link></li>
      <li><Link href="#">Behance</Link></li>
      <li><Link href="#">Medium</Link></li>
      <li><Link href="#">Read.cv</Link></li>
      <li><Link href="#">Contra</Link></li>
    </ul>
  </div>
</div>


      </div>

      {/* Bottom Bar */}
      <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
        <p className="text-center md:text-left">
          © 2025 Victor Berbel — Designin' Incredibly Dope Shit Since ‘08.{' '}
          <Link href="#" className="text-orange-500 hover:underline">
            Privacy
          </Link>
        </p>

        <a
          href="#top"
          className="flex items-center gap-2 text-white hover:text-orange-400 transition"
        >
          Take me to the top <ArrowUpCircle size={24} />
        </a>
      </div>

      {/* Bottom Design Text */}
      <div className="mt-16 text-center w-full">
        <h1 className="text-9xl md:text-[15vw] font-extrabold text-white/5 uppercase tracking-tight leading-none">
          Muhammed
        </h1>
      </div>
    </footer>
  );
}
