// src/pages/Login.tsx
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    CircularProgress,
    Container,
    TextField,
    Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import useAuth from "../auth/useAuth";

// Validation schema
const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(1, "Password is required"),
    otp: z.string().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
    const auth = useAuth();
    // @ts-ignore
    const { login, user } = auth;

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            otp: "",
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        try {
            // login now RETURNS the user object (with role)
            const loggedInUser = await login(data.email, data.password, data.otp);

            // @ts-ignore
            const userRole = loggedInUser?.role;

            if (!userRole) {
                throw new Error("No role found for this user");
            }

            localStorage.setItem("userRole", userRole);

            if (userRole === "Admin") {
                navigate("/admin/dash-admin", { replace: true });
            } else if (userRole === "Agent") {
                navigate("/admin/dash-agent", { replace: true });
            } else if (userRole === "Supervisor") {
                navigate("/admin/dash-supervisor", { replace: true });
            } else if (userRole === "Officer") {
                navigate("/admin/dash-officer", { replace: true });
            } else {
                navigate("/login", { replace: true });
            }
        } catch (e: any) {
            const message =
                e?.response?.data?.message || e?.message || "Login failed";
            setError("root", { type: "manual", message });
        }
    };

    return (
        <Container maxWidth="xs" sx={{ mt: { xs: 6, sm: 8 }, pb: 4 }}>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    boxShadow: 1,
                    bgcolor: "background.paper",
                }}
            >
                <Typography variant="h5" align="center" fontWeight={700}>
                    <FontAwesomeIcon icon={faLock} /> Admin Login
                </Typography>

                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    autoComplete="email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    autoComplete="current-password"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />

                <TextField
                    label="2FA Code (optional)"
                    type="text"
                    variant="outlined"
                    fullWidth
                    autoComplete="one-time-code"
                    inputMode="numeric"
                    {...register("otp")}
                />

                {errors.root?.message && (
                    <Typography color="error" variant="body2">
                        {errors.root.message}
                    </Typography>
                )}

                <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                    sx={{ position: "relative", height: 42 }}
                    fullWidth
                >
                    {isSubmitting && (
                        <CircularProgress
                            size={22}
                            sx={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    )}
                    {isSubmitting ? "Signing in..." : "Login"}
                </Button>
            </Box>
        </Container>
    );
}