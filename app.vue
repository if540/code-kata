<script lang="ts" setup>
useHead({
  titleTemplate: "%s - F@E Code Kata",
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
*, *::after, *::before {
  box-sizing: border-box; 
}

html, body {
  width: 100%;
  height: 100%;
}
</style>
