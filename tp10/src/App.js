import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Screens/Layout';
import Home from './Screens/Home';
import AboutUs from './Screens/AboutUs';
import Creaciones from './Screens/Creaciones';
import DetalleCreaciones from './Screens/DetalleCreaciones';
import Favoritos from './Screens/Favoritos';
import { favoritoContext}  from './Contexts/favoritoContext';
import { useEffect, useState } from 'react';

function App() {
  const [total,setTotal] = useState(0);
  /*const añadirCreacion = (crea) => {
    let yaExiste = favorito.findIndex(creacion => creacion.id === crea.id);
    if(yaExiste === -1) setFavorito([...favorito, {...crea}]);
    else {
      setFavorito(favorito.map(creacion => creacion.id === crea.id ? {...creacion, cantidad: creacion.cantidad + 1} : creacion));
    }
  }

  const eliminarCreacion = (crea) => {
    console.log("eliminar:", crea)
    setFavorito(
      favorito.filter( creation => creation.id !== crea.id )
    );}*/
  return (
    <favoritoContext.Provider value={total}>    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/creaciones" element={<Creaciones />}></Route>
            <Route path="/creaciones/:idCreacion" element={<DetalleCreaciones />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </favoritoContext.Provider>
  );
}

export default App;
