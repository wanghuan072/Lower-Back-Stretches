<template>
  <div class="terms-of-service-page">
    <Header />

    <div class="main-container">
      <div class="container">
        <h1 class="page-title">Terms of Service</h1>
        <p class="page-description">
          Please read these terms carefully before using our website. By using our services, you
          agree to these terms.
        </p>

        <div class="terms-content">
          <div class="terms-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
            <p>
              <strong>Important:</strong> If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </div>

          <div class="terms-section">
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information
              or software) on this website for personal, non-commercial transitory viewing only.
            </p>
            <p>
              <strong
                >This is the grant of a license, not a transfer of title, and under this license you
                may not:</strong
              >
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>
                Transfer the materials to another person or "mirror" the materials on any other
                server
              </li>
            </ul>
          </div>

          <div class="terms-section">
            <h2>Medical Disclaimer</h2>
            <p>
              The information on this website is for educational purposes only and is not intended
              as medical advice.
            </p>
            <p><strong>Important warnings:</strong></p>
            <ul>
              <li>
                Always consult with a healthcare professional before starting any exercise program
              </li>
              <li>Stop any exercise that causes pain or discomfort</li>
              <li>Seek immediate medical attention for severe or persistent back pain</li>
            </ul>
          </div>

          <div class="terms-section">
            <h2>User Responsibilities</h2>
            <p>As a user of our website, you are responsible for:</p>
            <ul>
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of your account information</li>
              <li>Using the website in accordance with applicable laws</li>
              <li>Not interfering with the website's operation</li>
              <li>Reporting any security vulnerabilities you discover</li>
            </ul>
          </div>

          <div class="terms-section">
            <h2>Intellectual Property Rights</h2>
            <p>
              The content on this website, including but not limited to text, graphics, images, and
              software, is the property of this website and is protected by copyright laws.
            </p>
            <ul>
              <li><strong>Copyright:</strong> All content is © 2025. All rights reserved.</li>
              <li><strong>Trademarks:</strong> Related logos are trademarks of this website.</li>
              <li>
                <strong>Third-Party Content:</strong> Some content may be licensed from third
                parties and is used with permission.
              </li>
            </ul>
          </div>

          <div class="terms-section">
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall this website or its suppliers be liable for any damages arising out
              of the use or inability to use the materials on the website.
            </p>
            <ul>
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>
                Our total liability shall not exceed the amount paid by you, if any, for accessing
                our services
              </li>
              <li>
                We do not guarantee the accuracy, completeness, or usefulness of any information
              </li>
              <li>We are not responsible for any third-party websites linked from our site</li>
            </ul>
          </div>

          <div class="terms-section">
            <h2>Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs
              your use of the website, to understand our practices.
            </p>
            <p><router-link to="/privacy-policy">View Privacy Policy</router-link></p>
          </div>

          <div class="terms-section">
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to our website immediately, without prior
              notice, for any reason whatsoever, including without limitation if you breach the
              Terms.
            </p>
            <p>
              <strong
                >Upon termination, your right to use the website will cease immediately and:</strong
              >
            </p>
            <ul>
              <li>You must destroy any downloaded materials in your possession</li>
              <li>
                All provisions of the Terms which by their nature should survive termination shall
                survive
              </li>
              <li>We may delete your account and any associated data</li>
            </ul>
          </div>

          <div class="terms-section">
            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws
              of the jurisdiction in which this website operates.
            </p>
            <ul>
              <li><strong>Jurisdiction:</strong> United States</li>
              <li>
                <strong>Dispute Resolution:</strong> Any disputes shall be resolved through binding
                arbitration
              </li>
              <li>
                <strong>Venue:</strong> Courts in the jurisdiction of this website's principal place
                of business
              </li>
            </ul>
          </div>

          <div class="terms-section">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any
              material changes by posting the new terms on this page.
            </p>
            <p><strong>Last Updated:</strong> August 1, 2025</p>
            <p><strong>Effective Date:</strong> August 1, 2025</p>
          </div>

          <div class="terms-section">
            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <p>Email: <a href="mailto:jennifermontai77@gmail.com">jennifermontai77@gmail.com</a></p>
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
  name: 'TermsOfServiceView',
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
.terms-of-service-page {
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

.terms-content {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.terms-section {
  margin-bottom: 2rem;
}

.terms-section:last-child {
  margin-bottom: 0;
}

.terms-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.terms-section p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.terms-section ul {
  list-style: disc;
  padding-left: 1.5rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.terms-section li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.terms-section a {
  color: #3b82f6;
  text-decoration: none;
}

.terms-section a:hover {
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

  .terms-content {
    padding: 1.5rem;
  }

  .terms-section h2 {
    font-size: 1.2rem;
  }

  .terms-section p,
  .terms-section li {
    font-size: 0.8rem;
  }
}
</style> 