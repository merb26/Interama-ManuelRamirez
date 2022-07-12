import Navbar from "./components/header/Navbar.jsx"
import ItemListContainer from './components/body/itemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/body/itemDetailContainer/ItemDetailContainer.jsx"
import Cart from "./components/body/cart/Cart"
import Order from "./components/body/order/Order"
import CartContext from "./components/apis/CartContext.jsx"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from "./components/footer/Footer.jsx"

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<ItemListContainer message={"Persianas"} />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext>
  )
}

export default App;
