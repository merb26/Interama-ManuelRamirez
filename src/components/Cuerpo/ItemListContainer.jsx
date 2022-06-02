import ItemCount from "./ItemCount"

const ItemListContainer = ({message}) => {
  return (
    <div>
        <h1>{message}</h1>
        <ItemCount inventario="7" inicial="1" />
    </div>
  )
}

export default ItemListContainer