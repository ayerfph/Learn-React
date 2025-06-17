import React from "react";
import { Navigate } from "react-router-dom";
import useSession from "./UseSession";

const PrivateRoute = ({ children }) => {
    const session = useSession();

    if(session === undefined) {
        return <div>Please Wait...</div>;
    }

    return <>{ session ? <>{children}</> : <Navigate to="/Home"/>}</>;
}

export default PrivateRoute;