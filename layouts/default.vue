<script setup lang="ts">
const route = useRoute();
useHead({
  meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
const { data } = await useFetch('/api/data')
</script>

<template>
  <div>
    <header class="container py-10 m-auto text-center">
      <h1 class="text-3xl font-bold">
        <NuxtLink to="/">MY WEBSITE - {{ data?.data }}</NuxtLink>
      </h1>
      <Nav />
    </header>
    <slot />
    <Footer />
  </div>
</template>
