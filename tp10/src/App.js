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
  const [favorito,setFavorito] = useState([]);
  const añadirAFavorito = (crea) => {
    if (!crea.yaExiste) {
      let creacion = crea
      creacion.yaExiste = true
      setFavorito([...favorito , creacion])
  }
  else {
      setFavorito(favorito.map((product) => {
          return product
      }))
  }
  }
  return (
    <favoritoContext.Provider value={{favorito, setFavorito, añadirAFavorito}}>    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/creaciones" element={<Creaciones />}></Route>
            <Route path="/verDetalle" element={<DetalleCreaciones />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </favoritoContext.Provider>
  );
}

export default App;
