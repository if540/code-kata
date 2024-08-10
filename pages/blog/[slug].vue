<template>
  <div class="max-w-[900px] m-auto">
    <aside class="mb-10">
      <PageToc class="inline-block m-auto" />
    </aside>
    <main class="blog-detail-page">
      <ContentDoc>
        <template v-slot="{ doc }">
          <article>
            <h1>{{ doc.title }}</h1>
            <section>
              <ContentRendererMarkdown :value="doc.body" />
            </section>
          </article>
        </template>
        <template #not-found>
          <h1>Blog not found</h1>
        </template>
        <template #empty>
          <h1>Blog is empty</h1>
        </template>
      </ContentDoc>
    </main>
  </div>
</template>

<style lang="sass">
.blog-detail-page
  @apply font-notosanstc
  h1
    @apply text-2xl font-bold
  h2
    @apply text-xl mt-3 font-medium
  h3, h4
    @apply mt-2 font-medium
  p
    @apply mt-2
  [href^="https://"], [href^="http://"]
    @apply text-gray-700 underline underline-offset-2 transition-all duration-300
    &:hover
      @apply underline-offset-4
</style>
