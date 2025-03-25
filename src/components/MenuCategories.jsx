import { useState } from 'react';
import { db } from '../firebase/config';
import  './MenuCategories.css'
import { collection, query, where, getDocs } from "firebase/firestore";
import { MenuDishes } from './MenuDishes';



export const MenuCategories = () => {

    const [categoriaActiva, setCategoriaActiva] = useState(null);
    const [platos, setPlatos] = useState ([]);



    //Funcion para obtener datos de cada categoria y establecerlas en useState que se vacia cada vez que la activas de nuevo
    const handleClick= async (categoria) => {


        // Si la categoría clickeada es la misma que la activa, desactivamos la categoría
        if (categoriaActiva === categoria) {
            setCategoriaActiva(null); 
            setPlatos([]); // Vaciamos los platos

            return;
          }

          setCategoriaActiva(categoria);
            // Funcion documentación firebase para obtener informacion mediante consultas
        const q = query(collection(db, "platos"), where("categoria", "==", categoria));

        const querySnapshot = await getDocs(q);
        const nuevosPlatos = [];



        querySnapshot.forEach((doc) => {
         
          const datos = doc.data();
          nuevosPlatos.push(datos);

        });
        setPlatos(nuevosPlatos);

       
        
    }
   
    

    return(
        <>
        <div className="categoriesContainer">
            <div className="categorieContainer firstcategorie">
                <h2>Entrantes</h2>
                <button onClick={() => handleClick ("entrantes")} className='btnCategories'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" stroke-width="1.5">
                                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
                                                </svg> 
                </button>
            </div>

        {categoriaActiva == "entrantes" && (

                <ul className="platosList">
                {platos.map((plato) => (
                    <MenuDishes  plato={plato}/>
                ) )}
                </ul>
        )}

            
            
            <div className="categorieContainer">
            <h2>Arroz</h2>
                <button onClick={() => handleClick ("arroz")} className='btnCategories'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" stroke-width="1.5">
                                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
                                                </svg> 
                </button>


            </div>

            {categoriaActiva == "arroz" && (

                <ul className="platosList">
                {platos.map((plato) => (
                    <MenuDishes  plato={plato} />
                ) )}
                </ul>
            )}

            <div className="categorieContainer">
            <h2>Ramen</h2>
                <button onClick={() => handleClick ("ramen")} className='btnCategories'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" stroke-width="1.5">
                                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
                                                </svg> 
                </button>
            </div>
            {categoriaActiva == "ramen" && (

                <ul className="platosList">
                {platos.map((plato) => (
                    <MenuDishes  plato={plato} />
                ) )}
                </ul>
            )}

            <div className="categorieContainer">
            <h2>Sashimi</h2>
                <button onClick={() => handleClick ("sashimi")} className='btnCategories'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" stroke-width="1.5">
                                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
                                                </svg> 
                </button>
            </div>

            {categoriaActiva == "sashimi" && (

                <ul className="platosList">
                {platos.map((plato) => (
                    <MenuDishes  plato={plato} />
                ) )}
                </ul>
            )}


            <div className="categorieContainer">
            <h2>Nigiri</h2>
                <button onClick={() => handleClick ("nigiri")} className='btnCategories'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" stroke-width="1.5">
                                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
                                                </svg> 
                </button>
            </div>

            {categoriaActiva == "nigiri" && (

                <ul className="platosList">
                {platos.map((plato) => (
                    <MenuDishes  plato={plato} />
                ) )}
                </ul>
            )}


            <div className="categorieContainer">
            <h2>Maki</h2>
                <button onClick={() => handleClick ("maki")} className='btnCategories'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" stroke-width="1.5">
                                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
                                                </svg> 
                </button>
            </div>

            {categoriaActiva == "maki" && (

                <ul className="platosList">
                {platos.map((plato) => (
                    <MenuDishes  plato={plato} />
                ) )}
                </ul>
            )}

            <div className="categorieContainer">
            <h2>Uramaki</h2>
                <button onClick={() => handleClick ("uramaki")} className='btnCategories'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" stroke-width="1.5">
                                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
                                                </svg> 
                </button>
            </div>

            {categoriaActiva == "uramaki" && (

                <ul className="platosList">
                {platos.map((plato) => (
                    <MenuDishes  plato={plato} />
                ) )}
                </ul>
            )}

            <div className="categorieContainer">
            <h2>Rolls especiales</h2>
                <button onClick={() => handleClick ("especiales")} className='btnCategories'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" stroke-width="1.5">
                                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
                                                </svg> 
                </button>
            </div>

            {categoriaActiva == "especiales" && (

                <ul className="platosList">
                {platos.map((plato) => (
                    <MenuDishes  plato={plato} />
                ) )}
                </ul>
            )}

            <div className="categorieContainer">
            <h2>Bebidas</h2>
                <button onClick={() => handleClick ("bebidas")} className='btnCategories'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" stroke-width="1.5">
                                                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"></path>
                                                </svg> 
                </button>
            </div>

            {categoriaActiva == "bebidas" && (

                <ul className="platosList">
                {platos.map((plato) => (
                    <MenuDishes  plato={plato} />
                ) )}
                </ul>
            )}

        

        </div>

        </>
    )
}