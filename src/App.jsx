import Navbar from "./components/Encabezado/Navbar.jsx";
import ItemListContainer from './components/Cuerpo/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/Cuerpo/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cuerpo/Cart/Cart";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


const mensaje = "Persianas"
const mensaje2 = "Producto Detallado"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<ItemListContainer message={mensaje} />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer message={mensaje2} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
