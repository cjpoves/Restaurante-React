import { useDispatch, useSelector } from 'react-redux';
import  './Pedidos.css'
import { useState } from 'react';
import { Productos } from './Productos';
import { db } from '../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';



export const PedidoHistorial = ({pedido}) => {
    const {id, estado, fecha, mesa, totalPrecio, productos } = pedido;
    const fechaFormateada = fecha?.toDate
    ? fecha.toDate().toLocaleString()
    : "Fecha no disponible";


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
                </div>
            
            </li>

        </>
            
            
    )
}