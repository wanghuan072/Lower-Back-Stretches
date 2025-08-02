import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import { generateSitemapData } from './src/utils/sitemapConfig.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    sitemap({
      hostname: 'https://lowerbackstretches.org', // 替换为你的实际域名
      dynamicRoutes: generateSitemapData().map(item => item.url),
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
  build: {
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },
  css: {
    minify: true
  },
  // 性能优化配置
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia']
  }
})
