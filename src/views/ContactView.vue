<template>
  <div class="contact-page">
    <Header />

    <div class="main-container">
      <div class="container">
        <h1 class="page-title">Contact Us</h1>
        <p class="page-description">Have questions or need support? We're here to help.</p>

        <div class="contact-content">
          <div class="contact-section">
            <h2>Email</h2>
            <p>Send us an email and we'll respond within 24 hours:</p>
            <a href="mailto:jennifermontai77@gmail.com" class="email-link"
              >jennifermontai77@gmail.com</a
            >
          </div>

          <div class="contact-section">
            <h2>How We Can Help</h2>
            <p>We're here to assist you with:</p>
            <ul>
              <li>Questions about exercises and stretches</li>
              <li>Technical support for the website</li>
              <li>Feedback and suggestions</li>
              <li>Partnership opportunities</li>
              <li>Copyright inquiries</li>
              <li>General questions about back health</li>
            </ul>
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
  name: 'ContactView',
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 滚动到页面顶部
    window.scrollTo(0, 0)
  },
  methods: {},
}
</script>

<style scoped>
.contact-page {
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
  max-width: 800px;
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
  margin-bottom: 3rem;
  line-height: 1.6;
}

.contact-content {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-section {
  margin-bottom: 2rem;
}

.contact-section:last-child {
  margin-bottom: 0;
}

.contact-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.contact-section p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.email-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.email-link:hover {
  text-decoration: underline;
}

.contact-section ul {
  list-style: disc;
  padding-left: 1.5rem;
  color: #6b7280;
}

.contact-section li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

/* 响应式设计 */
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
  }

  .contact-content {
    padding: 1.5rem;
  }

  .contact-section h2 {
    font-size: 1.2rem;
  }

  .contact-section p,
  .contact-section li {
    font-size: 0.8rem;
  }
}
</style> 