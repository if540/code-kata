<script lang="ts" setup>
const { page } = useContent();
const { data: pagePrevNextdata } = useAsyncData("PagePrevNext", () => {
  return queryContent("news")
    .only(["_path", "title"])
    .sort({ date: -1 })
    .where({ _type: "markdown" })
    .findSurround(page.value._path!);
});
</script>

<template>
  <article class="container flex gap-4 m-auto">
    <aside class="flex-shrink-0 w-1/4">
      <PageToc />
    </aside>
    <main class="flex-auto">
      <ContentDoc />
      <PagePrevNext
        v-if="pagePrevNextdata"
        :prev="pagePrevNextdata[0]"
        :next="pagePrevNextdata[1]"
        :root="{ _path: '/news', title: '返回新聞列表' }"
      />
    </main>
  </article>
</template>
