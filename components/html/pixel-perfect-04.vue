<script setup lang="ts"></script>

<template>
<div class="block">
  <div class="block__top">
    <div class="newsList">
      <div class="newsCard">
        <img src="https://fakeimg.pl/96" alt="">
        <div class="newsCard__info">
          <h2>Title Lorem</h2>
          <p>Lorem ipsum dolor sit amet.
          Eius eveniet cumque repellendus in.
          Maxime nam cumque minus et!</p>
        </div>
      </div>
      <div class="newsCard">
        <img src="https://fakeimg.pl/96" alt="">
        <div class="newsCard__info">
          <h2>Title Lorem</h2>
          <p>Lorem ipsum dolor sit amet.
          Eius eveniet cumque repellendus in.
          Maxime nam cumque minus et!</p>
        </div>
      </div>
    </div>
    <div class="adBlock"><img src="https://fakeimg.pl/216" alt=""></div>
  </div>
  <footer>表尾文字</footer>
</div>
</template>

<style lang="sass" scoped>
.block
  max-width: 640px
  margin: 0 auto
  line-height: 1.5
  display: flex
  flex-direction: column
  row-gap: 24px

  img
    vertical-align: middle

  &__top
    display: flex
    column-gap: 20px
.newsList
  display: flex
  flex-direction: column
  row-gap: 24px
  flex: 1
.newsCard
  display: flex
  column-gap: 20px
  align-items: flex-start
  &__info
    display: flex
    flex-direction: column
    flex: 1
  h2
    font-size: 20px
    line-height: 1.2

footer
  text-align: center
  padding: 48px 0
</style>
