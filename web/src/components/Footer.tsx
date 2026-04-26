"use client";

import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "AI Infrastructure", href: "/services#ai" },
    { label: "API Economy", href: "/services#api" },
    { label: "Web 3.0", href: "/services#web3" },
    { label: "Smart Commerce", href: "/services#commerce" },
    { label: "Data Intelligence", href: "/services#data" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/work" },
    { label: "Insights Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press Kit", href: "/press" },
  ],
  Connect: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ background: "#040404", borderTop: "var(--border-subtle)" }}
      aria-label="Site footer"
    >
      {/* Top section */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link href="/" id="footer-logo" aria-label="Ranger Technologies" className="flex items-center">
              <span
                className="font-black text-2xl text-white"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                RANGER
              </span>
              <span
                className="font-black text-2xl ml-1"
                style={{ color: "var(--orange)", fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
              >
                .TECH
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--silver)" }}
            >
              The definitive technology partner for businesses entering the next decade. 10 service verticals. One unified ecosystem.
            </p>
            <div className="flex items-center gap-3">
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--orange)" }}
              />
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                growth@ranger.tech
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {["in", "𝕏", "◎", "✆"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  id={`footer-social-${i}`}
                  className="w-9 h-9 border flex items-center justify-center text-xs font-bold transition-all duration-200 hover:border-orange-500 hover:text-orange-500"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--muted)" }}
                  data-cursor-hover
                  aria-label={["LinkedIn", "Twitter/X", "Instagram", "WhatsApp"][i]}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="label-tag text-white/70">{category}</h3>
              <ul className="flex flex-col gap-3" role="list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      id={`footer-link-${label.toLowerCase().replace(/[\s/]/g, "-")}`}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "var(--silver)" }}
                      data-cursor-hover
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Large brand text */}
      <div
        className="relative overflow-hidden border-t"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        <div
          className="text-center py-10 overflow-hidden select-none"
          aria-hidden="true"
        >
          <span
            className="font-black text-[12vw] leading-none tracking-tighter block opacity-[0.035]"
            style={{ fontFamily: "var(--font-display)", color: "var(--white)" }}
          >
            RANGER TECHNOLOGIES
          </span>
        </div>

        {/* Bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 container pb-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © 2026 Ranger Technologies. All rights reserved. Confidential — ranger.tech
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                id={`footer-legal-${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-xs hover:text-white transition-colors duration-150"
                style={{ color: "var(--muted)" }}
                data-cursor-hover
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Orange accent line at very bottom */}
      <div
        className="h-0.5"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--orange) 30%, var(--orange) 70%, transparent)",
        }}
      />
    </footer>
  );
}
