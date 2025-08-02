import { createRouter, createWebHistory } from 'vue-router'
import { setPageSEO, getSEOFromRoute } from '../utils/seo.js'
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  insertMultipleStructuredData
} from '../utils/structuredData.js'
import HomeView from '../views/HomeView.vue'
import ExercisesView from '../views/ExercisesView.vue'
import ExerciseDetailView from '../views/ExerciseDetailView.vue'
import BlogView from '../views/BlogView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import AboutView from '../views/AboutView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsOfServiceView from '../views/TermsOfServiceView.vue'
import CopyrightView from '../views/CopyrightView.vue'
import ContactView from '../views/ContactView.vue'
import { exercisesConfig } from '../data/exercises/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Safe & Effective Lower Back Stretches for Pain Relief',
      description: 'Find safe and effective lower back stretches and exercises to relieve pain, improve flexibility, and strengthen your core for a healthier spine.',
      keywords: 'lower back stretches, back pain relief, spine health, core strength, flexibility, sciatica exercises'
    }
  },
  // 重定向旧的exercises路径到第一个分类
  {
    path: '/exercises',
    redirect: exercisesConfig[0]?.path || '/'
  },
  // 动态生成exercises分类路由
  ...exercisesConfig.map(config => ({
    path: config.path,
    name: config.id,
    component: ExercisesView,
    meta: config.seo
  })),
  // 动态生成exercises详情页路由
  ...exercisesConfig.map(config => ({
    path: `${config.path}/:slug`,
    name: `${config.id}-detail`,
    component: ExerciseDetailView,
    props: true
  })),
  // 重定向旧的详情页路由到第一个分类
  {
    path: '/exercises/:slug',
    redirect: to => `/lower-back-stretches/${to.params.slug}`
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: {
      title: 'Lower Back Health Blog: Tips, Guides & Expert Advice',
      description: 'Explore our blog for expert articles on lower back pain relief, posture, and wellness. Get tips to improve flexibility and live a healthier life.',
      keywords: 'lower back blog, back pain tips, posture guides, wellness, stretching advice, expert advice, health'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-detail',
    component: BlogDetailView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About Us: Our Mission for a Pain-Free Lower Back',
      description: "Learn about our mission to help you find relief from lower back pain. We're dedicated to providing expert-led, safe, and effective stretching guides.",
      keywords: 'about us, our story, mission, lower back health, expert guides, trustworthy advice, our team'
    }
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicyView,
    meta: {
      title: 'Privacy Policy - How We Protect Your Information',
      description: 'Our privacy policy explains how we collect, use, and protect your personal information when you use our website and services.',
      keywords: 'privacy policy, data protection, personal information, privacy rights, data security'
    }
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: TermsOfServiceView,
    meta: {
      title: 'Terms of Service - Website Usage Agreement',
      description: 'Read our terms of service to understand the rules and guidelines for using our website and services.',
      keywords: 'terms of service, website terms, usage agreement, legal terms, service conditions'
    }
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: CopyrightView,
    meta: {
      title: 'Copyright Notice - Intellectual Property Rights',
      description: 'Information about copyright protection, permitted uses, and intellectual property rights for content on our website.',
      keywords: 'copyright notice, intellectual property, content rights, copyright protection, legal rights'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact Us - Get in Touch for Support',
      description: 'Contact us for questions about exercises, technical support, feedback, or any other inquiries. We\'re here to help with your back health journey.',
      keywords: 'contact us, support, help, inquiries, back health questions, customer service'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 全局路由守卫 - 处理页面TDK设置和结构化数据
router.beforeEach((to, from, next) => {
  // 检查是否为详情页面（这些页面有自己的TDK设置逻辑）
  const isDetailPage = to.name && (to.name.includes('-detail') || to.name === 'blog-detail')

  if (!isDetailPage) {
    // 为其他页面设置TDK和社交媒体标签
    const seo = getSEOFromRoute(to)
    if (seo) {
      // 生成canonical URL
      const baseUrl = 'https://lowerbackstretches.org'
      const canonicalUrl = `${baseUrl}${to.path}`
      setPageSEO(seo, canonicalUrl)
    }

    // 插入基础结构化数据
    const baseSchemas = [
      generateOrganizationSchema(),
      generateWebsiteSchema()
    ]

    // 为特定页面添加面包屑结构化数据
    if (to.name && to.name.startsWith('tab-') && !to.name.includes('-detail')) {
      const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Exercises', url: to.path }
      ])
      baseSchemas.push(breadcrumbSchema)
    } else if (to.name === 'blog') {
      const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' }
      ])
      baseSchemas.push(breadcrumbSchema)
    }

    insertMultipleStructuredData(baseSchemas)
  }

  next()
})

export default router
