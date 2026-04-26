"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-4"
        }`}
        aria-label="Main navigation"
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group" id="navbar-logo" aria-label="Ranger Technologies Home">
            <span
              className="text-white font-black text-xl tracking-tight transition-colors duration-200 group-hover:text-orange-400"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            >
              RANGER
            </span>
            <span
              className="font-black text-xl tracking-tight ml-1"
              style={{ color: "var(--orange)", fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            >
              .TECH
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  id={`nav-link-${label.toLowerCase()}`}
                  className={`text-sm font-semibold tracking-wide transition-all duration-200 relative group py-1 ${
                    activeLink === href ? "text-white" : "text-[var(--silver)] hover:text-white"
                  }`}
                  onClick={() => setActiveLink(href)}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[var(--orange)] transition-all duration-300 ${
                      activeLink === href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              id="nav-cta"
              className="hidden md:inline-flex items-center justify-center transition-opacity hover:opacity-90"
              style={{ background: "#ED5D10", color: "white", padding: "16px 28px", borderRadius: 0, fontWeight: 700, fontSize: "12px", textTransform: "uppercase" }}
            >
              Get in Touch
            </Link>

            {/* Hamburger */}
            <button
              id="nav-hamburger"
              className="md:hidden flex flex-col gap-1.5 p-2 z-[1001]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0 w-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[850] bg-black flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Orange glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(224,89,16,0.12) 0%, transparent 70%)",
          }}
        />

        <ul className="flex flex-col items-center gap-8 relative z-10" role="list">
          {navLinks.map(({ href, label }, i) => (
            <li key={href} style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}>
              <Link
                href={href}
                id={`mobile-nav-link-${label.toLowerCase()}`}
                className={`text-4xl font-black tracking-tight transition-colors duration-200 ${
                  menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } hover:text-[var(--orange)]`}
                style={{
                  fontFamily: "var(--font-display)",
                  transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms, color 0.2s ease`,
                  transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                }}
                onClick={() => { setMenuOpen(false); setActiveLink(href); }}
              >
                {label}
              </Link>
            </li>
          ))}

          <li style={{ transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms" }}>
            <Link
              href="/contact"
              id="mobile-nav-cta"
              className="btn-primary mt-4"
              onClick={() => setMenuOpen(false)}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease ${navLinks.length * 60}ms, transform 0.4s ease ${navLinks.length * 60}ms`,
              }}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
