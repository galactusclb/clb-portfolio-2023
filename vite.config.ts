import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    //? this should use, if path alias in the tsconfig.json like this, '@/*' : ['./src']
    // alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
  }
})
