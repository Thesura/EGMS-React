import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: "./",
    plugins: [
        react({
            include: /\.(js|jsx|ts|tsx)$/,
        }),
        tailwindcss(),
    ],
    esbuild: {
        // This tells esbuild to use the 'jsx' loader for .js files
        loader: 'jsx',
        // You can also restrict this to specific files or directories
        include: /src\/.*\.js$/, 
  },
    build: {
        outDir: 'build', // CRA's default build output
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
    },
});