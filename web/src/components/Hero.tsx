"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  // The dynamic import manages ssr: false, but for internal state syncing we use standard delay
  useEffect(() => { 
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const run = async () => {
      const { gsap } = await import("gsap");
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-top-text", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1.2 }, 0.2);
      tl.fromTo(".hero-text-bg span", { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.5, stagger: 0.1 }, 0.4);
      tl.fromTo(".hero-bottom-text span", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 1.0);
    };
    run();
  }, [mounted]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col justify-between bg-[#080808]"
      style={{ height: "100svh" }}
      aria-label="Hero section"
      ref={containerRef}
    >
      {/* ── 3D Canvas — centered, z-[2] over bg ── */}
      <div className="absolute inset-0 w-full h-[100vh] z-[2] pointer-events-none">
        {mounted && <HeroScene />}
      </div>

      {/* ── Top Text Layer ── */}
      <div className="absolute top-[100px] md:top-[90px] left-1/2 -translate-x-1/2 w-full max-w-[1100px] text-center text-[11px] md:text-[14px] leading-[1.35] tracking-[0.12em] uppercase text-white/75 z-[4] hero-top-text px-4">
        <p style={{ textWrap: "balance" }}>
          Turning technology chaos into structured growth. A definitive partner for businesses <br className="hidden md:block" />
          building predictable and scalable systems
        </p>
      </div>

      {/* ── Huge Background Text Layer ── */}
      <div 
        className="absolute left-1/2 font-[600] tracking-[-0.08em] leading-[0.85] whitespace-nowrap z-[1] pointer-events-none flex hero-text-bg"
        style={{ top: "40%", transform: "translate(-50%, -50%)", fontSize: "clamp(7rem, 15vw, 18rem)", fontFamily: "var(--font-body)" }}
      >
        <span style={{ 
          background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 40%, rgba(237,93,16,0.9) 65%, #ED5D10 100%)", 
          WebkitBackgroundClip: "text", 
          color: "transparent" 
        }}>
          RANGER TECH
        </span>
      </div>

      <div className="absolute bottom-[18%] left-0 right-0 grid grid-cols-2 md:grid-cols-4 items-center text-[12px] md:text-[18px] font-medium uppercase text-white/90 z-[5] hero-bottom-text gap-y-4 md:gap-y-0 px-8 md:px-16 lg:px-24">
        <span className="text-left whitespace-nowrap">© 2026</span>
        <span className="text-right md:text-center whitespace-nowrap">AI / WEB3 / AR</span>
        <span className="text-left md:text-center whitespace-nowrap md:ml-8 lg:ml-16">RANGER.TECH</span>
        <span className="text-right whitespace-nowrap">ECOSYSTEM DESIGN</span>
      </div>
    </section>
  );
}
