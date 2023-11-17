import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import Card from 'react-bootstrap/Card';
import PropTypes  from 'prop-types';
import {AiFillCheckCircle} from 'react-icons/ai'
import { IconContext } from "react-icons";
import {favoritoContext} from '../Contexts/favoritoContext'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Creacion({ creacion }) {
    const navigate = useNavigate();
    const objetoFavorito = useContext(favoritoContext)
    const verificarSiEstaEnFavorito = () => {
        if (objetoFavorito.favorito.length > 0) {
            let creacionFavorita = objetoFavorito.favorito.find((creation) => creation.id === creacion.id)
            if (creacionFavorita === undefined) {
                return false
            } else {
                return true
            }
        }
    }
    return (
        <Card>
            <Card.Img variant="top" src={`/images/${creacion.imagenes}`} style={{ height: "150px" }} />
            <Card.Body>
                <Card.Title>{creacion.titulo}</Card.Title>
                <Button onClick={()=> navigate("/verDetalle",{state: creacion})} className="botonCreacion">Ver mas</Button>
                <Button onClick={()=> objetoFavorito.añadirAFavorito(creacion)} className="botonFavorito"><FavoriteIcon style={{color: "#0098DF"}} /></Button>
                {objetoFavorito.favorito.length > 0 ? verificarSiEstaEnFavorito() ? (
                    <IconContext.Provider value={{ color: "green", size: 40, className: "check" }}>
                        <AiFillCheckCircle />
                    </IconContext.Provider>
                ) : null : null}
            </Card.Body>
        </Card>

    )
}