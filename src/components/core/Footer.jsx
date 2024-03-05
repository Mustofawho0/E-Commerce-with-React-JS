import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Footer() {
  const router = useLocation();
  return (
    <>
      <div className={`${router.pathname === "/signup" ? "hidden" : "block"}`}>
        <div className="bg-gray-100 h-[360px]">
          <div className="grid grid-cols-4 px-36 py-5 tracking-wider">
            <div>
              <span className="font-bold font-sans">Depop</span>
              <ul className="py-7">
                <li className="py-3">
                  <a href="#">About</a>
                </li>
                <li className="py-3">
                  <a href="#">Careers</a>
                </li>
                <li className="py-3">
                  <a href="#">Blog</a>
                </li>
                <li className="py-3">
                  <a href="#">News</a>
                </li>
                <li className="py-3">
                  <a href="#">Impact</a>
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold font-sans">Sell</span>
              <ul className="py-7">
                <li className="py-3">
                  <a href="#">Sell on Depop</a>
                </li>
                <li className="py-3">
                  <a href="#">Depop Amplified</a>
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold font-sans">Help</span>
              <ul className="py-7">
                <li className="py-3">
                  <a href="#">Help Centre</a>
                </li>
                <li className="py-3">
                  <a href="#">Safety Centre</a>
                </li>
              </ul>
            </div>
            <div className="flex justify-end place-items-end px-5 gap-6">
              <a href="#">
                <FaXTwitter size={30} className="hover:text-red-500" />
              </a>
              <a href="#">
                <FaInstagram size={30} className="hover:text-red-500" />
              </a>
              <a href="#">
                <FaTiktok size={30} className="hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-[80px] px-28 py-2 flex items-center">
          <div className="dropdown dropdown-top flex">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 rounded-none bg-transparent tracking-wide border-none w-[150px]"
            >
              United States <RiArrowDropDownLine />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>United States</a>
              </li>
              <li>
                <a>Indonesia</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-top flex-1">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 rounded-none bg-transparent tracking-wide border-none w-[150px]"
            >
              United States <RiArrowDropDownLine />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>United States</a>
              </li>
              <li>
                <a>Indonesia</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-10 px-14 tracking-wide">
            <span>
              <a href="#">Sitmaps</a>
            </span>
            <span>
              <a href="#">Terms and Conditions</a>
            </span>
            <span>
              <a href="#">Privacy</a>
            </span>
            <span>
              <a href="#">Cookies</a>
            </span>
          </div>
        </div>
        {/* Div Kondisi */}
      </div>
    </>
  );
}
