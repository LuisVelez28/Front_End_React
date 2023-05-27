import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CrearCliente from './CrearCliente'
import ClientesList from './ClientesList'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Twelfth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <p className="nav-link active" aria-current="page">Menu de navegación</p>
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header