import { useEffect, useState } from "react"
import { getFetch } from "../../../Apis/getFetch"
import Item from "../VistaProducto/Item"

const ItemList = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {

        getFetch()
            .then(
                resp => {
                    setProductos(resp)
                }
            )
            .finally(
                () => setCargando(false)
            )

    }, [])

    return (
        <>
            {
                cargando ?
                <h2>Cargando...</h2>
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