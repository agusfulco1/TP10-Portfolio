import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import Card from 'react-bootstrap/Card';
import PropTypes  from 'prop-types';
import {AiFillCheckCircle} from 'react-icons/ai'
import { IconContext } from "react-icons";
import {favoritoContext} from '../Contexts/favoritoContext'
import { useContext } from 'react';
export default function Creacion({ creacion }) {
    const objetoFavorito = useContext(favoritoContext)
    const verificarSiEstaEnCarrito = () => {
        /*console.log(ObjetoCarrito.carrito.length)
        if (ObjetoCarrito.carrito.length > 0) {
            productoCarrito = ObjetoCarrito.carrito.find((product) => product.id === creacion.id)
            if (productoCarrito === undefined) {
                return false
            } else {
                return true
            }
        }*/
    }
    console.log(creacion)
    return (
        <Card>
            <Card.Img variant="top" src={creacion.imagenes} style={{ height: "150px" }} />
            <Card.Body>
                <Card.Title>{creacion.titulo}</Card.Title>
                <Link to={'/Detalle/' + creacion.id} className="btn btn-primary boton">Ver Mas</Link>
                {objetoFavorito.favorito.length > 0 ? verificarSiEstaEnCarrito() ? (
                    <IconContext.Provider value={{ color: "green", size: 40, className: "check" }}>
                        <AiFillCheckCircle />
                    </IconContext.Provider>
                ) : null : null}
            </Card.Body>
        </Card>

    )
}