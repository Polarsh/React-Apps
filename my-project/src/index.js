import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./index.css";
import LoginScreen from "./pages/Login";
import HomeScreen from "./pages/Home";
import ErrorScreen from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen/>,
    errorElement: <ErrorScreen/>
  },
  {
    path: "/dashboard",
    element: <HomeScreen/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
