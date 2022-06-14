import Navbar from "./components/Encabezado/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Cuerpo/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/Cuerpo/ItemDetailContainer/ItemDetailContainer.jsx";

const mensaje = "Persianas enrollables"
const mensaje2 = "Producto Detallado"

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer message={mensaje} />
    <ItemDetailContainer message={mensaje2} />
    </>
  );
}

export default App;
