import ItemList from "./ListarProductos/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ message }) => {

  const { categoria } = useParams()

  return (
    <div className="itemListContainer">
      <h2 className="titulo">{categoria ? categoria : message}</h2>
      <div className="container itemContainer">
        <ItemList categoria={categoria}/>
      </div>
    </div>
  )
}

export default ItemListContainer