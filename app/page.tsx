import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import AboutPreview from "./components/AboutPreview";
import Philosophy from "./components/Philosophy";
import Audience from "./components/Audience";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import RevealGate from "./components/revealcomp/RevealGate";

import HeroWrapper from "./components/HeroWrapper";

/* ================= SEO METADATA ================= */
export const metadata = {
  metadataBase: new URL("https://antlearninghub.com"),

  title:
    "Leadership Coaching in India | Personal, Corporate & Student Growth | ANT Learning Hub",

  description:
    "Transform your personal and professional life with expert leadership and behavioural coaching. 24+ years of experience helping individuals, corporates, and students achieve clarity, confidence, and growth.",

  keywords: [
    "leadership coaching India",
    "career coaching",
    "behavioural training",
    "executive coaching",
    "student development",
    "personal growth coaching"
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Leadership Coaching | Transform Your Growth Journey",
    description:
      "Expert coaching for individuals, corporates, and institutions. Build clarity, confidence, and high-performance habits.",
    url: "https://antlearninghub.com",
    siteName: "ANT Learning Hub",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ANT Learning Hub",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <RevealGate>
        <main className="bg-[#030812]">
          <HeroWrapper />
          <AboutPreview />
          <Philosophy />
          <Audience />
          <Testimonials />
          <CTA />
        </main>

        <Footer />
      </RevealGate>
    </>
  );
}