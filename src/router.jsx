import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";
import Home from "./pages/Home";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/ProjectOne", element: <ProjectOne /> },
    { path: "/ProjectTwo", element: <ProjectTwo /> },
    { path: "/ProjectThree", element: <ProjectThree /> },
    { path: "/ProjectFour", element: <ProjectFour /> },
    { path: "/Home", element: <Home /> },
]);