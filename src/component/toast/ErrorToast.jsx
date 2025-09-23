import React from 'react'
import { toast } from 'react-hot-toast'

export default function ErrorToast({ t, message = 'Ocurrió un error' }){
  return (
    <div className="w-80 max-w-full bg-red-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <h3 className="text-red-800 text-lg font-semibold mb-1">Error</h3>
      <p className="text-red-700 mb-4">{message}</p>
      <button onClick={() => toast.dismiss(t.id)} className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">Reintentar</button>
    </div>
  )
}
