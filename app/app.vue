<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead(() => ({
  title: t('meta.title'),
  meta: [
    { name: "description", content: t('meta.description') },
    { name: "keywords", content: t('meta.keywords') },
    { name: "msapplication-TileColor", content: "#da532c" },
    { name: "theme-color", content: "#14222e" },
    { key: "og:title", property: "og:title", content: t('meta.title') },
    { key: "og:description", property: "og:description", content: t('meta.description') },
    { key: "twitter:title", name: "twitter:title", content: t('meta.title') },
    { key: "twitter:description", name: "twitter:description", content: t('meta.description') },
  ],
  link: [
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    { rel: "canonical", href: "https://denisoed.com" },
  ],
  script: [
    { src: "js/jquery-3.6.0.min.js", tagPosition: "bodyClose" },
    { src: "js/jquery-migrate-3.4.0.min.js", tagPosition: "bodyClose" },
    { src: "js/plugins.js", tagPosition: "bodyClose" },
    { src: "js/scripts.js", tagPosition: "bodyClose" },
  ],
}))
</script>

<style>
/* Optimized Fonts */
@import url("~/assets/css/fonts.css");

/* Plugins Css */
@import url("~/assets/css/plugins.css");

/* Core Style Css */
@import url("~/assets/scss/style.scss");
</style>
