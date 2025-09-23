
import React from 'react'
import GoogleLogo from '../imgs/google.svg'
import { Link } from "react-router";
import MainLayout from '../layouts/MainLayout'

export default function Ejemplo() {
	return (
		<MainLayout>
			{/* Phone-sized card */}
			<div className="w-[360px] max-w-full h-[780px] sm:h-auto bg-[#FFF8E1] rounded-3xl shadow-lg p-6 flex flex-col items-center">
				<div className="w-full flex-1 flex flex-col items-center justify-start pt-6">
					<h1 className="text-3xl sm:text-4xl text-gray-800 font-serif text-center leading-tight">Recetas pa&apos;</h1>
					<h2 className="mt-6 text-3xl sm:text-4xl text-gray-800 font-serif text-center">Hoy</h2>

					<h3 className="mt-6 text-xl text-gray-800 text-center">Iniciar sesión</h3>

					<form className="w-full px-6 mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
						<input
							aria-label="Correo"
							placeholder="Correo..."
							className="w-full bg-[#AED581] placeholder-gray-600 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-300"
						/>

						<input
							type="password"
							aria-label="Contraseña"
							placeholder="Contraseña..."
							className="w-full bg-[#AED581] placeholder-gray-600 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-300"
						/>

						<div className="text-left text-xs text-gray-600">
							<a href="#" className="underline">
								<Link to={"/Recuperar_Contrasena"}>Olvide mi contraseña</Link>
							</a>
						</div>

						<button
							type="submit"
							className="mt-2 w-full bg-[#F57C00] hover:bg-orange-600 text-white font-semibold rounded-xl py-3 shadow-md"
						>
							<Link to={"/"}>Iniciar Sesion</Link>
						</button>
					</form>

				</div>

				<div className="w-full pb-6 flex flex-col items-center">
					<div className="mt-6 flex items-center justify-center gap-6">
						<button aria-label="Iniciar con Google" className="w-16 h-16 rounded-xl bg-[#F57C00] flex items-center justify-center shadow">
							<Link to={"/"}>
								<img src={GoogleLogo} alt="Google" className="w-8 h-8" />
							</Link>
						</button>

						<button aria-label="Iniciar con Outlook" className="w-16 h-16 rounded-xl bg-[#F57C00] flex items-center justify-center shadow">
							{/* simple mail / outlook-like SVG */}
							<Link to={"/"}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
								<rect x="2" y="4" width="20" height="16" rx="3" fill="white" />
								<path d="M3 6.5L12 13L21 6.5" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
							</svg></Link>
						</button>
					</div>
				</div>

			</div>
		</MainLayout>
	)
}
