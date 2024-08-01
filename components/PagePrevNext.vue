<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";
type PrevNextRoot = Pick<ParsedContent, "title" | "_path"> | null;
const props = defineProps<{
  prev: PrevNextRoot;
  next: PrevNextRoot;
  root: PrevNextRoot;
}>();
</script>

<template>
  <ul class="flex items-center justify-between py-2">
    <li
      class="p-2 border-gray-500 border-solid rounded"
      :class="{ border: props.prev }"
    >
      <p :class="{ invisible: !props.prev }">上一則:</p>
      <NuxtLink v-if="props.prev" :to="props.prev?._path">{{
        props.prev?.title
      }}</NuxtLink>
    </li>
    <li class="underline">
      <NuxtLink v-if="props.root" :to="props.root?._path">{{
        props.root?.title
      }}</NuxtLink>
    </li>
    <li
      class="p-2 border-gray-500 border-solid rounded"
      :class="{ border: props.next }"
    >
      <p :class="{ invisible: !props.next }">下一則:</p>
      <NuxtLink v-if="props.next" :to="props.next?._path">{{
        props.next?.title
      }}</NuxtLink>
    </li>
  </ul>
</template>
