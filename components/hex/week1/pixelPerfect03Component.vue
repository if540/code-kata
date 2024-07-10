<script setup lang="ts"></script>

<template>
    <section>
      <div class="hd">
        <div class="cardList">
          <div class="card">
            <img src="https://fakeimg.pl/96" alt="">
            <div class="card__info">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet.
              Error illum ullam fuga magni.
              Asperiores itaque doloremque qui laborum?</p>
            </div>
          </div>
          <div class="card">
            <img src="https://fakeimg.pl/96" alt="">
            <div class="card__info">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet.
              Error illum ullam fuga magni.
              Asperiores itaque doloremque qui laborum?</p>
            </div>
          </div>
        </div>
        <div class="ad"><img src="https://fakeimg.pl/216" alt=""></div>
      </div>
      <footer>表尾文字</footer>
    </section>
</template>

<style lang="sass" scoped>
section
  max-width: 640px
  margin: 0 auto
  display: flex
  flex-direction: column
  row-gap: 24px
  line-height: 1.5
  img
    vertical-align: middle

.hd
  display: flex
  column-gap: 20px

.cardList
  display: flex
  flex-direction: column
  row-gap: 24px
  flex: 1

.card
  display: flex
  align-items: flex-start
  column-gap: 20px
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
