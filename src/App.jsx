import React from 'react'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { About, Accesories, Clothes, Home, Shoes } from './pages'


export const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        {/* Aqui se agregan todas las rutas de la aplicacion */}
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/accesories' element={<Accesories />} />
        <Route path='/clothes' element={<Clothes />} />
        <Route path='/shoes' element={<Shoes />} />

      </Routes>
    </>
  )
}
