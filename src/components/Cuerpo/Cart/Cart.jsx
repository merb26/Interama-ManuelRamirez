import { useState } from "react"
import { Link } from "react-router-dom"

import { useApp } from "../../Apis/CartContext"

import "./Cart.css"

const Cart = () => {
  const { cart, eliminandoProducto, limpiandoCarrito, total } = useApp()
  const [actualizar, setActualizar] = useState(false)

  function eliminar(id) {
    eliminandoProducto(id)
    actualizar === false ? setActualizar(true) : setActualizar(false)
  }

  function limpiar() {
    limpiandoCarrito()
  }

  return (
    <div className="cartContainer" id="cartContainer">
      <h2 className="titulo">Carrito</h2>
      <div className="text-center">
        {
          cart.length === 0 && <h4 className="message p-5">No hay productos agregados</h4>
        }
        {
          cart.length === 0 && <Link to="/"><button>Buscar productos</button></Link>
        }
        {
          cart.map(
            producto =>
              <div className="text-center productoAgregado" key={producto.id}>
                <div className="card m-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <img src={producto.fotoUrl} className="w-75" />
                      </div>
                      <div className="col-6 informacion">
                        <div className="m-1">
                          {producto.nombre}
                        </div>
                        <div className="m-1">
                          Precio: ${producto.precio}
                        </div>
                        <div className="m-1">
                          Cantidad: {producto.cantidad}
                        </div>
                        <div className="m-1">
                          Subtotal: ${producto.cantidad * producto.precio}
                        </div>
                      </div>
                      <div>
                        <button onClick={(e) => eliminar(producto.id, e)}>Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          )
        }
        {
          cart.length > 1 && <button className="m-3" onClick={limpiar}>Limpiar todo</button>
        }
        {
          cart.length > 0 && <h2 className="titulo p-5">Total: ${total()}</h2>
        }
        {
          cart.length > 0 && <Link to="/order"><button className="m-3">Finalizar compra</button></Link>
        }
      </div>
    </div>

  )
}

export default Cart