"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery & Analysis",
    summary: "Deep-dive into your business model, target market, and competitive landscape.",
    detail:
      "We audit your current tech stack, interview key stakeholders, map competitor positioning, and identify high-impact growth opportunities. Output: a detailed discovery report with prioritized recommendations and a clear ROI roadmap.",
  },
  {
    num: "02",
    title: "Strategy & KPI Definition",
    summary: "Build a data-driven marketing and technology strategy tied to business outcomes.",
    detail:
      "We co-create a strategy document defining primary KPIs, target channels, budget allocation, and a 90-day action plan. Every recommendation is tied to a measurable metric — no vanity metrics, just pipline and revenue.",
  },
  {
    num: "03",
    title: "Channel Setup & Launch",
    summary: "Implement your technology stack and marketing channels with precision.",
    detail:
      "Our engineering team builds and configures all necessary infrastructure: API integrations, automation workflows, analytics pipelines, and launch-ready campaigns. We test rigorously before any go-live.",
  },
  {
    num: "04",
    title: "Analytics, Reporting & Optimization",
    summary: "Real-time tracking with iterative improvements driven by data, not guesswork.",
    detail:
      "You get a live dashboard showing all KPIs. Weekly reports surface insights and corrective actions. Our team runs continuous A/B tests and optimizations to compound performance over time.",
  },
  {
    num: "05",
    title: "Scaling What Works",
    summary: "Once we find what works, we scale it systematically and sustainably.",
    detail:
      "Proven channels get more budget. Winning automations get extended. We expand into adjacent verticals and markets, compounding growth while maintaining quality. This is where 3× results become 10×.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [openStep, setOpenStep] = useState<number | null>(0);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    };
    loadGsap();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 0% 50%, rgba(224,89,16,0.08) 0%, transparent 60%), #000",
      }}
      aria-label="How we work — process section"
    >
      <div className="container relative z-10">
        {/* Section tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="label-tag">[ How We Work ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading + Decorative Signature */}
          <div ref={headingRef}>
            <h2 className="section-heading mb-6">
              How We{" "}
              <span style={{ color: "var(--orange)" }}>Work</span>
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--silver)" }}>
              A structured, repeatable five-step framework that transforms vague growth ambitions into compounding, measurable results.
            </p>

            {/* Decorative Signature / Art */}
            <div
              className="relative h-48 flex items-center justify-center rounded-sm overflow-hidden"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(224,89,16,0.18) 0%, transparent 70%)",
                border: "var(--border-subtle)",
              }}
            >
              {/* Large decorative text/mark */}
              <svg
                viewBox="0 0 300 150"
                className="w-full h-full opacity-60"
                aria-hidden="true"
              >
                <text
                  x="20"
                  y="110"
                  fontFamily="Georgia, serif"
                  fontSize="90"
                  fill="none"
                  stroke="#e05910"
                  strokeWidth="1.5"
                  opacity="0.7"
                  style={{ fontStyle: "italic" }}
                >
                  R.
                </text>
                <text
                  x="120"
                  y="130"
                  fontFamily="Georgia, serif"
                  fontSize="50"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.8"
                  style={{ fontStyle: "italic" }}
                >
                  Tech
                </text>
              </svg>

              {/* Bracket decorations */}
              <div className="absolute top-3 left-3 bracket text-xl">[ </div>
              <div className="absolute top-3 right-3 bracket text-xl text-right"> ]</div>
            </div>
          </div>

          {/* Right: Accordion Steps */}
          <div ref={contentRef} className="relative">
            {/* Orange vertical connecting line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--orange) 15%, var(--orange) 85%, transparent)",
                opacity: 0.3,
              }}
            />

            <div className="flex flex-col gap-0 pl-10">
              {steps.map((step, i) => (
                <ProcessStep
                  key={step.num}
                  step={step}
                  index={i}
                  isOpen={openStep === i}
                  onClick={() => setOpenStep(openStep === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom orange glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(224,89,16,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </section>
  );
}

function ProcessStep({
  step,
  index,
  isOpen,
  onClick,
}: {
  step: (typeof steps)[0];
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="border-b py-5 cursor-none"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
      data-cursor-hover
    >
      <button
        id={`process-step-${index + 1}`}
        className="w-full flex items-center gap-4 text-left group"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`process-step-content-${index + 1}`}
      >
        {/* Orange dot indicator — positioned over the vertical line */}
        <div
          className="absolute left-[13px] w-3 h-3 rounded-full border-2 transition-all duration-300"
          style={{
            borderColor: isOpen ? "var(--orange)" : "rgba(255,255,255,0.2)",
            background: isOpen ? "var(--orange)" : "transparent",
            boxShadow: isOpen ? "0 0 12px rgba(224,89,16,0.6)" : "none",
            marginLeft: "-40px",
          }}
        />

        <span
          className="text-xs font-mono font-medium tabular-nums"
          style={{ color: "var(--orange)" }}
        >
          {step.num}
        </span>
        <div className="flex-1">
          <span
            className="font-semibold text-sm md:text-base transition-colors duration-200"
            style={{
              color: isOpen ? "var(--white)" : "var(--silver)",
              fontFamily: "var(--font-display)",
            }}
          >
            {step.title}
          </span>
          {!isOpen && (
            <p
              className="text-xs mt-0.5 line-clamp-1"
              style={{ color: "var(--muted)" }}
            >
              {step.summary}
            </p>
          )}
        </div>

        {/* Expand/collapse indicator */}
        <div
          className="w-7 h-7 border flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            borderColor: isOpen ? "var(--orange)" : "rgba(255,255,255,0.15)",
            background: isOpen ? "var(--orange)" : "transparent",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
            aria-hidden="true"
          >
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        id={`process-step-content-${index + 1}`}
        ref={contentRef}
        className="accordion-content"
        style={{ maxHeight: isOpen ? "400px" : "0", overflow: "hidden", transition: "max-height 0.45s cubic-bezier(0.76,0,0.24,1)" }}
        aria-hidden={!isOpen}
      >
        <p
          className="text-sm leading-relaxed pt-4 pb-2"
          style={{ color: "var(--silver)" }}
        >
          {step.detail}
        </p>
      </div>
    </div>
  );
}
