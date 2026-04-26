"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const serviceOptions = [
  "AI Infrastructure & Automation",
  "API Economy & Integration",
  "Web 3.0 & Digital Ownership",
  "Smart Commerce & D2C",
  "Data Intelligence",
  "EdTech Platform",
  "HealthTech Systems",
  "AR/VR & Spatial Tech",
  "Cybersecurity",
  "GreenTech",
  "Multiple Verticals",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under $15K",
  "$15K – $50K",
  "$50K – $150K",
  "$150K+",
  "Retainer (Monthly)",
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

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
        formRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    };
    loadGsap();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulated submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 50% 100%, rgba(224,89,16,0.1) 0%, transparent 60%), #000",
      }}
      aria-label="Contact — get in touch section"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left: Heading + info */}
          <div ref={headingRef}>
            <div className="flex items-center gap-3 mb-6">
              <span className="label-tag">[ Let&apos;s Talk ]</span>
            </div>
            <h2 className="section-heading mb-6">
              Ready to talk about{" "}
              <span style={{ color: "var(--orange)" }}>your growth?</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "var(--silver)" }}
            >
              Tell us about your business goals and we&apos;ll get back to you within 24 hours with a clear path forward.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="icon-box shrink-0" style={{ width: 36, height: 36, fontSize: 14 }}>
                  📧
                </div>
                <div>
                  <p className="label-tag text-[10px] mb-0.5">Email</p>
                  <a
                    href="mailto:growth@ranger.tech"
                    className="text-sm text-white hover:text-orange-500 transition-colors"
                    data-cursor-hover
                  >
                    growth@ranger.tech
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="icon-box shrink-0" style={{ width: 36, height: 36, fontSize: 14 }}>
                  📍
                </div>
                <div>
                  <p className="label-tag text-[10px] mb-0.5">HQ</p>
                  <span className="text-sm" style={{ color: "var(--silver)" }}>
                    Global — Remote-first operations
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { id: "social-linkedin", label: "LinkedIn", icon: "in", href: "#" },
                { id: "social-twitter", label: "Twitter/X", icon: "𝕏", href: "#" },
                { id: "social-instagram", label: "Instagram", icon: "◎", href: "#" },
                { id: "social-whatsapp", label: "WhatsApp", icon: "✆", href: "#" },
              ].map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 border flex items-center justify-center text-sm font-bold transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.12)", color: "var(--silver)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--orange)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--orange)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(224,89,16,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--silver)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                  data-cursor-hover
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            ref={formRef}
            className="rounded-sm p-8"
            style={{
              background: "var(--card-bg)",
              border: "var(--border-subtle)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
                <div
                  className="w-16 h-16 border-2 flex items-center justify-center text-2xl"
                  style={{ borderColor: "var(--orange)" }}
                >
                  ✓
                </div>
                <h3
                  className="text-2xl font-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message Received
                </h3>
                <p className="text-sm" style={{ color: "var(--silver)" }}>
                  We&apos;ll get back to you within 24 hours with a clear path forward.
                </p>
                <button
                  id="contact-reset"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      company: "",
                      service: "",
                      budget: "",
                      message: "",
                    });
                  }}
                  className="btn-outline text-sm"
                  data-cursor-hover
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate id="contact-form">
                <div className="flex flex-col gap-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Aryan Mehta"
                        className="form-input"
                        value={form.name}
                        onChange={handleChange}
                        data-cursor-hover
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="form-label">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="form-input"
                        value={form.email}
                        onChange={handleChange}
                        data-cursor-hover
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="form-label">
                      Company / Startup Name
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Acme Corp"
                      className="form-input"
                      value={form.company}
                      onChange={handleChange}
                      data-cursor-hover
                    />
                  </div>

                  {/* Service + Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="form-label">
                        Service Interest
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        className="form-input appearance-none"
                        value={form.service}
                        onChange={handleChange}
                        data-cursor-hover
                        style={{ cursor: "none" }}
                      >
                        <option value="" disabled>
                          Select vertical
                        </option>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o} style={{ background: "#111" }}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className="form-label">
                        Budget Range
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        className="form-input appearance-none"
                        value={form.budget}
                        onChange={handleChange}
                        data-cursor-hover
                        style={{ cursor: "none" }}
                      >
                        <option value="" disabled>
                          Select range
                        </option>
                        {budgetRanges.map((r) => (
                          <option key={r} value={r} style={{ background: "#111" }}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="form-label">
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Describe your current situation and what you want to achieve..."
                      className="form-input resize-none"
                      value={form.message}
                      onChange={handleChange}
                      data-cursor-hover
                    />
                  </div>

                  {/* Submit */}
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4"
                    data-cursor-hover
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="30"
                            strokeDashoffset="10"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Start the Conversation
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p
                    className="text-center text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    No spam. No pressure. Response within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
