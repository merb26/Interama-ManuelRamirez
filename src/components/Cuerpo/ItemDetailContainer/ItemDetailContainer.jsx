import { ItemDetail } from "./VistaProductoDetail/ItemDetail"

const ItemDetailContainer = ({ message }) => {

  return (
    <div>
      <h2 className="titulo">{message}</h2>
      <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer