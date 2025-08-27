import React from 'react'
import { Link } from 'react-router-dom'
import RecetaComp from '../component/Receta/RecetaComp'

export default function RecetasGuardadas(){
  const recetas = [
    { title: 'Receta #1', priceLevel: 4, difficulty: 3 },
    { title: 'Receta #2', priceLevel: 3, difficulty: 2 },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#AED581] p-4">
      <div className="w-[375px] max-w-full h-[812px] bg-[#FFF8E1] rounded-3xl shadow-lg overflow-hidden flex flex-col">
        <header className="flex items-center justify-between px-4 py-3 border-b border-[#AED581]">
          <Link to="/PerfilPg" aria-label="back" className="p-1">
            <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <div className="text-center flex-1">
            <h1 className="text-lg font-serif text-gray-900">Recetas Guardadas</h1>
          </div>

          <Link to="/" aria-label="home" className="p-1">
            <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </header>

        <main className="p-4 overflow-auto flex-1 bg-[#AED581]">
          <div className="space-y-4">
            {recetas.map((r, i) => (
              <RecetaComp key={i} title={r.title} priceLevel={r.priceLevel} difficulty={r.difficulty} />
            ))}
          </div>

          <div className="mt-6 px-2">
            <Link to="/" className="block bg-[#FFF176] text-center rounded-xl py-4 text-lg font-serif text-gray-900 shadow">Añadir más recetas</Link>
          </div>
        </main>
      </div>
    </div>
  )
}
