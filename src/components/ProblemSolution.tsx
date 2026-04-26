"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const cards = [
  {
    id: "card-1",
    text: "You don't have a\nstable flow of\nqualified B2B leads",
    keyword: "leads",
    style: { top: "5%", left: "2%", width: "320px" },
  },
  {
    id: "card-2",
    text: "Marketing budget is\nbeing spent, but sales\naren't growing",
    keyword: "budget",
    style: { top: "40%", left: "12%", width: "320px", zIndex: 10 },
  },
  {
    id: "card-3",
    text: "You're a Digital\nSpecialist or\nIn-house team",
    subtext: "looking for a more\nsystematic, senior-level\nmarketing partner",
    keyword: "senior-level",
    style: { bottom: "5%", left: "2%", width: "320px" },
  },
  {
    id: "card-4",
    text: "You don't fully\nunderstand what\nyour agency",
    subtext: "or contractor is\nactually doing",
    keyword: "understand",
    style: { top: "10%", right: "20%", width: "320px", zIndex: 10 },
  },
  {
    id: "card-5",
    text: "Your ads are running,\nbut results are hard\nto explain or forecast",
    keyword: "results",
    style: { top: "45%", right: "2%", width: "300px" },
  },
  {
    id: "card-6",
    text: "You're a CEO or\nHead of Marketing",
    subtext: "who has to control\neverything personally",
    keyword: "control",
    style: { bottom: "10%", right: "12%", width: "340px", zIndex: 10 },
  },
];

const CornerAccent = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
  const classes = {
    tl: "top-0 left-0 border-t-[1.5px] border-l-[1.5px] rounded-tl-sm -mt-[1px] -ml-[1px]",
    tr: "top-0 right-0 border-t-[1.5px] border-r-[1.5px] rounded-tr-sm -mt-[1px] -mr-[1px]",
    bl: "bottom-0 left-0 border-b-[1.5px] border-l-[1.5px] rounded-bl-sm -mb-[1px] -ml-[1px]",
    br: "bottom-0 right-0 border-b-[1.5px] border-r-[1.5px] rounded-br-sm -mb-[1px] -mr-[1px]",
  };

  return (
    <div
      className={`absolute w-3 h-3 border-[#ED5D10] ${classes[position]}`}
      aria-hidden="true"
    />
  );
};

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current || !cardsRef.current) return;

      const cardElements = cardsRef.current.querySelectorAll(".target-card");
      
        gsap.fromTo(
          cardElements,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="problem-solution"
      className="relative w-full bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Background Graphic Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[120%] text-center pointer-events-none z-0">
         <span 
           className="text-[14rem] lg:text-[28rem] tracking-tighter leading-none italic whitespace-nowrap text-[#ED5D10] opacity-[0.03] transform -rotate-12 select-none"
           style={{ fontFamily: "var(--font-inter)" }}
         >
           fail for
         </span>
      </div>

      {/* Header Area */}
      <div className="container relative z-20 mb-8 lg:mb-0 pointer-events-none">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
          
          {/* Main Title */}
          <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
            This is for <br />
            <span className="block ml-12 md:ml-24 lg:ml-40 mt-2 text-white/60">you if...</span>
          </h2>

          {/* Top Right Bracket Text */}
          <div className="hidden lg:block text-right mb-6 max-w-[220px]">
             <span className="text-white/60 text-sm leading-snug tracking-wider block">
               <span className="text-[#ED5D10] mr-2 text-xl font-bold">[</span>
               You'll recognize yourself if this sounds familiar
               <span className="text-[#ED5D10] ml-2 text-xl font-bold">]</span>
             </span>
          </div>
        </div>
      </div>

      {/* Grid Platform */}
      <div 
        className="relative container mx-auto px-4 flex flex-col lg:block z-10 w-full" 
        style={{ minHeight: "1000px" }}
        ref={cardsRef}
      >
        
        {/* Mobile Bracket Text (shown before cards on mobile) */}
        <div className="lg:hidden text-center mb-10 w-full flex justify-end">
            <span className="text-white/60 text-xs sm:text-sm tracking-wider w-full max-w-[200px] text-right">
              <span className="text-[#ED5D10] mr-2 text-lg font-bold">[</span>
              You'll recognize yourself if this sounds familiar
              <span className="text-[#ED5D10] ml-2 text-lg font-bold">]</span>
            </span>
        </div>

        {/* Central Graphic (Desktop Absolute, Mobile Relative) */}
        <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[80%] md:w-[60%] lg:w-[900px] h-[300px] sm:h-[450px] lg:h-[900px] z-[5] mb-8 lg:mb-0 pointer-events-none mx-auto opacity-70">
           <Image 
             src="/cyborg_hoodie.png" 
             alt="Cyborg Lineup" 
             fill
             className="object-contain"
             sizes="(max-width: 1024px) 80vw, 900px"
             priority
           />
        </div>

        {/* The Cards (Masonry Layout on Mobile, Absolute on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:block relative z-10 w-full h-[1000px] pb-16 lg:pb-0">
          {cards.map((card) => (
            <div
              key={card.id}
              className="target-card lg:absolute p-6 md:p-8 flex flex-col justify-between bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl relative min-h-[160px] md:min-h-[220px] transition-colors hover:bg-[#161616]/90"
              style={card.style as any}
            >
              {/* Corner Accents */}
              <CornerAccent position="tl" />
              <CornerAccent position="tr" />
              <CornerAccent position="bl" />
              <CornerAccent position="br" />

              {/* Text Area */}
              <div className="flex flex-col gap-3 lg:gap-4 relative z-10 w-full mb-8 lg:mb-10">
                <p className="text-white/90 text-lg md:text-xl font-medium leading-tight whitespace-pre-line">
                  {card.text}
                </p>
                {card.subtext && (
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed self-end text-right w-3/4 md:w-2/3 whitespace-pre-line mt-2 text-balance">
                    {card.subtext}
                  </p>
                )}
              </div>

              {/* Keyword Highlights */}
              <div 
                className="absolute text-[#ED5D10] text-sm md:text-base font-semibold tracking-wide bottom-5 right-6 md:bottom-6 md:right-8"
              >
                {card.keyword}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
