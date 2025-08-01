/**
 * SEO工具类 - 管理页面的Title, Description, Keywords
 */

// 默认TDK设置
const defaultSEO = {
  title: 'Safe & Effective Lower Back Stretches for Pain Relief',
  description: 'Find safe and effective lower back stretches and exercises to relieve pain, improve flexibility, and strengthen your core for a healthier spine.',
  keywords: 'lower back stretches, back pain relief, spine health, core strength, flexibility, sciatica exercises'
}

// 默认社交媒体设置
const defaultSocial = {
  siteName: 'Lower Back Stretches',
  type: 'website',
  image: '/og-image.webp',
  imageAlt: 'Lower Back Stretches - Back Health and Wellness',
  twitterCard: 'summary_large_image',
  twitterSite: '@backhealth',
  twitterCreator: '@backhealth'
}

/**
 * 设置页面TDK和社交媒体标签
 * @param {Object} seo - SEO对象，包含title, description, keywords
 * @param {string} canonicalUrl - 规范URL（可选）
 */
export function setPageSEO(seo = {}, canonicalUrl = null) {
  const { title, description, keywords } = { ...defaultSEO, ...seo }
  
  // 设置页面标题
  document.title = title
  
  // 设置meta description
  setMetaTag('description', description)
  
  // 设置meta keywords
  setMetaTag('keywords', keywords)
  
  // 设置canonical URL
  if (canonicalUrl) {
    setCanonicalUrl(canonicalUrl)
  }
  
  // 统一设置社交媒体标签
  setSocialTags(title, description)
}

/**
 * 设置社交媒体标签
 * @param {string} title - 页面标题
 * @param {string} description - 页面描述
 * @param {string} type - 内容类型，默认为website
 */
export function setSocialTags(title, description, type = 'website') {
  // Open Graph标签
  setMetaTag('og:title', title)
  setMetaTag('og:description', description)
  setMetaTag('og:image', defaultSocial.image)
  setMetaTag('og:image:alt', defaultSocial.imageAlt)
  setMetaTag('og:type', type)
  setMetaTag('og:url', window.location.href)
  setMetaTag('og:site_name', defaultSocial.siteName)
  
  // Twitter Card标签
  setMetaTag('twitter:card', defaultSocial.twitterCard)
  setMetaTag('twitter:site', defaultSocial.twitterSite)
  setMetaTag('twitter:creator', defaultSocial.twitterCreator)
  setMetaTag('twitter:title', title)
  setMetaTag('twitter:description', description)
  setMetaTag('twitter:image', defaultSocial.image)
  setMetaTag('twitter:image:alt', defaultSocial.imageAlt)
}

/**
 * 设置meta标签
 * @param {string} name - meta标签的name或property属性
 * @param {string} content - meta标签的content属性
 */
function setMetaTag(name, content) {
  // 先查找已存在的标签
  let metaTag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
  
  if (!metaTag) {
    // 如果不存在，创建新标签
    metaTag = document.createElement('meta')
    // 判断是property还是name属性
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      metaTag.setAttribute('property', name)
    } else {
      metaTag.setAttribute('name', name)
    }
    document.head.appendChild(metaTag)
  }
  
  // 更新content属性
  metaTag.setAttribute('content', content)
}

/**
 * 设置canonical URL
 * @param {string} url - 规范URL
 */
function setCanonicalUrl(url) {
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  
  if (!canonicalLink) {
    // 如果不存在，创建新标签
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  
  // 更新href属性
  canonicalLink.setAttribute('href', url)
}

/**
 * 从路由meta中获取SEO信息
 * @param {Object} route - Vue路由对象
 * @returns {Object} SEO对象
 */
export function getSEOFromRoute(route) {
  if (route.meta) {
    return {
      title: route.meta.title,
      description: route.meta.description,
      keywords: route.meta.keywords
    }
  }
  return null
}

/**
 * 为详情页面设置动态TDK
 * @param {Object} item - 详情项（文章或练习）
 * @param {string} type - 类型（'article' 或 'exercise'）
 */
export function setDetailPageSEO(item, type = 'article') {
  if (!item) return
  
  const seo = item.seo || {}
  const defaultTitle = type === 'article' 
    ? `${item.title} - Back Health Article`
    : `${item.title} - Lower Back Exercise`
  
  const defaultDescription = item.description || 'Learn more about this back health topic.'
  const defaultKeywords = type === 'article'
    ? 'back health, spine care, back pain, health article'
    : 'lower back exercise, back stretch, spine health'
  
  const title = seo.title || defaultTitle
  const description = seo.description || defaultDescription
  const keywords = seo.keywords || defaultKeywords
  
  // 生成canonical URL
  const baseUrl = 'https://lowerbackstretches.org'
  const canonicalUrl = type === 'article' 
    ? `${baseUrl}/blog/${item.addressBar}`
    : `${baseUrl}/exercises/${item.addressBar}`
  
  // 设置基础SEO和社交媒体标签
  setPageSEO({
    title,
    description,
    keywords
  }, canonicalUrl)
  
  // 更新社交媒体类型
  setSocialTags(title, description, type === 'article' ? 'article' : 'website')
}

/**
 * 重置为默认TDK
 */
export function resetToDefaultSEO() {
  setPageSEO(defaultSEO)
} 