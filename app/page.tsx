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
            Applied New Worlds
          </h1>

          <div className="mt-10 space-y-5 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]">
            <p>
              Somewhere between code and the clouds, ideas take form for
              someone else.
            </p>
            <p>
              Applied New Worlds is a studio for research, software, and digital
              creation. We work with technical ideas that are still becoming
              clear: prototypes, tools, interfaces, demos, and systems for
              thinking.
            </p>
            <p>
              We believe technology is not only infrastructure. It is a way of
              exploring, expressing, and transforming what a group of people can
              understand together.
            </p>
          </div>

          <div className="mt-14 space-y-5 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]">
            <p>
              The studio sits between science, art, business, and AI. We are
              interested in how ideas become models, how models become tools,
              and how tools change the way people move through the world.
            </p>
            <p>
              Some projects need a product. Some need a story. Some need a
              working sketch before anyone can say what they are. We build in
              that early space.
            </p>
          </div>

          <div className="mt-14 text-[#676767] text-base sm:text-lg tracking-[-.02em] leading-[1.5]">
            <p>
              If you are building something new and trying to make it clearer,
              more useful, or more real, we would like to see it.
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
