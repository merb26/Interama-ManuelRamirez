
const productos = [
    {
        id: 1,
        nombre: "Duo Wood negro 140cm x 165cm",
        precio: 1299,
        descripcion: "Está constituida por 2 bandas, una traslúcida y otra opaca, que se superponen entre sí, y de este modo se logra una mayor o menor luminosidad.",
        stock: "15",
        fotoUrl: "https://i.ibb.co/qmxFyj6/1.jpg",
        categoria: "Enrollable"
    },
    {
        id: 2,
        nombre: "Duo Wood crema 140cm x 165cm",
        precio: 1649,
        descripcion: "Con su diseño funcional y estilo moderno",
        stock: "100",
        fotoUrl: "https://i.ibb.co/rQrSMZt/2.jpg",
        categoria: "Enrollable"
    },
    {
        id: 3,
        nombre: "Translúcida blanca 100cm x 160cm",
        precio: 509,
        descripcion: "Es el complemento perfecto para la decoración y ambientación de tus espacios interiores",
        stock: "2",
        fotoUrl: "https://i.ibb.co/2Npx0dF/3.jpg",
        categoria: "Enrollable"
    },
    {
        id: 4,
        nombre: "Per Tem Papel 90cm x 180cm",
        precio: 99,
        descripcion: "Persiana papel",
        stock: "14",
        fotoUrl: "https://i.ibb.co/4jdZZk4/4.jpg",
        categoria: "Enrollable"
    },
    {
        id: 5,
        nombre: "Tela chocolate 150cm x 160cm",
        precio: 749,
        descripcion: "Es el complemento perfecto para la decoración y ambientación de tus espacios interiores. Esto se debe a que tiene un diseño de material y un mecanismo de apertura práctico que te entregan funcionalidad y estilo para tu hogar.",
        stock: "20",
        fotoUrl: "https://i.ibb.co/MfYRTK7/5.jpg",
        categoria: "Plisada y horizontal"
    },
    {
        id: 6,
        nombre: "Tela vino 100cm x 120cm",
        precio: 459,
        descripcion: "Esto se debe a que tiene un diseño de material y un mecanismo de apertura práctico que te entregan funcionalidad y estilo para tu hogar.",
        stock: "100",
        fotoUrl: "https://i.ibb.co/48m90yz/6.jpg",
        categoria: "Plisada y horizontal"
    },
    {
        id: 7,
        nombre: "Imitación madera chocolate 120cm x 160cm",
        precio: 1709,
        descripcion: "Esto se debe a que tiene un diseño de material y un mecanismo de apertura práctico que te entregan funcionalidad y estilo para tu hogar.",
        stock: "40",
        fotoUrl: "https://i.ibb.co/DRMYL9L/7.jpg",
        categoria: "Plisada y horizontal"
    },
    {
        id: 8,
        nombre: "PVC madera 150cm x 160cm",
        precio: 795,
        descripcion: "Esto se debe a que tiene un diseño de material y un mecanismo de apertura práctico que te entregan funcionalidad y estilo para tu hogar.",
        stock: "80",
        fotoUrl: "https://i.ibb.co/6BTqMFY/8.jpg",
        categoria: "Plisada y horizontal"
    },
    {
        id: 9,
        nombre: "PVC imitación madera 200cm x 220cm",
        precio: 2289,
        descripcion: "Esto se debe a que tiene un diseño de material y un mecanismo de apertura práctico que te entregan funcionalidad y estilo para tu hogar.",
        stock: "4",
        fotoUrl: "https://i.ibb.co/ZVH6Ryq/9.jpg",
        categoria: "Romana y vertical"
    },
    {
        id: 10,
        nombre: "Blackout lino 120cm x 250cm",
        precio: 1299,
        descripcion: "Esto se debe a que tiene un diseño de material y un mecanismo de apertura práctico que te entregan funcionalidad y estilo para tu hogar.",
        stock: "16",
        fotoUrl: "https://i.ibb.co/nQBqF39/10.jpg",
        categoria: "Romana y vertical"
    },
    {
        id: 11,
        nombre: "PVC marfil 200cm x 220cm",
        precio: 2299,
        descripcion: "Esto se debe a que tiene un diseño de material y un mecanismo de apertura práctico que te entregan funcionalidad y estilo para tu hogar.",
        stock: "70",
        fotoUrl: "https://i.ibb.co/PFpDXyY/11.jpg",
        categoria: "Romana y vertical"
    },
    {
        id: 12,
        nombre: "PVC blanca 160cm x 220cm",
        precio: 1999,
        descripcion: "Esto se debe a que tiene un diseño de material y un mecanismo de apertura práctico que te entregan funcionalidad y estilo para tu hogar.",
        stock: "95",
        fotoUrl: "https://i.ibb.co/PQNgXXd/12.jpg",
        categoria: "Romana y vertical"
    }
]

export const getFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

export const getFetchUnProducto = (id) => {
    let producto = {}
    for (const iterator of productos) {
        if(iterator.id.toString() === id){
            producto = iterator
            break
        }
    }
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto)
        }, 2000);
    })
} 