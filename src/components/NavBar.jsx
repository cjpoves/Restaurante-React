import { Link } from "react-router"
import  './NavBar.css'
export const NavBar = () => {

    return(

        <>
        <nav className="navegacion">
        <Link to={"/"}>Main Page</Link>
        <Link to={"/menuPage"}> Menu Page</Link>
        <Link to={"/orderPage"}> Order Page</Link>
        </nav>
        </>
    )
}