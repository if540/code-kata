<script setup lang="ts">
const { page } = useContent()
const route = useRoute();
useHead({
  meta: [{ property: 'og:title', content: `${route.meta.title} - Blog` }]
})
</script>

<template>
  <div>
    <header class="container py-10 m-auto text-center">
      <h1 class="text-3xl font-bold">
        <NuxtLink to="/">MY WEBSITE</NuxtLink>
      </h1>
      <Nav />
    </header>
    <main class="container">
      <h2 class="text-3xl font-bold">部落格文章列表</h2>
      <slot />
    </main>
    <Footer />
  </div>
</template>
