import { useContext, useEffect, createContext, useState } from "react"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const appContext = createContext([])
export const useApp = () => useContext(appContext)

const CartContext = ({ children }) => {

  //Hooks
  const [cart, setCart] = useState([])
  const [itemsQuantity, setItemsQuantity] = useState(0)

  //Functions
  const addingProduct = (product) => {
    let isCompared = false
    cart.forEach(element => {
      if (element.id === product.id) {
        element.cantidad += product.cantidad
        isCompared = true
      }
    })
    !isCompared && setCart([...cart, product])
    setItemsQuantity(itemsQuantity + product.cantidad)
  }

  const removingProduct = (id) => {
    let i = 0
    cart.forEach(element => {
      if (element.id === id) {
        setItemsQuantity(itemsQuantity - element.cantidad)
        cart.splice(i, 1)
      }
      i++
    })
  }

  const cleaningCart = () => {
    setCart([])
    setItemsQuantity(0)
  }

  const total = () => {
    let total = 0
    cart.forEach(element => {
      total += (element.cantidad * element.precio)
    })
    return total
  }

  const notifySuccess = (alert) => toast.success(alert, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const notifyError = (alert) => toast.error(alert, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  useEffect(() => {
    if (itemsQuantity === 0) {
      document.querySelector("#lblCart").innerHTML = `<h5></h5>`
    } else {
      document.querySelector("#lblCart").innerHTML = `<h5>${itemsQuantity}</h5>`
    }
  }, [itemsQuantity])

  return (
    <appContext.Provider value={{
      cart,
      addingProduct,
      removingProduct,
      cleaningCart,
      total,
      notifySuccess,
      notifyError
    }}>
      {children}
    </appContext.Provider>
  )
}

export default CartContext