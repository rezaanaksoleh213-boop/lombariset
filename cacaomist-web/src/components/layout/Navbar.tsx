"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/product", label: "Produk" },
  { href: "/research", label: "Penelitian" },
  { href: "/traceability", label: "Traceability" },
  { href: "/sustainability", label: "Keberlanjutan" },
  { href: "/education", label: "Edukasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-sage-aqua/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="C.A.C.A.O – M.I.S.T™ Home">
          <div className="w-9 h-9 rounded-full bg-deep-sage flex items-center justify-center group-hover:bg-cocoa-brown transition-colors duration-300">
            <Leaf className="w-5 h-5 text-ivory" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-playfair font-bold text-deep-sage text-sm tracking-wide">
              C.A.C.A.O – M.I.S.T™
            </span>
            <span className="text-[0.6rem] font-montserrat font-medium text-cocoa-brown/70 tracking-[0.12em] uppercase">
              CACAOMIST-BIOREFINERY
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "bg-sage-aqua/20 text-deep-sage font-semibold"
                  : "text-deep-sage/70 hover:text-deep-sage hover:bg-sage-aqua/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/research"
            className="ml-3 px-5 py-2.5 bg-deep-sage text-ivory text-sm font-semibold rounded-lg hover:bg-forest-green transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Jelajahi Inovasi
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-deep-sage hover:bg-sage-aqua/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-ivory/98 backdrop-blur-md border-t border-sage-aqua/20 shadow-lg"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                  pathname === link.href
                    ? "bg-sage-aqua/20 text-deep-sage font-semibold"
                    : "text-deep-sage/70 hover:text-deep-sage hover:bg-sage-aqua/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/research"
              className="mt-2 px-4 py-3 bg-deep-sage text-ivory text-sm font-semibold rounded-lg text-center"
            >
              Jelajahi Inovasi
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
