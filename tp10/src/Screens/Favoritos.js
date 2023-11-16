import { useContext } from "react"
import { favoritoContext } from "../Contexts/favoritoContext"
import CreacionFavorita from "../Components/CreacionFavorita"
export default function Favoritos() {
    const objetoFavorito = useContext(favoritoContext)
    console.log(objetoFavorito.favorito)
    return (
        <div>
            <h2>Carrito</h2>
            {objetoFavorito.favorito == null ? <h1>No hay creaciones</h1> : (
                <div className="containerProductos">
                    {objetoFavorito.favorito.map((element) => {
                        console.log(element)
                        return (
                            <>
                            <CreacionFavorita producto={element} ></CreacionFavorita>
                            </>
                            
                        )
                    })}
                </div>
            )}
        </div>
    )
}