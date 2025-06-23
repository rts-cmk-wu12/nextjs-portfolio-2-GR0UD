"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutPage() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "About",
      text: (
        <>
          I’m Jonas, a web development student with a strong focus on front-end
          technologies and digital design. What drives me is the satisfaction of
          creating websites that not only look good but actually feel good to
          use. I enjoy working with HTML, CSS, and JavaScript, and recently I’ve
          been diving into frameworks like React and tools like Tailwind CSS and
          Figma to expand my skill set.
          <br />
          <br />
          What I love most is the creative freedom in web development—finding
          the balance between technical structure and visual expression. Whether
          it's designing a simple landing page or building a small web app, I’m
          always looking for new ways to improve both performance and usability.
          <br />
          <br />
          Outside of coding, I’m a huge fan of photography and love capturing
          street life and nature—my favorite camera right now is the Fujifilm
          X-T30. I also enjoy making music with Ableton Live, and when I need to
          relax, I dive into games like <em>The Witcher 3</em> or <em>Hades</em>
          . These hobbies help me stay creative and think in different ways,
          which I believe makes me a better developer too.
          <br />
          <br />
          I’m curious by nature and always open to learning new things. My goal
          is to keep growing through hands-on projects, real-world experience,
          and good collaboration.
        </>
      ),
    },
    da: {
      title: "Om mig",
      text: (
        <>
          Jeg hedder Jonas og er en webudviklingsstuderende med fokus på
          frontend-teknologier og digitalt design. Det der driver mig, er
          tilfredsstillelsen ved at skabe hjemmesider, der ikke bare ser godt
          ud, men også føles gode at bruge. Jeg elsker at arbejde med HTML, CSS
          og JavaScript, og for nylig er jeg begyndt at udforske frameworks som
          React og værktøjer som Tailwind CSS og Figma for at udvikle mine
          færdigheder.
          <br />
          <br />
          Det jeg elsker mest ved webudvikling er den kreative frihed – at finde
          balancen mellem teknisk struktur og visuel udtryk. Uanset om jeg
          designer en simpel landingsside eller bygger en lille webapp, søger
          jeg altid nye måder at forbedre både performance og brugervenlighed.
          <br />
          <br />
          Uden for kodning er jeg vild med fotografi og elsker at fange byliv og
          natur – mit yndlingskamera lige nu er Fujifilm X-T30. Jeg laver også
          musik i Ableton Live, og når jeg slapper af, spiller jeg spil som{" "}
          <em>The Witcher 3</em> og <em>Hades</em>. Disse hobbyer hjælper mig
          med at tænke kreativt og anderledes – og det gør mig til en bedre
          udvikler.
          <br />
          <br />
          Jeg er nysgerrig af natur og altid åben for at lære noget nyt. Mit mål
          er at blive ved med at udvikle mig gennem praktiske projekter,
          erfaring og godt samarbejde.
        </>
      ),
    },
  };

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center px-6 py-16 mx-auto max-w-[1100px] min-h-[80dvh] gap-8 '>
        <div className='w-full relative text-center'>
          <h1 className='text-4xl font-bold'>{content[lang].title}</h1>
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

        <p className='text-md text-[#9C9C9C] leading-relaxed max-w-3xl text-justify'>
          {content[lang].text}
        </p>
      </main>
      <Footer />
    </>
  );
}
