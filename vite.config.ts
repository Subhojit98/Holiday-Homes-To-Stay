import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Holiday_Homes_To_Stay/",
  plugins: [react()],
})
