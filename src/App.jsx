import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login } from './auth/pages/Login'
import { ShopRouter } from './shop'
import { AuthProvider } from './auth/context/AuthContext'


export const App = () => {
  return (
    <AuthProvider>

      <Routes>
        {/* Aqui se agregan todas las rutas de la aplicacion */}
        <Route path='/login' element={<Login/>} />
        <Route path='/*' element={<ShopRouter/>}/>

      </Routes>
    </AuthProvider>
  )
}
