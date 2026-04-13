import ProgramsClient from "./ProgramsClient";

/* ================= SEO METADATA ================= */
export const metadata = {
  title:
    "Coaching Programs | Leadership, Corporate & Student Development",
  description:
    "Explore specialized coaching programs for individuals, corporates, and institutions. Designed to build leadership, emotional intelligence, and real-world performance.",
  keywords: [
    "leadership coaching programs",
    "corporate training India",
    "student development programs",
    "behavioural coaching programs",
    "executive coaching India"
  ],
  openGraph: {
    title: "Coaching Programs | Leadership & Growth",
    description:
      "Structured coaching programs for individuals, corporates, and institutions to achieve real transformation.",
    url: "https://yourdomain.com/programs", // 🔁 replace later
    siteName: "Ant Learning Hub",
    type: "website",
  },
};

export default function Page() {
  return <ProgramsClient />;
}