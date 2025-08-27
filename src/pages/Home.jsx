import React, { useState } from 'react'
import RecetaComp from '../component/Receta/RecetaComp'
import { Link } from 'react-router'

export default function Home(){
    const [menuOpen, setMenuOpen] = useState(false)
    const [difficultyFilter, setDifficultyFilter] = useState(1)
    const [priceFilter, setPriceFilter] = useState(1)
        const recetas = [
                { title: 'Receta #1', priceLevel: 4, difficulty: 3 },
                { title: 'Receta #2', priceLevel: 3, difficulty: 2 },
                { title: 'Receta #3', priceLevel: 2, difficulty: 4 },
                { title: 'Receta #4', priceLevel: 1, difficulty: 1 },
        ]

        return(
            <div className="min-h-screen flex items-center justify-center bg-[#AED581] p-4">
                <div className="relative w-[375px] max-w-full h-[812px] bg-[#FFF8E1] rounded-3xl shadow-lg overflow-hidden flex flex-col">
                    {/* Header */}
                    <header className="bg-[#FFF8E1] flex items-center justify-between px-4 py-3 border-b border-[#AED581]">
                        <button aria-label="menu" className="p-1" onClick={()=>setMenuOpen(true)}>
                            <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6H21M3 12H21M3 18H21" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="flex-1 text-center">
                            <h1 className="text-lg font-serif text-gray-900">Recetas pa&apos; hoy</h1>
                        </div>

                        <button aria-label="profile" className="p-1">
                            <Link to="/PerfilPg">
                                <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20c0-4 4-7 8-7s8 3 8 7" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </button>
                    </header>

                    {/* Menu overlay (slides from top of card) */}
                    <div className={`absolute inset-0 z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                        <div className="h-full bg-[#FFF8E1] p-4">
                            <div className="flex items-center justify-between mb-4">
                                <button aria-label="close menu" onClick={()=>setMenuOpen(false)} className="p-1">
                                    <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 18L9 12L15 6" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <h2 className="h-center text-lg font-serif">Recetas pa&apos; hoy</h2>
                                <div className="w-6" />
                            </div>

                            <div className="mb-4">
                                <input aria-label="Buscar receta" placeholder="Buscar receta..." className="w-full bg-[#AED581] placeholder-gray-600 rounded-full py-3 px-4 shadow-inner" />
                            </div>

                            <h3 className="text-center text-lg font-serif mb-3">Filtros</h3>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                        className="bg-[#FFF176] rounded-lg py-3 text-center"
                                        onClick={() => setDifficultyFilter(d => d === 5 ? 1 : d + 1)}
                                >
                                    <div className="text-sm">Dificultad</div>
                                    <div className="mt-1">{'♦ '.repeat(difficultyFilter).trim()}</div>
                                </button>

                                <button className="bg-[#FFF176] rounded-lg py-3 text-center">Ingredientes</button>

                                <button
                                    className="bg-[#FFF176] rounded-lg py-3 text-center"
                                    onClick={() => setPriceFilter(p => p === 5 ? 1 : p + 1)}
                                >
                                    <div className="text-sm">Precio</div>
                                    <div className="mt-1">{'$ '.repeat(priceFilter).trim()}</div>
                                </button>

                                <button className="bg-[#FFF176] rounded-lg py-3 text-center">Tiempo</button>
                            </div>
                        </div>
                    </div>

                    {/* Content list */}
                    <div className="p-4 space-y-4 overflow-auto bg-[#AED581]">
                        {recetas.map((r, idx) => (
                            <RecetaComp key={idx} title={r.title} priceLevel={r.priceLevel} difficulty={r.difficulty} />
                        ))}
                    </div>
                </div>
            </div>
        )
}