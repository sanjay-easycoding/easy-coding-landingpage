import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Approach from "@/components/Approach";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return (
    <>
      <Hero lang={lang as 'de' | 'en'} />
      <Approach />
      <Portfolio />
      <TechStack />
      <Services />
      <About />
      <Testimonials />
    </>
  );
} 