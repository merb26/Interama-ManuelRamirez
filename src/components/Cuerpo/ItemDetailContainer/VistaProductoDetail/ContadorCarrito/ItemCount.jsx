import { useState } from 'react'

import "./ItemCount.css"

const ItemCount = ({ inventario, inicial, onAdd }) => {
    const [contador, setContador] = useState(inicial)

    function btnAgregarAlCarrito() {
        onAdd(contador)
    }

    function btnIncremento() {
        contador < inventario ? setContador(contador + 1) : alert("No hay más disponible en Stock")
    }

    function btnDecremento() {
        contador > 0 && setContador(contador - 1)
    }

    return (
        <>
            <button onClick={btnDecremento}>-</button>
            <span className='m-2 size'> {contador} </span>
            <button onClick={btnIncremento}>+</button>
            <div className='mt-4'>
                <button onClick={btnAgregarAlCarrito}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount