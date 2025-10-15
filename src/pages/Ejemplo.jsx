
import React from 'react'
import GoogleLogo from '../imgs/google.svg'
import { Link } from "react-router";
import ResponsiveLayout from '../layouts/ResponsiveLayout'

export default function Ejemplo() {
	return (
			<ResponsiveLayout showHeroDesktop={false} showTopBar={false}>
				{/* Desktop: two-column layout (left big title, right cream panel). Mobile: keep the phone card */}
				<div className="min-h-screen">
					<div className="md:flex md:items-stretch">
									{/* Left large title area */}
									<div className="hidden md:flex md:w-1/2 bg-accent items-center justify-center md:h-screen">
							<div className="px-12 py-8">
								<h1 className="text-6xl font-serif leading-tight text-cream">Recetas</h1>
								<h2 className="text-6xl font-serif leading-tight text-cream">pa&apos; Hoy</h2>
								<p className="mt-4 text-sm text-cream opacity-90">Recetas rápidas y fáciles, guarda las que más te gusten.</p>
							</div>
						</div>

						{/* Right cream panel (desktop) or phone card (mobile) */}
									<div className="w-full md:w-1/2 bg-card p-8 flex items-center justify-center md:h-screen">
										{/* Mobile card */}
										<div className="md:hidden w-[360px] max-w-full h-[780px] rounded-3xl shadow-lg p-6 flex flex-col items-center theme-card">
											<div className="w-full flex-1 flex flex-col items-center justify-start pt-6">
												<h1 className="text-3xl sm:text-4xl text-gray-800 font-serif text-center leading-tight">Recetas pa&apos;</h1>
												<h2 className="mt-6 text-3xl sm:text-4xl text-gray-800 font-serif text-center">Hoy</h2>

												<h3 className="mt-6 text-xl text-gray-800 text-center">Iniciar sesión</h3>

												<form className="w-full px-6 mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
													<input
														aria-label="Correo"
														placeholder="Correo..."
														className="w-full input-accent placeholder-accent rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent"
													/>

													<input
														type="password"
														aria-label="Contraseña"
														placeholder="Contraseña..."
														className="w-full bg-accent placeholder-gray-600 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent"
													/>

													<div className="text-left text-xs text-gray-600">
														<a href="#" className="underline">
															<Link to={"/Recuperar_Contrasena"}>Olvide mi contraseña</Link>
														</a>
													</div>

													<button
														type="submit"
														className="mt-2 w-full bg-accent hover:opacity-95 text-white font-semibold rounded-xl py-3 shadow-md"
													>
														<Link to={"/home"}>Iniciar Sesion</Link>
													</button>
												</form>

											</div>

											<div className="w-full pb-6 flex flex-col items-center">
												<div className="mt-6 flex items-center justify-center gap-6">
													<button aria-label="Iniciar con Google" className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center shadow">
														<Link to={"/home"}>
															<img src={GoogleLogo} alt="Google" className="w-8 h-8" />
														</Link>
													</button>

													<button aria-label="Iniciar con Outlook" className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center shadow">
														<Link to={"/home"}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
															<rect x="2" y="4" width="20" height="16" rx="3" fill="white" />
															<path d="M3 6.5L12 13L21 6.5" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link>
													</button>
												</div>
											</div>
										</div>

										{/* Desktop form inside cream panel */}
										<div className="hidden md:flex w-full h-full items-center justify-center">
											<div className="w-full max-w-md">
												<h2 className="text-3xl font-serif text-center text-gray-800 mb-6">Iniciar sesión</h2>

												<form className="w-full px-2 mt-2 space-y-4" onSubmit={(e)=>e.preventDefault()}>
													<input
														aria-label="Correo"
														placeholder="Correo..."
														className="w-full input-accent placeholder-accent rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent"
													/>

													<input
														type="password"
														aria-label="Contraseña"
														placeholder="Contraseña..."
														className="w-full bg-accent placeholder-gray-600 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent"
													/>

													<div className="text-left text-xs text-gray-600">
														<a href="#" className="underline">
															<Link to={"/Recuperar_Contrasena"}>Olvide mi contraseña</Link>
														</a>
													</div>

													<button
														type="submit"
														className="mt-2 w-full bg-[#F57C00] hover:opacity-95 text-white font-semibold rounded-xl py-3 shadow-md"
													>
														<Link to={"/home"}>Iniciar Sesion</Link>
													</button>
												</form>

												<div className="mt-6 flex items-center justify-center gap-6">
													<button aria-label="Iniciar con Google" className="w-16 h-16 rounded-xl bg-[#F57C00] flex items-center justify-center shadow">
														<Link to={"/home"}>
															<img src={GoogleLogo} alt="Google" className="w-8 h-8" />
														</Link>
													</button>

													<button aria-label="Iniciar con Outlook" className="w-16 h-16 rounded-xl bg-[#F57C00] flex items-center justify-center shadow">
														<Link to={"/home"}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
															<rect x="2" y="4" width="20" height="16" rx="3" fill="white" />
															<path d="M3 6.5L12 13L21 6.5" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
														</svg></Link>
													</button>
												</div>
											</div>
										</div>
									</div>
					</div>
				</div>
			</ResponsiveLayout>
	)
}
