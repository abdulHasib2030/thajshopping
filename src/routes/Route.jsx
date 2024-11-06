import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Statistics from "../components/Statistics/Statistics";
import Dashboard from "../components/Dashboard/Dashboard";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import OrderHistory from "../components/OrderHistory/OrderHistory";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[{
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'statistics',
            element:<Statistics></Statistics>
        },
        {
            path:'dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'details/:id',
            element:<ProductDetails></ProductDetails>,
            loader: ()=> fetch('/products.json')
        },
        {
            path: 'order-history',
            element: <OrderHistory></OrderHistory>
        }
    
    ]

        
    }
])

export default router;