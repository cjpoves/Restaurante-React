import  './Productos.css'


export const Productos = ({producto}) => {
    const {cantidad, nombre, id, precio } = producto;



    return (

        <>
            <li>
                <div className='productosInformacionContainer'>
                <h5>{nombre}</h5>
                <h5> Cantidad: {cantidad}</h5>
                </div>
            
            </li>

        </>
            
            
    )
}