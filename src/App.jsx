import Footer from "./components/core/Footer";
import Navbar from "./components/core/Navbar";
import LoginPage from "./components/page/login";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="py-32">
        <Outlet />
      </div>
      <Footer />
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
