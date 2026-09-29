import { fileURLToPath, URL } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // On GitHub Pages the site lives at https://serbanica123.github.io/Portfolio/,
  // so the final build needs the "/Portfolio/" prefix. `npm run dev` stays at http://localhost:5173/.
  // If the repo is renamed, change this to the new name.
  base: command === "build" ? "/Portfolio/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}))
