import React from 'react'
import { toast } from 'react-hot-toast'

export default function SuccessToast({ t, message = 'Operación exitosa' }){
  return (
    <div className="w-80 max-w-full bg-green-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-green-800 text-lg font-semibold mb-1">Éxito</h3>
      <p className="text-green-700 mb-4">{message}</p>
      <button onClick={() => toast.dismiss(t.id)} className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">Continuar</button>
    </div>
  )
}
