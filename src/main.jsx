import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import Header from './Header.jsx'
import ClientesList from "./ClientesList"
import CrearCliente from "./CrearCliente"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <CrearCliente />
    <ClientesList />
  </React.StrictMode>,
)
