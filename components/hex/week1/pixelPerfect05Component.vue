<script setup lang="ts"></script>

<template>
  <div class="block">
    <div class="block__top">
      <div class="list">
        <div class="card">
          <img src="https://fakeimg.pl/96" alt="">
          <div class="card__info">
            <h2>Title Lorme</h2>
            <p>Lorem ipsum dolor sit amet.
            Harum delectus sed obcaecati placeat?
            Est temporibus eius ullam itaque.</p>
          </div>
        </div>
        <div class="card">
          <img src="https://fakeimg.pl/96" alt="">
          <div class="card__info">
            <h2>Title Lorme</h2>
            <p>Lorem ipsum dolor sit amet.
              Harum delectus  sed obcaecati placeat?
            Est temporibus eius ullam itaque.</p>
          </div>
        </div>
      </div>
      <div class="ad">
        <img src="https://fakeimg.pl/216" alt="">
      </div>
    </div>
    <footer>
      表尾文字
    </footer>
  </div>
</template>

<style lang="sass" scoped>
.block
  display: flex
  flex-direction: column
  row-gap: 24px
  line-height: 1.5
  max-width: 640px
  margin: 0 auto
  img
    vertical-align: middle
  &__top
    display: flex
    column-gap: 20px

.list
  display: flex
  flex-direction: column
  row-gap: 24px
  flex: 1

.card
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
