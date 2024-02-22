<template>
  <section class="resume2 section-padding wow fadeIn" data-scroll-index="2">
    <div class="container">
      <div class="sec-head mb-80 wow fadeIn">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="d-inline-block">
              <div class="sub-title-icon d-flex align-items-center">
                <span class="icon pe-7s-tools"></span>
                <h2 class="fz-16">My Skills</h2>
              </div>
            </div>
            <h3>A list of technologies I know and use</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div v-for="(arr, i) in LIST1" :key="`list-1-item-${i}`" class="items d-flex gap-2">
            <div class="date fz-14 bg-white text-black" v-for="(item, j) in arr" :key="`list-1-item-${i}-item-${j}`">
              {{ item }}
            </div>
          </div>
          <div class="resume-clumn">
          </div>
        </div>
        <div class="col-lg-6">
          <div v-for="(arr, i) in LIST2" :key="`list-1-item-${i}`" class="items d-flex gap-2">
            <div class="date fz-14 bg-white text-black" v-for="(item, j) in arr" :key="`list-1-item-${i}-item-${j}`">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const LIST1 = [
  ['JavaScript', 'Typescript', 'Web 3'],
  ['Vue.js', 'Nuxt.js', 'React.js', 'Next.js'],
  ['REST API', 'GraphQl', 'Apollo'],
  ['Git', 'Jira', 'Figma', 'Miro'],
  ['HTML5', 'Pug/Jade', 'CSS3', 'Sass/Scss'],
  ['Bootstrap', 'Vuetify', 'Quasar', 'Chakra UI'],
  ['Unit testing(jest)', 'Integration testings(cypress)']
]

const LIST2 = [
  ['SSR', 'SSG', 'SPA', 'PWA'],
  ['Vite', 'Webpack', 'Rollup', 'Gulp'],
  ['Node.js', 'Express.js', 'MongoDB'],
  ['SQL', 'Python', 'Django'],
  ['Linux', 'Docker', 'Docker Compose', 'Gitlab CI/CD'],
  ['Strapi', 'Prismic'],
  ['Programming printers', 'Browser Extension', 'Cordova']
]
</script>
