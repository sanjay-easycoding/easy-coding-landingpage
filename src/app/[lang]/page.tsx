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

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return (
    <>
      <LanguageUpdater lang={lang as 'de' | 'en'} />
      <Navbar />
      <main>
        <Hero lang={lang as 'de' | 'en'} />
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