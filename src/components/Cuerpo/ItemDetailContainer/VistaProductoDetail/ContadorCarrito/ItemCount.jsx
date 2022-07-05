import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { useApp } from '../../../../Apis/CartContext'

import 'react-toastify/dist/ReactToastify.css'
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
    const { notifyError, notifySucess } = useApp()
    const [counter, setCounter] = useState(initial)

    function btnAddToCart() {
        onAdd(counter)
    }

    function btnIncrease() {
        counter < stock ? setCounter(counter + 1) : notifyError("No hay más stock")
    }

    function btnDecrement() {
        counter > 0 && setCounter(counter - 1)
        notifySucess("Fue agregado al carrito con éxito")
    }

    return (
        <>
            <ToastContainer />
            <button onClick={btnDecrement}>-</button>
            <span className='m-2 size'> {counter} </span>
            <button onClick={btnIncrease}>+</button>
            <div className='mt-4'>
                <button onClick={btnAddToCart}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount