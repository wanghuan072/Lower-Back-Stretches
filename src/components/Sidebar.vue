<template>
  <aside class="sidebar">
    <span class="sidebar-title">Navigation</span>
    <nav class="sidebar-nav">
      <a
        v-for="item in navigationItems"
        :key="item.id"
        :href="`#${item.id}`"
        class="sidebar-link"
        :class="{
          active: activeSection === item.id,
          'parent-link': item.isParent,
          'child-link': item.isChild,
        }"
        @click="scrollToSection"
      >
        {{ item.title }}
      </a>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    activeSection: {
      type: String,
      default: 'what-are-stretches',
    },
    navigationItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    scrollToSection(event) {
      event.preventDefault()
      event.stopPropagation()

      // 确保我们获取到正确的链接元素
      const linkElement = event.target.closest('a')
      if (linkElement) {
        const href = linkElement.getAttribute('href')
        if (href) {
          const targetId = href.substring(1)
          this.$emit('section-click', targetId)
        }
      }
    },
  },
}
</script>

<style scoped>
.sidebar {
  background: #ffffff;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 100px;
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
  margin-bottom: 1rem;
  display: block;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar-link {
  text-decoration: none;
  color: #6b7280;
  padding: 0.5rem 0;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
}

.sidebar-link:hover {
  color: #3b82f6;
}

.sidebar-link.active {
  color: #3b82f6;
  background: #eff6ff;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  margin: 0 -0.75rem;
  font-weight: 600;
}

.parent-link {
  font-weight: 600;
  color: #374151;
  font-size: 1rem;
}

.child-link {
  padding-left: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  position: relative;
}

.child-link::before {
  content: '•';
  position: absolute;
  left: 0.5rem;
  color: #9ca3af;
}

.child-link.active {
  padding-left: 1.5rem;
  margin-left: 0;
}

@media (max-width: 1024px) {
  .sidebar {
    padding: 1rem;
  }
  .sidebar-title {
    font-size: 1rem;
  }
  .sidebar-link {
    font-size: 0.8rem;
    padding: 0.25rem 0;
  }
}
</style> 