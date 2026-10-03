import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Services from "@/components/Services";
import TireSelector from "@/components/TireSelector";
import Performance from "@/components/Performance";
import ProductShowcase from "@/components/ProductShowcase";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <BrandStatement />
      <Services />
      <TireSelector />
      <Performance />
      <ProductShowcase />
      <WhyUs />
      <Gallery />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
