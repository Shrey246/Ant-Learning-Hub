import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using a clean, professional font
import "./globals.css";



// Configure the font for a premium, readable feel
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "Ant Learning Hub",
  description: "Leadership and coaching experiences designed for growth.",
  icons: {
    icon: "/favicon.ico",
  },
  // Optional: Add icons or theme colors for mobile status bars
  themeColor: "#030812",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#030812] text-white antialiased selection:bg-teal-500/30 selection:text-teal-200`}
      >
        {/* - bg-[#030812]: Prevents white flashes during navigation.
          - antialiased: Makes fonts look sharper and more "premium."
          - selection: Adds a custom color when users highlight text.
        */}
        {children}
      </body>
    </html>
  );
}