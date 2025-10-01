import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import RecetaComp from '../component/Receta/RecetaComp'
import MainLayout from '../layouts/MainLayout'

export default function RecetasGuardadas(){
  const navigate = useNavigate()
  const [recetas, setRecetas] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recetasGuardadas') || '[]')
    setRecetas(stored)
  }, [])

  return (
    <MainLayout>
      <div className="w-[375px] max-w-full h-[812px] rounded-3xl shadow-lg overflow-hidden flex flex-col theme-card">
        <main className="p-4 overflow-auto flex-1" style={{ backgroundColor: 'var(--bg)' }}>
          <div className="space-y-4">
            {recetas.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-800 text-lg mb-4">No has guardado recetas aún.</p>
                <p className="text-sm text-gray-700">Guarda recetas desde la lista para verlas aquí.</p>
              </div>
            ) : (
              recetas.map((r, i) => (
                <RecetaComp key={i} recipe={r} className="shadow-md" />
              ))
            )}
          </div>

          <div className="mt-6 px-2">
            <button onClick={() => navigate('/')} className="w-full bg-highlight text-center rounded-xl py-4 text-lg font-serif text-cream shadow">Añadir más recetas</button>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}
