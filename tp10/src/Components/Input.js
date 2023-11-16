import Form from 'react-bootstrap/Form';
import '../Styles/AboutUs.css';
export default function Input(props) {
    return (
        <Form.Group controlId={props.id}>
            <div className="grupoTexto">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control type={props.tipo} placeholder={props.placeholder} />
            </div>
        </Form.Group>
    )

}