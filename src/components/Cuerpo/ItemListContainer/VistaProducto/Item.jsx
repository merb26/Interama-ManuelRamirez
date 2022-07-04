import { Link } from "react-router-dom"

const Item = ({ producto }) => {

    return (
        <>
            <div className="col-lg-3 col-md-5 mb-4 text-center" key={producto.id}>
                <div className="card">
                    <div className="card-body">
                        <img src={producto.fotoUrl} className="w-100" />
                    </div>
                    <div className="card-footer">
                        <div className="m-3">
                            {producto.nombre}
                            <div className="m-3">
                                ${producto.precio}
                            </div>
                        </div>
                        <div className="text-center">
                            <Link to={`/producto/${producto.id}`}>
                                <button className="btn btn-outline-secondary m-2 mt-4">
                                    Más detalle
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item