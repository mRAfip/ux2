"use client";

import { Headset, User, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-shadow ${scrolled ? "shadow-md bg-white" : "bg-white"}`}>
      {/* Top Utility Bar */}
      <div className="w-full border-b border-gray-200 z-50 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-6">
            <Link href="/pages/support" className="hover:text-black flex items-center gap-1">
              <Headset className="w-4 h-4" />
              Customer Support
            </Link>
            <Link href="tel:+917907977521" className="hover:text-black flex items-center gap-1">
              <User className="w-4 h-4" />
              Contact Sales
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/pages/about" className="hover:text-black">
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full relative z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            Muhammed Rafi
          </Link>

          <div className="hidden md:flex space-x-6 font-medium text-gray-700">
            <Link href="/pages/contact" className="hover:text-black">
              Pricing
            </Link>
            <Link href="/pages/contact" className="hover:text-black flex items-center gap-1">
              Products <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/pages/contact" className="hover:text-black flex items-center gap-1">
              Solutions <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/pages/blog" className="hover:text-black flex items-center gap-1">
              Blog <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link
              href="/pages/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-sm font-semibold"
            >
              Get a demo
            </Link>
            <Link
              href="/pages/contact"
              className="border border-gray-600 text-gray-900 px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-white"
            >
              Book a consultation
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-[42px] inset-x-0 bottom-0 bg-white z-40 flex flex-col justify-between">
          {/* Note: 42px = utility bar height */}

          {/* Mobile Top Bar */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image src="/assets/img/logo.svg" alt="Logo" width={120} height={40} />
            </Link>
            <button onClick={() => setMenuOpen(false)} className="text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex-1 p-6 space-y-4 font-medium text-gray-700 overflow-y-auto">
            <Link href="/pricing" onClick={() => setMenuOpen(false)} className="block hover:text-black">
              Pricing
            </Link>
            <Link href="/products" onClick={() => setMenuOpen(false)} className="block hover:text-black flex items-center gap-1">
              Products <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/solutions" onClick={() => setMenuOpen(false)} className="block hover:text-black flex items-center gap-1">
              Solutions <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/pages/blog" onClick={() => setMenuOpen(false)} className="block hover:text-black flex items-center gap-1">
              Blog <ChevronDown className="w-4 h-4" />
            </Link>
          </div>

          {/* Bottom Buttons */}
          <div className="p-4 border-t space-y-3">
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-blue-600 text-white px-4 py-3 rounded-sm font-semibold text-center"
            >
              Get a demo
            </Link>
            <Link
              href="/get-started"
              onClick={() => setMenuOpen(false)}
              className="block w-full border border-blue-600 text-blue-600 px-4 py-3 rounded-sm hover:bg-blue-100 text-center"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
