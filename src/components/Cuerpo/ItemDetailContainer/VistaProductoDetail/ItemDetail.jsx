import { useState } from "react";
import { getFetchUnProducto } from "../../../Apis/getFetchUnProducto"

export const ItemDetail = () => {

    const [producto, setProducto] = useState([])
    getFetchUnProducto()
        .then(respuesta => setProducto(respuesta))
    
    console.log(producto);
    return (
        <>
            <div className="row">
                <div className="text-center col-md-6">
                    <img src={producto.fotoUrl} alt="" className="w-100 p-5" />
                </div>
                <div className="col-md-6 pt-5">
                    <h4>Nombre: </h4>{producto.nombre}
                    <h4>Categoría: </h4>{producto.categoria}
                    <h4>Precio: </h4>${producto.precio}
                    <h4>Descripción: </h4>{producto.descripcion}
                </div>
            </div>
        </>
    )
}