import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

