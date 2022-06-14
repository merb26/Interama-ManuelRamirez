
const Item = (producto) => {
    let pro = {}
    for (const key in producto) {
        pro = producto[key]
    }

    return (
        <>
        <div className="col-md-4 p-4" key={pro.id}>
            <div className="card">
                <div className="card-header">
                    {`${pro.nombre} - ${pro.descripcion}`}
                </div>
                <div className="card-body">
                    <img src={pro.fotoUrl} className="w-50"/>
                    ${pro.precio}
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-success">
                        Detalle del producto
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item