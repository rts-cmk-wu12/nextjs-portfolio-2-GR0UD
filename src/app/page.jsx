"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

export default function Home() {
  const [lang, setLang] = useState("en");

  const text = {
    en: {
      heading: "Hey, I'm Jonas 👋",
      intro: `Hi, I’m Jonas, a Danish student currently studying at the Center
      for Medie og Kommunikation (CMK) at Roskilde Tekniske Skole. I’m
      passionate about web development and digital design, and I’m
      always exploring new tools and technologies to improve my skills.`,
      button: "Contact Me >",
    },
    da: {
      heading: "Hej, jeg hedder Jonas 👋",
      intro: `Hej, jeg hedder Jonas og er studerende på Center for Medie og Kommunikation (CMK) på Roskilde Tekniske Skole. Jeg brænder for webudvikling og digitalt design, og jeg udforsker hele tiden nye værktøjer og teknologier for at udvikle mine færdigheder.`,
      button: "Kontakt mig >",
    },
  };

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center px-6 py-16 mx-auto max-w-[1100px] min-h-[81dvh] gap-12'>
        <div className='flex flex-col-reverse sm:flex-row gap-10 items-center w-full max-w-[900px]'>
          <div className='flex-1 w-full'>
            <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
              {text[lang].heading}
            </h1>
            <p className='text-[#9C9C9C] mb-6 text-sm leading-relaxed'>
              {text[lang].intro}
            </p>
            <Link
              href='/contact'
              className='font-bold text-base inline-block bg-[#3F8E00] text-white px-16 py-5 rounded hover:bg-[#62BA1B] transition-colors ring-1 ring-[#62BA1B]'
              style={{
                boxShadow: "0px 8px 30px rgba(63, 142, 0, 0.3)",
              }}
            >
              {text[lang].button}
            </Link>
          </div>

          <div className='flex justify-center sm:justify-end relative'>
            <Image
              src='/jonas.png'
              alt='Image of Jonas'
              width={300}
              height={300}
              className='rounded-full shadow-lg'
            />
            <div className='absolute bottom-[-50px] right-0 flex gap-2'>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
