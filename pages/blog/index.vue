<script setup async lang="ts">
definePageMeta({
  title: "Blog Page Meta",
  layout: "blog"
})
useSeoMeta({
  title: "Blog Page Seo Meta"
})
</script>

<template>
  <ContentQuery path="blog" :where="{ _type: 'markdown' }" :sort="{ date: -1 }">
    <template #default="{ data: list }">
      <ul>
        <li v-for="item in list" class="flex items-center gap-2 px-4 mt-2 border border-solid rounded-lg">
          <NuxtLink :to="item._path" class="flex-1 py-4">
            <h2>{{ item.title }}</h2>
          </NuxtLink>
          <time class="block ml-auto" :datetime="jsonStrTotoLocaleDateString(item.date)">{{
            jsonStrTotoLocaleDateString(item.date) }}</time>
        </li>
      </ul>
    </template>
    <template #empty>
      <p>Content empty.</p>
    </template>
    <template #not-found>
      <p>No Content found.</p>
    </template>
  </ContentQuery>
</template>
