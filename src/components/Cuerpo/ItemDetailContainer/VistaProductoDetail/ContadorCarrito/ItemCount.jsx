import { useState } from 'react'

const ItemCount = ({ inventario, inicial, onAdd }) => {
    const [contador, setContador] = useState(parseInt(inicial))

    function btnAgregarAlCarrito() {
        onAdd(contador)
    }
    
    function btnIncremento() {
        contador < inventario ? setContador(contador + 1) : alert("No hay más disponible en Stock")
    }
    
    function btnDecremento() {
        contador > 0 ? setContador(contador - 1) : alert("Ha llegado al 0")
    }

    return (
        <>
            <h3>[ {contador} ]</h3>
            <button onClick={btnDecremento}>-</button>
            <button onClick={btnIncremento}>+</button>
            <button onClick={btnAgregarAlCarrito}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount