import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Input from '../Components/Input';
import '../Styles/AboutUs.css';

export default function AboutUs() {

    return (
        <div className='container'>
            <h1>About Us</h1>
            <p>Bienvenido a nuestro equipo.</p>
            <h1>CUIDADO CON EL EXCESO DE FACHA!!!!!</h1>

            <h2>Integrantes:</h2>
            <ul className='lista'>
                <li>
                    <div className='containerAbout'>
                        <img src='https://experienciasdeunachica.files.wordpress.com/2015/05/807.jpg' className='img'></img>
                        <div className='containerAbout2'>
                            <h2><strong>Agustin Fulco</strong></h2><br></br>
                            <h2> Email: <a href="mailto:agustin.nulco@example.com">agustin.fulco@gmail.com</a></h2><br></br>
                            <h2>Teléfono: +1 (555) 123-4567<br></br></h2>
                        </div>
                        
                    </div>
                </li>

                <li>
                    <div className='containerAbout'>
                        <img src='https://www.ole.com.ar/2017/12/07/rJUZhlwZM_860x575__1.jpg' className='img'></img>
                        <div className='containerAbout2'>
                        <h2><strong>Tiago Glusman</strong></h2><br></br>
                        <h2> Email: <a href="mailto:teglus@example.com">teglus@gmail.com</a> </h2><br></br>
                        <h2> Teléfono: +1 (555) 234-5678</h2><br></br>
                        </div>
                    </div>
                    
                    
                    
                </li>
                <li>
                    <div className='containerAbout'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfEH-rpjCil6NU7VpR-U5NUN-ZBpvpCF5N-Q&usqp=CAU' className='img'></img>
                        <div className='containerAbout2'>
                            <h2><strong>Julian Caraballo</strong></h2><br></br>
                            <h2>Email: <a href="mailto:julian.caraballo@example.com">julian.caraballo@gmail.com</a></h2><br></br>
                            <h2>Teléfono: +1 (555) 345-6789</h2><br></br>
                        </div>
                    </div>
                    
                    
                </li>
            </ul>
        </div>

    )
}