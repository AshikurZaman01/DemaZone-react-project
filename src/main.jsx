import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ProductDetails from './Components/Pages/Products/ProductDetails';
import axios from 'axios';
import DashHome from './Components/Pages/Dashboard/Layouts/DashHome';
import Profile from './Components/Pages/Dashboard/Profile';
import EditProfile from './Components/Pages/Dashboard/EditProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => axios.get(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <DashHome></DashHome>
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>
          },
          {
            path: "/dashboard/editProfile",
            element: <EditProfile></EditProfile>
          },
        ]

      },


    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
