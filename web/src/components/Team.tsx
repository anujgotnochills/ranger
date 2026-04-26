"use client";

import { useEffect, useRef } from "react";

const teamMembers = [
  {
    id: "team-1",
    name: "Aryan Mehta",
    role: "CEO & AI Architect",
    desc: "10+ years building AI systems for enterprise clients across India and the US.",
    initials: "AM",
    color: "#e05910",
  },
  {
    id: "team-2",
    name: "Sofia Chen",
    role: "CTO & Head of Engineering",
    desc: "Full-stack architect specializing in Three.js, WebGL, and scalable cloud infrastructure.",
    initials: "SC",
    color: "#c04808",
  },
  {
    id: "team-3",
    name: "Rajan Patel",
    role: "Head of Web3 & Blockchain",
    desc: "Built 20+ dApp protocols and smart contract systems for fintech and gaming companies.",
    initials: "RP",
    color: "#e05910",
  },
  {
    id: "team-4",
    name: "Priya Nair",
    role: "Head of Growth & Analytics",
    desc: "Data-driven growth strategist responsible for 3× lead generation improvement.",
    initials: "PN",
    color: "#c04808",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".team-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
          }
        );
      }
    };
    loadGsap();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="section relative overflow-hidden"
      style={{ background: "#040404" }}
      aria-label="Team section"
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(224,89,16,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div ref={headingRef} className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-orange-600/40" />
            <span className="label-tag">[ The Team ]</span>
            <div className="h-px w-12 bg-orange-600/40" />
          </div>
          <h2 className="section-heading">
            The Team Behind{" "}
            <span style={{ color: "var(--orange)" }}>Your Growth</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(600px) rotateX(0) rotateY(0) translateZ(0)";
    }
  };

  return (
    <div
      ref={cardRef}
      id={member.id}
      className="team-card rounded-sm overflow-hidden cursor-none"
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
      {/* Photo area with initials placeholder */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #111 0%, #1c1c1c 100%)`,
        }}
      >
        {/* Bg glow behind avatar */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 80%, ${member.color}20 0%, transparent 70%)`,
          }}
        />

        {/* Avatar circle with initials */}
        <div
          className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}80 100%)`,
            boxShadow: `0 0 30px ${member.color}40`,
          }}
        >
          <span
            className="text-3xl font-black text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {member.initials}
          </span>
        </div>

        {/* Geometric corner accents */}
        <div
          className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2"
          style={{ borderColor: "var(--orange)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2"
          style={{ borderColor: "var(--orange)" }}
        />
      </div>

      {/* Orange accent strip */}
      <div className="team-strip" style={{ background: member.color }} />

      {/* Info */}
      <div className="p-5 flex flex-col gap-2">
        <h3
          className="font-bold text-base"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {member.name}
        </h3>
        <p className="text-xs font-medium" style={{ color: "var(--orange)" }}>
          {member.role}
        </p>
        <p className="text-xs leading-relaxed mt-1" style={{ color: "var(--silver)" }}>
          {member.desc}
        </p>
      </div>
    </div>
  );
}
