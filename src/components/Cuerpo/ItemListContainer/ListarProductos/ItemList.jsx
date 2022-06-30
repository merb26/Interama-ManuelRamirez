import { collection, getDocs, getFirestore, query, where } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import Item from "../VistaProducto/Item"
import './ItemList.css'

const ItemList = ({ categoria }) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        setTimeout(() => {
            const db = getFirestore()
            const queryProd = !categoria ? collection(db, 'productos')
                : query(collection(db, 'productos'), where('categoria', '==', categoria))
            getDocs(queryProd)
                .then(resp => setProductos(
                    resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))
                )
                )
                .finally(() => setCargando(false))
        }, 2000)
    }, [categoria])

    return (
        <>
            {
                cargando ?
                    <h2 className="cargando">Cargando...</h2>
                    :
                    <div className="row">
                        {
                            productos.map(
                                (producto) =>
                                    <Item producto={producto} />
                            )
                        }
                    </div>
            }
        </>
    )
}

export default ItemList