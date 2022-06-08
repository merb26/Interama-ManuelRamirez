
const productos = [
    {
        id: 1,
        nombre: "Duo Wood negro 140cm x 165cm",
        precio: 1299,
        descripcion: "Está constituida por 2 bandas, una traslúcida y otra opaca, que se superponen entre sí, y de este modo se logra una mayor o menor luminosidad.",
        stock: "15",
        fotoUrl: "./img/persianas/1.jpg"
    },
    {
        id: 2,
        nombre: "Duo Wood crema 140cm x 165cm",
        precio: 1649,
        descripcion: "Con su diseño funcional y estilo moderno",
        stock: "100",
        fotoUrl: "./img/persianas/2.jpg"
    },
    {
        id: 3,
        nombre: "Translúcida blanca 100cm x 160cm",
        precio: 509,
        descripcion: "Es el complemento perfecto para la decoración y ambientación de tus espacios interiores",
        stock: "2",
        fotoUrl: "./img/persianas/3.jpg"
    },
    {
        id: 4,
        nombre: "Per Tem Papel 90cm x 180cm",
        precio: 99,
        descripcion: "Persiana papel",
        stock: "14",
        fotoUrl: "./img/persianas/4.jpg"
    }
]

export const getFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}
