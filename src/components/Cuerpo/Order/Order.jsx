import { useState } from "react";
import { useApp } from "../../Apis/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./Order.css"

const Form = () => {
    const { cart, total, limpiandoCarrito } = useApp()
    const [id, setId] = useState("");
    const [datosUsuario, setDatosUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: 0
    });

    const handleInputChange = (e) => {
        setDatosUsuario({ ...datosUsuario, [e.target.name]: e.target.value });
    };

    const pedido = {
        cliente: datosUsuario,
        productos: cart,
        total: total()
    }

    const confirmOrder = (e) => {
        const { nombre, apellido, email, tel } = datosUsuario
        if (
            nombre.length < 2 ||
            apellido.length < 2 ||
            email.length < 6 ||
            tel.length < 10
        ) {
            return;
        } else if (cart.length === 0) {
            return;
        }
        e.preventDefault();
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        const query = addDoc(orderCollection, pedido);
        query
            .then(({ id }) => {
                setId(id);
            })
            .catch(() => {
                console.log("error");
            })
        limpiandoCarrito()
    }

    if (id === "") {
        return (
            <>
                <div className="orderContainer center">
                    <form className="width text-center">
                        <h2 className="titulo">Ingresa tus datos</h2>
                        <div className="form-floating mb-3 p-1 m-1">
                            <input onChange={handleInputChange} type="text" className="form-control" id="floatingInput" name="nombre" placeholder="Nombre" required />
                            <label for="floatingInput">Nombre</label>
                        </div>
                        <div className="form-floating mb-3 p-1 m-1">
                            <input onChange={handleInputChange} type="text" className="form-control" id="floatingInput" name="apellido" placeholder="Apellido" required />
                            <label for="floatingInput">Apellido</label>
                        </div>
                        <div className="form-floating mb-3 p-1 m-1">
                            <input onChange={handleInputChange} type="email" className="form-control" id="floatingInput" name="email" placeholder="Email" required />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div className="form-floating p-1 m-1">
                            <input onChange={handleInputChange} type="tel" className="form-control" id="floatingTelefono" name="tel" placeholder="Telefono" required />
                            <label for="floatingTelefono">Teléfono</label>
                        </div>
                        <button className="m-5" onClick={confirmOrder}>Confirmar Compra</button>
                    </form>
                </div>
            </>
        );
    } else {
        return (
            <div className="orderContainer">
                <h2 className="titulo">¡Gracias por tu compra!</h2>
                <p className="style">El pedido se ha realizado con éxito, el ID de tu compra es {id}</p>
                <Link className="btnStyle" to={`/`}>
                    <button className="center" >← Volver a la tienda</button>
                </Link>
            </div>
        );
    };
};

export default Form;