'use client'
import { useEffect, useState } from 'react'
import Clock from './components/Clock'
import { IBM_Plex_Sans } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export default function CustomLayout() {
  const [width, setWidth] = useState(90)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = window.innerHeight // Adjust this value to control how much scroll is needed for full expansion
      const newWidth = Math.min(90 + (scrollPosition / maxScroll) * 10, 100) // Expand from 90 to 100
      setWidth(newWidth)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <html lang="en" className="bg-[#f5f5f5]">
      <body className="min-h-screen bg-[#f5f5f5]">
        <header className="flex flex-col items-center pt-10">
            <p className="absolute left-4 text-left text-l font-medium text-[#676767] font-[Helvetica_Neue,_Helvetica,_Arial,_sans-serif] tracking-[-.04em] leading-[.876]">APPLIED NEW WORLDS</p>
          <p className="text-l font-medium text-[#676767] mb-1 font-[Helvetica_Neue,_Helvetica,_Arial,_sans-serif] tracking-[-.04em] leading-[.876]">
            VIÑA DEL MAR 
            <span className="font-light"> CL</span>
          </p>
          <Clock />
        </header>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0 bg-[#f5f5f5]">
          {/* Hero/Header Section */}
          <section className="flex flex-col items-center mx-10">
          {/* h-[90vh]  */}
          {/* <h1 className="mt-20 flex flex-col text-8xl font-medium font-[Helvetica_Neue] text-[#FF5C00] mr-3 text-left tracking-[-.03em] leading-[.876]">
              APPLIED <br></br>NEW <br></br> WORLDS
            </h1>
            <p className="mt-20 w-[45%] text-l text-left text-gray-600 font-[Helvetica_Neue] tracking-[-.02em] leading-[.876]">
              Applied New Worlds is an early-stage Research studio focused on brain-inspired Artificial Intelligence models.
            </p>  */}

            
            
            {/* <p className="mt-4 text-xl text-center text-gray-600 hover:text-[#FF5C00] cursor-pointer group flex items-center gap-2">
              GET A SITE DESIGN <span className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </p>  */}
            <img 
                src="/images/v2.png" 
                alt="Clouds"
                className="mt-10 mb-10 w-full h-auto rounded-3xl"
              />
              
          </section>
          

          {/* Additional sections as needed */}
        </div>
      </body>
    </html>
  )
}