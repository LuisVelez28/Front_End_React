import { Routes, Route } from 'react-router-dom';
import IndexHub from './templates/IndexHub';
import Index from './pages/Index';
import RutasyHorarios from './pages/RutasyHorarios';
import Conocernos from './pages/conocernos';
import Contactanos from './pages/Contactanos';
import MainAdmin from './templates/MainAdmin';
import IndexAdmin from './pages/indexAdmin';

const AppRouter = () => {


    return (
        <>
            
            <Routes>
                <Route exact path="/" element={<IndexHub />}>
                    <Route index path="/" element={<Index />} /> 
                    <Route path="/Conocernos" element={<Conocernos />} />
                    <Route path="/RutasyHorarios" element={<RutasyHorarios />} />
                    <Route path="/Contactanos" element={<Contactanos />} />
                </Route>
                <Route path='/panel' element={<MainAdmin />}>
                    <Route index element={<IndexAdmin />} />
                </Route>


            </Routes>

        </>
    )


}

export default AppRouter;