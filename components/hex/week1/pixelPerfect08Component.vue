<script setup lang="ts"></script>

<!-- 
* use Tailwind css
* css reset ready
-->
<template>
<div class="container flex flex-col gap-6">
  <main class="main flex gap-5">
    <ul class="news-list flex flex-col gap-6 flex-1">
      <li class="news-item flex gap-5 items-start">
        <img src="https://fakeimg.pl/96" alt="">
        <div class="news-item-info flex-1">
          <h2>Title Lorem</h2>
          <p>Lorem ipsum dolor sit.
          Rem labore id recusandae?
          Animi delectus eaque ratione.</p>
        </div>
      </li>
      <li class="news-item flex gap-5 items-start">
        <img src="https://fakeimg.pl/96" alt="">
        <div class="news-item-info flex-1">
          <h2>Title Lorem</h2>
          <p>Lorem ipsum dolor sit.
          Rem labore id recusandae?
          Animi delectus eaque ratione.</p>
        </div>
      </li>
    </ul>
    <div class="ad"><img src="https://fakeimg.pl/216" alt=""></div>
  </main>
  <footer class="footer text-center">表尾文字</footer>
</div>
</template>

<style lang="sass">
body
  line-height: 1.5
img
  vertical-align: middle
  
.gap-5
  gap: 20px
.gap-6
  gap: 24px

.container
  max-width: 640px
  margin: 0 auto

.news-item-info
  h2
    font-size: 20px
    line-height: 1.2

// footer
.footer
  padding: 48px 0
</style>
