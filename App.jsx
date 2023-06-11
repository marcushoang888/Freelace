import { RouterProvider } from "react-router-dom";
import { router } from "./src/config/router";
import { createContext, useState } from "react";
export const CartContext = createContext(null);

export default function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
    if (!cart) {
        setCart([])
    } 
  return (
    <CartContext.Provider value={{cart, setCart}}>

        <RouterProvider router={router} />
    </CartContext.Provider>
    
  )
}
