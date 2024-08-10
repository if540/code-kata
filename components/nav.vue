<template>
  <nav class="container py-2">
    <ContentNavigation v-slot="{ navigation }">
      <ul class="flex justify-center gap-2">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>
