import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const exists =(id) => {
      const exist = cart.some((p) => p.id === id)
      return exist
    }

    const addItem = (item) => {
      if (!exists(item.id)){
        setCart([...cart, item]);
        alert(`${item.name} se agrego al carrito!`)
      } else{
        alert("Ya estaba en el carrito!")
      }
    }

    const clearCart = () => {
      setCart([])
    }

    const getTotalItems = () => {
      if (cart.length) {
        return cart.length
      }
    }

    const values = {cart, addItem, clearCart, getTotalItems}
    return (<CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>)
}