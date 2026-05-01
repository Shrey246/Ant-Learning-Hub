import AboutClient from "./aboutclient";

/* ================= SEO METADATA ================= */
export const metadata = {
  metadataBase: new URL("https://antlearninghub.com"),

  title:
    "About Praveen John Purushotham | Leadership & Behavioural Coach (24+ Years) | ANT Learning Hub",

  description:
    "Discover Praveen John Purushotham — a certified leadership and behavioural coach with 24+ years of experience helping professionals, students, and organizations grow with clarity, confidence, and purpose.",

  keywords: [
    "Praveen John Purushotham",
    "leadership coaching India",
    "behavioural coaching",
    "career coaching",
    "organizational development",
    "executive coaching India",
    "ANT Learning Hub"
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About Praveen John | Leadership & Behavioural Coach",
    description:
      "24+ years of leadership and behavioural coaching experience. Helping individuals and organizations achieve clarity and growth.",
    url: "https://antlearninghub.com/about",
    siteName: "ANT Learning Hub",
    type: "website",
    images: [
      {
        url: "/og-image.png", // better to keep consistent branding
        width: 1200,
        height: 630,
        alt: "Praveen John Purushotham - ANT Learning Hub",
      },
    ],
  },
};

export default function Page() {
  return <AboutClient />;
}