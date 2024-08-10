<script lang="ts" setup>
useHead({
  title: "最新消息",
});
// 取得資料夾設定資料
const route = useRoute();
const { navKeyFromPath } = useContentHelpers();

// 目錄類型別 ref from content/news/_dir.yml
interface ICategoriesType {
  /** 全部 */
  ALL: string;
  /** 新聞 */
  NEWS: string;
  /** 系統 */
  SYSTEM: string;
}

const size = ref(2); // 每頁顯示數量
const page = ref(1); // 當前頁碼

const categoriesType: ICategoriesType = navKeyFromPath(
  route.path,
  "categories",
  useContent().navigation.value
);
const categories = ref<string>(categoriesType.ALL);
const whereConditions = computed(() =>
  categories.value == categoriesType.ALL
    ? { _type: "markdown" }
    : { categories: categories.value, _type: "markdown" }
);

const t = {
  [categoriesType.ALL]: "全部",
  [categoriesType.NEWS]: "新聞",
  [categoriesType.SYSTEM]: "系統",
};

const { data: totalCount, refresh: refreshTotalCount } = useAsyncData(
  "totalCount",
  () => queryContent("news").where(whereConditions.value).only(["_id"]).count()
);

const updateCategories = function (val: string) {
  categories.value = val;
  page.value = 1;
  refreshTotalCount();
};
</script>

<template>
  <!-- 最新消息分類過濾選單 -->
  <nav>
    <ul class="flex justify-center gap-1">
      <li class="border border-solid rounded-lg" :class="{ 'border-teal-500 text-teal-500': link == categories }"
        v-for="link in categoriesType">
        <a href="#" class="block p-2" @click="updateCategories(link)">{{
          t[link]
          }}</a>
      </li>
    </ul>
  </nav>

  <!-- 最新消息列表 -->
  <ContentQuery path="news" :where="whereConditions" :sort="{ date: -1 }" :skip="size * (page - 1)" :limit="size">
    <template #default="{ data: list }">
      <ul>
        <li v-for="item in list" class="flex items-center gap-2 p-4 mt-2 border border-solid rounded-lg">
          <span class="p-1 text-xs text-center border border-solid rounded-md min-w-16"
            @click="updateCategories(item.categories)">{{ item.categories }}</span>
          <NuxtLink :to="item._path" class="flex-1">
            <h2>{{ item.title }}</h2>
          </NuxtLink>
          <time class="block ml-auto" :datetime="jsonStrTotoLocaleDateString(item.date)">{{
            jsonStrTotoLocaleDateString(item.date) }}</time>
        </li>
      </ul>
    </template>
    <template #empty>
      <p>Content empty.</p>
    </template>
    <template #not-found>
      <p>No Content found.</p>
    </template>
  </ContentQuery>
  <PagePagination v-model="page" :size="size" :total-count="totalCount!" />
</template>
