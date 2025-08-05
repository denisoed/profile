<template>
  <div class="app">
    <Head>
      <Title>Denis Grushkin - Web Engineer</Title>
      <Meta name="description" content="My objective is to foster business growth through the adoption of cutting-edge technologies." />
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <Link rel="canonical" href="https://denisoed.com" />
      <Meta name="msapplication-TileColor" content="#da532c" />
      <Meta name="theme-color" content="#14222e" />
      <Meta name="keywords" content="denisoed, denisoed.com, portfolio, denisoed portfolio, denisoed resume, denisoed cv, IT, front-end developer, full-stack developer" />
    </Head>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// useHead is auto-imported in Nuxt 3
useHead({
  script: [
    { src: 'js/jquery-3.6.0.min.js', tagPosition: 'bodyClose' },
    { src: 'js/jquery-migrate-3.4.0.min.js', tagPosition: 'bodyClose' },
    { src: 'js/plugins.js', tagPosition: 'bodyClose' },
    { src: 'js/scripts.js', tagPosition: 'bodyClose' },
  ]
})
</script>

<style>
/* Optimized Fonts */
@import url('~/assets/css/fonts.css');

/* Plugins Css */
@import url('~/assets/css/plugins.css');

/* Core Style Css */
@import url('~/assets/scss/style.scss');
</style>
