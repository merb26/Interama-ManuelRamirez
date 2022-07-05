import { useState } from "react"
import { Link } from "react-router-dom"

import { useApp } from "../../Apis/CartContext"

import "./Cart.css"

const Cart = () => {
  const { cart, removingProduct, cleaningCart, total } = useApp()
  const [update, setUpdate] = useState(false)

  function remove(id) {
    removingProduct(id)
    update === false ? setUpdate(true) : setUpdate(false)
  }

  function clean() {
    cleaningCart()
  }

  return (
    <div className="cartContainer" id="cartContainer">
      <h2 className="title">Carrito</h2>
      <div className="text-center">
        {
          cart.length === 0 && <h4 className="message p-5">No hay productos agregados</h4>
        }
        {
          cart.length === 0 && <Link to="/"><button>Buscar productos</button></Link>
        }
        {
          cart.map(
            product =>
              <div className="text-center addedProduct" key={product.id}>
                <div className="card m-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img src={product.fotoUrl} className="w-75" />
                      </div>
                      <div className="col-6 information">
                        <div className="m-1">
                          {product.nombre}
                        </div>
                        <div className="m-1">
                          Precio: ${product.precio}
                        </div>
                        <div className="m-1">
                          Cantidad: {product.cantidad}
                        </div>
                        <div className="m-1">
                          Subtotal: ${product.cantidad * product.precio}
                        </div>
                      </div>
                      <div>
                        <button onClick={(e) => remove(product.id, e)}>Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )
        }
        {
          cart.length > 1 && <button className="m-3" onClick={clean}>Limpia todo</button>
        }
        {
          cart.length > 0 && <h2 className="title p-5">Total: ${total()}</h2>
        }
        {
          cart.length > 0 && <Link to="/order"><button className="m-3">Finalizar compra</button></Link>
        }
      </div>
    </div>

  )
}

export default Cart