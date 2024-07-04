<script setup lang="ts"></script>

<template>
  <section>
    <div class="hd">
      <div class="newList">
        <div class="card">
          <img src="https://fakeimg.pl/96" alt="">
          <div class="info">
            <h2>TItle Lorem</h2>
            <p>Lorem ipsum dolor sit amet.
            Accusamus qui sint non nam.
            Suscipit praesentium iusto ipsam aperiam!</p>
          </div>
        </div>
        <div class="card">
          <img src="https://fakeimg.pl/96" alt="">
          <div class="info">
            <h2>TItle Lorem</h2>
            <p>Lorem ipsum dolor sit amet.
            Accusamus qui sint non nam.
            Suscipit praesentium iusto ipsam aperiam!</p>
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
  margin: 0 auto
  max-width: 640px
  display: flex
  flex-direction: column
  row-gap: 24px
  line-height: 1.5
  img
    vertical-align: middle
.hd
  display: flex
  gap: 20px
.newList
  display: flex
  flex-direction: column
  row-gap: 24px
  flex: 1
  .card
    display: flex
    column-gap: 20px
  .info
    display: flex
    flex-direction: column
    flex: 1
  h2
    font-size: 20px
    line-height: 1.2
  p
    font-size: 16px

footer
  display: flex
  justify-content: center
  align-items: center
  padding: calc((120px - 16px * 1.5) / 2)  0
</style>
