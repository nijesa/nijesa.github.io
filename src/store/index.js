import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecetasSlice } from './recetasSlice'
import { createUiSlice } from './uiSlice'

// Compose slices into a single store
const compose = (...fns) => (set, get, api) => fns.reduce((acc, fn) => ({ ...acc, ...fn(set, get, api) }), {})

export const useStore = create(devtools((...a) => compose(createRecetasSlice, createUiSlice)(...a), { name: 'RecetasPaHoy' }))

export default useStore
