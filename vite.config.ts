import { type ConfigEnv, defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig((env: ConfigEnv) => {
  if (env.command === 'serve') {
    const devConfig: UserConfig = {
      plugins: [react()],
      server: {
        port: 9262
      },
      preview: {
        port: 9262
      }
    }
    return devConfig
  } else {
    const buildConfig: UserConfig = {
      plugins: [react()],
      build: {
        outDir: "dist"
      }
    }
    return buildConfig
  }
})