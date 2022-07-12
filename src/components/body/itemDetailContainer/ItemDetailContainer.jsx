import { useParams } from "react-router-dom"

import { ItemDetail } from "../itemDetailContainer/itemDetail/ItemDetail"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

  const { id } = useParams()
  return (
    <div className="detailContainer">
      <div className="container">
        <ItemDetail id={id} />
      </div>
    </div>
  )
}

export default ItemDetailContainer