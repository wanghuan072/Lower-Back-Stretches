<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <img src="/images/logo.png" alt="Lower Back Stretches" class="logo-image" />
          <span class="logo-text">Lower Back Stretches</span>
        </div>

        <!-- 桌面端导航 -->
        <nav class="nav desktop-nav">
          <a href="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</a>
          <a href="/exercises" class="nav-link" :class="{ active: $route.path === '/exercises' }"
            >Exercises</a
          >
          <a href="/blog" class="nav-link" :class="{ active: $route.path === '/blog' }">Blog</a>
          <a href="/about" class="nav-link" :class="{ active: $route.path === '/about' }">About</a>
        </nav>

        <!-- 移动端菜单按钮 -->
        <button
          class="menu-toggle"
          @click="toggleMenu"
          :class="{ active: isMenuOpen }"
          aria-label="Toggle navigation menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- 移动端滑动导航 -->
    <nav class="mobile-nav" :class="{ open: isMenuOpen }">
      <div class="mobile-nav-content">
        <a
          href="/"
          class="mobile-nav-link"
          :class="{ active: $route.path === '/' }"
          @click="closeMenu"
        >
          Home
        </a>
        <a
          href="/exercises"
          class="mobile-nav-link"
          :class="{ active: $route.path === '/exercises' }"
          @click="closeMenu"
        >
          Exercises
        </a>
        <a
          href="/blog"
          class="mobile-nav-link"
          :class="{ active: $route.path === '/blog' }"
          @click="closeMenu"
        >
          Blog
        </a>
        <a
          href="/about"
          class="mobile-nav-link"
          :class="{ active: $route.path === '/about' }"
          @click="closeMenu"
        >
          About
        </a>
      </div>
    </nav>

    <!-- 遮罩层 -->
    <div class="mobile-overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      // 防止页面滚动
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    },
  },
  beforeUnmount() {
    // 组件销毁时恢复页面滚动
    document.body.style.overflow = ''
  },
}
</script>

<style scoped>
.header {
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  height: 80px;
}

.header .container {
  height: 100%;
}

.header-content {
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
  transition: all 0.3s ease;
}

.logo-image {
  width: 40px;
  height: 40px;
}

.logo-icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
  transition: all 0.3s ease;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.nav-link:hover {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  transform: translateY(-2px);
}

.nav-link.active {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
}

/* 移动端菜单按钮 */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200;
  position: relative;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: #3b82f6;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* 移动端导航 */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 150;
  transition: right 0.3s ease;
  overflow-y: auto;
}

.mobile-nav.open {
  right: 0;
}

.mobile-nav-content {
  padding: 100px 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-size: 1.125rem;
  border: 1px solid transparent;
}

.mobile-nav-link:hover {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
}

.mobile-nav-link.active {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  font-weight: 600;
  border-color: #3b82f6;
}

/* 遮罩层 */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    height: 60px;
  }
  .header-content {
    padding: 0;
  }

  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .logo-text {
    font-size: 1.25rem;
  }
}

@media (min-width: 769px) {
  .mobile-nav,
  .mobile-overlay {
    display: none;
  }
}
</style> 