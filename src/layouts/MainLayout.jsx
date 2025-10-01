import React from 'react'
import useStore from '../store'

export default function MainLayout({ children }){
  const isDark = useStore((s) => s.isDark)

  return (
    <div className="min-h-screen flex items-center justify-center p-4" data-theme={isDark ? 'dark' : 'light'}>
      <div className="w-[375px] max-w-full h-[812px] rounded-3xl shadow-lg overflow-hidden flex flex-col theme-card" style={{ backgroundColor: isDark ? 'var(--card)' : 'var(--card)' }}>
        {children}
      </div>
    </div>
  )
}
