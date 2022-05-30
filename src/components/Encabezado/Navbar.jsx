import './Navbar.css';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand text-dark" href="#m">TecMundo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-light bg-dark" aria-current="page" href="#n">Laptops</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#n">Computadoras de escritorio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#n">PC Gamer</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar