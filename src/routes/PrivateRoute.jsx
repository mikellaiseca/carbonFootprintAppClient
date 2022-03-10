import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, Outlet } from "react-router-dom";
import { Spinner } from 'react-bootstrap'


function PrivateRoute() {

    const { isLoggedIn, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
    }

    if (!isLoggedIn) {
        return <Navigate to="/log-in" />
    }

    return <Outlet />
}

export default PrivateRoute