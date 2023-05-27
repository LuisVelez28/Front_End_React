import { Link, Route, Routes } from 'react-router-dom';
import ClientesList from '../ClientesList';


const PanelAdmin = () => {

    return (
        <>
            <div className="container-fluid">
                <div className='row'>
                    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">AUTOLEGAL</a>
                        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-nav">
                            <div className="nav-item text-nowrap">
                                <a className="nav-link px-3" href="{{route('logout')}}">Cerrar Sesión</a>
                            </div>
                        </div>
                    </header>

                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
                        <div className="position-sticky pt-3 sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/pages/PanelAdmin" className="nav-link active" aria-current="page">
                                        <span data-feather="home" className="align-text-bottom"></span>
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="Clientes" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Clientes
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/Empleados" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Empleados
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/Usuarios" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Usuarios
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/Buses" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Buses
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/Paradas" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Paradas
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/RolUsuaio" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Rol Usuario
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/Rutas" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Rutas
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/TipoEmpleado" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Tipo Empleado
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/TipoRuta" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Tipo Ruta
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/TipoVehiculo" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Tipo Vehiculo
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/Viajes" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        Viajes
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/PQRS" className="nav-link">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        PQRS
                                    </Link>
                                </li>
                            </ul>

                            <h6
                                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                                <span>Generar Reporte</span>
                                <a className="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle" className="align-text-bottom"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="{{route('descargarVehiculos-pdf')}}">
                                        <span data-feather="file-text" className="align-text-bottom"></span>
                                        Buses
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Routes>
                            <Route path="/PanelAdmin/Clientes" element={<ClientesList />} />
                        </Routes>
                    </main>

                </div>
            </div >
        </>
    )

}

export default PanelAdmin;