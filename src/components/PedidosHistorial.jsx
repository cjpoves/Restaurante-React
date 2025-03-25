import { useDispatch, useSelector } from 'react-redux';
import  './Pedidos.css'
import { useEffect, useState } from 'react';
import { Productos } from './Productos';
import { db } from '../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { PedidoHistorial } from './PedidoHistorial';



export const PedidosHistorial = () => {
      const [categoriaActiva, setCategoriaActiva] = useState(null);
        const [pedidos, setPedidos] = useState ([]);
    
        //Funcion para obtener datos de pedidos y establecerlas en useState que se vacia cada vez que la activas de nuevo
        const obtenerPedidos= async () => {
    
    
            // Funcion documentación firebase para obtener informacion mediante consultas
        const q = query(collection(db, "pedidos"), where("estado", "==", "completado"));
    
        const querySnapshot = await getDocs(q);
        const nuevosPedidos = [];
    
    
    
        querySnapshot.forEach((doc) => {
         
          const datos = doc.data();
          const id = doc.id;
          nuevosPedidos.push( {id, ...datos});
    
        });
        setPedidos(nuevosPedidos);     
        
    }
    
        //Uso funcion cuando se renderizan la primera vez los componentes
        useEffect(() => {
            obtenerPedidos();
    
            }
            , []); 

    return (

        <>
        <div className="pedidosContenedor">
                    <ul className="pedidosList">
                         {pedidos.map((pedido) => (
                             <PedidoHistorial  pedido={pedido}/>
                            ) )}
                        </ul>
                    </div>
        </>
            
            
    )
}