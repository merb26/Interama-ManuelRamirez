import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'
import { useApp } from "../../../Apis/CartContext"
import ItemCount from "./ContadorCarrito/ItemCount"
import "./ItemDetail.css"

export const ItemDetail = ({ id }) => {
    const { agregandoProducto } = useApp()
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)
    const [intercambiar, setIntercambiar] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore()
            const queryProd = doc(db, 'productos', id)
            getDoc(queryProd)
                .then(prod => setProducto({id: prod.id ,...prod.data()}))
                .finally(() => setCargando(false))
        }, 2000)
    })

    const onAdd = (num) => {
        agregandoProducto({ ...producto, cantidad: num })
        setIntercambiar(false)
    }
    return (
        <>
            {
                cargando ?
                    <h2 className="cargando">Cargando...</h2>
                    :
                    <div className="row">
                        <div className="text-center col-md-6">
                            <img src={producto.fotoUrl} alt="" className="w-100 p-5" />
                        </div>
                        <div className="col-md-6 pt-5 texto">
                            <h4>Nombre: </h4>{producto.nombre}
                            <h4>Categoría: </h4>{producto.categoria}
                            <h4>Precio: </h4>${producto.precio}
                            <h4>Descripción: </h4>{producto.descripcion}
                            {
                                intercambiar ?
                                    <div className="contador">
                                        <ItemCount inventario={producto.stock} inicial={1} onAdd={onAdd} />
                                    </div>
                                    :
                                    <div className="contador">
                                        <Link to={"/"}><button className="btnC">Seguir comprando</button></Link>
                                        <Link to={"/cart"}><button className="btnC">Terminar la compra</button></Link>
                                    </div>
                            }

                        </div>
                    </div>
            }

        </>
    )
}