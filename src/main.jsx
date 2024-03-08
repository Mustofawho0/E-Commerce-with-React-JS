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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerComponent} />
  </React.StrictMode>
);
