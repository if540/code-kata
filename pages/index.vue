<script setup async lang="ts">
definePageMeta({
  title: "首頁"
})
useSeoMeta({
  title: "Index Page"
})
// Implicit (assumes $eq operator)
// const { data: articles } = await useAsyncData('articles', () => queryContent('articles').limit(5).find())
// console.log('articles',articles)

// const { data } = await useAsyncData('articles', () => queryContent('/articles').only(['title', 'description'])  .find())
// .where({ "author": { $contains: "KK" }, "categories": { $contains: ["前端"] } })
// const { data } = await useAsyncData('articles', () => queryContent('/articles').only(['title', '_path']).where({"author": { $contains: "KK" }}).findSurround('/articles/some-article'))
// console.log('data', data.value);

</script> 

<template>
  <main class="container m-auto">
    <ul>
      <li>
        <NuxtLink to="/articles">文章列表</NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style lang="sass" scoped></style>
  