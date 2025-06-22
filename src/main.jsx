import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App.jsx'

import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
  },
  {
    path:'/about',
    element:<div>This is About page</div>
  },
  {
    path:'/contact',
    element:<div>This is contact page</div>
  },
  {
    path:'/services',
    element:<div>This is services page</div>
  },
  {
    path:'/profile',
    element:<div>I am in my profile</div>

  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
