<template>
  <div id="app">
    <LoadingSpinner :loading="isLoading" text="Loading exercises..." />
    <router-view />
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  name: 'App',
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  mounted() {
    // 模拟初始加载
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  },
}
</script>

<style>
</style>
