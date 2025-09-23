export const createRecetasSlice = (set, get) => ({
  recetas: [],
  addReceta: (receta) => set((state) => ({ recetas: [...state.recetas, receta] })),
  removeReceta: (title) => set((state) => ({ recetas: state.recetas.filter(r => r.title !== title) })),
  clearRecetas: () => set({ recetas: [] }),
})
