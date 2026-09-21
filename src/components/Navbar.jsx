// import { Link } from "react-router-dom"

// import { PiArrowCircleRightFill } from "react-icons/pi";

// const Navbar = () => {
//   return (
//     <div className="w-full h-[10vh] bg-transparent backdrop-blur-xs flex items-center justify-between px-8 fixed top-0 border-b border-gray-400 text-white z-40">
//         <div className="h-full flex items-center">
//           {/* <span><img src="/rootpack_logo.png" width={"35px"} height={"auto"} alt="" /></span> */}
//           <div className="w-8.75 h-8.75 bg-white [mask-image:url('/rootpack_logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" /> {/*w-[35px] h-[35px]*/}
//         </div>

//         <div className="h-full flex items-center gap-x-12">
//           <a href="/">Home</a>
//           <a href="/">Products</a>
//           <a href="#rating">Insights</a>
//         </div>

//         <div className="h-full flex items-center">
//           <Link to="/about" className="flex items-center"><span><PiArrowCircleRightFill size={36} /></span> Learn more</Link>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import { Link, useNavigate } from "react-router-dom";
import { PiArrowCircleRightFill } from "react-icons/pi";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, isLoadingAuth } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate("/auth/login");
  };
  return (
    <div className="w-full h-[10vh] bg-transparent backdrop-blur-xs flex items-center justify-between px-8 fixed top-0 border-b border-gray-400 text-white z-40">
      {" "}
      {/* Logo */}{" "}
      <div className="h-full flex items-center">
        {" "}
        <div className="w-8.75 h-8.75 bg-white [mask-image:url('/rootpack_logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" />{" "}
      </div>{" "}
      {/* Navigation */}{" "}
      <div className="h-full flex items-center gap-x-12">
        {" "}
        {/* <Link to="/">Home</Link>  */}
        <a href="#landing">Home</a>{" "}
        <Link to="/">Products</Link>{" "}
        <a href="#rating">Insights</a>{" "}
      </div>{" "}
      {/* Authentication / Learn More */}{" "}
      <div className="h-full flex items-center">
        {" "}
        {isAuthenticated ? (
          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoadingAuth}
            className="flex items-center gap-x-2 hover:cursor-pointer"
          >
            {" "}
            <span>
              {" "}
              <PiArrowCircleRightFill size={36} />{" "}
            </span>{" "}
            {isLoadingAuth ? "Logging out..." : "Logout"}{" "}
          </button>
        ) : (
          <Link to="/auth/login" className="flex items-center">
            {" "}
            <span>
              {" "}
              <PiArrowCircleRightFill size={36} />{" "}
            </span>{" "}
            Login{" "}
          </Link>
        )}{" "}
      </div>{" "}
    </div>
  );
};
export default Navbar;