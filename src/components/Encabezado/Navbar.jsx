import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'

import './Navbar.css'

function NavBar() {
    return (
        <nav className="sticky-top navbar navbar-light navbar-expand-md bg-light">
            <div className="container-fluid">
                <Link style={{ textDecoration: 'none'}} to="/"><div className="navbar-brand text-dark">Interama</div></Link>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">
                                <button className="btn btn-outline-success btnStyle shadow-none">Inicio</button>
                            </Link>
                        </li>
                        <div className="dropdown">
                            <button className="btn btn-outline-success btnStyle shadow-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <Link style={{ textDecoration: 'none'}} to="/categoria/Enrollable">
                                        <button className="dropdown-item">Enrollable</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none'}} to="/categoria/Plisada y horizontal">
                                        <button className="dropdown-item">Plisada y Horizontal</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link style={{ textDecoration: 'none'}} to="/categoria/Romana y vertical">
                                        <button className="dropdown-item">Romana y Vertical</button>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div>
                    <label id="lblCart"></label>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar