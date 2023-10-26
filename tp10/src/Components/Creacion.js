
export default function Creacion({ creacion }) {
    const verificarSiEstaEnCarrito = () => {
        console.log(ObjetoCarrito.carrito.length)
        if (ObjetoCarrito.carrito.length > 0) {
            productoCarrito = ObjetoCarrito.carrito.find((product) => product.id === creacion.id)
            if (productoCarrito === undefined) {
                return false
            } else {
                return true
            }
        }
    }
    return (
        <Card>
            <Card.Img variant="top" src={creacion.imagen} style={{ height: "150px" }} />
            <Card.Body>
                <Card.Title>{creacion.titulo}</Card.Title>
                <Link to={'/Detalle/' + creacion.id} className="btn btn-primary boton">Ver Mas</Link>
                {ObjetoCarrito.carrito.length > 0 ? verificarSiEstaEnCarrito() ? (
                    <IconContext.Provider value={{ color: "green", size: 40, className: "check" }}>
                        <AiFillCheckCircle />
                    </IconContext.Provider>
                ) : null : null}
            </Card.Body>
        </Card>

    )
}