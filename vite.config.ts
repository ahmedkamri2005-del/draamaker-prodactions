import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'NEXT_PUBLIC_')
  return {
    plugins: [react()],
    envPrefix: 'NEXT_PUBLIC_',
    server: {
      proxy: {
        '/api/chat': {
          target: 'https://integrate.api.nvidia.com',
          changeOrigin: true,
          headers: {
            Authorization: `Bearer ${env.NEXT_PUBLIC_AI_API_KEY}`
          },
          rewrite: (path) => path.replace(/^\/api\/chat/, '/v1/chat/completions')
        }
      }
    }
  }
})
