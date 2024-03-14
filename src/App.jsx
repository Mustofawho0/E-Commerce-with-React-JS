import Footer from "./components/core/Footer";
import Navbar from "./components/core/Navbar";
import LoginPage from "./components/page/login";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userContext } from "./supports/context/useUserContext";
import { useState } from "react";
import { ProtectedRoute } from "./components/core/ProtectedRoute";
import { cartContext } from "./supports/context/useCartContext";

function App() {
  const [userData, setUserData] = useState(null);
  const [userCart, setUserCart] = useState(null);

  return (
    <>
      <userContext.Provider value={{ userData, setUserData }}>
        <cartContext.Provider value={{ userCart, setUserCart }}>
          <Navbar />
          <div className="">
            <ProtectedRoute>
              <ToastContainer />
              <Outlet />
            </ProtectedRoute>
          </div>
          <Footer />
        </cartContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
