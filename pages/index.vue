<script setup async lang="ts">
useSeoMeta({
  title: "Index Page"
})
// Implicit (assumes $eq operator)
const { data: articles } = await useAsyncData('articles', () => queryContent('articles').limit(5).find())
</script>

<template>
  <main>
    <h1>Page Index</h1>
    <div v-for="item in articles">
      <h2>{{item.title}}</h2>
      <p>{{item.description}}</p>
    </div>

    <ContentList path="/articles">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
      <template #empty>
        <p>No articles available.</p>
      </template>
    </ContentList>
  </main>
</template>

<style scoped></style>
