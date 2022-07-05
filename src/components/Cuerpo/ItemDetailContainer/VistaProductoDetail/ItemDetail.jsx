import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'
import { ToastContainer } from 'react-toastify'

import { useApp } from "../../../Apis/CartContext"
import ItemCount from "./ContadorCarrito/ItemCount"

import "./ItemDetail.css"
import 'react-toastify/dist/ReactToastify.css'

export const ItemDetail = ({ id }) => {
    const { addingProduct, notifySuccess } = useApp()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [exchange, setExchange] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore()
            const queryProd = doc(db, 'products', id)
            getDoc(queryProd)
                .then(prod => setProduct({ id: prod.id, ...prod.data() }))
                .finally(() => setLoading(false))
        }, 2000)
    })

    const onAdd = (num) => {
        addingProduct({ ...product, cantidad: num })
        notifySuccess("Fue agregado al carrito con éxito")
        setExchange(false)
    }
    return (
        <>
            <ToastContainer />
            {
                loading ?
                    <div className="mt-5 center">
                        <img src="https://i.ibb.co/j6Cv23v/YlWC.gif" alt="YlWC" border="0" />
                    </div>
                    :
                    <div className="row">
                        <div className="text-center col-md-6">
                            <img src={product.fotoUrl} alt="" className="w-100 p-5" />
                        </div>
                        <div className="col-md-6 pt-5 text">
                            <h4>Nombre: </h4><div className="mb-4">{product.nombre}</div>
                            <h4>Categoría: </h4><div className="mb-4">{product.categoria}</div>
                            <h4>Precio: </h4><div className="mb-4">${product.precio}</div>
                            <h4>Descripción: </h4><div className="mb-4">{product.descripcion}</div>
                            {
                                exchange ?
                                    <div className="counter">
                                        <ItemCount inventario={product.stock} inicial={1} onAdd={onAdd} />
                                    </div>
                                    :
                                    <div className="counter">
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