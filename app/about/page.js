import AboutClient from "./aboutclient";

/* ================= SEO METADATA ================= */
export const metadata = {
  title:
    "About Praveen John Purushotham | Leadership & Behavioural Coach (24+ Years Experience)",
  description:
    "Discover Praveen John Purushotham — a certified leadership and behavioural coach with 24+ years of experience helping professionals, students, and organizations grow with clarity, confidence, and purpose.",
  keywords: [
    "Praveen John Purushotham",
    "leadership coaching India",
    "behavioural coaching",
    "career coaching",
    "organizational development",
    "executive coaching India",
  ],
  openGraph: {
    title: "About Praveen John | Leadership & Behavioural Coach",
    description:
      "24+ years of leadership and behavioural coaching experience. Helping individuals and organizations achieve clarity and growth.",
    url: "https://yourdomain.com/about", // 🔁 replace later with real domain
    siteName: "Ant Learning Hub",
    images: [
      {
        url: "/coach.png",
        width: 600,
        height: 700,
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <AboutClient />;
}