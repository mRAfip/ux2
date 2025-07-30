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
            <Link href="#" className="hover:text-red-400 transition">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="hover:text-red-400 transition">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="hover:text-red-400 transition">
              <Youtube size={24} />
            </Link>
            <Link href="#" className="hover:text-red-400 transition">
              <Mic size={24} />
            </Link>
            <Link href="#" className="hover:text-red-400 transition">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="hover:text-red-400 transition">
              <Facebook size={24} />
            </Link>
          </div>
        </div>
      </div>


      {/* Footer Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Certification</h4>
          <ul className="space-y-2">
            <li><Link href="#">What is UX Certification?</Link></li>
            <li><Link href="#">Specialties</Link></li>
            <li><Link href="#">Exams</Link></li>
            <li><Link href="#">UX Certified People</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">UX Training</h4>
          <ul className="space-y-2">
            <li><Link href="#">All Live Courses</Link></li>
            <li><Link href="#">Live Online Training Events</Link></li>
            <li><Link href="#">Private Team Training</Link></li>
            <li><Link href="#">Course Calendar</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Consulting</h4>
          <ul className="space-y-2">
            <li><Link href="#">Expert Review</Link></li>
            <li><Link href="#">User Testing</Link></li>
            <li><Link href="#">Customized Research</Link></li>
            <li><Link href="#">Applied Workshops</Link></li>
            <li><Link href="#">Keynote Speaking</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Free Guidance</h4>
          <ul className="space-y-2">
            <li><Link href="#">Articles & Videos</Link></li>
            <li><Link href="#">The NN/g UX Podcast</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-2">
            <li><Link href="#">Why NN/g</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">People</Link></li>
            <li><Link href="#">Clients</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Return Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 mt-10 gap-4">
        <p>© 1998-2025 Nielsen Norman Group, All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#">Cookie Preferences</Link>
          <span>/</span>
          <Link href="#">Cookie Declaration</Link>
          <span>/</span>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
