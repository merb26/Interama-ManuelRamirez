import carritoIcon from "../../img/carrito.png"

const CartWidget = () => {
  return (
    <a class="navbar-brand" href="#">
      <img src={carritoIcon} alt="" width="30" height="24" />
    </a>
  )
}

export default CartWidget