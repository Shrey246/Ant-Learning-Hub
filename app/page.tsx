import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import Philosophy from "./components/Philosophy";
import Audience from "./components/Audience";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Using <main> here is better for accessibility. 
          The bg-[#030812] ensures the entire background remains 
          consistent if there's any overflow between sections.
      */}
      <main className="bg-[#030812]">
        <Hero />
        <AboutPreview />
        <Philosophy />
        <Audience />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}