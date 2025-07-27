// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env': {}
//   }
// })

import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      config: false // Disable Vite's automatic PostCSS config detection
    }
  }
})