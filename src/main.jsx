import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Dollinfo from './components/pages/Dollinfo';
import AuthProvider from './Provider/AuthProvider';
import Login from './components/pages/login/Login';
import Register from './components/pages/login/Register';
import AllToys from './components/pages/AllToys';
import AddToy from './components/pages/AddToy';
import MyToysInfo from './components/pages/MyToysInfo';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import MyToys from './components/pages/MyToys';
import Update from './components/pages/Update';
import ErrorPage from './components/pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/mytoys',
        element:<PrivetRoute><MyToys></MyToys></PrivetRoute>
      },
      {
        path:'/alltoys',
        element:<AllToys></AllToys>,
        loader:()=>fetch('https://toy-marketplace-server-xi-seven.vercel.app/total')
      },
      {
        path:'/addtoy',
        element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'dollinfo/:id',
        element:<PrivetRoute><Dollinfo></Dollinfo></PrivetRoute>,
        loader:({params})=> fetch(`https://toy-marketplace-server-xi-seven.vercel.app/products/${params.id}`),
      },
      {
        path:'/mytoysinfo/:id',
        element:<PrivetRoute><MyToysInfo></MyToysInfo></PrivetRoute>,
        loader:({params}) => fetch(`https://toy-marketplace-server-xi-seven.vercel.app/mytoys/${params.id}`)
      },
      {
        path:'update/:id',
        element:<Update></Update>,
        loader:({params}) => fetch(`https://toy-marketplace-server-xi-seven.vercel.app/products/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
 </AuthProvider>
)
