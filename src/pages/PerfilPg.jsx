import React from 'react'
import { Link } from 'react-router'
import MainLayout from '../layouts/MainLayout'

export default function PerfilPg(){
  return (
    <MainLayout>
      <div className="w-[375px] max-w-full h-[812px] bg-[#FFF8E1] rounded-3xl shadow-lg overflow-hidden flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-[#AED581]">
          <Link to="/" aria-label="back" className="p-1">
            <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <div className="text-center flex-1">
            <h1 className="text-lg font-serif text-gray-900">Recetas pa&apos; hoy</h1>
          </div>

          <Link to="/" aria-label="home" className="p-1">
            <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </header>

        <main className="p-6 overflow-auto flex-1">
          <h2 className="text-2xl font-serif text-center text-gray-900 mb-6">Perfil</h2>

          <div className="bg-[#FFF8E1] p-2 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-sm text-gray-800">Foto de perfil:</div>
              <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center border-4 border-[#AED581]">
                {/* simple avatar placeholder */}
                <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20c0-3.866 3.582-7 8-7s8 3.134 8 7" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-4 text-sm text-gray-800">Nombre:</div>
              <input
              aria-label='fulano de tal'
              placeholder='fulano de tal'
              className="col-span-8 bg-[#AED581] rounded-full py-2 px-3 text-sm text-gray-900"/>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-4 text-sm text-gray-800">Correo:</div>
              <input 
              aria-label='fulano.deTal@hotmail.com'
              placeholder='fulano.deTal@hotmail.com'
              className="col-span-8 bg-[#AED581] rounded-full py-2 px-3 text-sm text-gray-900" />
            </div>

            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-4 text-sm text-gray-800">Info:</div>
              <input 
              aria-label='info'
              placeholder='info'
              className="col-span-8 bg-[#AED581] rounded-full py-2 px-3 text-sm text-gray-900"/>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-4 text-sm text-gray-800">Info2:</div>
              <input
              aria-label='info 2'
              placeholder='info 2'
              className="col-span-8 bg-[#AED581] rounded-full py-2 px-3 text-sm text-gray-900"/>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-4 text-sm text-gray-800">Info3:</div>
              <input
              aria-label='info 3'
              placeholder='info 3'
              className="col-span-8 bg-[#AED581] rounded-full py-2 px-3 text-sm text-gray-900"/>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <Link to="/RecetasGuardadas" className="block bg-[#FFF176] text-center rounded-xl py-4 text-lg font-serif text-gray-900 shadow">Recetas Guardadas</Link>

            <Link to="/MisIngredientes" className="block bg-[#FFF176] text-center rounded-xl py-4 text-lg font-serif text-gray-900 shadow flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#0f172a" strokeWidth="1.2" />
                <path d="M8 13c1.333-2 6-2 7 0" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Mis ingredientes
            </Link>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}
