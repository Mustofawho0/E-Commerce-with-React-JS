import Footer from "./components/core/Footer";
import Navbar from "./components/core/Navbar";
import LoginPage from "./components/page/login";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userContext } from "./supports/context/useUserContext";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <userContext.Provider value={{ userData, setUserData }}>
        <Navbar />
        <div className="py-32">
          <Outlet />
          <ToastContainer />
        </div>
        <Footer />
        {/* <LoginPage /> */}
      </userContext.Provider>
    </>
  );
}

export default App;
