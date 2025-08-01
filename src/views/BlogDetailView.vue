<template>
  <div class="blog-detail-page">
    <Header />

    <div class="main-container">
      <div class="container">
        <div v-if="article" class="blog-detail">
          <!-- 面包屑导航 -->
          <div class="breadcrumb">
            <a href="/blog" class="breadcrumb-link">Blog</a>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-current">{{ article.title }}</span>
          </div>

          <!-- 文章头部信息 -->
          <div class="blog-header">
            <div class="blog-hero-image">
              <img :src="article.imageUrl" :alt="article.imageAlt" />
              <div class="blog-overlay">
                <div class="blog-meta">
                  <span class="blog-category">{{ article.category }}</span>
                  <span class="blog-date">{{ formatDate(article.date) }}</span>
                </div>
                <h1 class="blog-title">{{ article.title }}</h1>
                <p class="blog-description">{{ article.description }}</p>
                <div class="blog-author">
                  <span class="author-avatar">👨‍⚕️</span>
                  <span class="author-name">{{ article.author }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 主要内容区域 -->
          <div class="main-content-area">
            <!-- 左侧内容 -->
            <div class="content-left">
              <div class="blog-content">
                <div v-html="article.detailsHtml" class="details-content"></div>
              </div>
            </div>

            <!-- 右侧推荐 -->
            <div class="content-right">
              <Recommendations :articles="articles" />
            </div>
          </div>
        </div>

        <!-- 加载状态 -->
        <div v-else-if="loading" class="loading">
          <div class="loading-spinner"></div>
          <p>Loading blog details...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else class="error">
          <h2>Blog Post Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <a href="/blog" class="back-link">Back to Blog</a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Recommendations from '@/components/Recommendations.vue'
import { articles } from '@/data/blog.js'
import { setDetailPageSEO } from '@/utils/seo.js'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  insertMultipleStructuredData,
} from '@/utils/structuredData.js'

export default {
  name: 'BlogDetailView',
  components: {
    Header,
    Footer,
    Recommendations,
  },
  data() {
    return {
      articles,
      loading: true,
    }
  },
  computed: {
    article() {
      const slug = this.$route.params.slug
      return this.articles.find((art) => art.addressBar === slug)
    },
  },
  mounted() {
    // 滚动到页面顶部
    window.scrollTo(0, 0)

    // 模拟加载时间
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  watch: {
    '$route.params.slug': {
      handler() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 300)
        window.scrollTo(0, 0)
      },
      immediate: false,
    },
    article: {
      handler(newArticle) {
        if (newArticle) {
          setDetailPageSEO(newArticle, 'blog')
          // 插入结构化数据
          const schemas = [
            generateOrganizationSchema(),
            generateArticleSchema(newArticle),
            generateBreadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: newArticle.title, url: `/blog/${newArticle.addressBar}` },
            ]),
          ]
          insertMultipleStructuredData(schemas)
        }
      },
      immediate: true,
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  },
}
</script>

<style scoped>
.blog-detail-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  background: #f8fafc;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
}

.breadcrumb-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-separator {
  color: #6b7280;
}

.breadcrumb-current {
  color: #374151;
  font-weight: 500;
}

.blog-header {
  margin-bottom: 3rem;
}

.blog-hero-image {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.blog-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 3rem 2rem 2rem;
  color: white;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.blog-category {
  background: rgba(59, 130, 246, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.blog-date {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.blog-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.blog-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.blog-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.author-avatar {
  font-size: 1.5rem;
}

.author-name {
  font-weight: 600;
  color: white;
}

.main-content-area {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  align-items: start;
}

.content-left {
  min-width: 0;
}

.content-right {
  position: sticky;
  top: calc(80px + 2rem);
}

.blog-content {
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.anatomy-points,
.cause-item,
.strategy,
.treatment-method {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border-left: 4px solid #3b82f6;
}

.risk-factors-section ul,
.conclusion-section ul {
  background: #fef2f2;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-left: 4px solid #ef4444;
}

.takeaway-section {
  margin-top: 3rem;
  padding: 2rem;
  background: #f0f9ff;
  border-radius: 0.5rem;
  border-left: 4px solid #0ea5e9;
}

.loading {
  text-align: center;
  padding: 4rem 0;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error {
  text-align: center;
  padding: 4rem 0;
}

.error h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.error p {
  color: #6b7280;
  margin-bottom: 2rem;
}

.back-link {
  display: inline-block;
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.back-link:hover {
  background: #2563eb;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .breadcrumb {
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }
  .blog-hero-image {
    height: 400px;
  }

  .blog-overlay {
    padding: 1rem;
  }

  .blog-meta {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }

  .blog-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .blog-description {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  .blog-content {
    padding: 0.5rem;
  }

  .main-content-area {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .content-right {
    position: static;
  }
}
</style> 