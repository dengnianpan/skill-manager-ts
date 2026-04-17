import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 主进程配置
  main: {},
  // 预加载配置
  preload: {},
  // 渲染进程配置
  renderer: {
    server: {
      port: 5173  // 默认，与vue.config.js中的port一致
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [vue()]
  }
})
