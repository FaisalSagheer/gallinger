import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Additional common configurations:
    server: {
        port: 3000,
        open: true, // Automatically open browser
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    resolve: {
        alias: {
            '@': '/src', // Path alias for imports
        },
    },
})