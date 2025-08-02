<template>
  <div class="home">
    <!-- 头部区域 -->
    <Header />

    <!-- 内容区域 -->
    <div class="main-container">
      <h1 class="main-title">Lower Back Stretches Guide</h1>
      <div class="container">
        <div class="content-area">
          <!-- 左侧导航 -->
          <Sidebar
            :active-section="activeSection"
            :navigation-items="sidebarItems"
            @section-click="handleSectionClick"
          />
          <!-- 中间主内容 -->
          <main class="main-content">
            <!-- What are Lower Back Stretches? -->
            <section id="what-are-stretches" class="content-section">
              <h2 class="section-title">What are Lower Back Stretches?</h2>
              <p class="section-text">
                Lower Back Stretches are gentle exercises designed to improve flexibility, reduce
                pain, maintain posture, and prevent injuries in the lower back region. Performing
                regular Lower Back Stretches helps counteract the effects of prolonged sitting, poor
                posture, and daily stress, ultimately improving your quality of life.
              </p>

              <div class="section-image">
                <img src="/images/index-about.webp" alt="Lower Back Stretches" />
              </div>

              <div class="benefits-grid">
                <div class="benefit-card pain-relief">
                  <h3>Pain Relief</h3>
                  <p>
                    Reduce chronic lower back pain and muscle tension with regular Lower Back
                    Stretches
                  </p>
                </div>
                <div class="benefit-card injury-prevention">
                  <h3>Injury Prevention</h3>
                  <p>
                    Strengthen and protect your spine from future injuries through proper Lower Back
                    Stretches
                  </p>
                </div>
                <div class="benefit-card better-mobility">
                  <h3>Better Mobility</h3>
                  <p>
                    Improve flexibility and range of motion in your back by adding Lower Back
                    Stretches to your routine
                  </p>
                </div>
              </div>
            </section>

            <!-- Stretching Exercises -->
            <section id="exercises" class="content-section">
              <h2 class="section-title">Stretching Exercises</h2>

              <!-- 练习列表 -->
              <div
                v-for="exercise in exercises"
                :key="exercise.id"
                :id="exercise.id"
                class="exercise-card"
              >
                <div class="exercise-header">
                  <h3 class="exercise-title">{{ exercise.title }}</h3>
                </div>
                <p class="exercise-description">{{ exercise.description }}</p>
                <div class="exercise-video">
                  <div class="video-wrapper">
                    <div class="video-container" v-if="!videoLoaded[exercise.id]">
                      <img
                        :src="exercise.imageUrl"
                        :alt="exercise.imageAlt"
                        class="video-thumbnail"
                      />
                      <div class="video-overlay">
                        <button class="play-button" @click="loadVideo(exercise.id)">
                          <span class="play-icon">▶</span>
                        </button>
                      </div>
                    </div>
                    <iframe
                      v-else
                      class="video-iframe"
                      :src="exercise.videoUrl"
                      frameborder="0"
                      allowfullscreen
                      :title="exercise.title + ' Video'"
                    ></iframe>
                  </div>
                </div>
                <div class="exercise-steps">
                  <h4 class="steps-title">Step-by-Step Instructions</h4>
                  <ol class="steps-list">
                    <li v-for="step in exercise.stepsList" :key="step">{{ step }}</li>
                  </ol>
                </div>
                <div class="exercise-note">
                  <div class="note-icon">⚠️</div>
                  <p>
                    Important: Stop immediately if you feel sharp pain. These stretches should feel
                    comfortable and relaxing.
                  </p>
                </div>
              </div>
            </section>

            <!-- Benefits of Stretching -->
            <section id="benefits" class="content-section">
              <h2 class="section-title">Benefits of Stretching</h2>
              <div class="benefits-content">
                <p class="section-text">
                  Regular Lower Back Stretches provide numerous benefits that contribute to overall
                  health and well-being. These exercises help maintain spinal health, improve
                  posture, and reduce the risk of chronic pain conditions.
                </p>
                <ul class="benefits-list">
                  <li>Improves blood circulation to the back muscles</li>
                  <li>Reduces muscle tension and stiffness</li>
                  <li>Enhances flexibility and range of motion</li>
                  <li>Helps prevent future back injuries</li>
                  <li>Promotes better posture and alignment</li>
                  <li>Reduces stress and promotes relaxation</li>
                </ul>
              </div>
            </section>

            <!-- Safety Tips -->
            <section id="safety" class="content-section">
              <h2 class="section-title">Safety Tips</h2>
              <div class="safety-content">
                <div class="safety-card">
                  <h3>Before You Start</h3>
                  <ul>
                    <li>
                      Warm up your muscles with light movement before starting Lower Back Stretches
                    </li>
                    <li>Ensure you have enough space to move freely and safely</li>
                    <li>Use a comfortable surface like a yoga mat for better support</li>
                  </ul>
                </div>
                <div class="safety-card">
                  <h3>During Stretching</h3>
                  <ul>
                    <li>Breathe deeply and regularly while performing Lower Back Stretches</li>
                    <li>Move slowly and avoid jerky movements to protect your back</li>
                    <li>Stop if you feel any sharp or severe pain during stretching</li>
                    <li>Don't force your body beyond its limits</li>
                  </ul>
                </div>
                <div class="safety-card">
                  <h3>When to Avoid</h3>
                  <ul>
                    <li>If you have severe back pain or injury, avoid Lower Back Stretches</li>
                    <li>During pregnancy (consult your doctor before stretching)</li>
                    <li>If you have osteoporosis or other bone conditions</li>
                    <li>When experiencing dizziness or balance issues</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- FAQ -->
            <section id="faq" class="content-section">
              <h2 class="section-title">Common Questions (FAQ)</h2>
              <div class="faq-content">
                <div class="faq-item">
                  <h3 class="faq-question">How often should I do these stretches?</h3>
                  <p class="faq-answer">
                    For best results, aim to do Lower Back Stretches 3-5 times per week. You can do
                    them daily if you feel comfortable, but listen to your body and take rest days
                    when needed.
                  </p>
                </div>
                <div class="faq-item">
                  <h3 class="faq-question">How long should I hold each stretch?</h3>
                  <p class="faq-answer">
                    Hold static Lower Back Stretches for 20-30 seconds, and repeat dynamic movements
                    8-10 times. The key is to move slowly and breathe deeply throughout the
                    exercise.
                  </p>
                </div>
                <div class="faq-item">
                  <h3 class="faq-question">Can these stretches help with sciatica?</h3>
                  <p class="faq-answer">
                    Gentle Lower Back Stretches may help relieve some sciatica symptoms, but it's
                    important to consult with a healthcare professional for proper diagnosis and
                    treatment.
                  </p>
                </div>
                <div class="faq-item">
                  <h3 class="faq-question">What if I feel pain during stretching?</h3>
                  <p class="faq-answer">
                    Stop immediately if you feel sharp or severe pain during Lower Back Stretches.
                    Some mild discomfort is normal, but pain is a sign that you should stop and
                    consult a healthcare provider.
                  </p>
                </div>
              </div>
            </section>
          </main>

          <!-- 右侧推荐 -->
          <Recommendations :articles="articles" />
        </div>
      </div>
    </div>

    <!-- 底部区域 -->
    <Footer />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Recommendations from '@/components/Recommendations.vue'
import { useScrollTracking } from '@/composables/useScrollTracking'
import { articles } from '@/data/blog.js'
import { exercises } from '@/data/index.js'

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Header,
    Footer,
    Recommendations,
  },
  data() {
    return {
      articles,
      sidebarItems: [
        { id: 'what-are-stretches', title: 'What are Lower Back Stretches?' },
        { id: 'exercises', title: 'Stretching Exercises' },
        { id: '1', title: 'Lumbar Extension Standing', isChild: true },
        { id: '2', title: 'Single Knee to Chest', isChild: true },
        { id: '3', title: 'Lumbar Mobility', isChild: true },
        { id: '4', title: 'Hamstring Stretch', isChild: true },
        { id: '5', title: 'Forward Bends', isChild: true },
        { id: '6', title: 'Press Up on Elbows', isChild: true },
        { id: 'benefits', title: 'Benefits of Stretching' },
        { id: 'safety', title: 'Safety Tips' },
        { id: 'faq', title: 'Common Questions (FAQ)' },
      ],
      videoLoaded: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      },

      exercises,
    }
  },
  mounted() {
    // 滚动到页面顶部
    window.scrollTo(0, 0)
  },
  setup() {
    const sections = [
      'what-are-stretches',
      'exercises',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      'benefits',
      'safety',
      'faq',
    ]

    const { activeSection, scrollToSection } = useScrollTracking(sections)

    return {
      activeSection,
      scrollToSection,
    }
  },
  methods: {
    handleSectionClick(targetId) {
      this.scrollToSection(targetId)
    },
    loadVideo(videoType) {
      this.videoLoaded[videoType] = true
    },
  },
}
</script>

<style scoped>
/* 整体布局 */
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 内容区域 */
.content-area {
  flex: 1;
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  gap: 2rem;
}

/* 移除不再需要的样式 */

/* 中间主内容 */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1f2937;
  text-align: center;
}

.content-section {
  background: #ffffff;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
}

.section-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 1rem;
}

.section-image {
  margin-bottom: 1rem;
  text-align: center;
}

.section-image img {
  max-width: 70%;
  height: auto;
  border-radius: 0.5rem;
}

/* 好处网格 */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.benefit-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  border: 2px solid;
}

.benefit-card.pain-relief {
  border-color: #3b82f6;
  background: #eff6ff;
}

.benefit-card.injury-prevention {
  border-color: #10b981;
  background: #ecfdf5;
}

.benefit-card.better-mobility {
  border-color: #8b5cf6;
  background: #f3f4f6;
}

.benefit-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.benefit-card p {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
}

/* 运动卡片 */
.exercise-card {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: #fafafa;
}

.exercise-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.exercise-number {
  background: #3b82f6;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
}

.exercise-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}

.exercise-description {
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

/* 视频容器 */
.exercise-video {
  margin: 1rem 0;
  text-align: center;
}

.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #000;
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
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.video-overlay:hover {
  background: rgba(0, 0, 0, 0.6);
}

.play-button {
  background: rgba(59, 130, 246, 0.9);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.play-button:hover {
  background: rgba(59, 130, 246, 1);
  transform: scale(1.1);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
}

.play-icon {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 3px;
}

.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.steps-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.steps-list {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.steps-list li {
  margin-bottom: 0.75rem;
  line-height: 1.5;
  color: #4b5563;
}

.exercise-note {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.note-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.exercise-note p {
  color: #92400e;
  font-size: 0.875rem;
  line-height: 1.4;
}

/* 好处内容 */
.benefits-content {
  margin-top: 1rem;
}

.benefits-list {
  padding-left: 1.5rem;
  margin-top: 1rem;
}

.benefits-list li {
  margin-bottom: 0.5rem;
  color: #4b5563;
  line-height: 1.5;
}

/* 安全提示 */
.safety-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.safety-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
}

.safety-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.safety-card ul {
  padding-left: 1rem;
}

.safety-card li {
  margin-bottom: 0.5rem;
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.4;
}

/* FAQ */
.faq-content {
  margin-top: 1rem;
}

.faq-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.faq-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.faq-question {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.faq-answer {
  color: #4b5563;
  line-height: 1.6;
}

/* 移除右侧推荐样式，已封装到Recommendations组件 */

/* 移除底部样式，已封装到Footer组件 */

/* 响应式布局 */
@media (max-width: 1024px) {
  .content-area {
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }

  .main-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .safety-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 1.5rem;
  }

  .main-content {
    gap: 1rem;
  }

  .content-area {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  /* 隐藏左侧和右侧导航 */
  .sidebar,
  .recommendations {
    display: none;
  }

  .section-title {
    font-size: 1.2rem;
    text-align: center;
  }

  .content-section {
    padding: 1rem;
  }

  .section-text {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .exercise-card {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .benefit-card {
    padding: 1rem;
  }

  .video-wrapper {
    width: 100%;
    margin-bottom: 1rem;
  }

  .exercise-number {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
  }

  .exercise-title {
    font-size: 1rem;
  }

  .exercise-description {
    font-size: 0.8rem;
  }

  .steps-title {
    font-size: 1rem;
  }

  .steps-list {
    padding-left: 1rem;
  }

  .steps-list li {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .exercise-note {
    padding: 0.5rem;
  }

  .exercise-note p {
    font-size: 0.7rem;
  }

  .exercise-steps {
    grid-template-columns: 1fr;
  }

  .safety-content {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .benefits-list li {
    font-size: 0.8rem;
  }

  .benefits-list {
    padding-left: 1rem;
  }

  .faq-question {
    font-size: 1rem;
  }

  .faq-answer {
    font-size: 0.8rem;
    line-height: 1.5;
  }
}
</style>