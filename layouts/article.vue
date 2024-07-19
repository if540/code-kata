<script setup lang="ts">
const route = useRoute();

useHead({
  meta: [{ property: 'og:title', content: `Article - ${route.meta.title}` }]
})
</script>

<template>
  <div>
    <header class="text-center header">
      <h1 class="text-3xl font-bold">文章列表</h1>
    </header>
    <slot />
    <footer class="container py-4 text-xs font-bold text-center text-white uppercase bg-gray-500">copyright kk.</footer>
  </div>
</template>

<style lang="sass">
// -------------------------------------
//   Layout
// -------------------------------------
.container
  max-width: 960px
  margin: 0 auto
// -------------------------------------
//   Page
// -------------------------------------
.header
  padding: 40px 0
// -------------------------------------
//   Components
// -------------------------------------
// -------------------------------------
//   Helper
// -------------------------------------
// ----- font-size ----- //
</style>
