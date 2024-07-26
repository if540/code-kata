<script setup async lang="ts">
definePageMeta({
  title: "Articles Page Meta",
  layout: "article"
})
useSeoMeta({
  title: "Articles Page Seo Meta"
})
</script>

<template>
  <main class="container m-auto">
    <ContentList path="/articles">
      <template #default="{ list }">
        <ul>
          <li v-for="article in list" :key="article._path" class="flex flex-col items-start gap-1 p-2 my-4 border border-gray-500 border-solid rounded shadow-sm">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <NuxtLink :to="article._path" class="inline-block p-2 text-white rounded-sm bg-slate-400">GO</NuxtLink>
          </li>
        </ul>
        <NuxtPage />
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

<style lang="sass" scoped></style>
