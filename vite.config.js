import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Development configuration
    return {
      root: 'www',
      server: {
        open: true
      }
    }
  } else {
    // Production build configuration
    return {
      root: 'temp',
      build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'temp/index.html'),
            da: path.resolve(__dirname, 'temp/da/index.html'),
            de: path.resolve(__dirname, 'temp/de/index.html')
          }
        }
      }
    }
  }
})
