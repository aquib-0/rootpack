import { useLocation } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const AuthPage = () => {
    const location = useLocation();
    const path = location.pathname;
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-500 text-white">
      <div className="w-full h-full bg-[url(/landing_bg.jpg)] bg-cover bg-no-repeat absolute top-0 left-0 z-0" />
      {
        path==='/auth/login'? (
            <LoginForm />
        ) : (
            <RegisterForm />
        )
      }
      {/* <h1>this is the auth page</h1> */}
    </div>
  )
}

export default AuthPage
