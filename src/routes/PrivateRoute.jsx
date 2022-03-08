import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {

    const { isLoggedIn, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <h1>CARGANDO</h1>
    }

    if (!isLoggedIn) {
        return <Navigate to="/log-in" />
    }

    return <Outlet />
}

export default PrivateRoute