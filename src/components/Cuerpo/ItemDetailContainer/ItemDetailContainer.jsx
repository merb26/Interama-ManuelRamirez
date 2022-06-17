import { useParams } from "react-router-dom"
import { ItemDetail } from "./VistaProductoDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({ message }) => {

  const { id } = useParams()
  return (
    <div className="detailContainer">
      <h2 className="titulo">{message}</h2>
      <div className="container">
        <ItemDetail id={id} />
      </div>
    </div>
  )
}

export default ItemDetailContainer