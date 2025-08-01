import { exercises as exercisesIndex } from '../data/index.js'
import { exercises as exercisesDetail } from '../data/exercises.js'
import { articles } from '../data/blog.js'

// 生成站点地图数据
export function generateSitemapData() {
  const hostname = 'https://lowerbackstretches.org' // 替换为你的实际域名
  const currentDate = new Date().toISOString().split('T')[0]

  // 静态路由配置
  const staticRoutes = [
    {
      url: '/',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: '/exercises',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/blog',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: '/privacy-policy',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: '/terms-of-service',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: '/copyright',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ]

  // 生成练习详情页路由（来自index.js）
  const exerciseRoutesIndex = exercisesIndex.map(exercise => ({
    url: `/exercises/${exercise.id}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  }))

  // 生成练习详情页路由（来自exercises.js）
  const exerciseRoutesDetail = exercisesDetail.map(exercise => ({
    url: `/exercises/${exercise.addressBar}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  }))

  // 生成博客详情页路由
  const blogRoutes = articles.map(article => ({
    url: `/blog/${article.addressBar}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.7
  }))

  // 合并所有路由
  return [...staticRoutes, ...exerciseRoutesIndex, ...exerciseRoutesDetail, ...blogRoutes]
}

// 获取所有路由列表（用于vite插件配置）
export function getAllRoutes() {
  const staticRoutes = [
    '/',
    '/exercises',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/copyright'
  ]

  // 生成动态练习路由（来自index.js）
  const exerciseRoutesIndex = exercisesIndex.map(exercise => `/exercises/${exercise.id}`)

  // 生成动态练习路由（来自exercises.js）
  const exerciseRoutesDetail = exercisesDetail.map(exercise => `/exercises/${exercise.addressBar}`)

  // 生成动态博客路由
  const blogRoutes = articles.map(article => `/blog/${article.addressBar}`)

  return [...staticRoutes, ...exerciseRoutesIndex, ...exerciseRoutesDetail, ...blogRoutes]
} 