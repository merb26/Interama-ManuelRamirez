import { useState, useEffect } from "react";
import { getFetchUnProducto } from "../../../Apis/getFetch"
import "./ItemDetail.css"

export const ItemDetail = ({ id }) => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)


    useEffect(() => {
        getFetchUnProducto(id)
            .then(respuesta => setProducto(respuesta))
            .finally(() => setCargando(false))
    }, [])


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
                        </div>
                    </div>
            }

        </>
    )
}