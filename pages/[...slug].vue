<script lang="ts" setup>
const { page } = useContent()
console.log('page', page.value)
</script>

<template>
  <main>
    <!-- ContentDoc returns content for `$route.path` by default or you can pass a `path` prop -->
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
  </main>
</template>
