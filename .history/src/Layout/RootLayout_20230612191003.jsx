import React from 'react'
import NavBar from '../Common/NavBar/NavBar'
import Cart from '../Common/Cart/Cart'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
         <NavBar />
         <Outlet/>
        <Cart />
    
    
    
    </>
  )
}
