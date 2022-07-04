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
                .then(prod => setProducto({ id: prod.id, ...prod.data() }))
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
                    <div className="mt-5 center">
                        <img src="https://i.ibb.co/j6Cv23v/YlWC.gif" alt="YlWC" border="0" />
                    </div>
                    :
                    <div className="row">
                        <div className="text-center col-md-6">
                            <img src={producto.fotoUrl} alt="" className="w-100 p-5" />
                        </div>
                        <div className="col-md-6 pt-5 texto">
                            <h4>Nombre: </h4><div className="mb-4">{producto.nombre}</div>
                            <h4>Categoría: </h4><div className="mb-4">{producto.categoria}</div>
                            <h4>Precio: </h4><div className="mb-4">${producto.precio}</div>
                            <h4>Descripción: </h4><div className="mb-4">{producto.descripcion}</div>
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