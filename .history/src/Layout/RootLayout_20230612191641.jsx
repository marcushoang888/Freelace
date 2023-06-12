import NavBar from '../Common/NavBar/NavBar'
import Cart from '../Common/Cart/Cart'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer/Footer'

export default function RootLayout() {
  return (
    <>
         <NavBar />
         <Outlet/>
        <Cart />
        <Footer/>
    
    
    </>
  )
}
