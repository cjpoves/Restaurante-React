import { Link } from "react-router"
import { NavBarAdmin } from "../components/NavBarAdmin"
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { Pedidos } from "../components/Pedidos";

export const AdminPage = () => {
    const [categoriaActiva, setCategoriaActiva] = useState(null);
    const [pedidos, setPedidos] = useState ([]);

        //Funcion para obtener datos de pedidos y establecerlas en useState que se vacia cada vez que la activas de nuevo
        const obtenerPedidos= async () => {


            // Funcion documentación firebase para obtener informacion mediante consultas
        const q = query(collection(db, "pedidos"), where("estado", "==", "pendiente"));

        const querySnapshot = await getDocs(q);
        const nuevosPedidos = [];



        querySnapshot.forEach((doc) => {

        const datos = doc.data();
        const id = doc.id;
        nuevosPedidos.push( {id, ...datos});

        });
        setPedidos(nuevosPedidos);   

        }
    const handleClick = () => {
       obtenerPedidos();
    }
    
    

    return(
        <>
        <NavBarAdmin/>
        <h1 className="centerText">Pedidos</h1>

        <div className="btnPedidosContenedor">
            <button onClick={handleClick}>Obtener pedidos</button>
        </div>

        
            <div className="pedidosContenedor">
            <ul className="pedidosList">
                 {pedidos.map((pedido) => (
                     <Pedidos  pedido={pedido} obtenerPedidos={obtenerPedidos}/>
                    ) )}
                </ul>
            </div>
                
                 
              



        </>
    )
}    