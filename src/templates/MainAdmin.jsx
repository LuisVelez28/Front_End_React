import { Outlet } from "react-router-dom"
import NavAdmin from "./NavAdmin"

const MainAdmin = () => {
    
    return (
        <>
        <div className="container-fluid">
        <div className="row">
            <NavAdmin />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Outlet />
            </main>
        </div>
    </div>
        </>
    )

}

export default MainAdmin
