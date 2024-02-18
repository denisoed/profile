<template>
  <main>
    <div class="cursor" />

    <!-- ==================== Start Loading ==================== -->
    <PageLoader />
    <!-- ==================== End Loading ==================== -->

    <!-- ==================== Start Navbar ==================== -->
    <Header />
    <!-- ==================== End Navbar ==================== -->

    <!-- ==================== Start Header ==================== -->
    <Banner />
    <!-- ==================== End Header ==================== -->

    <!-- ==================== Start My Resume ==================== -->
    <Resume />
    <!-- ==================== End My Resume ==================== -->
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Denis Grushkin - Web Enginer",
});
</script>
