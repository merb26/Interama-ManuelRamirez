import { Link } from "react-router-dom"

export const Item = ({ product, category }) => {

    const isOneCategory = category => {

        if (category !== undefined) {
            return <img src={`.${product.fotoUrl}`} className="w-100" alt="" />
        }

        return <img src={`${product.fotoUrl}`} className="w-100" alt="" />
    }

    return (
        <>
            <div className="col-lg-3 col-md-5 mb-4 text-center" key={product.id}>
                <div className="card">
                    <div className="card-body">
                        {
                            isOneCategory(category)
                        }
                    </div>
                    <div className="card-footer">
                        <div className="m-3">
                            {product.nombre}
                            <div className="m-3">
                                ${product.precio}
                            </div>
                        </div>
                        <div className="text-center">
                            <Link to={`/producto/${product.id}`}>
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
