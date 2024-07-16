<script setup async lang="ts">
useSeoMeta({
  title: "Articles Page"
})
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <Head>
      <Title>>{{ doc.title }}</Title>
      <Meta name="description" :content="doc.description" />
      <Meta name="keywords" :content="doc.keywords" />
    </Head>
    <ContentRenderer :value="doc" />
  </ContentDoc>
</template>
