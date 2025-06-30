import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

import Approach from "@/components/Approach";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ProjectCTA from "@/components/ProjectCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageUpdater } from "@/components/LanguageUpdater";

export default function Home() {
  return (
    <>
      <LanguageUpdater lang="en" />
      <Navbar />
      <main >
        <Hero lang="en" />
        <Approach />
        <ProjectCTA />
        <Portfolio />
        <TechStack />
        <Services />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
