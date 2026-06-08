<template>
  <section class="banner header-crev bord-thin-bottom" data-scroll-index="0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 valign">
          <div class="content">
            <div class="sub-title mb-30 fz-14 opacity-7">{{ $t('banner.subtitle') }}</div>
            <h1>
              {{ $t('banner.greeting') }} <br />
              <span class="main-color">{{ $t('banner.name') }}</span>
            </h1>
            <div class="text mt-30">
              <p>
                {{ $t('banner.description') }}
              </p>
            </div>
            <div
              class="mt-50 d-flex align-items-center justify-content-center justify-content-lg-start"
            >
              <div class="box-shadwo">
                <div class="d-flex align-items-center">
                  <span class="fz-60 fw-bold mr-10">{{ experience }}</span>
                  <span class="fz-16"
                    >{{ $t('banner.yearsOf') }} <br />
                    {{ $t('banner.experiences') }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-end">
          <div class="img-author">
            <img src="assets/imgs/header/me.png" alt="Denis Grushkin" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const start = 2016;
const end = new Date().getFullYear();
const experience = end - start;
</script>
