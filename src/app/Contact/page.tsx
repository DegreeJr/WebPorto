import ContactForm from "@/components/ui/ContactForm";
import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white flex items-center justify-between p-8">
        <div className="w-[65%]">
          <ContactForm />
        </div>
        <div className="flex flex-col gap-4 place-items-start pb-10 pr-60">
          <a
            href="https://github.com/DegreeJr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <Image
              src="/github-mark-white.svg"
              alt="GitHub"
              width={32}
              height={32}
            />
            <span className="text-white text-sm">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/RazanDradjat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <Image
              src="/linkedin-app-white-icon.svg"
              alt="LinkedIn"
              width={32}
              height={32}
            />
            <span className="text-white text-sm">LinkedIn</span>
          </a>
          <a
            href="https://instagram.com/razanathaya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
            />
            <span className="text-white text-sm">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
