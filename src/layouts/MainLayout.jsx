import React from 'react'

export default function MainLayout({ children }){
  return (
    <div className="min-h-screen bg-[#AED581] flex items-center justify-center p-4">
      <div className="w-[375px] max-w-full h-[812px] bg-[#FFF8E1] rounded-3xl shadow-lg overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  )
}
