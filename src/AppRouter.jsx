import { useEffect, useState } from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import PanelAdmin from './pages/PanelAdmin';
import PanelCliente from './pages/PanelCliente';
import ClientesList from './ClientesList';

const AppRouter = () => {
    const [isAdmin, setIsAdmin] = useState(true);

    // const { variableValue } = useParams();

    // useEffect(() => {
    //     // Actualizamos el estado de la variable cuando cambia el valor del parámetro
    //     setIsAdmin(variableValue);
    // }, [variableValue]);

    return (
        <>
            
            <Routes>
                <Route exact path="/PanelAdmin" element={<PanelAdmin />} />
                <Route path="/PanelCliente" element={<PanelCliente />} />

                {/* <Route path="/pages/PanelAdmin/Clientes" element={<ClientesList />} /> */}

            </Routes>
            {isAdmin ? (
                <Navigate to="/PanelAdmin" replace={true} />
            ) : (
                <Navigate to="/PanelCliente" replace={true} />
            )}

        </>
    )


}

export default AppRouter;