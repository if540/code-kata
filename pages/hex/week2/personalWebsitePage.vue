<script setup lang="ts">
useSeoMeta({
  title: "第二週 - 個人網站"
})
</script>

<template>
<header class="bg-black header">
  <div class="container">
    <!-- nav -->
    <nav class="py-40 nav">
      <ul class="flex items-center justify-between text-gray nav-list">
        <li>WILLIAM LEE</li>
        <li>BASED IN TAIWAN</li>
        <li>CURRENTLY FRONT END ENGINEER AT HEXSCHOOL</li>
        <li><a href="#">CONTACT ME</a></li>
      </ul>
    </nav>
    <!-- banner -->
    <div class="flex items-center gap-6 banner ">
      <img src="/hex/week2/personalWebsitePage/people.png" alt="William's 個人黑白沙龍">
      <div class="flex flex-col banner-info float-start">
        <h1 class="text-white title-1">Hi <br />I’m a front-end<br /> developer <span class="block text-right text-danger h1">William</span></h1>
        <button class="flex items-center self-end text-black bg-white">contact me <img src="/public/hex/week2/personalWebsitePage/arrow_outward.png" alt="contact arrow" aria-hidden="true"></button>
      </div>
    </div>
  </div>
</header>
<main>
  <!-- intro -->
  <section class="intro py-160">
    <div class="container flex gap-6">
      <div class="flex flex-col text-white intro-info">
        <h2 class="title-1">Introduction</h2>
        <p class="mt-9 fs-2">Hi, I'm William Lee, a Front-End Developer with a passion for building beautiful and responsive websites that provide an optimal user experience.</p>
        <div class="flex items-start gap-4 mt-8">
          <img src="/public/hex/week2/personalWebsitePage/sparkle-sm.png" alt="" aria-hidden="true">
          <img src="/public/hex/week2/personalWebsitePage/sparkle-sm.png" alt="" aria-hidden="true">
          <img src="/public/hex/week2/personalWebsitePage/sparkle-sm.png" alt="" aria-hidden="true">
        </div>
      </div>
      <ul class="flex items-start gap-6">
        <img src="/public/hex/week2/personalWebsitePage/sparkle.png" alt="" aria-hidden="true">
        <img src="/public/hex/week2/personalWebsitePage/photographer.png" alt="William's 手持照像機工作局部特寫">
        <img src="/public/hex/week2/personalWebsitePage/people-2.png" alt="William's 個人短髮正視前方黑白型像照">
      </ul>
    </div>
  </section>
  <!-- about -->
  <section class="container flex items-center justify-between about py-160">
    <ol class="flex flex-wrap gap-6 about-skill">
      <li class="flex flex-col gap-1 fs-3">
        01
        <h3>Attention to Detail</h3>
        <p class="fs-normal">Meticulous code analysis and optimization.</p>
      </li>
      <li class="flex flex-col gap-1 fs-3">
        02
        <h3>Adaptability</h3>
        <p class="fs-normal">Swift learning of new technologies.</p>
      </li>
      <li class="flex flex-col gap-1 fs-3">
        03
        <h3>Problem Solver</h3>
        <p class="fs-normal">Identifying and resolving issues.</p>
      </li>
      <li class="flex flex-col gap-1 fs-3">
        04
        <h3>Team Player</h3>
        <p class="fs-normal">Collaborates and shares ideas.</p>
      </li>
    </ol>
    <div class="about-info">
      <h2 class="title-1">About Me</h2>
      <p class="fs-2 mt-9">With over 5 years of experience, I'm proficient in HTML, CSS, JavaScript, jQuery, and React. I have a strong understanding of user experience design and accessibility. I'm always learning new technologies and techniques to stay up-to-date in the field.</p>
    </div>
  </section>
  <!-- contact -->
  <section class="bg-blue-dark-linear contact py-96">
    <div class="container flex items-center justify-between">
      <h3 class="flex items-center gap-4 text-white contact-title title-1">CONTACT ME<img src="/public/hex/week2/personalWebsitePage/trending_flat_black_24.png" alt="" aria-hidden="true"></h3>
      <ul class="flex gap-5 contact-social">
        <li><a href="#"><img src="/public/hex/week2/personalWebsitePage/discord.png" alt="William's Discord"></a></li>
        <li><a href="#"><img src="/public/hex/week2/personalWebsitePage/instagram.png" alt="William's Instagram"></a></li>
        <li><a href="#"><img src="/public/hex/week2/personalWebsitePage/message.png" alt="William's Message"></a></li>
      </ul>
    </div>
  </section>
  <!-- projects -->
  <section class="projects py-160">
    <div class="container flex flex-col gap-4">
      <h2 class="ml-auto title-1 projects-title">My Projects</h2>
      <div class="flex items-start gap-6 projects-bd">
        <img src="/public/hex/week2/personalWebsitePage/Rectangle 10.png" alt="">
        <div class="flex flex-col gap-7">
          <div class="flex gap-6 projects-intro">
            <img class="self-start" src="/public/hex/week2/personalWebsitePage/Rectangle 15.png" alt="">
            <div class="flex flex-col items-start justify-between">
              <p>I've worked on a variety of websites, including e-commerce sites, blogs, and landing pages. I take pride in creating clean, efficient, and user-friendly code.</p>
              <button class="flex items-center text-white bg-black button-lightMode">SEE MORE <img src="/public/hex/week2/personalWebsitePage/arrow_outward-white.png" alt="see more icon" aria-hidden="true"></button>
            </div>
          </div>
          <div class="flex items-start gap-6 projects-photo">
            <img src="/public/hex/week2/personalWebsitePage/Rectangle 14.png" alt="">
            <img src="/public/hex/week2/personalWebsitePage/Rectangle 29.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<footer class="py-40 text-center text-white bg-black footer">all rights reserved @hexschool2023</footer>

</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap')

// use reset, tailwind css
// -------------------------------------
//   Global
// -------------------------------------
body
  line-height: 1.5
  font-family: "Bruno Ace SC", sans-serif
img, svg
  vertical-align: middle

// -------------------------------------
//   Helper
// -------------------------------------
// ----- font-size ----- //
.h1
  font-size: 128px
// unused
// .h2
//   font-size: 40px
.title-1
  font-size: 64px
.fs-1
  font-size: 32px
.fs-2
  font-size: 24px
.fs-3
  font-size: 20px
.fs-normal
  font-size: 16px

// ----- offset ----- //
.gap-1
  gap: 4px
.gap-6
  gap: 24px
.gap-7
  gap: 28px
.mt-8
  margin-top: 32px
.mt-9
  margin-top: 36px
.ml-4
  margin-left: 16px
.py-40
  padding: 40px 0
.py-96
  padding: 96px 0
.py-160
  padding: 160px 0
    
// ----- color ----- //
$text-danger: #00FFA3
.text
  &-danger
    color: $text-danger
  &-gray
    color: #D1D1D1
.bg
  &-blue-dark-linear
    // 100% #01021E
    background: linear-gradient(180deg, #050014 0%, rgba(1, 2, 30, 0.89) 100%)

// -------------------------------------
//   Layout
// -------------------------------------
.container
  max-width: 1296px
  margin: 0 auto

// -------------------------------------
//   Page
// -------------------------------------
.nav
  li:nth-child(3)
    max-width: 278.5px
  a
    transition: .75s
    &:after
      transition: .75s
      content: ""
      display: block
      width: 0
      height: 1px
      background-color: white
    &:hover
      color: white
      &:after
        width: 100%

.banner
  padding: 72px 0 32px

.intro
  background: url(/public/hex/week2/personalWebsitePage/background-img.png) no-repeat
  background-size: cover
  &-info
    max-width: 526px

.about
  &-skill
    max-width: 636px
    li
      max-width: calc( 50% - 12px )
      padding: 16px
      border: 1px solid #E3E3E3
      box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.08)
  &-info
    max-width: 526px
    
.contact
  &-title
    max-width: calc( 50% + 12px )
  &-social
    max-width: 526px
    a
      border-radius: 40px
      display: block
      transition: 1s
      &:hover
        box-shadow: 0px 0px 16px 3px rgba(144, 148, 255, 0.9)

.projects
  &-title
    width: 100%
    max-width: 746px

// -------------------------------------
//   Component
// -------------------------------------
button
  gap: 4px
  padding: 12px 24px
  border-radius: 32px
  transition: .75s
  img
    transition: .75s
  &:hover
    box-shadow: 0px 0px 16px 3px $text-danger
    img
      transform: rotate(45deg)
  &.button-lightMode
    &:hover
      box-shadow: 0px 0px 16px 3px black
</style>
