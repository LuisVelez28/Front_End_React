import { Routes, Route } from 'react-router-dom';
import IndexHub from './templates/IndexHub';
import Index from './pages/Index';
import RutasyHorarios from './pages/RutasyHorarios';

const AppRouter = () => {


    return (
        <>
            
            <Routes>
                <Route exact path="/" element={<IndexHub />}>
                    <Route index path="/" element={<Index />} /> 
                    <Route path="/RutasyHorarios" element={<RutasyHorarios />} />
                </Route>


            </Routes>

        </>
    )


}

export default AppRouter;