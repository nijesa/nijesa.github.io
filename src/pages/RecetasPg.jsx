import React from 'react'
import { Link } from 'react-router'
import recetaImg from '../imgs/recetaComp.jpg'

export default function RecetaPg(){
	return (
		<div className="min-h-screen flex items-center justify-center bg-[#AED581] p-4">
			<div className="w-[375px] max-w-full h-[812px] bg-[#FFF8E1] rounded-3xl shadow-lg overflow-hidden flex flex-col relative">
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

				{/* Content */}
				<main className="p-6 overflow-auto">
					<h2 className="text-2xl font-serif text-center text-gray-900 mb-6">Receta #1</h2>

					<div className="bg-[#FFF8E1] rounded-md p-4 border border-gray-200">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
							<div className="sm:col-span-2 text-sm text-gray-800 leading-relaxed">
								<p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum quis enim ac dictum. Cras erat velit, vehicula mattis enim vitae, porttitor vestibulum.</p>
								<p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum quis enim ac dictum. Cras erat velit, vehicula mattis enim vitae, porttitor vestibulum.</p>
							</div>

							<div className="w-full h-36 sm:h-auto sm:col-span-1 rounded-md overflow-hidden">
								<img src={recetaImg} alt="Receta" className="w-full h-full object-cover rounded-md" />
							</div>
						</div>
					</div>

					<section className="mt-6 space-y-4">
						<div className="bg-[#FFF8E1] rounded-md p-4 border-t border-b border-gray-200">
							<p className="text-sm text-gray-700">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum quis enim ac dictum. Cras erat velit, vehicula mattis enim vitae, porttitor vestibulum orci enim eu.</p>
						</div>

						<div className="bg-[#FFF8E1] rounded-md p-4 border-t border-b border-gray-200">
							<p className="text-sm text-gray-700">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum quis enim ac dictum. Cras erat velit, vehicula mattis enim vitae, porttitor vestibulum orci enim eu.</p>
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}