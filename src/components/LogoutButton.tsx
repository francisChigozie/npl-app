// src/components/LogoutButton.tsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { Button } from "@mui/material";

export default function LogoutButton() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    if (!auth) {
        throw new Error("AuthContext missing");
    }

    const { logout } = auth;

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login", { replace: true });
        } catch (e) {
            console.error("Logout failed:", e);
        }
    };

    return (
        <Button color="inherit" onClick={handleLogout}>
            Logout
        </Button>
    );
}