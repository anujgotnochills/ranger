import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import B2BProblems from "@/components/B2BProblems";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ranger Technologies — Future-Proof Service Ecosystem",
  description:
    "Ranger Technologies is a future-proof technology ecosystem spanning AI, Blockchain, AR/VR, HealthTech, EdTech, and Green Technology. The definitive technology partner for businesses entering the next decade.",
};

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* 1. Immersive hero with 3D scene */}
        <Hero />
        
        {/* 2. Problem / Solution ("This is for you...") */}
        <ProblemSolution />

        {/* 3. B2B Problems List with Lanyard */}
        <B2BProblems />
        
      </main>
      <Footer />
    </>
  );
}
