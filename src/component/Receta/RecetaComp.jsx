import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-hot-toast'
import recetaImg from '../../imgs/recetaComp.jpg'

export default function RecetaComp({
	title = 'Receta #1',
	subtitle = 'Es rápida de hacer y con materiales que tienes en tu casa',
	details = "creo o no se pq no se que tienes en tu casa pq no vivo en tu casa pero demas que tienes",
	priceLevel = 4, // number of $ to show
	difficulty = 4, // number of diamonds to show
	className = '',
	recipe = null,
}){
	const navigate = useNavigate()
	const [saved, setSaved] = useState(false)
	const dollars = '$'.repeat(Math.max(0, Math.min(4, priceLevel)))
	const diamonds = Array.from({length: Math.max(0, Math.min(4, difficulty))})

			const onOpen = () => {
				const payload = recipe || { title, subtitle, details, priceLevel, difficulty }
				navigate('/RecetaPg', { state: { recipe: payload } })
			}

			useEffect(() => {
				const payload = recipe || { title, subtitle, details, priceLevel, difficulty }
				const stored = JSON.parse(localStorage.getItem('recetasGuardadas') || '[]')
				const exists = stored.find(r => r.title === payload.title)
				setSaved(!!exists)
			}, [recipe, title, subtitle, details, priceLevel, difficulty])

			const toggleSave = (e) => {
				e.stopPropagation()
				const payload = recipe || { title, subtitle, details, priceLevel, difficulty }
				const stored = JSON.parse(localStorage.getItem('recetasGuardadas') || '[]')
				const exists = stored.find(r => r.title === payload.title)
				let next
				if (exists) {
					next = stored.filter(r => r.title !== payload.title)
					setSaved(false)
					toast.success('Receta eliminada', { duration: 2000, position: 'top-center' })
				} else {
					next = [...stored, payload]
					setSaved(true)
					toast.success('Receta guardada', { duration: 2000, position: 'top-center' })
				}
				localStorage.setItem('recetasGuardadas', JSON.stringify(next))
			}

			return (
				<article onClick={onOpen} className={`theme-card border-2 border-gray-900 rounded-lg overflow-hidden flex flex-col sm:flex-row items-stretch gap-4 p-4 ${className}`}>
					<div className="flex-1 pr-2">
						<div className="flex justify-between items-start">
							<h3 className="text-2xl font-serif text-gray-900 mb-2">{title}</h3>
							<button onClick={toggleSave} aria-label="guardar" className="p-2">
								{saved ? (
									// saved: filled icon
									<svg className="w-6 h-6 text-yellow-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 3h14v18l-7-3-7 3V3z"/></svg>
								) : (
									// not saved: outline icon - ensure path is explicitly unfilled so dark-mode CSS can't fill it
									<svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path d="M5 3h14v18l-7-3-7 3V3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ fill: 'none' }} />
									</svg>
								)}
							</button>
						</div>
						<p className="text-sm text-gray-800 mb-3">{subtitle}</p>
						<p className="text-sm text-gray-700 mb-4">{details}</p>

						<div className="flex items-center justify-between mt-2">
							<div className="text-xl text-gray-900 font-bold tracking-wider">{dollars}</div>
							<div className="flex items-center gap-1">
								{diamonds.map((_, i) => (
									<svg key={i} className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
										<path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
									</svg>
								))}
							</div>
						</div>
					</div>

					<div className="w-full sm:w-36 h-28 sm:h-auto flex-shrink-0 rounded-md overflow-hidden border border-gray-200">
						<img src={recetaImg} alt={title} className="w-full h-full object-cover" />
					</div>
				</article>
			)
}