import { Link } from "react-router"
import  './NavBar.css'
export const NavBar = () => {

    return(

        <>
        <nav className="navegacion">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/menuPage"}> Menu</Link>
        <Link to={"/orderPage"}>Pedido</Link>
        <Link to={"/logInPage"}>Admin</Link>
        </nav>
        </>
    )
}