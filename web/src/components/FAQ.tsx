"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    id: "faq-1",
    q: "What does a typical engagement with Ranger look like?",
    a: "Every engagement starts with a Discovery phase (1–2 weeks) where we audit your current state, define KPIs, and map a clear roadmap. From there we move to Strategy, Build, Launch, and Optimize — usually a 3–6 month initial commitment with ongoing retainer options.",
  },
  {
    id: "faq-2",
    q: "What industries do you serve?",
    a: "We operate across 10 technology verticals: AI & Automation, API Economy, Web3, Smart Commerce, Data Intelligence, EdTech, HealthTech, AR/VR, Cybersecurity, and GreenTech. Our B2B focus spans SaaS companies, D2C brands, fintech startups, and enterprise clients.",
  },
  {
    id: "faq-3",
    q: "How quickly can I expect results?",
    a: "Most clients see measurable improvements (traffic, lead volume, or automation efficiency) within the first 30–60 days. Significant business results like revenue growth or retention improvements typically materialize within 90–120 days. We agree on specific KPIs upfront so expectations are crystal clear.",
  },
  {
    id: "faq-4",
    q: "What's your tech stack?",
    a: "Frontend: Next.js 14 (React 18), Three.js, GSAP, Framer Motion, Tailwind CSS. Backend: Node.js, Express, Next.js API Routes. Databases: MongoDB Atlas, PostgreSQL. AI: OpenAI API, custom fine-tuned models, LangChain. Cloud: Vercel, AWS, GCP.",
  },
  {
    id: "faq-5",
    q: "Do you work with early-stage startups?",
    a: "Yes — we work with companies from pre-seed to Series C+. Early-stage teams typically start with our AI Infrastructure or API Economy vertical to get a solid technical foundation. Enterprise clients usually engage across 3–5 verticals simultaneously.",
  },
  {
    id: "faq-6",
    q: "What does it cost to work with Ranger?",
    a: "Pricing is scoped to your specific needs. Project-based engagements typically range from $15,000 to $150,000+. Ongoing retainer partnerships start at $5,000/month. We also offer outcome-based pricing structures for qualified clients where we align our fees with your results.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>("faq-1");

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
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        listRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    };
    loadGsap();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="section relative overflow-hidden"
      aria-label="Frequently asked questions"
    >
      {/* Diagonal grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: heading */}
          <div ref={headingRef}>
            <div className="flex items-center gap-3 mb-5">
              <span className="label-tag">[ FAQ ]</span>
            </div>
            <h2 className="section-heading mb-6">
              Frequently{" "}
              <span
                style={{ color: "var(--orange)", fontStyle: "italic" }}
              >
                Asked
              </span>
              <br />
              Questions
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>
              Everything you need to know before we start working together.
            </p>

            {/* Decorative bracket art */}
            <div className="mt-10 flex items-center gap-2">
              <span
                className="text-7xl font-thin leading-none"
                style={{ color: "var(--orange)", opacity: 0.15 }}
              >
                ?
              </span>
            </div>
          </div>

          {/* Right: accordion */}
          <div ref={listRef} className="flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                index={i}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border-b cursor-none"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <button
        id={faq.id}
        className="w-full flex items-center gap-4 py-5 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${faq.id}-answer`}
        data-cursor-hover
      >
        {/* Index number */}
        <span
          className="text-xs font-mono tabular-nums shrink-0 transition-colors duration-200"
          style={{ color: isOpen ? "var(--orange)" : "var(--muted)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className="flex-1 text-sm md:text-base font-medium transition-colors duration-200"
          style={{ color: isOpen ? "var(--white)" : "var(--silver)" }}
        >
          {faq.q}
        </span>

        {/* Toggle icon */}
        <div
          className="w-8 h-8 border flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            borderColor: isOpen ? "var(--orange)" : "rgba(255,255,255,0.12)",
            background: isOpen ? "rgba(224,89,16,0.1)" : "transparent",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
            aria-hidden="true"
          >
            <path
              d="M6 1v10M1 6h10"
              stroke={isOpen ? "var(--orange)" : "currentColor"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div
        id={`${faq.id}-answer`}
        style={{
          maxHeight: isOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.76,0,0.24,1)",
        }}
        aria-hidden={!isOpen}
      >
        <p
          className="text-sm leading-relaxed pb-5 pr-12"
          style={{ color: "var(--silver)" }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
}
