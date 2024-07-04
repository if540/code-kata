<script setup lang="ts"></script>

<template>
  <section class="flex flex-col gap-6">
    <div class="flex gap-5 hd">
      <div class="flex flex-col flex-1 gap-6 cardWrap">
        <div class="flex items-start gap-5 card">
          <img src="https://fakeimg.pl/96" alt="" class="align-middle">
          <div class="flex flex-col info">
            <h2>Title Lorem</h2>
            <p class="text-base">Lorem ipsum dolor sit amet.
            Sequi nulla illum quos aliquam.
            Rem quia voluptate sunt quos!</p>
          </div>
        </div>
        <div class="flex items-start gap-5 card">
          <img src="https://fakeimg.pl/96" alt="" class="align-middle">
          <div class="flex flex-col info">
            <h2>Title Lorem</h2>
            <p class="text-base">Lorem ipsum dolor sit amet.
            Sequi nulla illum quos aliquam.
            Rem quia voluptate sunt quos!</p>
          </div>
        </div>
      </div>
      <figure class="ad"><a href="#"><img src="https://fakeimg.pl/216x216" alt="imgaes"></a></figure>
    </div>
    <footer class="flex items-center justify-center py-12 text-base">表尾文字</footer>
  </section>
</template>

<style lang="sass" scoped>
section
  @apply mx-auto
  max-width: 640px
h2
  font-size: 20px
  line-height: 1.2
</style>
