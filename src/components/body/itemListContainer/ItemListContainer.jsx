import { useParams } from "react-router-dom"

import ItemList from "./itemList/ItemList"

import './ItemListContainer.css'

const ItemListContainer = ({ message }) => {

  const { categoria } = useParams()

  return (
    <div className="itemListContainer">
      <h2 className="title">{categoria ? categoria : message}</h2>
      <div className="container itemContainer">
        <ItemList category={categoria} />
      </div>
    </div>
  )
}

export default ItemListContainer