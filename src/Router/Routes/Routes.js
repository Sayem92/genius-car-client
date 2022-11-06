import CheckOut from "../../components/CheckOut/CheckOut";
import Orders from "../../components/Orders/Orders";
import Home from "../../components/Pages/Home/Home/Home";
import ErrorPage from "../../errorPage/ErrorPage";
import Login from "../../form/Login/Login";
import Register from "../../form/Register/Register";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute> <CheckOut></CheckOut> </PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`https://genius-car-server-ten.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute> <Orders></Orders> </PrivateRoute>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default routes;