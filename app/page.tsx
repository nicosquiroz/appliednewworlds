import Clock from './components/Clock'

const font = 'font-[Helvetica_Neue,_Helvetica,_Arial,_sans-serif]'

export default function Page() {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen min-h-screen bg-[#f5f5f5]">
      <header className="flex flex-col items-center pt-10">
        <p className={`text-l font-medium text-[#676767] mb-1 ${font} tracking-[-.04em] leading-[.876]`}>
          VIÑA DEL MAR
          <span className="font-light"> CL</span>
        </p>
        <Clock />
      </header>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f5f5f5]">
        <section className={`mx-auto max-w-2xl pt-16 pb-20 ${font}`}>
          <h1 className="text-3xl sm:text-4xl font-medium text-[#292929] tracking-[-.03em] leading-[1.1]">
            Interfaces for complex ideas.
          </h1>

          <div className="mt-10 space-y-5 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]">
            <p>
              I work with founders, teams, and researchers to turn difficult
              technology into something people can use and understand —
              prototypes, internal tools, AI systems, demos, narratives,
              interfaces.
            </p>
            <p>
              Not websites alone. Not AI alone. Not design alone.
            </p>
            <p>
              Often the challenge isn&apos;t missing a page. It&apos;s that the
              thing doesn&apos;t have a form yet.
            </p>
          </div>

          <div className="mt-14 space-y-5 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]">
            <p>
              My background is physics, AI, software, and design. I consult on
              AI and software for large companies, and I&apos;m building{' '}
              <span className="text-[#292929]">Applied New Worlds</span> /{' '}
              <span className="text-[#292929]">Worldlines</span> — a
              research studio around intelligence, world models, and how
              complex systems become legible.
            </p>
            <p>
              I&apos;m taking a small number of projects that are technically
              ambitious, conceptually unusual, or hard to explain.
            </p>
          </div>

          <div className="mt-14 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]">
            <p>
              If you&apos;re building something like that and want to make it
              clearer, more usable, or more real — I&apos;d like to see it.
            </p>
            <a
              href="https://linkedin.com/in/nicosquiroz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[#292929] hover:text-[#FF5C00] transition-colors group"
            >
              <span className="text-lg tracking-[-.02em]">Conversemos</span>
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
