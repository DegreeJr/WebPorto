"use client";
import BackgroundBoxesDemo from "@/components/example/background-boxes-demo";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black">
      <BackgroundBoxesDemo />
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-8 lg:px-16 mt-40 space-y-8 md:space-y-0">
        
        <div className="flex-1 text-left md:pl-5 pb-10">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Welcome to My Portfolio
            </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Telkom University student in the Informatics study program with a strong passion for computing. Proficient
in Microsoft Word, PowerPoint, and Canva, as well as Python and Go programming languages
          </p>
          
          
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/DegreeJr" target="_blank" rel="noopener noreferrer">
              <Image
                src="/github-mark-white.svg"
                alt="GitHub"
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </a>
            <a href="https://linkedin.com/in/RazanDradjat" target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedin-app-white-icon.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </a>
            <a href="https://instagram.com/razanathaya" target="_blank" rel="noopener noreferrer">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 mb-10 md:mb-0">
          <Image
            src="/fotoSaya.webp"
            alt="FotoSaya"
            width={400}
            height={400}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
        
      </div>

      {/* Bottom Padding */}
      <div className="pb-32" />
    </main>
  );
}
