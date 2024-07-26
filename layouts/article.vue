<script setup lang="ts">
const { page } = useContent()
console.log('page', page.value)
const route = useRoute();
useHead({
  meta: [{ property: 'og:title', content: `Article - ${route.meta.title}` }]
})
</script>

<template>
  <div>
    <header class="container py-10 m-auto text-center">
      <h1 class="text-3xl font-bold">文章列表</h1>
    </header>
    <slot />
    <Footer />
  </div>
</template>
