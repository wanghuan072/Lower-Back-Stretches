<template>
  <div class="blog-page">
    <Header />

    <div class="main-container">
      <div class="container">
        <h1 class="page-title">Health Blog</h1>
        <p class="page-description">
          Expert insights, tips, and research-backed information about back health, stretching
          techniques, and overall wellness.
        </p>

        <div class="blog-list">
          <article
            class="blog-card"
            v-for="article in articles"
            :key="article.id"
            @click="goToDetail(article)"
          >
            <div class="blog-image">
              <img :src="article.imageUrl" :alt="article.imageAlt" />
              <div class="blog-category">{{ article.category }}</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ formatDate(article.date) }}</span>
              </div>
              <h3 class="blog-title">{{ article.title }}</h3>
              <p class="blog-excerpt">{{ article.description }}</p>
              <div class="blog-author">
                <span class="author-avatar">👨‍⚕️</span>
                <span class="author-name">{{ article.author }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { articles } from '@/data/blog.js'

export default {
  name: 'BlogView',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      articles,
    }
  },
  mounted() {
    // 滚动到页面顶部
    window.scrollTo(0, 0)
  },
  methods: {
    goToDetail(article) {
      this.$router.push(`/blog/${article.addressBar}`)
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },
  },
}
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  background: #f8fafc;
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  height: 180px;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.blog-image {
  position: relative;
  width: 240px;
  height: 100%;
  overflow: hidden;
  flex-shrink: 0;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(59, 130, 246, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.blog-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.blog-date {
  color: #3b82f6;
  font-weight: 500;
}

.blog-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
}

.blog-excerpt {
  color: #6b7280;
  line-height: 1.6;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.blog-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.author-avatar {
  font-size: 1.25rem;
}

.author-name {
  font-weight: 500;
  color: #374151;
}

@media (max-width: 768px) {
  .blog-card {
    height: 110px;
  }

  .blog-image {
    width: 130px;
  }
  .blog-category {
    font-size: 0.7rem;
    padding: 0.1rem 0.5rem;
    left: 0.5rem;
    top: 0.5rem;
  }

  .blog-content {
    padding: 0.5rem;
  }

  .blog-date {
    font-size: 0.7rem;
  }

  .blog-title {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .blog-excerpt {
    font-size: 0.8rem;
    line-height: 1.5;
  }
  .blog-author {
    display: none;
  }
}
</style> 