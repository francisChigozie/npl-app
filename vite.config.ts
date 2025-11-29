// vite.config.ts
import { defineConfig } from "vite";
// @ts-ignore
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