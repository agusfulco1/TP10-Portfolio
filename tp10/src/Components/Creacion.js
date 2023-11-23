import '../Styles/Home.css'
import Card from 'react-bootstrap/Card';
import PropTypes  from 'prop-types';
import {favoritoContext} from '../Contexts/favoritoContext'
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Creacion({ creacion }) {
    const navigate = useNavigate();
    const objetoFavorito = useContext(favoritoContext)

    return (
        <Card className='cardCreacion'>
            <Card.Img variant="top" src={`/images/${creacion.imagenes}`} style={{ height: "250px", objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{creacion.titulo}</Card.Title>
                <Button onClick={()=> navigate("/verDetalle",{state: creacion})} className="botonCreacion">Ver mas</Button>
                {objetoFavorito.favorito.find((creation) => creation.id === creacion.id) ? (
                    <Button onClick={()=> objetoFavorito.eliminarDeFavorito(creacion)} className="botonFavorito"><FavoriteIcon style={{color: "#0098DF"}} /></Button>
                ) : <Button onClick={()=> objetoFavorito.añadirAFavorito(creacion)} className="botonFavorito"><FavoriteBorderIcon style={{color: "#0098DF"}} /></Button> }
            </Card.Body>
        </Card>

    )
}