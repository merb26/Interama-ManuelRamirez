import { useContext, useEffect } from "react"
import { createContext, useState } from "react"

const appContext = createContext([])

export const useApp = () => useContext(appContext)

const CartContext = ({ children }) => {

  const [cart, setCart] = useState([])
  const [cantCart, setCantCart] = useState(0)

  const agregandoProducto = (producto) => {
    let isComparado = false
    cart.forEach(element => {
      if (element.id === producto.id) {
        element.cantidad += producto.cantidad
        isComparado = true
      }
    })
    !isComparado && setCart([...cart, producto])
    setCantCart(cantCart + producto.cantidad)
  }

  const eliminandoProducto = (id) => {
    let i = 0
    cart.forEach(element => {
      if (element.id === id) {
        setCantCart(cantCart - element.cantidad)
        cart.splice(i, 1)
      }
      i++
    })

  }

  const limpiandoCarrito = () => {
    setCart([])
    setCantCart(0)
  }

  const total = () => {
    let total = 0
    cart.forEach(element => {
      total += (element.cantidad * element.precio)
    })
    return total
  }



  useEffect(() => {
    console.log(cantCart);
    if (cantCart === 0) {
      document.querySelector("#lblCarrito").innerHTML = `<h5></h5>`
    } else {
      document.querySelector("#lblCarrito").innerHTML = `<h5>${cantCart}</h5>`
    }
  }, [cantCart])


  return (
    <appContext.Provider value={{
      cart,
      agregandoProducto,
      eliminandoProducto,
      limpiandoCarrito,
      total
    }}>
      {children}
    </appContext.Provider>
  )
}

export default CartContext