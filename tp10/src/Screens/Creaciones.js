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
                setCreaciones(res.data)
            })
            .catch(e => {
                console.log(e)
            }); 
    }, []);

    return (
        <Container fluid>
             <Row style={{ padding: '2%' }}>
                    {creaciones.map(creacion => <Col sm={2}><Creacion creacion={creacion}></Creacion>
                    </Col>)}
                </Row>
        </Container>

    )
}