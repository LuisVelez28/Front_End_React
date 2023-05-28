import { Link } from "react-router-dom"
import Logo from "../assets/imgs/Logo.jpg"

const Header = () => {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-success fixed-top">
                    <div className="container-fluid">
                        <Link to="/">
                            <img src={Logo} style={{width: '150px', height: '50px'}} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Conocernos">Nosotros</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link active" to="/RutasyHorarios" aria-expanded="false">
                                        Rutas Urbanas
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" href="/Contactanos">Contactanos</Link>
                                </li>
                            </ul>
                            <div>
                                <Link className="btn btn-light" to="/Login">Registrarse</Link>
                                <Link className="btn btn-primary" to="/Register">Iniciar Sesion</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )

}

export default Header
