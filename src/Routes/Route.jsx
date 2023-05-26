
import { createBrowserRouter } from "react-router-dom"

import Main from "../Pages/Main"
import Home from "../Pages/Home"
import Blog from "../Pages/Blog"
import AllToy from "../Pages/AllToy"
import MyToy from "../Pages/MyToy"
import Login from "../Authentication/Login"
import Register from "../Authentication/Register"
import AddToy from "../Pages/AddToy"
import ErrorPage from "../Pages/ErrorPage"
import Details from "../Pages/Details/Details"
import PrivetRout from "./PrivetRout"
import UpdateToy from "../Pages/UpdateToy"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/alltoy',
            element:<AllToy></AllToy>
        },
        {
            path:'/mytoy',
            element:<MyToy></MyToy>
        },
        {
            path:'/addToy',
            element:<AddToy></AddToy>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/toys/:id',
            element:<PrivetRout><Details></Details></PrivetRout>,
            loader:({params})=>fetch(`https://toy-shop-server-one.vercel.app/toys/${params.id}`)
        },
        {
            path:`/updateToy/:id`,
            element:<UpdateToy></UpdateToy>,
            loader:({params})=>fetch(`https://toy-shop-server-one.vercel.app/updateToy/${params.id}`)
        }
    ],
    
  }
  
 
])
export default router
