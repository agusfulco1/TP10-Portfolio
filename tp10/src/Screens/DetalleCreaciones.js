
import { useLocation } from "react-router-dom"
export default function DetalleCreaciones() {
    const location = useLocation();
    const objetoRecibido = location.state;
    console.log("lo que recibo:", objetoRecibido)

    return (
        <div className='container'>
                <h3>Nombre del producto: {objetoRecibido.titulo}</h3>
                <img src={`/images/${objetoRecibido.imagenes}`} alt=''></img>
                <h3>Descripcion: {objetoRecibido.descripcion}</h3>
                <h2>fecha: {objetoRecibido.fecha} </h2>
                <h2>Url: {objetoRecibido.url} </h2>
    </div>
    )
}