import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_view";
import LoginView from "../../features/login/views/login_view";
import PrivateRoute from "../auth/components/private_route";
import PublicRoute from "../auth/components/public_route";


export const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <PrivateRoute>
                    <HomeView />
                </PrivateRoute>
            ),
        },
        {
            path: "/login",
            element: (
                <PublicRoute>
                    <LoginView />
                </PublicRoute>
            ),
        },
        //bad route or 404 error
        {
            path: "*",
            element: (
                <div>No se enocontro la pagina</div>
            ),
        },
    ]
)