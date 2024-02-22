<template>
  <section class="services serv2 section-padding" data-scroll-index="1">
    <div class="container">
      <div class="sec-head mb-80 wow fadeIn">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="d-inline-block">
              <div class="sub-title-icon d-flex align-items-center">
                <span class="icon pe-7s-box2"></span>
                <h2 class="fz-16">My Services</h2>
              </div>
            </div>
            <h3>What Services I Provide ?</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(service, index) in SERVICES"
          :key="`service-${index}`"
          class="col-lg-4 col-md-6 wow fadeIn"
          data-wow-delay=".2s"
        >
          <div class="services-card item mb-30">
            <div class="cont">
              <div class="d-flex align-items-center mb-30">
                <div :class="['mr-40', service.class]">
                  <img :src="service.img" :alt="service.title">
                </div>
                <div>
                  <span class="opacity-7 fz-13 mb-5">{{ service.step }}</span>
                  <div class="fz-20">{{ service.title }}</div>
                </div>
              </div>
              <p>{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import img1 from 'assets/imgs/serv-img/1.png';
import backSvg from 'assets/imgs/serv-img/back.png';
import img3 from 'assets/imgs/serv-img/3.png';
import adminImg from 'assets/imgs/serv-img/admin.png';
import mobileSvg from 'assets/imgs/serv-img/mobile.svg';
import prodImg from 'assets/imgs/serv-img/prod.svg';

const SERVICES = [
  {
    step: '#1',
    title: 'Building the Front-end',
    desc: 'Implementation of web applications of any complexity level, relying on the most demanded and secure technological solutions.',
    img: img1,
    class: 'icon-img-50',
  },
  {
    step: '#2',
    title: 'Adaptation for mobile devices',
    desc: 'Seamlessly adapting web applications for optimal performance and user experience on mobile devices, ensuring full functionality and responsive design.',
    img: mobileSvg,
    class: 'icon-img-40',
  },
  {
    step: '#3',
    title: 'SEO optimization',
    desc: 'Strategically enhancing the web application`s performance and visibility by implementing advanced SEO techniques for optimal search engine rankings.',
    img: img3,
    class: 'icon-img-50',
  },
  {
    step: '#4',
    title: 'Building the Back-end',
    desc: 'Expertly crafting the back-end architecture utilizing industry-leading solutions to ensure robust performance, scalability, and reliability.',
    img: backSvg,
    class: 'icon-img-50',
  },
  {
    step: '#5',
    title: 'Setup Admin Panel',
    desc: 'Efficiently setting up a tailored admin panel for your web application, enhancing management and operational functionality.',
    img: adminImg,
    class: 'icon-img-50',
  },
  {
    step: '#6',
    title: 'Deploying to Production',
    desc: 'Ensuring seamless operation of web applications on secure, real-world servers for unmatched reliability and performance.',
    img: prodImg,
    class: 'icon-img-50',
  },
]
</script>

<style lang="scss" scoped>
.services {
  &-card {
    min-height: 310px;
  }
}
</style>