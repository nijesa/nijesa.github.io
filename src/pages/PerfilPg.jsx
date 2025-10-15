import React from 'react'
import { Link, useNavigate } from 'react-router'


export default function PerfilPg(){
  const navigate = useNavigate()
  const onOpenR = () =>{
    navigate('/home/RecetasGuardadas')
  }
  return (
    <div className="w-full max-w-full md:max-w-none md:w-auto h-auto md:h-[680px] rounded-lg overflow-hidden flex flex-col">
      <main className="p-0 md:p-6 overflow-auto flex-1">
          <h2 className="text-2xl font-serif text-center text-gray-900 mb-6">Perfil</h2>

          <div className="theme-card p-4 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-sm text-gray-800">Foto de perfil:</div>
              <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center border-4 border-accent">
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
              className="col-span-8 input-accent rounded-full py-2 px-3 text-sm text-cream"/>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-4 text-sm text-gray-800">Correo:</div>
              <input 
              aria-label='fulano.deTal@hotmail.com'
              placeholder='fulano.deTal@hotmail.com'
              className="col-span-8 bg-accent rounded-full py-2 px-3 text-sm text-gray-900" />
            </div>

            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-4 text-sm text-gray-800">Info:</div>
              <input 
              aria-label='info'
              placeholder='info'
              className="col-span-8 bg-accent rounded-full py-2 px-3 text-sm text-gray-900"/>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-4 text-sm text-gray-800">Info2:</div>
              <input
              aria-label='info 2'
              placeholder='info 2'
              className="col-span-8 bg-accent rounded-full py-2 px-3 text-sm text-gray-900"/>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center mb-3">
              <div className="col-span-4 text-sm text-gray-800">Info3:</div>
              <input
              aria-label='info 3'
              placeholder='info 3'
              className="col-span-8 bg-accent rounded-full py-2 px-3 text-sm text-gray-900"/>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <button onClick={onOpenR} className="block bg-highlight text-center rounded-xl py-4 text-lg font-serif text-cream shadow">Recetas Guardadas</button>

            <button
  to="MisIngredientes"
  className="block bg-highlight text-center rounded-xl py-4 text-lg font-serif text-cream shadow flex items-center justify-center gap-3"
>
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#0f172a" strokeWidth="1.2" />
    <path d="M8 13c1.333-2 6-2 7 0" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  Mis ingredientes
</button>

          </div>
        </main>
      </div>
  )
}
