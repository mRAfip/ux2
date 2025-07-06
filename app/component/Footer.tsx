'use client';

import { ArrowUpCircle } from 'lucide-react';
import Link from 'next/link';
import { UserPlus, } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-32 pt-32 pb-14">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 border-b border-white/10 pb-12">
        {/* CTA (left) */}
<div> 
  <h3 className="text-2xl text-gray-400 mb-2">Let’s work together</h3>
  
  <a
    href="mailto:work.rafipmkm@gmail.com"
    className="text-4xl md:text-5xl font-semibold border-b-2 border-[#3F2FEE] inline-block pb-1 hover:text-[#3F2FEE] transition"
  >
    work.rafipmkm@gmail.com
  </a>

  {/* Book a Call Button */}
  <div className="mt-6">
             <Link
              href="/pages/contact"
              className="bg-[#3F2FEE] hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 w-fit"
            >
              <UserPlus className="w-4 h-4" />
              Hire Me
            </Link>
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
      <li><Link href="#">Resources</Link></li>

      <li><Link href="#">Contact</Link></li>

    </ul>
  </div>
  <div className="w-1/2 md:w-auto">
    <h4 className="text-gray-400 mb-2 font-medium">Socials</h4>
    <ul className="space-y-1">
      <li><Link href="https://www.linkedin.com/in/pr-muhammed/">LinkedIn</Link></li>
      <li><Link href="https://www.instagram.com/therafitalks/">Instagram</Link></li>
      <li><Link href="https://x.com/ux_rafi">X.com</Link></li>
      <li><Link href="https://www.youtube.com/@muhammed_mukkam">Youtube</Link></li>

    </ul>
  </div>
</div>


      </div>

      {/* Bottom Bar */}
      <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
        <p className="text-center md:text-left">
         © 2025 Muhammed Rafi — Crafting Impactful UI/UX Since 2020

        </p>

        <a
          href="#top"
          className="flex items-center gap-2 text-white hover:text-[#3F2FEE] transition"
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
