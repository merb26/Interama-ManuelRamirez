import CartWidget from './CartWidget';
import './Navbar.css';

function NavBar() {
    return (
        <nav class="navbar navbar-light navbar-expand-md bg-light">
            <div class="container-fluid">
                <a class="navbar-brand text-dark" href="#m">TecMundo</a>
                <button class="navbar-toggler justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-light bg-success boton" aria-current="page" href="#n">Laptops</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-success boton" href="#n">Computadoras de escritorio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-success boton" href="#n">PC Gamer</a>
                        </li>
                    </ul>
                </div>
                <div>
                <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar