import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function RecuperarCuenta(){
  return (
    <MainLayout>
      <main className="w-[360px] max-w-full h-[800px] bg-[#FFF8E1] rounded-3xl shadow-lg p-6 flex flex-col items-center">
        <header className="w-full text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-gray-800">Recetas pa&apos; Hoy</h1>
          <h2 className="mt-6 text-3xl font-serif text-gray-800">Recuperar</h2>
          <h3 className="text-3xl font-serif text-gray-800">contraseña</h3>
        </header>

        <section className="w-full mt-6 px-4 flex-1 overflow-auto">
          <p className="text-sm text-gray-600 text-center">Inserte su correo para recibir un codigo.</p>

          <form className="mt-4 space-y-3" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" placeholder="Correo..." aria-label="Correo" className="w-full bg-[#AED581] placeholder-gray-600 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-300" />

            <button className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-semibold rounded-xl py-3">Enviar Codigo</button>
          </form>

          <div className="mt-6">
            <p className="text-sm text-gray-600">Inserte el codigo enviado al correo xxxx @xxxxx.xxx</p>

            <form className="mt-4 space-y-3" onSubmit={(e)=>e.preventDefault()}>
              <input type="text" placeholder="Codigo..." aria-label="Codigo" className="w-full bg-[#AED581] placeholder-gray-600 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-300" />

              <button className="w-full bg-[#F97316] hover:bg-orange-600 text-white font-semibold rounded-xl py-3">Cambiar Contraseña</button>
            </form>
          </div>

          <div className="mt-6 flex justify-center">
            <a href="/inicioSesion" className="inline-block bg-[#F97316] hover:bg-orange-600 text-white rounded-xl px-6 py-3">Cancelar y volver al inicio de sesión</a>
          </div>
        </section>

      </main>
    </MainLayout>
  )
}
