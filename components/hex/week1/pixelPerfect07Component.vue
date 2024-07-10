<script setup lang="ts"></script>

<template>
  <div class="block">
    <div class="block__top">
      <ul class="newsList">
        <li class="newsItem">
          <img src="https://fakeimg.pl/96" alt="">
          <div class="newsItem__info">
            <h2>Lorem TItle</h2>
            <p>Lorem ipsum dolor sit amet.
              Vitae beatae ea quae minima!
              Ab eum esse qui quibusdam?</p>
          </div>
        </li>
        <li class="newsItem">
          <img src="https://fakeimg.pl/96" alt="">
          <div class="newsItem__info">
            <h2>Lorem TItle</h2>
            <p>Lorem ipsum dolor sit amet.
              Vitae beatae ea quae minima!
              Ab eum esse qui quibusdam?</p>
          </div>
        </li>
      </ul>
      <div class="ad">
        <img src="https://fakeimg.pl/216" alt="">
      </div>
    </div>
    <footer>表尾文字</footer>
  </div>
</template>

<style lang="sass" scoped>
.block
  max-width: 640px
  margin: auto
  display: flex
  flex-direction: column
  row-gap: 24px
  line-height: 1.5
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
.newsItem
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
