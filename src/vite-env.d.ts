// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_API_BASE: string; // Add other environment variables here as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}