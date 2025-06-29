import CareerHero from "@/components/CareerHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CareerHero lang="de" />
      </main>
      <Footer />
    </>
  );
} 