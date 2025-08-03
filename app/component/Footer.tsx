'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Linkedin, Instagram,UserPlus, Youtube, Mic, Twitter, Facebook } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-[#66141A] text-white px-6 md:px-12 lg:px-32 pt-16 pb-10">
      {/* Newsletter & Socials */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/20 pb-10">
        {/* Work Together Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Let’s work together</h3>
          <a
            href="mailto:work.rafipmkm@gmail.com"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold underline underline-offset-4 hover:text-red-400 transition"
          >
            work.rafipmkm@gmail.com
          </a>

          <div className="mt-6">
            <Link
              href="/pages/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 w-fit"
            >
              <UserPlus className="w-4 h-4" />
              Hire Me
            </Link>
          </div>
        </div>


        {/* Social Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
          <span className="text-xl font-semibold">Follow Us</span>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/pr-muhammed/" className="hover:text-red-400 transition">
              <Linkedin size={24} />
            </Link>
            <Link href="https://www.instagram.com/therafitalks/" className="hover:text-red-400 transition">
              <Instagram size={24} />
            </Link>
            <Link href="https://www.youtube.com/@muhammed_mukkam" className="hover:text-red-400 transition">
              <Youtube size={24} />
            </Link>
            <Link href="https://x.com/ux_rafi" className="hover:text-red-400 transition">
              <Twitter size={24} />
            </Link>

          </div>
        </div>
      </div>


        {/* Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10 text-sm">
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">UI/UX Design</Link></li>
              <li><Link href="#">Frontend Development</Link></li>
              <li><Link href="#">Landing Page Design</Link></li>
              <li><Link href="#">E-commerce Design</Link></li>
              <li><Link href="#">Website Redesign</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-3">Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">Beginner UI/UX Bootcamp</Link></li>
              <li><Link href="#">Advanced UI/UX Design</Link></li>
              <li><Link href="#">Frontend Development Essentials</Link></li>
              <li><Link href="#">Freelancing for Designers</Link></li>
            </ul>
          </div>

          {/* Free Resources */}
          <div>
            <h4 className="font-semibold mb-3">Free Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">UI/UX Design Articles</Link></li>
              <li><Link href="#">Free Design Templates</Link></li>
              <li><Link href="#">Frontend Code Snippets</Link></li>
              <li><Link href="#">Figma Components</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold mb-3">Projects</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">Portfolio</Link></li>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">Client Work</Link></li>
              <li><Link href="#">Open Source Contributions</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">About Me</Link></li>
              <li><Link href="#">My Journey</Link></li>
              <li><Link href="#">Testimonials</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Hire Me</Link></li>
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-10 gap-4 pt-6">
          {/* Copyright */}
          <p>© {new Date().getFullYear()} Muhammed Rafi. All Rights Reserved.</p>
          
          {/* Links */}
          <div className="flex gap-4">
            <Link href="#">Privacy Policy</Link>
            <span>/</span>
            <Link href="#">Terms of Service</Link>
            <span>/</span>
            <Link href="#">Contact</Link>
          </div>
        </div>

    </footer>
  );
}
