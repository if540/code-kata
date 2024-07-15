<script setup lang="ts">
useSeoMeta({
  title: "第一週 - 個人履歷"
})
</script>

<template>
<header class="container header">
  <h1 class="title-1">VITO</h1>
  <img class="mx-auto" src="/public/hex/week1/personalResume/vito.png" alt="VITO 個人黑白照">
  <h2 class="ml-auto title-1 w-half-offset">RESUME</h2>
</header>
<section class="vito-dec bg-gray-light">
  <div class="container">
    <p class="ml-auto w-half-offset fs-1">I'm Vito, a UI Designer with 5+ years of experience. I create visually appealing interfaces for web and mobile apps. Proficient in Sketch, Adobe XD, Figma, HTML, CSS, and JavaScript. I enjoy collaborating with others to create high-quality products.</p>
  </div>
</section>
<main class="container detail">
  <ul>
    <li class="mb-10 w-half-offset">
      <h3 class="mb-4 detail-title title-2">Vito Evans</h3>
      <address>
        <ul class="fs-2">
          <li class="mb-2">456 Walnut Avenue, Someville, USA</li>
          <li class="mb-2"><a href="tel:+1 123 456 7890">+1 123 456 7890</a></li>
          <li class="mb-2"><a href="mailto:info@hexschool.com" target="_blank">info@hexschool.com</a></li>
          <li><a href="www.infohexschool.com" target="_blank">www.infohexschool.com</a></li>
        </ul>
      </address>
    </li>
    <li class="mb-10 w-half-offset">
      <h3 class="mb-4 detail-title title-2">Education</h3>
      <ul class="fs-2">
        <li class="mb-4">
          <time class="italic detail-time fs-3 text-gray" datetime="2014-2018">2014-2018</time>
          <p>Bachelor of Science in Business Administration, University of California, Los Angeles</p>
        </li>
        <li class="mb-4">
          <time class="italic detail-time fs-3 text-gray" datetime="2012-2014">2012-2014</time>
          <p>Associate of Arts in Graphic Design, San Francisco State University</p>
        </li>
        <li>
          <time class="italic detail-time fs-3 text-gray" datetime="2008-2012">2008-2012</time>
          <p>High School Diploma, Lincoln High School</p>
        </li>
      </ul>
    </li>
    <li class="mb-10 w-half-offset">
      <h3 class="mb-4 detail-title title-2">Work</h3>
      <ul class="fs-2">
        <li class="mb-4">
          <time class="italic detail-time fs-3 text-gray" datetime="2018-2021">2018-2021</time>
          <p>Marketing Manager, ABC Company</p>
        </li>
        <li class="mb-4">
          <time class="italic detail-time fs-3 text-gray" datetime="2016-2018">2016-2018</time>
          <p>Sales Associate, XYZ Corporation</p>
        </li>
        <li>
          <time class="italic detail-time fs-3 text-gray" datetime="2014-2016">2014-2016</time>
          <p>Customer Service Representative, QRS Inc.</p>
        </li>
      </ul>
    </li>
    <li class="w-half-offset">
      <h3 class="mb-4 detail-title title-2">Awards</h3>
      <p class="mb-3 fs-2">Best in Show Award, National Advertising Awards, 2020</p>
      <p class="mb-3 fs-2">Honorable Mention, International Design Competition, 2019</p>
      <p class="fs-2">People's Choice Award, Local Art Exhibition, 2018</p>
    </li>
  </ul>
</main>
<footer class="bg-black footer">
  <ul class="text-center social-link">
    <li><a href="#"><img src="/public/hex/week1/personalResume/fb.png" alt="vito's fb"></a></li>
    <li><a href="#"><img src="/public/hex/week1/personalResume/instagram.png" alt="vito's instagram"></a></li>
    <li><a href="#"><img src="/public/hex/week1/personalResume/line.png" alt="vito's line"></a></li>
  </ul>
</footer>
</template>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Castoro:ital@0;1&display=swap')

// -------------------------------------
//   Global
// -------------------------------------
body
  line-height: 1.5
  font-family: Castoro, Arial, Helvetica, sans-serif
img
  vertical-align: middle

// -------------------------------------
//   Helper
// -------------------------------------
// ----- font-size ----- //
.title-1
  font-size: 128px
  letter-spacing: 0.12em
.title-2
  font-size: 40px
.fs-1
  font-size: 32px
.fs-2
  font-size: 24px
.fs-3
  font-size: 20px

// ----- offset ----- //
.w-half-offset
  width: calc( 50% - 12px )
.mb-2
  margin-bottom: 8px
.mb-3
  margin-bottom: 12px
.mb-4
  margin-bottom: 16px
.mb-10
  margin-bottom: 40px


// ----- Color ----- //
$gray: #949494
$gray-light: #efefef
$red-dark: #ae0000
.text
  &-gray
    color: $gray
  &-gray-light
    color: $gray-light
  &-red-dark
    color: $red-dark
.bg
  &-gray
    background-color: $gray
  &-gray-light
    background-color: $gray-light
  &-red-dark
    background-color: $red-dark

// -------------------------------------
//   Layout
// -------------------------------------
.container
  max-width: 1296px
  margin: 0 auto

// -------------------------------------
//   component
// -------------------------------------
.header
  padding-top: 160px
.vito-dec
  padding: 48px 0
.detail
  padding: 80px 0 160px
  &-title
    position: relative
    &::after
      position: absolute
      bottom: 0
      content: ""
      display: block
      width: 100%
      border-bottom: 3px solid $red-dark
  &-time
    // Hack: inlnie devil
    display: block
.footer
  padding: 64px 0
.social-link
  // Hack: inlnie devil
  // line-height: 0 or font-size: 0
  li
    margin: 0 20px
    display: inline-block
    // Hack: inlnie devil
    vertical-align: middle
</style>
