import Navbar from "./components/Encabezado/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Cuerpo/ItemListContainer/ItemListContainer';

const mensaje = "Persianas enrollables"

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer message={mensaje} />
    </>
  );
}

export default App;
