import CareerHero from "@/components/CareerHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareerHero lang="de" />
      </main>
      <Footer />
    </>
  );
} 