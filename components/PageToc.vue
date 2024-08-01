<script setup lang="ts">
const { toc } = useContent();
</script>

<template>
  <div>
    <p class="text-lg">Table of Contents</p>
    <ul v-if="toc && toc.links">
      <li v-for="link in toc.links" :key="link.id">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
        <ul v-if="link?.children?.length > 0">
          <li v-for="secondLink in link.children" :key="secondLink.id">
            <a :href="`#${secondLink.id}`">
              {{ secondLink.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
