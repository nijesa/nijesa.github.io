import ResponsiveLayout from '../layouts/ResponsiveLayout'

export default function notFound(){
    return(
        <ResponsiveLayout>
          <div className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-2">404 — Página no encontrada</h1>
            <p>La pagina no ha sido encontrada, volver a la pagina anterior</p>
          </div>
        </ResponsiveLayout>
    )
}