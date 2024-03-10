import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../supports/context/useUserContext";

export default function Navbar() {
  const router = useLocation();
  const { userData } = useContext(userContext);
  return (
    <>
      <div
        className={`${router.pathname === "/register" ? "hidden" : "block"}`}
      >
        <div className="fixed w-full bg-white">
          <div className="flex items-center px-10 py-3 bg-base-100">
            <div className="flex-1 flex items-center gap-3">
              <Link to="/">
                <CiMenuBurger className="block lg:hidden" size={30} />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Depop_logo.svg"
                  alt="Logo"
                  className="h-[25px]"
                ></img>
              </Link>
            </div>
            <div
              className={`flex-1 pr-44 hidden ${
                router.pathname === "/login" || router.pathname === "/signup"
                  ? "lg:hidden"
                  : "lg:block"
              }`}
            >
              <div className="flex items-center gap-2 border-2 border-black px-3 py-3 rounded-full">
                <CiSearch />
                <input
                  type="text"
                  placeholder="Search Product"
                  className="focus:outline-none lg:w-auto max-w-fit"
                />
              </div>
            </div>
            <div className="flex-1 gap-2 flex justify-end items-center pr-6">
              <div className="hover:text-red-500">
                <FaRegHeart size={20} />
              </div>
              <div className="hover:text-red-500">
                <IoBagOutline size={20} />
              </div>
              <button className="btn rounded-none bg-black text-white hover:bg-red-600 hidden lg:block">
                Sell Now
              </button>
              {/* KONDISIONAL */}
              {userData !== null ? (
                // <h1>Hello, {userData}</h1>
                <div className="dropdown dropdown-end border-none pt-2">
                  <div
                    tabIndex={0}
                    role="button"
                    className=" bg-transparent border-none hover:bg-white"
                  >
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-gray-200 text-black"
                  >
                    <div className="card-body bg-gray-200 flex items-center">
                      <div className="avatar flex justify-center items-center">
                        <div className="w-12 rounded-full">
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <h3 className="card-title ">Hello, {userData}</h3>
                      <p>you can use any element as a dropdown.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/signup">
                    <button className="btn rounded-none bg-black text-white hover:bg-gray-500 lg:bg-white border border-black lg:text-black hover:border-black">
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="rounded-none bg-white text-black text-lg font-bold hover:text-red-600 hidden lg:block">
                      Log in
                    </button>
                  </Link>
                </>
              )}
              {/* END KONDISIONAL */}
            </div>
          </div>
          <div>
            {/* <div className="divider pb-10"></div> */}
            <hr />
            <div
              className={`gap-2 flex px-10 bg-base ${
                router.pathname === "/login" || router.pathname === "/signup"
                  ? "hidden"
                  : "block"
              }`}
            >
              <button className="font-bold text-black hover:bg-black hover:text-white h-[40px] w-[100px]">
                Menswear
              </button>
              <button className="font-bold text-black hover:bg-black hover:text-white h-[40px] w-[120px]">
                Womenswear
              </button>
              <button className="font-bold text-black hover:bg-black hover:text-white h-[40px] w-[100px]">
                Brands
              </button>
              <button className="font-bold text-black hover:bg-red-600 hover:text-white h-[40px] w-[100px]">
                Sale
              </button>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
