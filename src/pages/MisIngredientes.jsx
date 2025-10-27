import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function MisIngredientes() {
  const navigate = useNavigate()
  const [ingredients, setIngredients] = useState([
    { id: 1, name: 'nombre ingrediente', quantity: 0 },
    { id: 2, name: 'nombre ingrediente', quantity: 0 },
    { id: 3, name: 'nombre ingrediente', quantity: 0 },
    { id: 4, name: 'nombre ingrediente', quantity: 0 },
    { id: 5, name: 'nombre ingrediente', quantity: 0 },
    { id: 6, name: 'nombre ingrediente', quantity: 0 },
  ])

  const handleQuantityChange = (id, change) => {
    setIngredients(ingredients.map(ing =>
      ing.id === id ? { ...ing, quantity: Math.max(0, ing.quantity + change) } : ing
    ))
  }

  const handleAddIngredient = () => {
    const newId = Math.max(...ingredients.map(i => i.id), 0) + 1
    setIngredients([...ingredients, { id: newId, name: 'nombre ingrediente', quantity: 0 }])
  }

  return (
    <div className="w-full h-auto md:h-[680px] rounded-lg overflow-hidden flex flex-col">
      {/* Header / Title section */}
      <div className="bg-card p-4 md:p-6 border-b border-accent">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/home')}
            aria-label="back"
            className="p-2 md:hidden"
          >
            <svg className="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="text-2xl md:text-3xl font-serif text-cream flex-1 text-center">Recetas pa' hoy</h1>
          <div className="w-6 md:hidden" />
        </div>
        <h2 className="text-xl md:text-2xl font-serif text-cream text-center">Mis Ingredientes</h2>
      </div>

      {/* Main content area */}
      <main className="flex-1 overflow-auto p-4 md:p-6">
        {/* Desktop: 3 columns layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {ingredients.map(ingredient => (
            <div
              key={ingredient.id}
              className="bg-card rounded-lg p-4 border-2 border-accent flex flex-col items-center justify-center gap-4"
            >
              {/* Tomato icon */}
              <div className="text-6xl">🍅</div>
              {/* Ingredient name */}
              <div className="text-center text-sm font-serif text-cream">{ingredient.name}</div>
              {/* Quantity controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange(ingredient.id, -1)}
                  className="w-8 h-8 rounded flex items-center justify-center bg-accent text-cream font-bold text-lg"
                >
                  −
                </button>
                <span className="text-lg font-bold text-cream w-4 text-center">{ingredient.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(ingredient.id, 1)}
                  className="w-8 h-8 rounded flex items-center justify-center bg-accent text-cream font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 2 columns layout */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {ingredients.map(ingredient => (
            <div
              key={ingredient.id}
              className="bg-card rounded-lg p-3 border-2 border-accent flex flex-col items-center justify-center gap-2"
            >
              {/* Tomato icon */}
              <div className="text-4xl">🍅</div>
              {/* Ingredient name */}
              <div className="text-center text-xs font-serif text-cream">{ingredient.name}</div>
              {/* Quantity controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(ingredient.id, -1)}
                  className="w-6 h-6 rounded flex items-center justify-center bg-accent text-cream font-bold text-sm"
                >
                  −
                </button>
                <span className="text-sm font-bold text-cream w-3 text-center">{ingredient.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(ingredient.id, 1)}
                  className="w-6 h-6 rounded flex items-center justify-center bg-accent text-cream font-bold text-sm"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer button */}
      <div className="bg-highlight p-4 md:p-6 border-t border-accent">
        <button
          onClick={handleAddIngredient}
          className="w-full bg-accent hover:opacity-90 text-cream font-serif text-lg md:text-xl rounded-lg py-3 md:py-4 font-semibold"
        >
          Añadir más ingredientes
        </button>
      </div>
    </div>
  )
}
