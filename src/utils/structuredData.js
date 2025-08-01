/**
 * 结构化数据工具 - 生成JSON-LD格式的Schema.org数据
 */

// 网站基础信息
const siteInfo = {
  name: 'Lower Back Stretches',
  url: 'https://lowerbackstretches.org',
  logo: '/images/logo.png',
  description: 'Expert-guided lower back stretches and exercises to relieve pain and improve flexibility.',
  sameAs: [
    'https://twitter.com/backhealth',
    'https://facebook.com/backhealth'
  ]
}

/**
 * 生成网站组织信息结构化数据
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteInfo.name,
    url: siteInfo.url,
    logo: siteInfo.logo,
    description: siteInfo.description,
    sameAs: siteInfo.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${siteInfo.url}/contact`
    }
  }
}

/**
 * 生成网站结构化数据
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteInfo.name,
    url: siteInfo.url,
    description: siteInfo.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteInfo.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

/**
 * 生成面包屑导航结构化数据
 * @param {Array} breadcrumbs - 面包屑数组，格式：[{name: 'Home', url: '/'}, {name: 'Exercises', url: '/exercises'}]
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  const itemListElement = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteInfo.url}${item.url}`
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  }
}

/**
 * 生成文章结构化数据
 * @param {Object} article - 文章对象
 */
export function generateArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    author: {
      '@type': 'Person',
      name: article.author || 'Back Health Expert'
    },
    publisher: {
      '@type': 'Organization',
      name: siteInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: siteInfo.logo
      }
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteInfo.url}/blog/${article.addressBar}`
    },
    articleSection: 'Back Health',
    keywords: article.seo?.keywords || 'back health, spine care, back pain'
  }
}

/**
 * 生成练习结构化数据 (HowTo)
 * @param {Object} exercise - 练习对象
 */
export function generateExerciseSchema(exercise) {
  // 从HTML内容中提取步骤
  const steps = extractStepsFromHTML(exercise.detailsHtml)
  
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: exercise.title,
    description: exercise.description,
    image: exercise.imageUrl,
    author: {
      '@type': 'Organization',
      name: siteInfo.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: siteInfo.logo
      }
    },
    datePublished: exercise.date,
    dateModified: exercise.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteInfo.url}/exercises/${exercise.addressBar}`
    },
    totalTime: exercise.duration,
    tool: [],
    supply: [],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      image: step.image || exercise.imageUrl
    }))
  }

  return howToSchema
}

/**
 * 从HTML内容中提取步骤信息
 * @param {string} htmlContent - HTML内容
 * @returns {Array} 步骤数组
 */
function extractStepsFromHTML(htmlContent) {
  if (!htmlContent) return []
  
  const steps = []
  const stepRegex = /<h4>Step \d+: ([^<]+)<\/h4>\s*<p>([^<]+)<\/p>/g
  let match
  
  while ((match = stepRegex.exec(htmlContent)) !== null) {
    steps.push({
      title: match[1],
      description: match[2]
    })
  }
  
  return steps
}

/**
 * 生成FAQ结构化数据
 * @param {Array} faqs - FAQ数组，格式：[{question: 'Q', answer: 'A'}]
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * 生成本地业务结构化数据
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: siteInfo.name,
    url: siteInfo.url,
    description: siteInfo.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${siteInfo.url}/contact`
    },
    sameAs: siteInfo.sameAs
  }
}

/**
 * 在页面中插入结构化数据
 * @param {Object} schema - 结构化数据对象
 */
export function insertStructuredData(schema) {
  // 移除已存在的结构化数据
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
  existingScripts.forEach(script => script.remove())
  
  // 创建新的结构化数据脚本
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema, null, 2)
  document.head.appendChild(script)
}

/**
 * 插入多个结构化数据
 * @param {Array} schemas - 结构化数据数组
 */
export function insertMultipleStructuredData(schemas) {
  schemas.forEach(schema => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema, null, 2)
    document.head.appendChild(script)
  })
} 