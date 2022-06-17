import { useEffect, useState } from "react"
import { getFetch } from "../../../Apis/getFetch"
import Item from "../VistaProducto/Item"
import './ItemList.css'

const ItemList = ({ categoria }) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        if (categoria) {
            getFetch()
                .then(
                    resp => {
                        setProductos(resp.filter(
                            producto => producto.categoria === categoria
                        ))
                    }
                )
                .finally(
                    () => setCargando(false)
                )

        } else {

            getFetch()
                .then(
                    resp => {
                        setProductos(resp)
                    }
                )
                .finally(
                    () => setCargando(false)
                )

        }

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