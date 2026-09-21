import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
    const navigate = useNavigate();

    const { login, isLoadingAuth } = useAuth();

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const {
        register,
        handleSubmit,
        formState,
    } = form;

    const { errors } = formState;

    const onSubmit = async (data) => {
        console.log("Login form submitted");

        const result = await login(
            data.email,
            data.password
        );

        if (result.success) {
            console.log("Login successful");

            navigate("/dashboard");
        } else {
            console.log(result.message);
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="w-[80%] sm:w-[30%] h-[60vh] sm:h-[80vh] flex flex-col justify-center gap-y-5 px-8 bg-white absolute bottom-24 sm:bottom-2 text-black rounded-lg"
            >
                <div className="form-control">
                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                        })}
                    />

                    <p className="error">
                        {errors.email?.message}
                    </p>
                </div>

                <div className="form-control">
                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                        })}
                    />

                    <p className="error">
                        {errors.password?.message}
                    </p>
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isLoadingAuth}
                >
                    {isLoadingAuth ? "Logging in..." : "Submit"}
                </button>

                <Link
                    to="/auth/register"
                    className="underline"
                >
                    Don't have an account?
                </Link>
            </form>
        </div>
    );
};

export default LoginForm;