<script lang="ts" setup>
interface IProps {
  size: number;
  totalCount: number | null;
  perRowSize?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  perRowSize: 10,
});
const totalPage = computed(() =>
  Math.ceil((props.totalCount ?? 0) / props.size)
);
const page = defineModel({ type: Number, default: 0 });
const updatePage = function (toPage: number) {
  page.value = toPage;
};
</script>

<template>
  <ul class="flex items-center justify-center gap-2 py-4 leading-[1]">
    <li>
      <a href="#" @click="updatePage(page - 1)" class="block py-2"
        :class="{ 'pointer-events-none text-gray-400': page == 1 }">上一頁</a>
    </li>
    <li v-for="num in totalPage % perRowSize">
      <a href="#" @click="updatePage(num)" class="block w-8 h-8 p-2 text-center border border-solid rounded-md"
        :class="{ 'pointer-events-none text-teal-500': num == page }">{{ num + (Math.ceil(page / perRowSize) - 1) * size
        }}</a>
    </li>
    <li>
      <a href="#" @click="updatePage(page + 1)" class="block py-2"
        :class="{ 'pointer-events-none text-gray-400': page == totalPage }">下一頁</a>
    </li>
  </ul>
</template>
