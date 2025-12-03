import { Link } from "react-router-dom"
import { Nav } from "../Nav/Nav"
import "./header.css"
export const Header = () => {
  return (
    <header>
        
        <Link to={"/"}>
        <h1>🌠PAGINA SOBRE COSAS!!🌠</h1></Link>
        <Nav/>
    </header>)
}