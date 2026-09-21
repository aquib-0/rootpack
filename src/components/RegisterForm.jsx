import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const RegisterForm = () => {

    const navigate = useNavigate();
    const { registerMe, isLoadingAuth } = useAuth();
    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirm_password: ""
        }
    });
    const {register, formState, handleSubmit} = form;
    const {errors} = formState;

    const onSubmit = async (data) => {
    const result = await registerMe(
        data.name,
        data.email,
        data.password
    );

    if (result.success) {
        navigate("/auth/login");
    } else {
        console.log(result.message);
    }
};
  return (
    <div className="w-full h-full flex justify-center items-center">
        {/* <h1>This is the Register Form</h1> */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-[80%] sm:w-[30%] h-[60vh] sm:h-[80vh] flex flex-col justify-center gap-y-5 px-8 bg-white text-black absolute bottom-24 sm:bottom-2 rounded-lg">
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username", {
                    required: {
                    value: true,
                    message: "Username is required",
                    }
                })} />
                <p className="error">{errors.username?.message}</p>
            </div>

            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email", {
                required: {
                    value: true,
                    message: "Email is required",
                }
                })} />
                <p className="error">{errors.email?.message}</p>
            </div>

            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password", {
                required: {
                    value: true,
                    message: "Password is required",
                }
                })} />
                <p className="error">{errors.password?.message}</p>
            </div>

            <div className="form-control">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" {...register("confirm_password", {
                required: {
                    value: true,
                    message: "Please confirm your password",
                }
                })} />
                <p className="error">{errors.confirm_password?.message}</p>
            </div>

            {/* <button className="submit-btn">{isLoadingAuth? <Spinner /> : "Submit"}</button> */}
            <button disabled={isLoadingAuth} className="submit-btn">
                {isLoadingAuth ? "Registering..." : "Register"}
            </button>

            <Link to="/auth/login" className="underline">Already have an account?</Link>
        </form>
    </div>
  )
}

export default RegisterForm