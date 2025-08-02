<template>
  <footer class="footer">
    <div class="container">
      <!-- 上部分：三列布局 -->
      <div class="footer-top">
        <div class="footer-column">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="/images/logo.png" alt="Lower Back Stretches" class="footer-logo-image" />
              <span class="footer-logo-text">Lower Back Stretches</span>
            </div>
            <p class="footer-description">
              Your trusted resource for Lower Back Stretches and pain relief. Improve your
              flexibility and reduce discomfort with our expert-guided Lower Back Stretches and
              wellness exercises.
            </p>
            <div class="footer-care">
              <span>Made with care for your health and wellness</span>
            </div>
          </div>
        </div>

        <div class="footer-column">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="/" class="footer-link">Home</a></li>
            <li><a href="/lower-back-stretches" class="footer-link">Exercises</a></li>
            <li><a href="/blog" class="footer-link">Blog</a></li>
            <li><a href="/about" class="footer-link">About Us</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-heading">Legal</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link>
            </li>
            <li>
              <router-link to="/terms-of-service" class="footer-link">Terms of Service</router-link>
            </li>
            <li><router-link to="/copyright" class="footer-link">Copyright</router-link></li>
            <li><router-link to="/about" class="footer-link">About Us</router-link></li>
            <li><router-link to="/contact" class="footer-link">Contact Us</router-link></li>
          </ul>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="footer-divider"></div>

      <!-- 下部分：版权和联系信息 -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          © 2025 BackFlex. All rights reserved. Always consult healthcare professionals for medical
          advice.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  background: #1f2937;
  color: white;
  padding: 3rem 0 1.5rem 0;
  margin-top: auto;
}

/* 上部分：三列布局 */
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo-image {
  width: 40px;
  height: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
}

.footer-description {
  color: #d1d5db;
  line-height: 1.6;
  font-size: 0.875rem;
}

.footer-care {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d1d5db;
  font-size: 0.875rem;
}

.footer-heading {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links li {
  margin: 0;
}

.footer-link {
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: white;
}

/* 分隔线 */
.footer-divider {
  height: 1px;
  background: #374151;
  margin-top: 2rem;
}

/* 下部分：版权和联系信息 */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
}

.footer-copyright {
  color: #d1d5db;
  font-size: 0.875rem;
  margin: 0;
}

.footer-contact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-icon {
  font-size: 1rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-column:first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-copyright {
    font-size: 0.75rem;
  }

  .footer-description {
    font-size: 0.8rem;
  }

  .footer-heading {
    font-size: 1rem;
  }

  .footer-link {
    font-size: 0.8rem;
  }
}
</style> 