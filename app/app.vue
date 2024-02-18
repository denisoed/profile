<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap' }
  ]
})
</script>

<style>
/* Plugins Css */
@import url('~/assets/css/plugins.css');

/* Core Style Css */
@import url('~/assets/css/style.css');
</style>
