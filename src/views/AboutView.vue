<template>
  <div class="about-page">
    <Header />

    <div class="main-container">
      <div class="container">
        <h1 class="page-title">About This Website</h1>
        <p class="page-description">
          A comprehensive resource dedicated to helping you understand and improve your back health
          through evidence-based information and practical guidance.
        </p>

        <div class="about-content">
          <!-- 网站概览 -->
          <div class="overview-section">
            <div class="overview-card">
              <div class="overview-image">
                <img src="/images/about.webp" alt="Back Health Guide" />
              </div>
              <div class="overview-content">
                <h2 class="overview-title">Your Complete Back Health Resource</h2>
                <p class="overview-text">
                  This website is your comprehensive guide to understanding, preventing, and
                  managing back pain. We provide evidence-based information, practical exercises,
                  and expert insights to help you achieve better back health and overall wellness.
                </p>
              </div>
            </div>
          </div>

          <!-- 网站内容 -->
          <div class="content-section">
            <h2 class="section-title">What You'll Find Here</h2>
            <div class="content-grid">
              <div class="content-card" v-for="content in websiteContent" :key="content.id">
                <h3 class="content-title">{{ content.title }}</h3>
                <p class="content-description">{{ content.description }}</p>
                <ul class="content-features">
                  <li v-for="feature in content.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 网站特色 -->
          <div class="features-section">
            <h2 class="section-title">Why Choose This Website</h2>
            <div class="features-grid">
              <div class="feature-card" v-for="feature in websiteFeatures" :key="feature.id">
                <h3 class="feature-title">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <!-- 使用指南 -->
          <div class="guide-section">
            <h2 class="section-title">How to Use This Website</h2>
            <div class="guide-content">
              <div class="guide-step" v-for="step in usageGuide" :key="step.id">
                <div class="step-number">{{ step.number }}</div>
                <div class="step-content">
                  <h3 class="step-title">{{ step.title }}</h3>
                  <p class="step-description">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 免责声明 -->
          <div class="disclaimer-section">
            <h2 class="section-title">Important Information</h2>
            <div class="disclaimer-content">
              <p class="disclaimer-text">
                This website provides educational information about back health and wellness. The
                content is for informational purposes only and should not be considered as medical
                advice.
              </p>
              <div class="disclaimer-points">
                <div class="disclaimer-point">
                  <span class="point-icon">⚠️</span>
                  <span
                    >Always consult with a healthcare professional before starting any new exercise
                    program</span
                  >
                </div>
                <div class="disclaimer-point">
                  <span class="point-icon">⚠️</span>
                  <span>Stop any exercise that causes pain or discomfort</span>
                </div>
                <div class="disclaimer-point">
                  <span class="point-icon">⚠️</span>
                  <span>Seek immediate medical attention for severe or persistent back pain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AboutView',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      websiteContent: [
        {
          id: 1,
          title: 'Exercise Library',
          description: 'Comprehensive collection of back-strengthening and stretching exercises.',
          features: [
            'Step-by-step exercise instructions',
            'Video demonstrations',
            'Difficulty levels for all fitness levels',
            'Targeted exercises for specific conditions',
          ],
        },
        {
          id: 2,
          title: 'Health Articles',
          description: 'Evidence-based articles on back health, pain management, and wellness.',
          features: [
            'Research-backed information',
            'Expert insights and tips',
            'Latest medical findings',
            'Practical lifestyle advice',
          ],
        },
        {
          id: 3,
          title: 'Educational Resources',
          description: 'Learn about back anatomy, common conditions, and prevention strategies.',
          features: [
            'Anatomy and physiology guides',
            'Condition-specific information',
            'Prevention strategies',
            'Treatment options overview',
          ],
        },
      ],
      websiteFeatures: [
        {
          id: 1,
          title: 'Evidence-Based',
          description: 'All content is based on scientific research and peer-reviewed studies.',
        },
        {
          id: 2,
          title: 'User-Friendly',
          description: 'Easy-to-navigate design with clear, accessible information.',
        },
        {
          id: 3,
          title: 'Comprehensive',
          description: 'Complete resource covering all aspects of back health and wellness.',
        },
        {
          id: 4,
          title: 'Regular Updates',
          description: 'Content is regularly updated with the latest research and information.',
        },
      ],
      usageGuide: [
        {
          id: 1,
          number: '1',
          title: 'Explore the Exercise Library',
          description:
            'Browse through our collection of exercises, filtered by difficulty level and target area.',
        },
        {
          id: 2,
          number: '2',
          title: 'Read Health Articles',
          description:
            'Learn about back health, pain management, and wellness through our informative articles.',
        },
        {
          id: 3,
          number: '3',
          title: 'Follow Exercise Routines',
          description: 'Create your own routine or follow our recommended exercise sequences.',
        },
        {
          id: 4,
          number: '4',
          title: 'Stay Informed',
          description: 'Regularly check back for new content and updated information.',
        },
      ],
    }
  },
  mounted() {
    // 滚动到页面顶部
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
  padding: 3rem 0;
  background: #f8fafc;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.section-text {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* 网站概览区域 */
.overview-section {
  margin-bottom: 2rem;
}

.overview-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
}

.overview-image {
  width: 400px;
  height: 300px;
  overflow: hidden;
  flex-shrink: 0;
}

.overview-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overview-content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.overview-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.overview-text {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* 网站内容区域 */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.content-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.content-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.content-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
}

.content-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
}

.content-features {
  list-style: none;
  padding: 0;
}

.content-features li {
  padding: 0.5rem 0;
  color: #374151;
  position: relative;
  padding-left: 1.5rem;
}

.content-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

/* 网站特色区域 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.feature-description {
  color: #6b7280;
  line-height: 1.6;
}

/* 使用指南区域 */
.guide-section {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.guide-content {
  max-width: 800px;
  margin: 0 auto;
}

.guide-step {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border-left: 4px solid #3b82f6;
}

.step-number {
  background: #3b82f6;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.step-description {
  color: #6b7280;
  line-height: 1.6;
}

/* 免责声明区域 */
.disclaimer-section {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.disclaimer-content {
  max-width: 800px;
  margin: 0 auto;
}

.disclaimer-text {
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
}

.disclaimer-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.disclaimer-point {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #fef2f2;
  border-radius: 0.5rem;
  border-left: 4px solid #ef4444;
}

.point-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.disclaimer-point span:last-child {
  color: #374151;
  font-weight: 500;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  font-size: 1.25rem;
}

.contact-item span:last-child {
  color: #374151;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-description {
    font-size: 1rem;
    max-width: 500px;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .overview-title {
    font-size: 2rem;
  }

  .overview-text {
    font-size: 1rem;
  }

  .content-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .overview-card {
    max-width: 900px;
  }

  .overview-content {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .main-container {
    padding: 1rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .page-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .page-description {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .about-content {
    gap: 2rem;
  }

  .section-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .section-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  /* 概览卡片响应式 */
  .overview-card {
    flex-direction: column;
    max-width: 100%;
  }

  .overview-image {
    width: 100%;
    height: 200px;
  }

  .overview-content {
    padding: 1rem;
  }

  .overview-title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .overview-text {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  /* 内容网格响应式 */
  .content-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  .content-card {
    padding: 1rem;
  }

  .content-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .content-description {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .content-features li {
    font-size: 0.8rem;
    padding: 0.25rem 0;
    padding-left: 1rem;
  }

  /* 特色网格响应式 */
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  .feature-card {
    padding: 1rem;
  }

  .feature-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .feature-description {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  /* 使用指南响应式 */
  .guide-section {
    padding: 1rem;
  }

  .guide-step {
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  .step-number {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
  }

  .step-title {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  .step-description {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  /* 免责声明响应式 */
  .disclaimer-section {
    padding: 1rem;
  }

  .disclaimer-text {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .disclaimer-point {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .point-icon {
    font-size: 1rem;
  }

  .disclaimer-point span:last-child {
    font-size: 0.8rem;
    line-height: 1.5;
  }
}
</style> 