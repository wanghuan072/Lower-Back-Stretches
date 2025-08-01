<template>
  <div class="privacy-policy-page">
    <Header />

    <div class="main-container">
      <div class="container">
        <h1 class="page-title">Privacy Policy</h1>
        <p class="page-description">
          Your privacy is important to us. This policy explains how we collect, use, and protect
          your information.
        </p>

        <div class="policy-content">
          <div class="policy-section">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you use our website,
              subscribe to our newsletter, or contact us for support.
            </p>
            <ul>
              <li>Personal information (name, email address)</li>
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </div>

          <div class="policy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services.</p>
            <ul>
              <li>Provide and maintain our website</li>
              <li>Send you updates and newsletters</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns and improve user experience</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </div>

          <div class="policy-section">
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third
              parties without your consent, except as described in this policy.
            </p>
            <p><strong>We may share your information in the following circumstances:</strong></p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </div>

          <div class="policy-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul>
              <li>Encrypted data transmission</li>
              <li>Secure server infrastructure</li>
              <li>Regular security audits</li>
            </ul>
          </div>

          <div class="policy-section">
            <h2>Your Rights</h2>
            <p>You have certain rights regarding your personal information, including:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div class="policy-section">
            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience and
              analyze website traffic.
            </p>
            <p><strong>Types of cookies we use:</strong></p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
              </li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </div>

          <div class="policy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <p>Email: <a href="mailto:kadiyamobi89@gmail.com">kadiyamobi89@gmail.com</a></p>
          </div>

          <div class="policy-section">
            <h2>Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the "Last Updated" date.
            </p>
            <p><strong>Last Updated:</strong> August 1, 2025</p>
            <p><strong>Effective Date:</strong> August 1, 2025</p>
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
  name: 'PrivacyPolicyView',
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
.privacy-policy-page {
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

.policy-content {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.policy-section {
  margin-bottom: 2rem;
}

.policy-section:last-child {
  margin-bottom: 0;
}

.policy-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.policy-section p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.policy-section ul {
  list-style: disc;
  padding-left: 1.5rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.policy-section li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.policy-section a {
  color: #3b82f6;
  text-decoration: none;
}

.policy-section a:hover {
  text-decoration: underline;
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

  .policy-content {
    padding: 1.5rem;
  }

  .policy-section h2 {
    font-size: 1.2rem;
  }

  .policy-section p,
  .policy-section li {
    font-size: 0.8rem;
  }
}
</style> 