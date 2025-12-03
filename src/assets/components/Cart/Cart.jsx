import { Item } from "../Item/Item"
import { useCartContext } from "../../../context/cartContext/useCartContext"
import { Link } from "react-router-dom"

export const Cart = () => {
    const {cart, clearCart, deleteItem, total, checkout} = useCartContext()

    return <section>
        <h2>Carrito de Compras</h2>
        {cart.length ? (cart.map((prod) => <Item key={prod.id} {...prod}>
            <div>
                <span>Cantidad: {prod.quantity}</span>
            </div>
            <button onClick={() => deleteItem(prod)}>Eliminar</button>
        </Item>
        )) : (<p>Todavia no hay nada =D</p>)}
    
    
    {cart.length? (
        <div>
            <div>
                <p>Total a Pagar: ${total()}</p>
            </div>
            <button onClick={checkout}>Finalizar Compra</button>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    ) : (
        <Link to="/"><button>Volver al Inicio</button></Link>
        
    )}
    </section>


}