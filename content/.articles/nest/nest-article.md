---

---

# Nest Article
<!-- more -->

測試巢狀文章對應 `pages` 的方式

```md
content
  |- articles
    |- nest
      |- nest-article.md
```
nest-artilce.md path `/articles/nest/nest-article`

```md
pages
  |- articles
    |- [...slug].vue
  |- [...slug].vue
```

| path| 權重 |
|:----|:----|
| `pages/artilces/[...slug].vue` | ⭑⭑⭑⭑⭑ |
| `pages/[...slug].vue` | ⭑⭑⭑⭑⭒ |
