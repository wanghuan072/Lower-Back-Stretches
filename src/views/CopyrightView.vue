<template>
  <div class="copyright-page">
    <Header />

    <div class="main-container">
      <div class="container">
        <h1 class="page-title">Copyright Notice</h1>
        <p class="page-description">
          This page outlines the copyright and intellectual property rights for all content on
          BackFlex.
        </p>

        <div class="copyright-content">
          <div class="copyright-section">
            <h2>Copyright Statement</h2>
            <p>
              All content on this website, including but not limited to text, graphics, images,
              videos, audio, software, and other materials, is the property of this website and is
              protected by copyright laws and international treaties.
            </p>
            <p><strong>© 2025. All Rights Reserved.</strong></p>
            <p>
              Unauthorized use, reproduction, or distribution of this content is strictly
              prohibited.
            </p>
          </div>

          <div class="copyright-section">
            <h2>Protected Content</h2>
            <p>The following types of content are protected under our copyright:</p>
            <ul>
              <li>
                <strong>Written Content:</strong> Articles, exercise descriptions, health
                information, and educational materials
              </li>
              <li>
                <strong>Images and Graphics:</strong> Photographs, illustrations, diagrams, and
                visual content
              </li>
              <li>
                <strong>Videos and Animations:</strong> Exercise demonstrations, instructional
                videos, and multimedia content
              </li>
              <li>
                <strong>Software and Code:</strong> Website code, applications, and technical
                implementations
              </li>
            </ul>
          </div>

          <div class="copyright-section">
            <h2>Permitted Uses</h2>
            <p>You may use our content for the following purposes:</p>
            <ul>
              <li>Personal, non-commercial use for educational purposes</li>
              <li>Sharing links to our content on social media</li>
              <li>Printing content for personal reference</li>
              <li>Using content in academic research (with proper attribution)</li>
            </ul>
          </div>

          <div class="copyright-section">
            <h2>Prohibited Uses</h2>
            <p>The following uses are strictly prohibited without our written permission:</p>
            <ul>
              <li>Commercial use or reproduction for profit</li>
              <li>Modifying, adapting, or creating derivative works</li>
              <li>Distributing content on other websites or platforms</li>
              <li>Removing copyright notices or attribution</li>
              <li>Using content in a way that could harm our reputation</li>
            </ul>
          </div>

          <div class="copyright-section">
            <h2>Third-Party Content</h2>
            <p>
              Some content on our website may be licensed from third parties or used under Creative
              Commons licenses. We respect the intellectual property rights of others.
            </p>
            <ul>
              <li>
                <strong>Licensed Content:</strong> Some images and media are licensed from stock
                photo providers and other sources.
              </li>
              <li>
                <strong>Creative Commons:</strong> Some content may be used under Creative Commons
                licenses with proper attribution.
              </li>
              <li>
                <strong>Fair Use:</strong> We may use some content under fair use principles for
                educational purposes.
              </li>
            </ul>
          </div>

          <div class="copyright-section">
            <h2>Copyright Infringement</h2>
            <p>
              If you believe that your copyrighted work has been used on our website without
              permission, please contact us immediately.
            </p>
            <p><strong>To report copyright infringement, please provide:</strong></p>
            <ul>
              <li>A description of the copyrighted work that you claim has been infringed</li>
              <li>The exact location of the material on our website</li>
              <li>Your contact information (name, email, phone number)</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>
                A statement that the information is accurate and that you are the copyright owner
              </li>
            </ul>
          </div>

          <div class="copyright-section">
            <h2>Licensing and Permissions</h2>
            <p>
              If you would like to use our content for commercial purposes or other uses not covered
              by our permitted uses, please contact us for licensing information.
            </p>
            <ul>
              <li>
                <strong>Commercial Licensing:</strong> For business use, advertising, or commercial
                projects
              </li>
              <li>
                <strong>Educational Licensing:</strong> For schools, universities, and educational
                institutions
              </li>
              <li>
                <strong>Media Licensing:</strong> For news outlets, publications, and media
                organizations
              </li>
            </ul>
          </div>

          <div class="copyright-section">
            <h2>Contact Information</h2>
            <p>For copyright-related inquiries, licensing requests, or infringement reports:</p>
            <p>Email: <a href="mailto:jennifermontai77@gmail.com">jennifermontai77@gmail.com</a></p>
          </div>

          <div class="copyright-section">
            <h2>Updates to Copyright Notice</h2>
            <p>
              We may update this copyright notice from time to time. Please check this page
              regularly for any changes.
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
  name: 'CopyrightView',
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
.copyright-page {
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

.copyright-content {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.copyright-section {
  margin-bottom: 2rem;
}

.copyright-section:last-child {
  margin-bottom: 0;
}

.copyright-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.copyright-section p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.copyright-section ul {
  list-style: disc;
  padding-left: 1.5rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.copyright-section li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.copyright-section a {
  color: #3b82f6;
  text-decoration: none;
}

.copyright-section a:hover {
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

  .copyright-content {
    padding: 1.5rem;
  }

  .copyright-section h2 {
    font-size: 1.2rem;
  }

  .copyright-section p,
  .copyright-section li {
    font-size: 0.8rem;
  }
}
</style> 