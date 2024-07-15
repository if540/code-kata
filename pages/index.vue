<script setup async lang="ts">
useSeoMeta({
  title: "Index Page"
})
</script>

<template>
  <main>
    <h1>Page Index</h1>
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
