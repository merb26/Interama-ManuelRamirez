import { useState } from 'react'

const ItemCount = ({ inventario, inicial }) => {
    const [contador, setContador] = useState(parseInt(inicial))

    function btnAgregarAlCarrito() {
        document.querySelector("#lblCarrito").innerHTML = `<h5>${contador}</h5>`
    }
    
    function btnIncremento() {
        contador < inventario ? setContador(contador + 1) : alert("No hay más disponible en Stock")
    }
    
    function btnDecremento() {
        contador > 0 ? setContador(contador - 1) : alert("Ha llegado al 0")
    }

    return (
        <div>
            <h3>[ {contador} ]</h3>
            <button onClick={btnDecremento}>-</button>
            <button onClick={btnIncremento}>+</button>
            <button onClick={btnAgregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount