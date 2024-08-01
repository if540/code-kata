---
title: 最新消息功能開發說明
description: 顯示網站的最新消息，並提供查詢、過濾功能
date: 2024-07-26 14:00:00
author: KK
categories: news
draft: false
---

# {{$doc.title}}
{{$doc.description}}

<!-- more -->

![my image](/news/images/news_proto.png)

## 功能名稱

最新消息

### 1.1 功能描述

顯示網站的最新消息，並提供查詢、過濾功能。

### 1.2 使用者故事

- 作為使用者，我希望可以在首頁查看最新消息。
- 作為使用者，我希望可以查看詳細消息內容。
- 作為使用者，我希望可以根據消息的類別過濾最新消息。

### 1.3 需求規格

1. 顯示最新消息列表。
2. 分頁顯示最新消息。
3. 支援點擊消息標題查看詳細內容。
4. 支援分類標籤過濾最新消息。

## **技術規格**設計

- 消息包括分類、標題、摘要、發佈日期和作者。
- 消息列表按發佈日期降冪，最新的消息在最上面。
- 每頁顯示 10 條消息，支持分頁。

### 2.1 資料管理

- 使用 @nuxt/content 模組管理和顯示消息內容。
- 消息內容以 Markdown 格式存儲在內容目錄中，由 @nuxt/content 讀取和渲染。

### 2.3 目錄結構

```markdown
/content/news
    - 2024-07-23-first-news.md
    - 2024-07-22-second-news.md
/pages
    - news/index.vue
    - news/[...slug].vue
```

### 2.4 Front-matter 定義

```markdown
---
title: 文章標題
description: 文章描述
date: '2024-07-23'
author: 作者
categories: ['news', 'system']
draft: 是否為草稿
---
```

### 2.5 @nuxt/content 配置

```tsx
export default {
  modules: ['@nuxt/content'],
  content: {
    // 配置選項
  }
}
```

## 介面定義(API)

| Source | Destination | API type | Functionality |
| --- | --- | --- | --- |
| Content | News UI | HTTP | Fetch news posts |

| HTTP Method | Path | Description |
| --- | --- | --- |
| GET | /news | 取得網站的最新消息列表 |
| GET | /news/[...slug] | 取得單筆最新消息詳細內容 |

### 基於偏移量的分頁 (Offset-based pagination)

☑️ offset-based pagination 簡單描述

基於偏移量的分頁 API 接受以下參數：

| Parameter | Type | Description |
| --- | --- | --- |
| size | number | 每頁顯示消息數量 |
| page | number | 請求獲取頁碼 |

參數 `size: 5` 、`page: 2` 將傳回項目 6 - 10 分頁資料 :

```tsx
const size = ref(5); // 每頁顯示數量
const page = ref(2); // 當前頁碼

const { data: totalCount } = useAsyncData('totalCount', () => queryContent('/news')
	.only(['_id'])
	.count()
);
const totalPage = computed(() => Math.ceil(totalCount.value / size.value));

const { data: posts }  = useAsyncData('posts', () => queryContent('/news')
	.sort({ date: -1 })
	.skip(size.value * (page.value - 1))
	.limit(page.value)
	.find()
);
```

## 開發流程

### 3.1 創建內容文件

在 `content/news` 目錄中創建 Markdown 文件，格式如下：

```markdown
---
title: 第一則消息
description: 文章描述
date: 2024-07-23
author: 作者
categories: ['news']
draft: true
---

# 第一則消息
文章描述
<!-- more -->
內文
```


> 詳細 Front-martter 定義，請查閱 [2.4 Front-matter 定義](https://www.notion.so/4ff456a9696b487c84cd945ca494ce69?pvs=21)。

### 3.2 創建消息列表頁面

在 `pages/news.vue` 中實現消息列表頁面：

```tsx
<script lang="ts" setup>
const { data } =  useAsyncData('news', query)
</script>

<template>
<section>
	<ContentQuery path="/news" sort="{date: -1}">
		<template #default>
			<ul>
				<li v-for="news in list" :key="news._path">
					<h2>{{ news.title }}</h2>
					<p>{{ news.description }}</p>
				</li>
			</ul>
		</template>
		<template #not-found>
			<p>No news found.</p>
		</template>
	</ContentQuery>
</section>
</template>
```

```tsx
const newsLimit = ref(10)
queryContent('/news').sort({ 'date': -1 }).limit(10).find()
```
