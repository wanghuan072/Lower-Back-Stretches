import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollTracking(sections, options = {}) {
  const activeSection = ref(sections[0] || '')
  const isScrolling = ref(false)
  const manualScrollTarget = ref(null)
  const scrollTimeout = ref(null)
  
  const {
    headerHeight = 80,
    offset = 100,
    throttleDelay = 50
  } = options

  const scrollToSection = (targetId) => {
    activeSection.value = targetId
    isScrolling.value = true
    manualScrollTarget.value = targetId

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - headerHeight - 20
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      
      setTimeout(() => {
        isScrolling.value = false
        manualScrollTarget.value = null
      }, 1500)
    }
  }

  const handleScroll = () => {
    if (isScrolling.value) {
      return
    }
    
    if (scrollTimeout.value) {
      clearTimeout(scrollTimeout.value)
    }

    scrollTimeout.value = setTimeout(() => {
      if (manualScrollTarget.value) {
        activeSection.value = manualScrollTarget.value
        return
      }
      
      const scrollPosition = window.scrollY + headerHeight + offset
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          activeSection.value = sections[i]
          break
        }
      }
    }, throttleDelay)
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (scrollTimeout.value) {
      clearTimeout(scrollTimeout.value)
    }
  })

  return {
    activeSection,
    scrollToSection
  }
} 