<script setup lang="ts">
const { toc } = useContent();
</script>

<template>
  <div class="p-4 border border-gray-600 border-solid rounded-md">
    <p class="mb-2 font-bold">Table of Contents</p>
    <ul v-if="toc && toc.links" class="ml-3 list-disc list-outside">
      <li v-for="link in toc.links" :key="link.id">
        <a :href="`#${link.id}`" class="text-sm transition-opacity duration-300 hover:opacity-70">
          {{ link.text }}
        </a>
        <ul v-if="link?.children?.length > 0" class="ml-3 list-disc list-outside marker:text-gray-600">
          <li v-for="secondLink in link.children" :key="secondLink.id">
            <a :href="`#${secondLink.id}`" class="text-sm transition-opacity duration-300 hover:opacity-70">
              {{ secondLink.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
