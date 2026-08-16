import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Razan Dradjat — Cybersecurity Portfolio",
  description:
    "Portfolio of Razan Dradjat — Informatics student at Telkom University specializing in penetration testing and network & IoT security.",
  openGraph: {
    title: "Razan Dradjat — Cybersecurity Portfolio",
    description:
      "Informatics student at Telkom University specializing in penetration testing and network & IoT security.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razan Dradjat — Cybersecurity Portfolio",
    description:
      "Penetration testing, network & IoT security. Informatics @ Telkom University.",
  },
};

// Default to light; only switch to dark if the visitor explicitly chose it.
const themeScript = `
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${mono.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
