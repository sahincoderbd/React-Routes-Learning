import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import Services from "./Services.jsx";
import Users from "./Users.jsx";
import UserDetails from "./Components/UserDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'services',
        element:<Services></Services>
      },
      {
        path:'users',
        loader: async ()=>fetch('https://jsonplaceholder.typicode.com/users'), 
        element:<Users></Users>
      },
      {
        path:'/user/:id',
        loader:async ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element:<UserDetails></UserDetails>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
