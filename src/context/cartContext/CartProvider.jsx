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
        // alert(`${item.name} se agr
        // ego al carrito!`)
      } else{
        // alert("Ya estaba en el carrito!")
        const updateCart = cart.map( (prod) => {
          if (prod.id === item.id){
            
            return {...prod, quantity: prod.quantity + item.quantity}
          } else {
            return prod
          }
        })
        setCart(updateCart)
      }
      // setCart([...cart, item]);
      alert(`${item.name} se agrego al carrito!`)
    }

    const clearCart = () => {
      setCart([])
    }

    const deleteItem = (item) => {
      const filtered = cart.filter((p) => p.id !== item.id)
      setCart(filtered)
      alert("Producto eliminado")
    }

    const getTotalItems = () => {
      // if (cart.length) {
      //   return cart.length
      // }
      const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0)
      return totalItems
    }

    const total = () => {
      const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0)
      return Math.round(total*100 / 100)
    }

    const checkout = () => {
      const ok = confirm("Queres finalizar la compra?")
      if (ok) {
        alert("Compra realizada")
        clearCart();
      }
    }


    const values = {cart, addItem, clearCart, getTotalItems, total, deleteItem, checkout}
    return (<CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>)
}