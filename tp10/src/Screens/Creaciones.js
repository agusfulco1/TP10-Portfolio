import '../Styles/Home.css'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Row, Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Creacion from '../Components/Creacion';

export default function Creaciones() {
    const [creaciones, setCreaciones] = useState([{}]);
    useEffect(() => {
        axios.get('http://localhost:3000/creaciones.json')
            .then(res => {
                console.log(res)
                setCreaciones(res.data)
            })
            .catch(e => {
                console.log(e)
            });
    }, []);
    return (
        <Container fluid>
             <Row style={{ padding: '2%' }}>
                    {creaciones.map(creacion => <Col sm={2}><Creacion titulo={creacion.title} img={creacion.imagen} texto={creaciones.descripcion}  id={creacion.id}></Creacion>
                    </Col>)}
                </Row>
        </Container>

    )
}