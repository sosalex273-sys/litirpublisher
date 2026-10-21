"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../litirlogo.png";
import { Menu, X, MessageSquareText, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

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
    { label: "Layanan Riset", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Bukti Portofolio", href: "#portofolio" },
    { label: "Tanya Jawab", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40 py-2.5"
          : "bg-slate-950/60 backdrop-blur-lg border-b border-white/[0.06] py-3.5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500/30 to-blue-600/30 blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />
              <Image
                src={logo}
                alt="Litir Publisher"
                className="relative h-10 md:h-11 w-auto object-contain rounded-full border border-white/10 group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg md:text-xl font-jakarta text-white tracking-tight leading-none">
                Litir <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Publisher</span>
              </span>
              <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase mt-1">
                Academic & Scientific Partner
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/50 border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-md">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Konsultan Aktif
            </div>

            <Button
              className="rounded-full px-5 py-2 text-xs md:text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg shadow-orange-500/20 border border-orange-400/30 transition-all hover:scale-[1.02] flex items-center gap-2"
              onClick={() => window.open("https://wa.me/628981669927", "_blank")}
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Konsultasi Naskah</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              size="sm"
              className="rounded-full px-3 py-1 text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => window.open("https://wa.me/628981669927", "_blank")}
            >
              Konsultasi
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-slate-900/60 border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 max-h-[calc(100vh-80px)] overflow-y-auto bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800 shadow-2xl py-5 px-5 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Navigasi Litir Publisher</span>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Tim Fast Response
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-orange-400 flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              </li>
            ))}
          </ul>
          <Button
            className="w-full rounded-xl py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/20"
            onClick={() => window.open("https://wa.me/628981669927", "_blank")}
          >
            Mulai Diskusi Naskah via WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};
