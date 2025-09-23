import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './component/footer/footer'
import { Toaster } from 'react-hot-toast'
import Ejemplo from './pages/Ejemplo'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import Botonin from './component/footer/Botonin'
import NotFound from './pages/notFound'
import Menu from './component/menu/menu'
import RecuperarCuenta from './pages/recuperarCuenta'
import RecetaComp from './component/Receta/RecetaComp'
import RecetasPg from './pages/RecetasPg'
import PerfilPg from './pages/PerfilPg'
import RecetasGuardadas from './pages/RecetasGuardadas'



createRoot(document.getElementById('root')).render(

  <StrictMode>
  <BrowserRouter>
  <Menu/>
  <Toaster />
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/inicioSesion" element ={<Ejemplo/>}/>
          <Route path="/boton" element ={<Botonin/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/Recuperar_Contrasena' element={<RecuperarCuenta/>}/>
          <Route path='/RecetaComp' element={<RecetaComp/>}/>
          <Route path='/RecetaPg' element={<RecetasPg/>}/>
          <Route path='/RecetasGuardadas' element={<RecetasGuardadas/>}/>
          <Route path='/PerfilPg' element={<PerfilPg/>}/>
          
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
