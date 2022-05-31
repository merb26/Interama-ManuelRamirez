import './App.css';
import Navbar from "./components/Encabezado/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Cuerpo/ItemListContainer';

const mensaje = "Bienvenido al mundo React"

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer message={mensaje} />
    </>
  );
}

export default App;
