import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import {
    registerUser,
    loginUser,
    refreshAccessToken,
    logoutUser,
} from "../api/auth";

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
    const [isLoadingAuth, setIsLoadingAuth] = useState(false);

    /*
     * Check authentication when the application starts.
     *
     * We don't have the refresh token ourselves because it is stored
     * inside an httpOnly cookie.
     *
     * We simply ask the backend:
     *
     * "Do I have a valid refresh token?"
     */
    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const data = await refreshAccessToken();

                setToken(data.accessToken);

                // This requires /auth/refresh to return user.
                if (data.user) {
                    setUser(data.user);
                }
            } catch (error) {
                console.log("No active authentication session", error);

                setToken(null);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    /*
     * LOGIN
     */
    const login = async (email, password) => {
        try {
            setIsLoadingAuth(true);

            const data = await loginUser({
                email,
                password,
            });

            setToken(data.accessToken);
            setUser(data.user);

            return {
                success: true,
                user: data.user,
            };
        } catch (error) {
            console.error("Login failed:", error);

            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    "Login failed",
            };
        } finally {
            setIsLoadingAuth(false);
        }
    };

    /*
     * REGISTER
     */
    const registerMe = async (username, email, password) => {
        try {
            setIsLoadingAuth(true);

            const data = await registerUser({
                username,
                email,
                password,
            });

            return {
                success: true,
                message: data.message,
            };
        } catch (error) {
            console.error("Registration failed:", error);

            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    "Registration failed",
            };
        } finally {
            setIsLoadingAuth(false);
        }
    };

    /*
     * LOGOUT
     */
    const logout = async () => {
        try {
            setIsLoadingAuth(true);

            await logoutUser();
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            setToken(null);
            setUser(null);
            setIsLoadingAuth(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                user,

                loading,
                isLoadingAuth,

                isAuthenticated: !!token,

                login,
                registerMe,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};