import { Link, useNavigate } from "react-router-dom";

import { PiArrowCircleRightFill } from "react-icons/pi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, isLoadingAuth } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = async () => {
    await logout();
    setMenuOpen(false);
    navigate("/auth/login");
  };
  return (
    <div className="w-full h-[10vh] bg-transparent backdrop-blur-xs flex items-center justify-between px-4 sm:px-8 fixed top-0 border-b border-gray-400 text-white z-40">
      <div className="h-full flex items-center">
        <div className="w-8.75 h-8.75 bg-white [mask-image:url('/rootpack_logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" />{" "}
      </div>

      <div className="hidden h-full md:flex items-center gap-x-12">
        {/* <a href="#landing">Home</a> */}
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <a href="#rating">Insights</a>
      </div>

      <div className="hidden h-full md:flex items-center">
        {isAuthenticated ? (
          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoadingAuth}
            className="flex items-center gap-x-2 hover:cursor-pointer"
          >
            <span>
              <PiArrowCircleRightFill size={36} />
            </span>
            {isLoadingAuth ? "Logging out..." : "Logout"}
          </button>
        ) : (
          <Link to="/auth/login" className="flex items-center">
            <span>
              <PiArrowCircleRightFill size={36} />
            </span>
            Login
          </Link>
        )}
      </div>

      <div className="md:hidden h-full flex items-center relative">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="hover:cursor-pointer"
        >
          {menuOpen ? (
            <RxCross1 size={24} />
          ) : (
            <RxHamburgerMenu size={24} />
          )}
        </button>
        <div
          className={`absolute top-[10vh] right-0 w-56 bg-black/80 backdrop-blur-md border border-gray-400 rounded-b-lg flex flex-col items-center py-6 gap-y-6 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          } `}
        >
          
          <a href="/" onClick={() => setMenuOpen(false)}>
            
            Home
          </a>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <a href="#rating" onClick={() => setMenuOpen(false)}>
            Insights
          </a>
          {isAuthenticated ? (
            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoadingAuth}
              className="flex items-center gap-x-2"
            >
              
              <PiArrowCircleRightFill size={30} />
              {isLoadingAuth ? "Logging out..." : "Logout"}
            </button>
          ) : (
            <Link
              to="/auth/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-x-2"
            > 
              <PiArrowCircleRightFill size={30} /> Login
            </Link>
          )}
        </div>
      </div>

    </div>
  );
};
export default Navbar;
