import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Contacto() {

    return (
        <div className='fondo'>
            <Row className="justify-content-center">
                <Col md={9}>
                    <h1 className="titulo-reg">¡Contáctanos!</h1>
                    <Form className="contact-form">

                        <Form.Group controlId="nombre">
                            <div class="grupoTexto">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Escribe tu nombre" />
                            </div>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <div class="grupoTexto">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="✉  Escribe tu email" />
                            </div>
                        </Form.Group>
                        <Form.Group controlId="telefono">
                            <div class="grupoTexto">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="tel" placeholder="☏    Escribe tu teléfono" />
                            </div>
                        </Form.Group>
                        <Form.Group controlId="mensaje">
                            <div class="grupoTexto">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control type="text" placeholder="Escribe tu mensaje" />
                            </div>

                        </Form.Group>
                        <Button variant="primary" size="lg" type="submit" className="enviar-btn">
                            Enviar
                        </Button>
                        <Button variant="secondary" size="lg" className="volver-btn">
                            Volver
                        </Button>
                    </Form>
                </Col>
                <Col md={3} className="social-media">
                    <p>Contacto: contacto@example.com</p>
                    <p>Teléfono: +123456789</p>
                </Col>
            </Row>
            
        </div>
    )
}