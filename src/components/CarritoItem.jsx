import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

export const CarritoItem = ({cartItem}) => {


    const {id, nombre, precio, cantidad} = cartItem;
    const [platoCantidad, setPlatoCantidad] = useState(cantidad);
    const [mesa, setMesa] = useState(0);


    const dispatch = useDispatch();

     let precioTotalPlato = precio * platoCantidad;


     

     const handleCantidadPlus = () => {
        const nuevaCantidad = platoCantidad +1;
        setPlatoCantidad(nuevaCantidad)
        dispatch(updateQuantity({id, cantidad: nuevaCantidad, mesa: mesa}));

    };

    const handleCantidadMinus = () => {
        if(platoCantidad > 1) {
          const nuevaCantidad = platoCantidad -1;
            setPlatoCantidad(nuevaCantidad)
            dispatch(updateQuantity({id, cantidad: nuevaCantidad, mesa: mesa}))
        } else {
            dispatch(removeFromCart(id));
        }
    };

    return (
      <>



        <li>
          <h2>{nombre}</h2>
          <p >Cantidad: {platoCantidad}</p>

          <div className="botones__cantidad"> 
          <button onClick={handleCantidadMinus}>-</button>
             <button onClick={handleCantidadPlus}>+</button>
          </div>

          <p >Precio: {precioTotalPlato}€</p>
          

        </li>

        

      </>
    );
  };
  