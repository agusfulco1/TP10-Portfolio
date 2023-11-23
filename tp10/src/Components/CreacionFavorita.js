import '../Styles/Favoritos.css'
export default function CreacionFavorita( {creacion }) {
    return (
        <div className="containerFavorito">
            <div className='row'>
                <div className='col-md-2'>
                    <div className='containerImagen'>
                        <img src={`/images/${creacion.imagenes}`} className="imagenFavorito" alt='no hay imagen'></img>
                    </div>
                </div>
                <div className='col-md-4 textoFavorito'>
                    <h2>{creacion.titulo}</h2>
                </div>
                <div className='col-md-6 textoFavorito'>
                    <h2>{creacion.fecha}</h2><br/>
                    <h2>{creacion.url}</h2>
                </div>
            </div>

        </div>
    )

}