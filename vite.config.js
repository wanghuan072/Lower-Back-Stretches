import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'
import viteCompression from 'vite-plugin-compression'
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
    // 启用gzip压缩
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // 10KB以上才压缩
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 添加资源预加载优化
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia']
  },
  build: {
    cssCodeSplit: true,
    // 添加资源优化
    assetsInlineLimit: 4096, // 4KB以下的资源内联
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        // 优化代码分割
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          utils: ['pinia']
        }
      }
    }
  },
  css: {
    minify: true,
    // 添加CSS优化
    postcss: {
      plugins: [
        // 可以添加PostCSS插件来进一步优化CSS
      ]
    }
  }
})
