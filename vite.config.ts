// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    optimizeDeps: {
        include: [
            "@mui/material",
            "@mui/material/styles",
            "@emotion/react",
            "@emotion/styled",
        ],
    },

    resolve: {
        dedupe: ["react", "react-dom"],
    },
    base: '/',  // Absolute paths
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom"],
                    mui: ["@mui/material", "@mui/icons-material"],
                    auth: ["axios", ], // "jwt-decode"
                },
            },
        },
    },
});