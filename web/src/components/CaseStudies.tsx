"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const caseStudies = [
  {
    id: "cs-01",
    company: "NexaCommerce",
    industry: "D2C E-Commerce",
    result: "+340% Revenue",
    metric1: { label: "Revenue Growth", value: "340%" },
    metric2: { label: "Lead Volume", value: "5.2×" },
    metric3: { label: "CPL Reduction", value: "−61%" },
    description:
      "Implemented AI-driven pricing and automated cross-platform order sync across 8 marketplaces. Reduced manual ops by 80%.",
    color: "#e05910",
  },
  {
    id: "cs-02",
    company: "StrataHealth",
    industry: "HealthTech SaaS",
    result: "3× User Retention",
    metric1: { label: "User Retention", value: "3×" },
    metric2: { label: "Active Users", value: "+180%" },
    metric3: { label: "Churn Rate", value: "−44%" },
    description:
      "Built personalized health dashboards with AI diet and fitness recommendations, integrated with wearable APIs.",
    color: "#c04808",
  },
  {
    id: "cs-03",
    company: "VaultNet",
    industry: "Cybersecurity",
    result: "99.97% Uptime",
    metric1: { label: "Security Score", value: "A+" },
    metric2: { label: "Incidents", value: "0" },
    metric3: { label: "Audit Pass Rate", value: "100%" },
    description:
      "Deployed AI-powered fraud detection and end-to-end encrypted API framework for a fintech platform.",
    color: "#e05910",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll(".case-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          }
        );
      }
    };
    loadGsap();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="section relative overflow-hidden"
      style={{ background: "#050505" }}
      aria-label="Case studies — real results section"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, rgba(224,89,16,0.07) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={headingRef} className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="label-tag">[ Real Results ]</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="section-heading mb-3">
              Real Results for{" "}
              <span style={{ color: "var(--orange)" }}>B2B Companies</span>
            </h2>
            <p className="text-sm md:text-base" style={{ color: "var(--silver)" }}>
              Real B2B growth driven by strategy, data, and performance — not promises
            </p>
            <Link href="/work" id="case-studies-cta" className="btn-outline shrink-0 h-fit">
              See All Case Studies
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Horizontal scrolling cards */}
        <div
          ref={containerRef}
          className="h-scroll-container"
        >
          <div className="flex gap-5 min-w-max pb-2">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} study={cs} />
            ))}

            {/* "See More" card placeholder */}
            <div
              className="case-card flex-shrink-0 w-64 h-auto flex flex-col items-center justify-center gap-4 border rounded-sm"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="w-10 h-10 border flex items-center justify-center"
                style={{ borderColor: "var(--orange)" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="label-tag text-center px-6">View all case studies</p>
              <Link href="/work" id="see-more-cases" className="btn-primary text-xs py-2 px-4">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: (typeof caseStudies)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
    }
  };

  return (
    <div
      ref={cardRef}
      id={`case-card-${study.id}`}
      className="case-card flex-shrink-0 w-80 rounded-sm overflow-hidden cursor-none"
      style={{
        background: "var(--card-bg)",
        border: "var(--border-subtle)",
        transition: "transform 0.15s ease, box-shadow 0.3s ease",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover
    >
      {/* Company header banner */}
      <div
        className="relative h-36 overflow-hidden flex items-end p-5"
        style={{
          background: `linear-gradient(135deg, #111 0%, #1a1a1a 100%)`,
        }}
      >
        {/* Decorative laptop/device mockup frame */}
        <div
          className="absolute top-4 right-4 w-28 h-20 border rounded-sm opacity-20"
          style={{ borderColor: "var(--orange)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-3 flex items-center px-1.5 gap-1"
            style={{ background: "#2c2c2c" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
          </div>
          <div className="absolute inset-x-1 bottom-1 top-4 border opacity-30" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="w-full h-1 mt-1 mx-1" style={{ background: "var(--orange)", width: "60%", opacity: 0.8 }} />
            <div className="w-3/4 h-0.5 mt-1 mx-1" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="w-1/2 h-0.5 mt-1 mx-1" style={{ background: "rgba(255,255,255,0.15)" }} />
          </div>
        </div>

        {/* Orange glow */}
        <div
          className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(224,89,16,0.25) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <div className="relative z-10">
          <p className="label-tag text-[10px] mb-1" style={{ color: "var(--orange)" }}>
            {study.industry}
          </p>
          <h3
            className="text-lg font-black"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {study.company}
          </h3>
        </div>
      </div>

      {/* Metrics */}
      <div className="p-5">
        {/* Key result */}
        <div
          className="text-3xl font-black mb-4"
          style={{ color: "var(--orange)", fontFamily: "var(--font-display)" }}
        >
          {study.result}
        </div>

        {/* 3 metric chips */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[study.metric1, study.metric2, study.metric3].map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-1 p-2 rounded-sm"
              style={{ background: "rgba(255,255,255,0.03)", border: "var(--border-subtle)" }}
            >
              <span
                className="text-sm font-bold"
                style={{ color: "var(--orange)", fontFamily: "var(--font-display)" }}
              >
                {m.value}
              </span>
              <span className="text-[9px] uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed" style={{ color: "var(--silver)" }}>
          {study.description}
        </p>
      </div>

      {/* Bottom orange accent strip */}
      <div className="h-0.5" style={{ background: `linear-gradient(to right, ${study.color}, transparent)` }} />
    </div>
  );
}
