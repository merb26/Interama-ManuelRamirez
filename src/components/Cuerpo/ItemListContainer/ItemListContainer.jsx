import ItemList from "../ItemList"
import './ItemListContainer.css'

const ItemListContainer = ({ message }) => {

  return (
    <div>
      <h2 className="titulo">{message}</h2>
      <div className="container itemContainer">
        <ItemList />
      </div>
    </div>
  )
}

export default ItemListContainer