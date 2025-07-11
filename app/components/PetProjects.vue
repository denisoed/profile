<template>
  <section class="portfolio section-padding wow fadeIn pb-0" data-scroll-index="3">
    <div class="container">
      <div class="sec-head mb-40 wow fadeIn">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="d-inline-block">
              <div class="sub-title-icon d-flex align-items-center">
                <span class="icon pe-7s-portfolio"></span>
                <h2 class="fz-16">My Pet Projects</h2>
              </div>
            </div>
            <h3>Some of my pet projects</h3>
          </div>
        </div>
      </div>

      <div class="gallery">
        <div class="row">
          <a
            v-for="(project, index) in PROJECTS"
            :key="`project-${index}`"
            class="col-lg-4 items wow fadeIn"
            :href="project.link"
            target="_blank"
            :data-wow-delay="project.wowDelay"
          >
            <div class="item">
              <div class="img">
                <img v-if="project.img" :src="project.img" alt="">
                <img v-else src="assets/imgs/works/1.jpg" alt="">
              </div>
              <div class="cont d-flex align-items-center">
                <div>
                  <h6>{{ project.title }}</h6>
                  <p>{{ project.description }}</p>
                  <span class="tag mt-3">{{ project.tag }}</span>
                </div>
                <div class="ml-auto">
                  <div class="arrow">
                    <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34.2 32.3"
                      xml:space="preserve" style="stroke-width: 2;">
                      <line x1="0" y1="16" x2="33" y2="16"></line>
                      <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                      <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const PROJECTS = [
  {
    title: 'Obsidian Orthography',
    tag: 'Github',
    description: 'The Obsidian plugin for checking grammar and correcting spelling errors in text.',
    img: 'https://raw.githubusercontent.com/denisoed/obsidian-orthography/master/preview.gif',
    link: 'https://github.com/denisoed/obsidian-orthography',
    wowDelay: '0.2s'
  },
  {
    title: 'SEO Analyzer',
    description: 'The library for analyze a HTML file to show all of the SEO defects.',
    tag: 'Github',
    img: 'https://raw.githubusercontent.com/maddevsio/seo-analyzer/master/preview.png',
    link: 'https://github.com/maddevsio/seo-analyzer',
    wowDelay: '0.4s'
  },
  {
    title: 'Dead Code Checker',
    description: 'Dead Code Checker - is a tool for finding dead code in your JavaScript or TypeScript project. It helps to ensure a cleaner and more maintainable code base.',
    tag: 'Github',
    img: 'https://raw.githubusercontent.com/denisoed/dead-code-checker/main/preview.webp',
    link: 'https://github.com/denisoed/dead-code-checker',
    wowDelay: '0.6s'
  },
  {
    title: 'Box Stacker',
    description: 'Here you can build incredible towers, earn points and exchange them for valuable coins that can become a real treasure!',
    tag: 'Github',
    img: 'https://raw.githubusercontent.com/denisoed/box-stacker/main/preview.png',
    link: 'https://github.com/denisoed/box-stacker',
    wowDelay: '0.8s'
  },
  {
    title: 'Sklad',
    description: 'Your smart merchandise management assistant! 📦💼',
    tag: 'Github',
    img: 'https://raw.githubusercontent.com/denisoed/sklad_front/main/preview.png',
    link: 'https://github.com/denisoed/sklad_front',
    wowDelay: '1s'
  },
  {
    title: 'TV Timer',
    description: 'A simple and convenient timer application designed for TV screens. Allows users to select a preset time interval, start a countdown, pause, reset, and return to the main screen easily.',
    tag: 'Github',
    img: 'https://github.com/denisoed/tv-timer/raw/main/public/banner.png',
    link: 'https://github.com/denisoed/tv-timer',
    wowDelay: '1.2s'
  }
]
</script>