import { useDispatch, useSelector } from 'react-redux';
import  './Pedidos.css'
import { useState } from 'react';
import { Productos } from './Productos';



export const Pedidos = ({pedido}) => {
    const {estado, fecha, mesa, totalPrecio, productos } = pedido;
    const {seconds} = fecha

    const dispatch = useDispatch();


    return (

        <>
            <li className='pedidoContenedor'>
                <h2>Estado: {estado}</h2>
                <h2>Mesa: {mesa}</h2>
                <ul className='productosContenedor'>
                 {productos.map((producto) => (
                     <Productos  producto={producto}/>
                    ) )}
                </ul>
              


                <div className="botones__cantidad">  
                <h2> Precio: {totalPrecio}€</h2>
                <button className='btnEliminarPedido'>Eliminar Pedido</button>
                </div>
            
            </li>

        </>
            
            
    )
}