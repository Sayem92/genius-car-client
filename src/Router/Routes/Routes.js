import CheckOut from "../../components/CheckOut/CheckOut";
import Home from "../../components/Pages/Home/Home/Home";
import Login from "../../form/Login/Login";
import Register from "../../form/Register/Register";
import Main from "../../layout/Main";

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
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params})=>
                    fetch(`http://localhost:5000/services/${params.id}`)
                
            }
        ]
    }
])

export default routes;