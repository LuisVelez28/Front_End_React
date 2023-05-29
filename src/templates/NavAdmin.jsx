import { Link } from "react-router-dom"

const NavAdmin = () => {

    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="#">AUTOLEGAL</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <Link className="nav-link px-3" to="/Logout">Cerrar Sesión</Link>
                    </div>
                </div>
            </header>

            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Panel">
                                <span data-feather="home" className="align-text-bottom"></span>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Clientes">
                                <span data-feather="file" className="align-text-bottom"></span>
                                Clientes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Empleados">
                                <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                Empleados
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Usuarios">
                                <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                Usuarios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Buses" >
                                <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                Buses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Paradas">
                                <span data-feather="users" className="align-text-bottom"></span>
                                Paradas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="RolUsuario">
                                <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                Rol Usuario
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Rutas">
                                <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                Rutas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="TipoEmpleado">
                                <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                Tipo Empleados
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/TipoRuta">
                                <span data-feather="layers" className="align-text-bottom"></span>
                                Tipos Rutas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="TipoVehiculo">
                                <span data-feather="layers" className="align-text-bottom"></span>
                                Tipos Vehiculos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Viajes">
                                <span data-feather="layers" className="align-text-bottom"></span>
                                Viajes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="PQRS">
                                <span data-feather="layers" className="align-text-bottom"></span>
                                PQRS
                            </Link>
                        </li>
                    </ul>

                    <h6
                        className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                        <span>Generar Reporte</span>
                        <Link className="link-secondary" to="#" aria-label="Add Link new report">
                            <span data-feather="plus-circle" className="align-text-bottom"></span>
                        </Link>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                <span data-feather="file-text" className="align-text-bottom"></span>
                                Buses
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )

}

export default NavAdmin