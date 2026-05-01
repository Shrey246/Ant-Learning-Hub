import ProgramsClient from "./ProgramsClient";

/* ================= SEO METADATA ================= */
export const metadata = {
  metadataBase: new URL("https://antlearninghub.com"),

  title:
    "Coaching Programs | Leadership, Corporate & Student Development | ANT Learning Hub",

  description:
    "Explore specialized coaching programs for individuals, corporates, and institutions. Designed to build leadership, emotional intelligence, and real-world performance.",

  keywords: [
    "leadership coaching programs India",
    "corporate training India",
    "student development programs",
    "behavioural coaching programs",
    "executive coaching India",
    "personal growth programs"
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Coaching Programs | Leadership & Growth | ANT Learning Hub",
    description:
      "Structured coaching programs for individuals, corporates, and institutions to achieve real transformation.",
    url: "https://antlearninghub.com/programs",
    siteName: "ANT Learning Hub",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ANT Learning Hub Coaching Programs",
      },
    ],
  },
};

export default function Page() {
  return <ProgramsClient />;
}