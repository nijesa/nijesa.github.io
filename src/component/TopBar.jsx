import React from 'react'
import { Link } from 'react-router'
import ThemeToggle from './ThemeToggle'
import useStore from '../store'

export default function TopBar(){
  const toggleMenu = useStore((s) => s.toggleMenu)

  return (
    <header className="bg-card flex items-center justify-between px-4 py-3 border-b border-accent">
      <div className="flex items-center gap-2">
        <button aria-label="menu" className="p-1" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

  <Link to="/home" aria-label="home" className="p-1">
          <svg className="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="flex-1 text-center">
        <h1 className="text-lg font-serif text-cream">Recetas pa&apos; hoy</h1>
      </div>

      <div className="flex items-center gap-2">
  <Link to="/home/PerfilPg" aria-label="profile" className="p-1">
          <svg className="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
