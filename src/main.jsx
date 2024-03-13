import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LoginPage from "./components/page/login/index.jsx";
import Navbar from "./components/core/Navbar.jsx";
import HomePage from "./components/page/home/index.jsx";
import SignUp from "./components/page/signup/index.jsx";
import Register from "./components/page/register/index.jsx";
import Profile from "./components/page/profile/index.jsx";
import Product from "./components/page/product/index.jsx";
import DetailProduct from "./components/page/detailProduct/index.jsx";

const routerComponent = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/detail/:productId",
        element: <DetailProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerComponent} />
  </React.StrictMode>
);
