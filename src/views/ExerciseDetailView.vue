<template>
  <div class="exercise-detail-page">
    <Header />

    <div class="main-container">
      <div class="container">
        <div v-if="exercise" class="exercise-detail">
          <!-- 面包屑导航 -->
          <div class="breadcrumb">
            <a :href="getCategoryPath()" class="breadcrumb-link">Exercises</a>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-current">{{ exercise.title }}</span>
          </div>

          <!-- 练习头部信息 -->
          <div class="exercise-header">
            <div class="exercise-hero">
              <div class="exercise-video">
                <div class="video-wrapper">
                  <div class="video-container" v-if="!videoLoaded">
                    <img
                      :src="exercise.imageUrl"
                      :alt="exercise.imageAlt"
                      class="video-thumbnail"
                    />
                    <div class="video-overlay">
                      <button class="play-button" @click="loadVideo">
                        <span class="play-icon">▶</span>
                      </button>
                    </div>
                  </div>
                  <iframe
                    v-else
                    class="video-iframe"
                    :src="exercise.iframeUrl"
                    frameborder="0"
                    allowfullscreen
                    :title="exercise.title + ' Video'"
                  ></iframe>
                </div>
              </div>
              <div class="exercise-info">
                <div class="exercise-meta">
                  <span class="exercise-date">{{ formatDate(exercise.date) }}</span>
                  <span class="exercise-duration">
                    <span class="duration-icon">⏱️</span>
                    {{ exercise.duration }}
                  </span>
                </div>
                <h1 class="exercise-title">{{ exercise.title }}</h1>
                <p class="exercise-description">{{ exercise.description }}</p>
                <div class="exercise-tags">
                  <span class="tag" v-for="tag in exercise.tags" :key="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 主要内容区域 -->
          <div class="main-content-area">
            <!-- 左侧内容 -->
            <div class="content-left">
              <div class="exercise-content">
                <div v-html="exercise.detailsHtml" class="details-content"></div>
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
          <p>Loading exercise details...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else class="error">
          <h2>Exercise Not Found</h2>
          <p>The exercise you're looking for doesn't exist.</p>
          <a :href="getCategoryPath()" class="back-link">Back to Exercises</a>
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
import { allExercises, getConfigByPath } from '@/data/exercises/index.js'
import { articles } from '@/data/blog.js'
import { setDetailPageSEO } from '@/utils/seo.js'
import {
  generateExerciseSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  insertMultipleStructuredData,
} from '@/utils/structuredData.js'

export default {
  name: 'ExerciseDetailView',
  components: {
    Header,
    Footer,
    Recommendations,
  },
  data() {
    return {
      exercises: allExercises,
      articles,
      loading: true,
      videoLoaded: false,
    }
  },
  computed: {
    exercise() {
      const slug = this.$route.params.slug
      return this.exercises.find((ex) => ex.addressBar === slug)
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
    exercise: {
      handler(newExercise) {
        if (newExercise) {
          setDetailPageSEO(newExercise, 'exercise')

          // 插入结构化数据
          const schemas = [
            generateOrganizationSchema(),
            generateExerciseSchema(newExercise),
            generateBreadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Exercises', url: this.getCategoryPath() },
              {
                name: newExercise.title,
                url: `${this.getCategoryPath()}/${newExercise.addressBar}`,
              },
            ]),
          ]
          insertMultipleStructuredData(schemas)
        }
      },
      immediate: true,
    },
    // 监听路由参数变化，滚动到顶部
    '$route.params.slug': {
      handler() {
        window.scrollTo(0, 0)
      },
      immediate: false,
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
    loadVideo() {
      this.videoLoaded = true
    },
    getCategoryPath() {
      // 从当前路由路径中提取分类路径
      const path = this.$route.path
      const pathParts = path.split('/')
      // 移除最后一个slug部分，得到分类路径
      pathParts.pop()
      return pathParts.join('/')
    },
  },
}
</script>

<style scoped>
.exercise-detail-page {
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

.exercise-header {
  margin-bottom: 3rem;
}

.exercise-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.exercise-video {
  width: 100%;
}

.video-wrapper {
  width: 100%;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  position: relative;
}

.video-container {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.video-overlay:hover {
  background: rgba(0, 0, 0, 0.5);
}

.play-button {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.play-button:hover {
  background: white;
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.play-icon {
  font-size: 2rem;
  color: #3b82f6;
  margin-left: 4px;
}

.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.exercise-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.exercise-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.exercise-duration {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.duration-icon {
  font-size: 1rem;
}

.exercise-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.2;
}

.exercise-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
}

.exercise-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #eff6ff;
  color: #3b82f6;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
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

.exercise-content {
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.step {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border-left: 4px solid #3b82f6;
}

.variation {
  margin: 1rem 0;
  padding: 1rem;
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
@media (max-width: 1024px) {
}

@media (max-width: 768px) {
  .breadcrumb {
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }

  .exercise-hero {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .video-wrapper {
    height: 250px;
  }

  .play-button {
    width: 60px;
    height: 60px;
  }

  .play-icon {
    font-size: 1.5rem;
  }

  .exercise-title {
    font-size: 1.8rem;
  }

  .exercise-header {
    margin-bottom: 1rem;
  }

  .exercise-content {
    padding: 1rem;
  }

  .main-content-area {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .content-right {
    position: static;
  }
}
</style> 