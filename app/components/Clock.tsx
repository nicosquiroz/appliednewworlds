'use client'
import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('es-CL', { 
        timeZone: 'America/Santiago',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
      setTime(timeStr)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return <div className="text-l font-regular text-[#8A8A8A] mb-1 font-[Helvetica_Neue,_Helvetica,_Arial,_sans-serif] tracking-[-.04em] leading-[.876]">{time}</div>
} 