import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { FeaturesGrid } from "@/components/FeaturesGrid/FeaturesGrid";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <FeaturesGrid />
      <Footer />
    </main>
  );
};
