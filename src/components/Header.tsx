"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../litirlogo.png";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#" },
    { label: "Tentang Kami", href: "#tentang-kami" },
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B1536]/95 backdrop-blur-md shadow-md py-2 border-b border-blue-950"
          : "bg-[#0B1536]/85 backdrop-blur-md py-2.5 border-b border-blue-950/50"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3 py-1 group">
            <Image 
              src={logo} 
              alt="Litir Publisher Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 rounded-full"
            />
            <span className="font-bold text-lg md:text-xl font-jakarta text-white tracking-tight">
              Litir <span className="text-orange-500">Publisher</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-base font-semibold text-slate-200 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="rounded-full px-6 py-2 text-sm lg:text-base font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/25 transition-transform hover:scale-105" onClick={() => window.open('https://wa.me/628981669927', '_blank')}>
              Konsultasi Sekarang
            </Button>
          </nav>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              className="text-slate-900 dark:text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B1536] shadow-xl border-t border-blue-900/40 py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-slate-200 block py-2 border-b border-blue-950"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="w-full rounded-full mt-2 bg-orange-500 hover:bg-orange-600 text-white" onClick={() => window.open('https://wa.me/628981669927', '_blank')}>
            Konsultasi Sekarang
          </Button>
        </div>
      )}
    </header>
  );
};
