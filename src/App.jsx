import Navbar from "./components/Encabezado/Navbar.jsx";
import ItemListContainer from './components/Cuerpo/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/Cuerpo/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cuerpo/Cart/Cart";
import Order from "./components/Cuerpo/Order/Order";
import CartContext from "./components/Apis/CartContext.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

const mensaje = "Persianas"
const mensaje2 = "Producto Detallado"

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<ItemListContainer message={mensaje} />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer message={mensaje2} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  )
}

export default App;
