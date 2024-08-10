<script setup lang="ts">
// const { data } = await useFetch("/api/data");
// {{ data?.data }}
</script>

<template>
  <div class="container m-auto">
    <header class="container py-10 m-auto text-center">
      <h1 class="text-3xl font-bold">
        <NuxtLink to="/">MY WEBSITE</NuxtLink>
      </h1>
      <Nav />
    </header>
    <slot />
    <Footer />
  </div>
</template>
