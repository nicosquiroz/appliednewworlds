'use client'

import { useState } from 'react'
import Clock from './components/Clock'

const font = 'font-[Helvetica_Neue,_Helvetica,_Arial,_sans-serif]'

const copy = {
  en: {
    location: 'VIÑA DEL MAR',
    country: ' CL',
    title: 'Applied New Worlds',
    opening:
      'Somewhere between code and the clouds, ideas take form for someone else.',
    intro: [
      'Applied New Worlds is a studio for research, software, and digital creation.',
      'We work with technical ideas that are still becoming clear: prototypes, tools, interfaces, demos, and systems for thinking.',
      'We believe technology is a way of exploring, expressing, and transforming what people can understand, share, and build together.',
    ],
    offerLink: 'Worldlines Sprint',
    philosophy: [
      'The studio sits between science, art, business, and AI. We are interested in how ideas become models, how models become tools, and how tools change the way people move through the world.',
      'For projects that need a product, a story, or a working sketch before anyone can say what they are. We build in that early space.',
    ],
    offerTitle: 'Worldlines Sprint',
    offer: [
      'A 2-3 week creative/technical sprint for founders, researchers, and small teams working on AI/software ideas that are not fully clear yet.',
      'We help decide what to build first, then turn it into a demo, prototype, workflow, interface, tool, or narrative that can be shown, tested, and developed further.',
    ],
    closing:
      'If you are building something new and trying to make it clearer, more useful, or more real, we would like to see it.',
    cta: "Let's talk",
  },
  es: {
    location: 'VIÑA DEL MAR',
    country: ' CL',
    title: 'Applied New Worlds',
    opening:
      'En algún punto entre el código y las nubes, las ideas toman forma para alguien más.',
    intro: [
      'Applied New Worlds es un estudio de investigación, software y creación digital.',
      'Trabajamos con ideas técnicas que todavía están tomando forma: prototipos, herramientas, interfaces, demos y sistemas para pensar.',
      'Creemos que la tecnología es una forma de explorar, expresar y transformar lo que las personas pueden entender, compartir y construir juntas.',
    ],
    offerLink: 'Worldlines Sprint',
    philosophy: [
      'El estudio se mueve entre ciencia, arte, negocios e IA. Nos interesa cómo las ideas se vuelven modelos, cómo los modelos se vuelven herramientas, y cómo las herramientas cambian la forma en que las personas se mueven por el mundo.',
      'Para proyectos que necesitan un producto, una historia o un boceto funcional antes de que alguien pueda decir exactamente qué son. Construimos en ese espacio temprano.',
    ],
    offerTitle: 'Worldlines Sprint',
    offer: [
      'Un sprint creativo/técnico de 2-3 semanas para fundadores, investigadores y equipos chicos trabajando en ideas de IA/software que todavía no están del todo claras.',
      'Ayudamos a decidir qué construir primero y luego lo convertimos en una demo, prototipo, flujo de trabajo, interfaz, herramienta o narrativa que se pueda mostrar, probar y seguir desarrollando.',
    ],
    closing:
      'Si estás construyendo algo nuevo e intentando hacerlo más claro, más útil o más real, nos gustaría verlo.',
    cta: 'Hablemos',
  },
}

export default function Page() {
  const [language, setLanguage] = useState<'en' | 'es'>('en')
  const text = copy[language]

  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen min-h-screen bg-[#f5f5f5]">
      <div
        className={`absolute right-4 top-4 flex h-8 overflow-hidden rounded-md border border-[#d8d8d8] text-xs ${font}`}
        aria-label="Language selector"
      >
        {(['en', 'es'] as const).map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={language === item}
            onClick={() => setLanguage(item)}
            className={`min-w-10 px-3 uppercase tracking-[0] transition-colors ${
              language === item
                ? 'bg-[#292929] text-[#f5f5f5]'
                : 'bg-[#f5f5f5] text-[#676767] hover:text-[#292929]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <header className="flex flex-col items-center pt-10">
        <p className={`text-l font-medium text-[#676767] mb-1 ${font} tracking-[-.04em] leading-[.876]`}>
          {text.location}
          <span className="font-light">{text.country}</span>
        </p>
        <Clock />
      </header>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f5f5f5]">
        <section className={`mx-auto max-w-2xl pt-16 pb-20 ${font}`}>
          <h1 className="text-3xl sm:text-4xl font-medium text-[#292929] tracking-[-.03em] leading-[1.1]">
            {text.title}
          </h1>

          <div className="mt-10 space-y-5 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]">
            <p>{text.opening}</p>
            {text.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              href="#worldlines-sprint"
              className="inline-block text-[#292929] hover:text-[#FF5C00] transition-colors"
            >
              {text.offerLink} ↓
            </a>
          </div>

          <div className="mt-14 space-y-5 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]">
            {text.philosophy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div
            id="worldlines-sprint"
            className="scroll-mt-10 mt-14 space-y-5 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]"
          >
            <p className="text-[#292929] italic">{text.offerTitle}</p>
            {text.offer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]">
            <p>{text.closing}</p>
            <a
              href="https://linkedin.com/in/nicosquiroz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[#292929] hover:text-[#FF5C00] transition-colors group"
            >
              <span className="text-lg tracking-[-.02em]">{text.cta}</span>
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </section>

        <section className="mx-[1%] pb-16">
          <img
            src="/images/v2.png"
            alt="Applied New Worlds"
            className="w-full h-auto rounded-3xl"
          />
        </section>
      </div>
    </div>
  )
}
