<script setup async lang="ts">
definePageMeta({
  title: "YO",
  layout: "article",
  middleware: ['test'],
  validate: (route) => {
    console.log('validate route', route)
    // const router = useRouter();
    // router.push('/');
    return true
  }
})
useSeoMeta({
  title: "Articles Page"
})

// Implicit (assumes $eq operator)
// const { data: articles } = await useAsyncData('articles', () => queryContent('articles').limit(5).find())
// console.log('articles',articles)
</script>

<template>
  <main class="container">
    <ul>
      <ContentList path="/articles" >
        <template #default="{ list }">
          <li v-for="article in list" :key="article._path" class="flex flex-col items-start gap-1 p-2 my-4 border border-gray-500 border-solid rounded shadow-sm">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <NuxtLink :to="article._path" class="inline-block p-2 text-white rounded-sm bg-slate-400">GO</NuxtLink>
          </li>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
        <template #empty>
          <p>No articles available.</p>
        </template>
      </ContentList>
    </ul>
  </main>
</template>

<style lang="sass" scoped></style>
