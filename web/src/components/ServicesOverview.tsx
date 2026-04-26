"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

const services = [
  {
    num: "01",
    icon: "🤖",
    title: "AI Infrastructure & Automation",
    desc: "Custom AI models, autonomous agents, and no-code automation systems for SMBs to enterprise.",
    tag: "Core",
  },
  {
    num: "02",
    icon: "🔗",
    title: "API Economy & Platform Integration",
    desc: "Centralized API hub connecting e-commerce, payments, and logistics for 1000+ brands.",
    tag: "Scale",
  },
  {
    num: "03",
    icon: "🌐",
    title: "Web 3.0 & Digital Ownership",
    desc: "Blockchain identity, smart contracts, NFT loyalty systems, and decentralized marketplaces.",
    tag: "Own",
  },
  {
    num: "04",
    icon: "🛒",
    title: "Smart Commerce & D2C Automation",
    desc: "AI-driven pricing, inventory prediction via ML, and cross-platform order synchronization.",
    tag: "Automate",
  },
  {
    num: "05",
    icon: "📊",
    title: "Data Intelligence & Decision Systems",
    desc: "Real-time analytics dashboards, predictive engines, and AI-driven business decisions.",
    tag: "Smart",
  },
  {
    num: "06",
    icon: "🎓",
    title: "EdTech & Skill Intelligence Platform",
    desc: "Personalized learning paths, skill-to-income mapping, and virtual labs.",
    tag: "Learn",
  },
  {
    num: "07",
    icon: "🏥",
    title: "HealthTech & Bio Data Systems",
    desc: "Personal health dashboards, AI fitness planning, telemedicine infrastructure.",
    tag: "Care",
  },
  {
    num: "08",
    icon: "🥽",
    title: "AR/VR + Spatial Technology",
    desc: "Virtual classrooms, remote offices, product try-before-buy, and metaverse brand spaces.",
    tag: "Immerse",
  },
  {
    num: "09",
    icon: "🛡️",
    title: "Cybersecurity & Digital Trust",
    desc: "AI identity verification, fraud detection, data encryption, and secure API design.",
    tag: "Trust",
  },
  {
    num: "10",
    icon: "🌱",
    title: "GreenTech & Smart Infrastructure",
    desc: "Energy optimization software, solar integration, smart IoT buildings, carbon tracking.",
    tag: "Sustain",
  },
];

const visibleServices = services.slice(0, 4);

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".service-card");
        tl.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );
    };

    loadGsap();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services-overview"
      className="section grid-bg relative overflow-hidden"
      aria-label="What we do — services overview"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(224,89,16,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div ref={headingRef} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="label-tag">[ What We Do ]</span>
            <div className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="section-heading">
              What We{" "}
              <span style={{ color: "var(--orange)" }}>Build</span>
            </h2>
            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--silver)" }}
            >
              10 technology verticals. One unified ecosystem. Every service engineered for measurable business growth.
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {visibleServices.map((svc, i) => (
            <div key={svc.num} className="service-card relative w-full h-[400px] bg-[#111111]/50 border border-white/5 rounded-md overflow-hidden group">
              {/* Overlay Text */}
              <div className="absolute top-0 left-0 w-full p-6 z-10 pointer-events-none flex flex-col gap-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="number-badge">{svc.num}</span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 border border-white/20 text-silver">
                    {svc.tag}
                  </span>
                </div>
                <h3 className="font-bold text-sm leading-snug font-display drop-shadow-md">
                  {svc.title}
                </h3>
              </div>
              
              {/* Bottom text overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                 <p className="text-xs leading-relaxed text-silver drop-shadow-md">
                   {svc.desc}
                 </p>
              </div>

              {/* 3D Lanyard Animation */}
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} transparent={true} />
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div
          ref={ctaRef}
          className="flex items-center gap-6 pt-8"
          style={{ borderTop: "var(--border-subtle)" }}
        >
          <Link href="/services" id="services-cta" className="btn-primary">
            See All 10 Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <span className="label-tag" style={{ color: "var(--muted)" }}>
            +6 more verticals
          </span>
        </div>
      </div>
    </section>
  );
}
