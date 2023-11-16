import '../Styles/Home.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Creacion from '../Components/Creacion';
import { Row, Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
export default function Home() {
    const [creaciones, setCreaciones] = useState([{}]);
    useEffect(() => {
        let array = []
        axios.get('http://localhost:3000/creaciones.json')
        .then((response) => {
            console.log(response.data)
            const randomProducts = getRandomProducts(response.data, 6);
            setCreaciones(randomProducts)
        })
    }, [])

    const getRandomProducts = (array, count) => {
        const shuffledArray = array.slice(); // Create a shallow copy
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray.slice(0, count);
      };
    
    return (
        <Container fluid classname="background">
        <Row style={{ padding: '2%' }}>
               {creaciones.map(creacion => <Col sm={2}><Creacion creacion={creacion}></Creacion>
               </Col>)}
           </Row>
   </Container>
    )
}