import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import { getAllRoutes } from './src/utils/sitemapConfig.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    sitemap({
      hostname: 'https://lowerbackstretches.org', // 替换为你的实际域名
      dynamicRoutes: getAllRoutes(),
      generateRobotsTxt: false, // 使用自定义robots.txt
      readable: true, // 生成可读的XML格式
      allowRobots: true, // 允许搜索引擎爬取
      sitemap: {
        hostname: 'https://lowerbackstretches.org',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
