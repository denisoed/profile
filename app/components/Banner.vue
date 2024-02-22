<template>
  <section class="header-crev bord-thin-bottom" data-scroll-index="0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 valign">
          <div class="content">
            <div class="sub-title mb-30 fz-14 opacity-7">Web Enginer</div>
            <h1>Hello, I’m <br> <span class="main-color">Denis Grushkin</span></h1>
            <div class="text mt-30">
              <p>My objective is to foster business growth through the adoption of cutting-edge technologies.</p>
            </div>
            <div class="mt-50 d-flex align-items-center">
              <div class="box-shadwo mr-30">
                <div class="d-flex align-items-center">
                  <span class="fz-60 fw-bold mr-10">{{ expirience }}</span>
                  <span class="fz-16">Years of <br> Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-end">
          <div class="img-author">
            <img src="assets/imgs/header/me.png" alt="Denis Grushkin">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const start = 2016;
const end = new Date().getFullYear();
const expirience = end - start;
</script>