import { Link } from "react-router-dom"

const Item = ({producto}) => {

    return (
        <>
            <div className="col-md-4 p-4" key={producto.id}>
                <div className="card">
                    <div className="card-header">
                        {`${producto.nombre} - ${producto.descripcion}`}
                    </div>
                    <div className="card-body">
                        <img src={producto.fotoUrl} className="w-50" />
                        ${producto.precio}
                    </div>
                    <div className="card-footer">
                        <Link to={`/producto/${producto.id}`}>
                            <button className="btn btn-outline-secondary">
                                Detalle del producto
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item