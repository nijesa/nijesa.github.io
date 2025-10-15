import React, { useEffect, useState } from 'react'
import TopBar from '../component/TopBar'

export default function ResponsiveLayout({ children, showHeroDesktop = false, showTopBar = true }){
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e) => setIsDesktop(e.matches)
    // Some browsers support addEventListener on MediaQueryList
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else mq.addListener(handler)
    setIsDesktop(mq.matches)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else mq.removeListener(handler)
    }
  }, [])

  // Render only the matching branch so TopBar mounts once
  if (!isDesktop) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-[375px] max-w-full rounded-3xl shadow-lg overflow-hidden theme-card flex flex-col">
          {showTopBar ? <TopBar /> : null}
          <div className="p-4 overflow-auto">
            {children}
          </div>
        </div>
      </div>
    )
  }

  // Desktop
  return (
    <div className="w-full min-h-screen flex">
      {showHeroDesktop ? (
        <div className="w-1/4 bg-accent p-8 flex flex-col">
          <div className="text-4xl font-serif text-cream">RecetasPaHoy</div>
          <p className="mt-4 text-sm text-cream opacity-90">Encuentra recetas rápidas y guarda tus favoritas.</p>
          <div className="mt-auto">
            <img src="/imgs/recetaComp.jpg" alt="hero" className="w-full rounded-lg shadow-inner" />
          </div>
        </div>
      ) : null}

      <div className={`${showHeroDesktop ? 'flex-1' : 'w-full'} flex flex-col`}>
        {showTopBar ? <TopBar /> : null}
        <div className="p-8 overflow-auto h-full">
          {children}
        </div>
      </div>
    </div>
  )
}
