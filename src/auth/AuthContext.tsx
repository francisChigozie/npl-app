// src/auth/AuthContext.tsx
import { createContext, useState, useMemo, type ReactNode, useEffect } from "react";
import axios from "axios";

export type User = {
    id: string;     // from _id
    email: string;
    role: string;
    name: string;
};

export type AuthContextValue = {
    user: User | null;
    login: (email: string, password: string, otp?: string) => Promise<void>;
    logout: () => Promise<void>;
    refresh: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const apiBase = import.meta.env.VITE_API_BASE as string;

export const api = axios.create({
    baseURL: apiBase,
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    // @ts-ignore
    const [token, setToken] = useState<string | null>(null);

    // Restore session
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            try {
                const parsedUser: User = JSON.parse(storedUser);
                setUser(parsedUser);
                setToken(storedToken);
                api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
            } catch {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
            }
        }
    }, []);

    // example AuthContext login
    const login = async (email: string, password: string, otp?: string) => {
        const res = await api.post("/auth/login", { email, password, otp });

        const { data, token, refreshToken } = res.data as {
            data: { email: string; role: string; _id?: string; id?: string };
            token: string;
            refreshToken: string;
        };

        const mappedUser: User = {
            id: data.id ?? data._id ?? "",
            email: data.email,
            role: data.role,
            name: "",
        };

        localStorage.setItem("user", JSON.stringify(mappedUser));
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setUser(mappedUser);

        return mappedUser; // 👈 IMPORTANT
    };

    const logout = async () => {
        try {
            await api.post("/auth/logout");
        } catch {
            // ignore errors
        }

        delete api.defaults.headers.common["Authorization"];
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        setUser(null);
        setToken(null);
    };

    const refresh = async () => {
        const storedRefreshToken = localStorage.getItem("refreshToken");
        if (!storedRefreshToken) {
            throw new Error("No refresh token available");
        }

        try {
            const response = await api.post("/auth/refresh-token", {
                refreshToken: storedRefreshToken,
            });

            const { token, refreshToken } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setToken(token);
        } catch (error) {
            console.error("[Auth] Refresh token failed:", error);
            logout();
        }
    };

    useEffect(() => {
        console.log("[Auth] current user:", user);
    }, [user]);


    const value = useMemo<AuthContextValue>(
        // @ts-ignore
        () => ({ user, login, logout, refresh }),
        [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}