export const createUiSlice = (set, get) => ({
  menuOpen: false,
  setMenuOpen: (v) => set({ menuOpen: v }),
  toggleMenu: () => set((s) => ({ menuOpen: !s.menuOpen })),
  // Theme (dark mode) state with persistence to localStorage
  isDark: typeof window !== 'undefined' ? (localStorage.getItem('isDark') === 'true') : false,
  setDark: (v) => {
    set({ isDark: v })
    if (typeof window !== 'undefined') localStorage.setItem('isDark', v)
  },
  toggleDark: () => {
    set((s) => {
      const next = !s.isDark
      if (typeof window !== 'undefined') localStorage.setItem('isDark', next)
      return { isDark: next }
    })
  },
})
