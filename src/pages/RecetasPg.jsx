import React from 'react'
import { Link, useLocation } from 'react-router'
import recetaImg from '../imgs/recetaComp.jpg'
export default function RecetaPg(){
	const { state } = useLocation()
	const recipe = state?.recipe || { title: 'Receta #1', subtitle: '', details: '', priceLevel: 1, difficulty: 1 }

	return (
		<div className="w-full max-w-full md:max-w-none md:w-auto h-auto md:h-[680px] rounded-lg overflow-hidden flex flex-col">
			{/* Content */}
			<main className="p-0 md:p-6 overflow-auto">
					<h2 className="text-2xl font-serif text-center text-gray-900 mb-6">{recipe.title}</h2>

					<div className="theme-card rounded-md p-4 border border-gray-200">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
							<div className="md:col-span-2 text-sm text-gray-800 leading-relaxed">
								<p className="mb-4">{recipe.subtitle || 'No hay subtitulo'}</p>
								<p className="mb-4">{recipe.details || 'No hay detalles'}</p>
							</div>

							<div className="w-full h-36 md:h-auto md:col-span-1 rounded-md overflow-hidden">
								<img src={recetaImg} alt="Receta" className="w-full h-full object-cover rounded-md" />
							</div>
						</div>
					</div>

					<section className="mt-6 space-y-4">
						<div className="theme-card rounded-md p-4">
							<p className="text-sm text-gray-700">1. {recipe.step1 || 'Paso 1 no disponible'}</p>
						</div>

						<div className="theme-card rounded-md p-4">
							<p className="text-sm text-gray-700">2. {recipe.step2 || 'Paso 2 no disponible'}</p>
						</div>
					</section>
				</main>
					</div>
			)
}