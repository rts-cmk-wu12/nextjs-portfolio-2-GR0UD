"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

export default function AboutPage() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "Get In Touch",
      description: `Thanks for stopping by! If you're looking for a motivated and
      detail-oriented web developer with a strong interest in front-end
      technologies and clean, responsive design—I’d love to hear from you.
      Whether it’s about a project, an internship, or just a quick
      conversation, feel free to reach out. I'm always open to new
      opportunities and ways to grow.`,
    },
    da: {
      title: "Kontakt mig",
      description: `Tak fordi du kiggede forbi! Hvis du leder efter en motiveret og
      detaljeorienteret webudvikler med stor interesse for front-end teknologier
      og rent, responsivt design – så vil jeg meget gerne høre fra dig.
      Uanset om det handler om et projekt, en praktikplads eller bare en hurtig
      snak, er du velkommen til at tage kontakt. Jeg er altid åben for nye
      muligheder og måder at udvikle mig på.`,
    },
  };

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center px-6 py-16 mx-auto max-w-[1100px] min-h-[80dvh] gap-8 '>
        <div className='w-full relative text-center'>
          <h1 className='text-4xl font-bold heading'>{content[lang].title}</h1>
          <div className='absolute top-0 right-0 flex gap-2'>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded text-sm ${
                lang === "en"
                  ? "bg-[#3F8E00] text-white"
                  : "bg-zinc-800 text-zinc-300"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("da")}
              className={`px-3 py-1 rounded text-sm ${
                lang === "da"
                  ? "bg-[#3F8E00] text-white"
                  : "bg-zinc-800 text-zinc-300"
              }`}
            >
              DA
            </button>
          </div>
        </div>

        <p className='text-md text-[#9C9C9C] leading-relaxed max-w-[900px] text-justify'>
          {content[lang].description}
        </p>

        <div className='max-w-[465px] w-full'>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
