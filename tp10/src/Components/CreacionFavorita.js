
export default function CreacionFavorita({ creacion }) {
    console.log(creacion)
    return (
        <div className="containerCarrito">
            <div className='row'>
                <div className='col-md-2'>
                    <div className='containerImagen'>
                        <img src={creacion.imagenes} className="imagenProducto" alt='no hay imagen'></img>
                    </div>
                </div>
                <div className='col-md-6 textoCarrito'>
                    <h2>{creacion.titulo}</h2>
                </div>
                <div className='col-md-2 textoCarrito'>
                    <h2>{creacion.fecha}</h2>
                    <h2>{creacion.url}</h2>
                </div>
            </div>

        </div>
    )

}