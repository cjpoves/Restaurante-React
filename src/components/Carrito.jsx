import { useDispatch, useSelector } from 'react-redux';
import  './Carrito.css';
import { CarritoItem } from './CarritoItem';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { removeCart, updateMesa } from '../store/cartSlice';



export const Carrito = () => {

  const [pedidoEnviado, setPedidoEnviado] = useState(false);
  const [carritoVacio, setCarritoVacio] = useState(false);
  const [error, setError] = useState("");
  const [mesa, setMesa] = useState(1);


    const cartItems = useSelector(state => state.cart.items);
    const totalPrecio = useSelector(state => state.cart.totalPrecio);
    const mesaCarrito = useSelector(state => state.cart.mesa); 


    const dispatch = useDispatch();
    const items = useSelector(state => state.cart); 

    console.log(items)

    // Funcion para establecer el valor de la mesa
    const handleChange = (e) => {
      setMesa(e.target.value)
    }
    // Funcion para mandar el valor actual de la mesa al redux
    useEffect(() => {
      dispatch(updateMesa(mesa));
    }, [mesa]); 


    // Funcion para enviar pedidos y escribirlos en la base de datos de firestore y vaciar el carrito
    const enviarPedidoFirebase = async () => {
      
      //Si el carrito esta vacia lanza aviso
      if (cartItems.length === 0) {
        setCarritoVacio(!carritoVacio)

        setTimeout ( () => {
            setCarritoVacio(false);
        }, 1000);
        return;
      }
      
      try {
        const pedido = {
            fecha: serverTimestamp(),  
            totalPrecio: totalPrecio,
            estado: "pendiente",
            productos: cartItems,
            mesa: mesaCarrito 
        };

        const docRef = await addDoc(collection(db, "pedidos"), pedido);
        console.log("Pedido enviado con ID:", docRef.id);
        setPedidoEnviado((!pedidoEnviado))

        setTimeout ( () => {
            setPedidoEnviado(false);
        }, 1000);

        //Vacia el carrito en redux
        dispatch(removeCart());

    } catch (error) {
        console.error("Error al enviar el pedido:", error);
        setError((error))

        setTimeout ( () => {
            setError("");
        }, 1000)
    }
    }



    


    return (
      <>
      <h1 className='centerText'>Platos</h1>

      <div className='mesas'>
      <label for="mesas">Mesa:</label>
        <select onChange = {handleChange}  name="mesas" id="mesas">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
      </div>


       
   
            <div className="categoriesContainer">
        

                <ul className="platosList">
                {cartItems.map((cartItem) => (
                    <CarritoItem key={cartItem.id} cartItem={cartItem}/>
                ) )}
                </ul>
            </div>

          <h3 className='centerText' >Precio: {totalPrecio}€</h3>
                

          {carritoVacio && <h3 className='alert'>No hay platos en el pedido</h3>}
          {pedidoEnviado && <h3 className='alert'>Pedido Enviado</h3>}
          {error && <h3 className='alert'>{error}</h3>}

      
                <div className='centerBtn'>
                <button onClick={enviarPedidoFirebase} className='btnEnviarPedido'>Enviar Pedido</button>                    
                </div>
      </>
    );
  };
  