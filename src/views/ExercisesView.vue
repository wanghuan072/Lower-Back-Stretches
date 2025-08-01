<template>
  <div class="exercises-page">
    <Header />

    <div class="main-container">
      <div class="container">
        <h1 class="page-title">Exercise Library</h1>
        <p class="page-description">
          Discover a comprehensive collection of lower back stretches and exercises designed to
          improve flexibility, reduce pain, and enhance your overall back health.
        </p>

        <!-- Tab分类切换 -->
        <div class="tabs-container">
          <div class="tabs">
            <button
              class="tab-button"
              :class="{ active: activeCategory === 'all' }"
              @click="setActiveCategory('all')"
            >
              All Exercises
            </button>
            <button
              v-for="category in categories"
              :key="category.value"
              class="tab-button"
              :class="{ active: activeCategory === category.value }"
              @click="setActiveCategory(category.value)"
            >
              {{ category.label }}
            </button>
          </div>
        </div>

        <!-- 练习数量显示 -->
        <div class="exercises-count">
          <span
            >{{ filteredExercises.length }} exercise{{
              filteredExercises.length !== 1 ? 's' : ''
            }}</span
          >
        </div>

        <div class="exercises-grid">
          <div
            class="exercise-card"
            v-for="exercise in filteredExercises"
            :key="exercise.id"
            @click="goToDetail(exercise)"
          >
            <div class="exercise-image">
              <img :src="exercise.imageUrl" :alt="exercise.imageAlt" />
            </div>
            <div class="exercise-content">
              <h3 class="exercise-title">{{ exercise.title }}</h3>
              <span class="exercise-date">{{ formatDate(exercise.date) }}</span>
              <p class="exercise-description">{{ exercise.description }}</p>
              <!-- <div class="exercise-duration">
                <span class="duration-icon">⏱️</span>
                <span>{{ exercise.duration }}</span>
              </div> -->
            </div>
          </div>
        </div>

        <!-- 无结果提示 -->
        <div v-if="filteredExercises.length === 0" class="no-results">
          <p>No exercises found in this category.</p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { exercises } from '@/data/exercises.js'

export default {
  name: 'ExercisesView',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      exercises,
      activeCategory: 'all',
      categories: [
        { value: 'lower-back-stretches', label: 'Lower Back Stretches' },
        {
          value: 'lower-back-stretches-for-pregnantwomen',
          label: 'Lower Back Stretches for Pregnantwomen',
        },
        { value: 'lower-back-stretches-for-men', label: 'Lower Back Stretches for Men' },
      ],
    }
  },
  mounted() {
    // 滚动到页面顶部
    window.scrollTo(0, 0)
  },
  computed: {
    filteredExercises() {
      if (this.activeCategory === 'all') {
        return this.exercises
      }
      return this.exercises.filter(
        (exercise) => exercise.categories && exercise.categories.includes(this.activeCategory)
      )
    },
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category
    },
    goToDetail(exercise) {
      this.$router.push(`/exercises/${exercise.addressBar}`)
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
.exercises-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  background: #f8fafc;
}

/* Tab样式 */
.tabs-container {
  margin-bottom: 2rem;
}

.tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 1rem;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  color: #6b7280;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.tab-button:hover {
  background: #f3f4f6;
  color: #374151;
}

.tab-button.active {
  background: #3b82f6;
  color: white;
}

/* 练习数量显示 */
.exercises-count {
  margin-bottom: 1.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
}

.exercises-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.exercise-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.exercise-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.exercise-image {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.exercise-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.exercise-card:hover .exercise-image img {
  transform: scale(1.05);
}

.exercise-content {
  padding: 1rem;
}

.exercise-date {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
}

.exercise-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.exercise-description {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.exercise-duration {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.duration-icon {
  font-size: 1rem;
}

/* 无结果提示 */
.no-results {
  text-align: center;
  padding: 3rem 1rem;
  color: #6b7280;
}

.no-results p {
  font-size: 1.125rem;
  margin: 0;
}

@media (max-width: 1024px) {
  .exercises-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .tabs {
    gap: 0.25rem;
  }

  .tab-button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .exercises-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tabs {
    gap: 0.25rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .tab-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  .exercise-card {
    border-radius: 0.5rem;
  }

  .exercise-content {
    padding: 1rem;
  }

  .exercise-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .exercise-date {
    font-size: 0.7rem;
  }

  .exercise-description {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .exercises-grid {
    grid-template-columns: 1fr;
  }

  .tabs {
    justify-content: flex-start;
  }

  .tab-button {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
  }
}
</style> 