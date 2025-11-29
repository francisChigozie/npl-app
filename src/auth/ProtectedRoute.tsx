// src/auth/ProtectedRoute.tsx
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

interface ProtectedRouteProps {
    children: ReactNode;
    roles?: string[];
}

export default function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
    const { user } = useAuth();

    // If no user, redirect to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // If roles are specified and user role does not match
    if (roles && !roles.includes(user.role)) {
        // Redirect to a safe default, e.g. dashboard
        return <Navigate to="/login" replace />;
    }

    // Authenticated and authorized
    return <>{children}</>;
}