import { createContext, useState } from "react";


export const Cart = createContext(null);

export default function CartContext({children}) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
    if (!cart) {
        setCart([])
    } 
  return (
    <Cart.Provider value={{cart, setCart}}>
        {children}
    </Cart.Provider>
  )
}
