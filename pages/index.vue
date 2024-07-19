<script setup async lang="ts">
definePageMeta({
  title: "首頁",
  middleware: ['test'],
  validate: (route) => {
    console.log('route', route)
    return true
  }
})
useSeoMeta({
  title: "Index Page"
})

// Implicit (assumes $eq operator)
// const { data: articles } = await useAsyncData('articles', () => queryContent('articles').limit(5).find())
// console.log('articles',articles)
</script>

<template>
  <main class="container">
    <ul>
      <li>
        <NuxtLink to="/articles">文章列表</NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style lang="sass" scoped></style>
