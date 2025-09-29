import React from 'react'
import useStore from '../store'

export default function ThemeToggle(){
  const isDark = useStore((s) => s.isDark)
  const toggleDark = useStore((s) => s.toggleDark)

  return (
    <button
      aria-pressed={isDark}
      onClick={toggleDark}
      className="m-2 p-2 rounded-full border"
      title="Toggle theme"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
