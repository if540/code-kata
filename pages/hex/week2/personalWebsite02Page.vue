<script setup lang="ts">
useSeoMeta({
  title: "第二週 - 個人網站 - Round 2"
})
</script>

<template>
<div class="personalWebsitePage">
  <!-- nav -->
  <nav class="nav text-white bg-black">
    <div class="container py-40">
      <ul class="navList flex items-center justify-between">
        <li>WILLIAM LEE</li>
        <li>BASED IN TAIWAN</li>
        <li>CURRENTLY FRONT END ENGINEER AT HEXSCHOOL</li>
        <li><a href="#">CONTACT ME</a></li>
      </ul>
    </div>
  </nav>
  <!-- banner -->
  <div class="banner text-white bg-black">
    <div class="container flex items-center gap-6">
      <div class="photo w-50-offset">
        <img src="/public/hex//week2/personalWebsitePage/people.png" alt="William's 黑白形像照">
      </div>
      <div class="slogan flex flex-col w-50-offset">
        <h1 class="fs-0">Hi <br />I’m a front-end developer <span class="block text-right h1 text-danger">William</span></h1>
        <a href="#" class="button self-end" aria-label="聯絡 William 信箱">contact me <img src="/public/hex/week2/personalWebsitePage/arrow_outward.png" alt="" aria-hidden="true"></a>
      </div>
    </div>
  </div>
  <!-- introduction -->
  <div class="introduction text-white">
    <div class="container py-160 flex gap-6">
      <div class="intro col-5 flex flex-col">
        <h2 class="fs-0">Introduction</h2>
        <p class="fs-2 mt-36">Hi, I'm William Lee, a Front-End Developer with a passion for building beautiful and responsive websites that provide an optimal user experience.</p>
        <div class="mt-32 flex items-start gap-4">
          <img src="/public/hex/week2/personalWebsitePage/sparkle-sm.png" alt="" aria-hidden="true">
          <img src="/public/hex/week2/personalWebsitePage/sparkle-sm.png" alt="" aria-hidden="true">
          <img src="/public/hex/week2/personalWebsitePage/sparkle-sm.png" alt="" aria-hidden="true">
        </div>
      </div>
      <div class="introImg col-7 flex items-start">
        <ul class="flex gap-6">
          <li><img src="/public/hex/week2/personalWebsitePage/sparkle.png" alt="" aria-hidden="true"></li>
          <li><img src="/public/hex/week2/personalWebsitePage/photographer.png" alt="William's 手持照相機工作照"></li>
          <li><img src="/public/hex/week2/personalWebsitePage/people-2.png" alt="William's 正面單手遮臉酷照"></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- about -->
  <div class="about text-black">
    <div class="container flex flex-row-reverse items-center justify-between py-160">
      <div class="aboutText col-5">
        <h2  class="fs-0">About Me</h2>
        <p class="fs-2 mt-36">With over 5 years of experience, I'm proficient in HTML, CSS, JavaScript, jQuery, and React. I have a strong understanding of user experience design and accessibility. I'm always learning new technologies and techniques to stay up-to-date in the field.</p>
      </div>
      <ol class="aboutList flex flex-wrap col-6 gap-6">
        <li class="fs-3 flex flex-col gap-1">01
          <h3>Attention to Detail</h3>
          <p class="fs-normal">Meticulous code analysis and optimization.</p>
        </li>
        <li class="fs-3 flex flex-col gap-1">02
          <h3>Adaptability</h3>
          <p class="fs-normal">Swift learning of new technologies.</p>
        </li>
        <li class="fs-3 flex flex-col gap-1">03
          <h3>Problem Solver</h3>
          <p class="fs-normal">Identifying and resolving issues.</p>
        </li>
        <li class="fs-3 flex flex-col gap-1">04
          <h3>Team Player</h3>
          <p class="fs-normal">Collaborates and shares ideas.</p>
        </li>
      </ol>
    </div>
  </div>
  <!-- contact -->
  <div class="contact bg-black">
    <div class="container flex justify-between items-center py-96">
      <h2 class="contact-title flex items-center text-white fs-0 gap-4">CONTACT ME <img src="/public/hex/week2/personalWebsitePage/trending_flat_black_24.png" alt="" aria-hidden="true"></h2>
      <ul class="social-link flex items-center col-5 gap-5">
        <li><a href="#"><img src="/public/hex/week2/personalWebsitePage/discord.png" alt="William's Discord"></a></li>
        <li><a href="#"><img src="/public/hex/week2/personalWebsitePage/instagram.png" alt="William's IG"></a></li>
        <li><a href="#"><img src="/public/hex/week2/personalWebsitePage/message.png" alt="William's Message"></a></li>
      </ul>
    </div>
  </div>
  <!-- projects -->
  <div class="projects">
    <div class="container flex flex-col gap-4 py-160">
      <h2 class="fs-0 col-7 ml-auto">My Projects</h2>
      <div class="flex gap-6">
        <div class="projL col-4">
          <img src="/public/hex/week2/personalWebsitePage/Rectangle 10.png" alt="William's Project1">
        </div>
        <div class="projR flex flex-col gap-7 col-8">
          <div class="flex gap-6">
            <img class="self-start" src="/public/hex/week2/personalWebsitePage/Rectangle 15.png" alt="William's Project2">
            <div class="dec-info flex flex-col justify-between items-start">
              <p>I've worked on a variety of websites, including e-commerce sites, blogs, and landing pages. I take pride in creating clean, efficient, and user-friendly code.</p>
              <a href="#" class="button button-dark" aria-label="看更多 William's Project">SEE MORE <img src="/public/hex/week2/personalWebsitePage/arrow_outward-white.png" alt="" aria-hidden="true"></a>
            </div>
          </div>
          <div class="flex items-start gap-6">
            <img src="/public/hex/week2/personalWebsitePage/Rectangle 14.png" alt="William's Project3">
            <img src="/public/hex/week2/personalWebsitePage/Rectangle 29.png" alt="William's Project4">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
  <footer class="footer text-center py-40 bg-black text-white">
    all rights reserved @hexschool2023
  </footer>
</div>

</template>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap')

// use reset, tailwind css
// -------------------------------------
//   Root
// -------------------------------------
.personalWebsitePage
  line-height: 1.5
  font-family: "Bruno Ace SC", sans-serif
  img
    vertical-align: middle

// -------------------------------------
//   Helper
// -------------------------------------
$gutter: 24px
$column: 86px

.w-50-offset
  width: calc( 50% - 12px )
.col-4
  width: calc( $column * 4 + $gutter * 3 )
.col-5
  width: calc( $column * 5 + $gutter * 4 )
.col-6
  width: calc( $column * 6 + $gutter * 5 )
.col-7
  width: calc( $column * 7 + $gutter * 6 )
.col-8
  width: calc( $column * 8 + $gutter * 7 )

// ----- font-size ----- //
h1, .h1
  font-size: 128px
h2, .h2
  font-size: 40px 
.fs-0
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
.py-40
  padding: 40px 0
.py-96
  padding: 96px 0
.py-160
  padding: 160px 0
.mt-32
  margin-top: 32px
.mt-36
  margin-top: 36px

.gap-1
  gap: 4px
.gap-5
  gap: 20px
.gap-6
  gap: 24px
.gap-7
  gap: 28px

// ----- color ----- //
$text-danger: #00FFA3
.text
  &-danger
    color: $text-danger
.bg
  &-blue-liner
    background: linear-gradient(180deg, #050014 0%, rgba(1, 2, 30, 0.89) 100%)

// -------------------------------------
//   Layout
// -------------------------------------
.container
  width: 1296px
  margin: 0 auto

// -------------------------------------
//   Page
// -------------------------------------
.navList
  li:nth-child(3)
    max-width: 278.5px
  a
    transition: .75s
    &:hover
      color: $text-danger
.banner
  padding: 72px 0 32px
.introduction
  background-image: url(/public/hex/week2/personalWebsitePage/background-img.png)
  background-size: conver
  background-repeat: no-repeat
.aboutList
  li
    width: calc( 50% - 12px )
    padding: 16px
    border: 1px solid #E3E3E3
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.08)

.contact-title
  width: calc( $column * 6 + $gutter * 5 + 24px )
.social-link
  li
    a
      display: block
      border-radius: 40px
      transition: .75s
      &:hover
        box-shadow: 0px 0px 16px 3px rgba(144, 148, 255, 0.9)
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))

// -------------------------------------
//   Component
// -------------------------------------
.button
  display: flex
  gap: 4px
  border-radius: 32px
  padding: 12px 24px
  color: black
  background-color: white
  transition: .75s
  img
    transition: .75s
  &:not(.button-dark):hover
    background-color: $text-danger
  &:hover
    img
      transform: rotate(45deg)
  &-dark
    color: white
    background-color: black
    &:hover
      color: $text-danger
</style>
