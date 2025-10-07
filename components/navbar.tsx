"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Download, UserPlus, Mail, MapPin, Phone } from "lucide-react";
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false); // 🔹 Disabled for now

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   document.body.style.overflow = menuOpen ? "hidden" : "";
  // }, [menuOpen]);

  const pathname = usePathname();

  // Hide Navbar on /project/[slug]
  if (pathname.startsWith("/project/")) {
    return null;
  }

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-shadow ${
        scrolled ? "shadow-md bg-gray-950" : "bg-gray-950"
      }`}
    >
      {/* Top Utility Bar */}
      <div className="hidden md:block w-full border-b border-gray-600 z-50 relative bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex justify-between text-sm text-white">
          {/* Left Side: Location + Contact Info */}
          <div className="flex items-center space-x-6 text-sm text-white">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Kerala, India
            </div>
            <a
              href="mailto:work.rafipmkm@gmail.com"
              className="hover:text-white flex items-center gap-1"
            >
              <Mail className="w-4 h-4" />
              work.rafipmkm@gmail.com
            </a>
            <a
              href="tel:+917907977521"
              className="hover:text-white flex items-center gap-1"
            >
              <Phone className="w-4 h-4" />
              +91 79079 77521
            </a>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center space-x-4 text-white text-sm">
            <a
              href="https://www.linkedin.com/in/pr-muhammed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/therafitalks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@muhammed_mukkam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/ux_rafi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full relative z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 text-white">
            Muhammed Rafi
          </Link>

          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link
              href="/pages/contact"
              className="bg-[#66141A] text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              Hire Me
            </Link>

            <Link
              href="/Muhammed-Rafi-CV.pdf" // update with actual file path
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </Link>
          </div>

          {/* Mobile Menu Button (Commented out for now) */}
          {/* <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu Overlay (Commented for now) */}
      {/* {menuOpen && (
        <div className="fixed top-[42px] inset-x-0 bottom-0 bg-white z-40 flex flex-col justify-between">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image src="/assets/img/logo.svg" alt="Logo" width={120} height={40} />
            </Link>
            <button onClick={() => setMenuOpen(false)} className="text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 p-6 space-y-4 font-medium text-gray-700 overflow-y-auto">
            <Link href="/pricing" onClick={() => setMenuOpen(false)} className="block hover:text-black">
              Pricing
            </Link>
            ...
          </div>
          <div className="p-4 border-t space-y-3">
            ...
          </div>
        </div>
      )} */}
    </nav>
  );
}
