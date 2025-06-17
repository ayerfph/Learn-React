import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/Error";
//import ProjectOne from "./pages/ProjectOne";
//import ProjectTwo from "./pages/ProjectTwo";
//import ProjectThree from "./pages/ProjectThree";
//import ProjectFour from "./pages/ProjectFour";
//import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
    { path: "/", element: <App />, errorElement: <ErrorPage /> },
    //{ path: "/ProjectOne", element: <PrivateRoute><ProjectOne /></PrivateRoute> },
    //{ path: "/ProjectTwo", element: <PrivateRoute><ProjectTwo /></PrivateRoute> },
    //{ path: "/ProjectThree", element: <PrivateRoute><ProjectThree /></PrivateRoute> },
    //{ path: "/ProjectFour", element: <PrivateRoute><ProjectFour /></PrivateRoute> },
]);