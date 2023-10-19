
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header></Header><Footer></Footer></>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/aboutus" element={<Productos></Productos>}></Route>
            <Route path="/creaciones" element={<Contacto></Contacto>}></Route>
            <Route path="/creaciones/:idCreacion" element={<DetalleProductos></DetalleProductos>}></Route>
            <Route path="/favoritos" element={<Carrito></Carrito>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
