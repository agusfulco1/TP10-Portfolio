
import '../Styles/Detalle.css'
import { useLocation } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from 'react-bootstrap/Button';
export default function DetalleCreaciones() {
    const location = useLocation();
    const objetoRecibido = location.state;

    return (
        <div className='container'>
                <h1>{objetoRecibido.titulo}</h1>
                <div className='containerInfo'>
                    <img src={`/images/${objetoRecibido.imagenes}`} alt='' className='imagen'></img>
                    <div className='containerInfo2'>
                        <h3>{objetoRecibido.descripcion}</h3>
                        <h3>{objetoRecibido.fecha}</h3>
                        <Button onClick={()=> window.open(objetoRecibido.url)} className="botonGithub"><GitHubIcon style={{color: "#0098DF", fontSize: '60px', justifyContent: 'start', display: 'flex'}} /></Button>
                    </div>
                </div>
                
                
    </div>
    )
}