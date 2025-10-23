import { Link } from "react-router-dom"
import "./Nav.css"
import { useCartContext } from "../../../context/cartContext/useCartContext"

export const Nav = () => {
    const {getTotalItems} = useCartContext()


    return(
        <nav className="nav">
            <ul>
                <li>
                    <Link to={"/"} className="v">Home</Link>
                </li>
                <li>
                    <Link to={"/categories/dulce"} className="v">Dulce</Link>
                </li>
                <li>
                    <Link to={"/categories/salado"} className="v">Salado</Link>
                </li>
                <li>
                    <Link to={"/carrito"} className="v">Carrito</Link>
                    {(getTotalItems()>0) && (<span className="nroCarrito">{getTotalItems()}</span>)}
                    
                </li>
            </ul>
        </nav>

)}