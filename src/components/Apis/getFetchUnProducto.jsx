
const producto = 
    {
        id: 4,
        nombre: "Per Tem Papel 90cm x 180cm",
        precio: 99,
        descripcion: "Persiana papel",
        categoria: "Persianas enrollables",
        stock: "14",
        fotoUrl: "./img/persianas/4.jpg"
    }


export const getFetchUnProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto)
        }, 2000);
    })
}
