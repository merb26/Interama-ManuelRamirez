import { useContext } from "react"
import { createContext, useState } from "react"

const appContext = createContext([])

export const useApp = () => useContext(appContext)

const CartContext = ({ children }) => {

  const [cart, setCart] = useState([])

  const agregandoProducto = (producto) => {
    let isComparado = false
    cart.forEach(element => {
      if (element.id === producto.id) {
        element.cantidad += producto.cantidad
        isComparado = true
      }
    })
    !isComparado && setCart([...cart, producto])
  }

  const eliminandoProducto = (id) => {
    let i = 0
    cart.forEach(element => {
      element.id === id && cart.splice(i, 1)
      i++
    })
  }

  const limpiandoCarrito = () => {
    setCart([])
  }

  return (
    <appContext.Provider value={{
      cart,
      agregandoProducto,
      eliminandoProducto,
      limpiandoCarrito
    }}>
      {children}
    </appContext.Provider>
  )
}

export default CartContext