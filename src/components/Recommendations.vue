<template>
  <aside class="recommendations">
    <div class="recommendation-card">
      <h3 class="recommendation-title">Recommendations</h3>
      <div class="recommendation-item">
        <div class="rec-content">
          <h4>Morning Routine</h4>
          <p>Start your day with 5-10 minutes of gentle stretches</p>
        </div>
      </div>
      <div class="recommendation-item">
        <div class="rec-content">
          <h4>Popular Stretch</h4>
          <p>Cat-Cow stretch is our most recommended exercise</p>
        </div>
      </div>
      <div class="recommendation-item">
        <div class="rec-content">
          <h4>Expert Tips</h4>
          <p>Learn from certified physical therapists</p>
        </div>
      </div>
    </div>

    <div class="recommendation-card" v-if="relatedArticles.length > 0">
      <h3 class="recommendation-title">Related Articles</h3>
      <ul class="article-list">
        <li v-for="article in relatedArticles" :key="article.id">
          <a href="#" class="article-link" @click.prevent="goToArticle(article)">
            {{ article.title }}
          </a>
        </li>
      </ul>
    </div>

    <div class="recommendation-card did-you-know">
      <h3 class="recommendation-title">Did You Know?</h3>
      <div class="fact-item">
        <p>80% of adults experience back pain at some point</p>
      </div>
      <div class="fact-item">
        <p>Just 10 minutes daily can make a significant difference</p>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Recommendations',
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    relatedArticles() {
      return this.articles.filter((article) => article.isRelated === true)
    },
  },
  methods: {
    goToArticle(article) {
      this.$router.push(`/blog/${article.addressBar}`)
    },
  },
}
</script>

<style scoped>
.recommendations {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.recommendation-card {
  background: #ffffff;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recommendation-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
}

.recommendation-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.recommendation-item:last-child {
  margin-bottom: 0;
}

.rec-content h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #1f2937;
}

.rec-content p {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
}

.article-list {
  list-style: none;
  padding: 0;
}

.article-list li {
  margin-bottom: 0.75rem;
}

.article-link {
  text-decoration: none;
  color: #3b82f6;
  font-size: 0.875rem;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.article-link:hover {
  color: #2563eb;
  text-decoration: underline;
}

.did-you-know {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.did-you-know .recommendation-title {
  color: white;
}

.fact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.fact-item:last-child {
  margin-bottom: 0;
}

.fact-item p {
  font-size: 0.875rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 1024px) {
  .recommendations {
    display: none;
  }
}
</style> 