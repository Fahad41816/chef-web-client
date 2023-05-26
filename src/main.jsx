import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home';
import Login from './components/Login/Login.jsx';
import Singup from './components/SingUp/Singup.jsx';
import Blog from './components/Blog/Blog.jsx';
import Recipe from './components/viewRecipe/Recipe';
import Contextprovider from './context/Contextprovider';
import Privateroute from './privateroute/Privateroute';
import Errorpage from './components/errorpage/Errorpage';
 



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
       {
        path:"/",
        element:<Privateroute><Home></Home></Privateroute>,
        loader: () => fetch('https://chef-web-server-beta.vercel.app/cheflist') 
       },
       {
        path:"/login",
        element:<Login></Login>
       },
       {
        path:"/singup",
        element:<Singup></Singup>
       },
       {
        path:"/blog",
        element: <Privateroute> <Blog></Blog> </Privateroute>
       },
       {
        path:"/viewRecipe/:id",
        element:<Privateroute><Recipe></Recipe></Privateroute>,
        loader: ({params}) =>  fetch(`https://chef-web-server-beta.vercel.app/viewchef/${params.id}`)
       },
       {
        path:"*",
        element:<Errorpage></Errorpage>
        
       }
    ]    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contextprovider>
      <RouterProvider router={router}></RouterProvider> 
    </Contextprovider>  
  </React.StrictMode>,
)
