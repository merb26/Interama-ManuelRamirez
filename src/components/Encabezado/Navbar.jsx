import CartWidget from './CartWidget';

import { Link } from 'react-router-dom';

import './Navbar.css';

function NavBar() {
    return (
        <nav class="navbar navbar-light navbar-expand-md bg-light">
            <div class="container-fluid">
                <a class="navbar-brand text-dark" href="#m">Interama</a>
                <button class="navbar-toggler justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/">
                                <button className="btn btn-outline-success boton shadow-none" >Inicio</button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/categoria/Enrollable">
                                <button className="btn btn-outline-success boton shadow-none" >Enrollables</button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/categoria/Plisada y horizontal">
                                <button className="btn btn-outline-success boton shadow-none">Plisadas y Horizontales</button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/categoria/Romana y vertical">
                                <button className="btn btn-outline-success boton shadow-none">Romanas y Verticales</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <label id="lblCarrito"></label>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar