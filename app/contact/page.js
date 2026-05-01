import ContactClient from "./ContactClient";

/* ================= SEO METADATA ================= */
export const metadata = {
  metadataBase: new URL("https://antlearninghub.com"),

  title:
    "Contact ANT Learning Hub | Book Leadership Coaching Session",

  description:
    "Get in touch with ANT Learning Hub to start your leadership and personal growth journey. Book a consultation session and take the next step towards clarity, confidence, and success.",

  keywords: [
    "contact leadership coach India",
    "book coaching session India",
    "ANT Learning Hub contact",
    "career coaching consultation",
    "leadership coaching booking",
    "personal growth consultation"
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact ANT Learning Hub | Book a Coaching Session",
    description:
      "Reach out to start your personal and professional growth journey with expert coaching.",
    url: "https://antlearninghub.com/contact",
    siteName: "ANT Learning Hub",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact ANT Learning Hub",
      },
    ],
  },
};

export default function Page() {
  return <ContactClient />;
}