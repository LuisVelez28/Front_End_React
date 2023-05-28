import { Outlet } from "react-router-dom"
import Header from "./Header"

const IndexHub = () => {
    const handleClick = () => {
        window.open('https://wa.me/573001112233?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio');
    };

    return (
        <>

            <Header />

            <main className="container">
                <Outlet />
            </main>

            <img className="btn-whatsapp"
                src="https://static.vecteezy.com/system/resources/previews/018/819/287/non_2x/whatsapp-icon-transparent-free-png.png"
                width="50" height="50" alt="Whatsapp"
                onClick={handleClick} />

            <footer>
                <p>Todos los derechos reservados © Empresa de Transporte</p>
            </footer>

        </>
    )

}

export default IndexHub
