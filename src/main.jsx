import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './component/footer/footer'
import Ejemplo from './pages/Ejemplo'
import { HashRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Botonin from './component/footer/Botonin'
import NotFound from './pages/notFound'
import Menu from './component/menu/menu'
import RecuperarCuenta from './pages/recuperarCuenta'
import RecetaComp from './component/Receta/RecetaComp'
import RecetaPg from './pages/RecetasPg'
import PerfilPg from './pages/PerfilPg'
import SharedLayout from './layouts/SharedLayout'
import { Toaster } from 'react-hot-toast'
import RecetasGuardadas from './pages/RecetasGuardadas'



createRoot(document.getElementById('root')).render(
 <StrictMode>
    <Toaster/>
     <HashRouter>
        <Routes>
          <Route path="/home" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="RecetaPg" element={<RecetaPg />} />
            <Route path="PerfilPg" element={<PerfilPg />} />
            <Route path="RecetasGuardadas" element={<RecetasGuardadas/>} />
          </Route>

          <Route path="/" element ={<Ejemplo/>}/>
          <Route path="/boton" element ={<Botonin/>}/>
          <Route path='/Recuperar_Contrasena' element={<RecuperarCuenta/>}/>
          <Route path='/RecetaComp' element={<RecetaComp/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </HashRouter>
  </StrictMode>,
)
