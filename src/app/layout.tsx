import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/example/navbar-menu-demo";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Razan",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark">
      <body className={inter.className}>
        <NavbarDemo></NavbarDemo>
        {children}
      </body>
    </html>
  );
}
