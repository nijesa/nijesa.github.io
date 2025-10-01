export const createUiSlice = (set, get) => ({
  menuOpen: false,
  setMenuOpen: (v) => set({ menuOpen: v }),
  toggleMenu: () => set((s) => ({ menuOpen: !s.menuOpen })),
  // Theme (dark mode) state with persistence to localStorage
  // Initialize isDark: prefer explicit saved preference, otherwise use system/browser prefers-color-scheme
  isDark: (() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('isDark')
    if (saved !== null) return saved === 'true'
    if (window.matchMedia) return window.matchMedia('(prefers-color-scheme: dark)').matches
    return false
  })(),
  setDark: (v, { explicit = true } = {}) => {
    set({ isDark: v })
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDark', v)
      if (explicit) localStorage.setItem('isDarkExplicit', 'true')
    }
  },
  toggleDark: () => {
    set((s) => {
      const next = !s.isDark
      if (typeof window !== 'undefined') {
        localStorage.setItem('isDark', next)
        localStorage.setItem('isDarkExplicit', 'true')
      }
      return { isDark: next }
    })
  },

  // Listen to system theme changes when there is no explicit saved preference
  _attachSystemThemeListener: (() => {
    if (typeof window === 'undefined') return null
    try {
      // avoid attaching multiple times (HMR / re-create)
      if (window.__recetas_theme_listener_attached) return null
      const saved = localStorage.getItem('isDark')
      const hasExplicit = localStorage.getItem('isDarkExplicit') === 'true' || saved !== null
      if (hasExplicit) {
        window.__recetas_theme_listener_attached = true
        return null
      }
      const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
      if (!mql) {
        window.__recetas_theme_listener_attached = true
        return null
      }
      const listener = (e) => {
        // Only update when there is still no explicit user preference
        const stillHasExplicit = localStorage.getItem('isDarkExplicit') === 'true' || localStorage.getItem('isDark') !== null
        if (stillHasExplicit) return
        set({ isDark: !!e.matches })
      }
      if (mql.addEventListener) mql.addEventListener('change', listener)
      else if (mql.addListener) mql.addListener(listener)
      window.__recetas_theme_listener_attached = true
      return { mql, listener }
    } catch (err) {
      // ignore errors (older browsers)
      return null
    }
  })(),
})
