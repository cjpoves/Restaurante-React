import { useDispatch, useSelector } from 'react-redux';
import  './Pedidos.css'
import { useState } from 'react';
import { Productos } from './Productos';
import { db } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';



export const Pedidos = ({pedido, obtenerPedidos}) => {
    const {id, estado, fecha, mesa, totalPrecio, productos } = pedido;
    const fechaFormateada = fecha?.toDate
    ? fecha.toDate().toLocaleString()
    : "Fecha no disponible";


    const eliminarPedido = async (id) => {
        
            const estadoPedidoRef = doc(db, "pedidos", id);
    
                // Set the "capital" field of the city 'DC'
                await updateDoc(estadoPedidoRef, {
                estado: "completado"
                });
                obtenerPedidos()
    }
   

    const dispatch = useDispatch();


    return (

        <>
            <li className='pedidoContenedor'>

                <h2>Estado: {estado}</h2>
                <div className='mesaFechaContenedor'> 
                <h3>Mesa: {mesa}</h3>
                <h3>Fecha: {fechaFormateada}</h3>
                </div>
                <ul className='productosContenedor'>
                 {productos.map((producto) => (
                     <Productos  producto={producto}/>
                    ) )}
                </ul>
              


                <div className="botones__cantidad">  
                <h2> Precio: {totalPrecio}€</h2>
                <button onClick={() => eliminarPedido(id)} className='btnEliminarPedido'>Eliminar Pedido</button>
                </div>
            
            </li>

        </>
            
            
    )
}