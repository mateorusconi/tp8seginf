import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' debe coincidir con el nombre de tu repositorio para GitHub Pages
  // Si tu repo es https://github.com/usuario/mi-proyecto, base debe ser '/mi-proyecto/'
  // Al usar HashRouter en la app, './' suele funcionar bien para rutas relativas.
  base: './', 
})