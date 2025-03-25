import { useDispatch, useSelector } from 'react-redux';
import  './MenuDishes.css'
import { addToCart } from '../store/cartSlice';
import { useState } from 'react';



export const MenuDishes = ({plato}) => {
    const {nombre, precio, ingredientes, id} = plato;
    const  [alert, setAlert] = useState(false);

    const dispatch = useDispatch();


    const handleAddToCart = () => {
        dispatch(addToCart({nombre, precio, id }));

        setAlert(!alert)

        setTimeout ( () => {
            setAlert(false);
        }, 1000)


      };


    return (

        <>
        <li>
              <h2>{nombre}</h2>
              <div className="ingredientes">
              <p > Ingredientes: {ingredientes.join(', ')}</p>
              </div>

              <div className="botones__cantidad">  
              <h4>{precio}€</h4>
            <button onClick={handleAddToCart}><svg width="69px" height="69px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></button></div>
            {alert && <h3 className='alert'>Plato añadido</h3>}
            </li>

        </>
            
            
    )
}