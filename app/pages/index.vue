<template>
  <main>
    <div class="cursor" />

    <!-- ==================== Start Loading ==================== -->
    <PageLoader />
    <!-- ==================== End Loading ==================== -->

    <!-- ==================== Start progress-scroll-button ==================== -->
    <ProgressBtn />
    <!-- ==================== End progress-scroll-button ==================== -->

    <!-- ==================== Start Navbar ==================== -->
    <Header />
    <!-- ==================== End Navbar ==================== -->

    <!-- ==================== Start Header ==================== -->
    <Banner />
    <!-- ==================== End Header ==================== -->

    <!-- ==================== Start Services ==================== -->
    <Services class="pb-0" />
    <!-- ==================== End Services ==================== -->

    <!-- ==================== Start My Resume ==================== -->
    <Resume />
    <!-- ==================== End My Resume ==================== -->

    <!-- ==================== Start Footer ==================== -->
    <Footer />
    <!-- ==================== End Footer ==================== -->
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Denis Grushkin - Web Enginer",
});
</script>
