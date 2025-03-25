import { Link } from "react-router"
import { NavBarAdmin } from "../components/NavBarAdmin"
import { PedidosHistorial } from "../components/PedidosHistorial"

export const AdminOrderHistory = () => {
    return(
        <>
            <NavBarAdmin/>
            <h1 className="centerText"> Historial</h1>
            <PedidosHistorial/>
        
        </>
    )
}