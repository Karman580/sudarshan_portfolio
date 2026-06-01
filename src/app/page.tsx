import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Downloads from "@/components/Downloads";
import Team from "@/components/Team";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
      <UseCases />
      <Downloads />
      <TechStack />
      <Team />
      <Contact />
    </main>
  );
}
