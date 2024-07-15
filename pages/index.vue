<script setup async lang="ts">
useSeoMeta({
  title: "Index Page"
})

// const article =  await queryContent()
//   .where({ _type: { $ne: 'md' } })
//   .sort({ date: -1 })
//   .limit(1)
//   .find()
// console.log('article',article)

const { data } = await useAsyncData('hello', () => queryContent('/hello').findOne())

</script>

<template>
  <div>
    Page: Index
    <ContentRenderer :value="data" />
  </div>
</template>

<style scoped></style>
