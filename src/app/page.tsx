import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Approach from "@/components/Approach";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero lang="de" />
        <Approach />
        <Portfolio />
        <TechStack />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
