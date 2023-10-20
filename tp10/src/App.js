import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Screens/Layout';
import Home from './Screens/Home';
import AboutUs from './Screens/AboutUs';
import Creaciones from './Screens/Creaciones';
import DetalleCreaciones from './Screens/DetalleCreaciones';
import Favoritos from './Screens/Favoritos';
function App() {
  return (
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
  );
}

export default App;
