<template>
  <section class="resume2 section-padding wow fadeIn" data-scroll-index="2">
    <div class="container">
      <div class="sec-head mb-80 wow fadeIn">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="d-inline-block">
              <div class="sub-title-icon d-flex align-items-center">
                <span class="icon pe-7s-portfolio"></span>
                <h2 class="fz-16">My Experience</h2>
              </div>
            </div>
            <h3>Education & Experience</h3>
            <p class="mt-20 fz-16 opacity-8">Full-stack frontend developer with expertise in the entire development lifecycle, from initial concept to production deployment. Specialized in building responsive, SEO-optimized applications with modern frameworks, focusing on clean architecture and maintainable code.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="resume2-container container position-relative" :class="{ 'show-all': showAll }">
      <div class="row">
        <div class="col-lg-6">
          <div class="resume-clumn">
            <div v-for="(item, i) in LIST1" :key="`list-1-item-${i}`" class="items mb-40">
              <div class="timeline-dot">
                <span class="dot-number">{{ (LIST2.length + LIST1.length) - i }}</span>
              </div>
              <div class="date fz-14">{{ item.date }}</div>
              <div class="fz-18 fw-bold">{{ item.projectName }}</div>
              <span class="opacity-8 fw-bold mt-10">[ {{ item.technology }} ]</span>
              <p class="fz-14 mt-10">{{ item.description }}</p>
              <ul class="list-responsibility mt-10 mb-0">
                <li v-for="(resp, j) in item.responsibilities" :key="`list-1-item-${i}-resp-${j}`">
                  {{ resp }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="resume-clumn">
            <div v-for="(item, i) in LIST2" :key="`list-2-item-${i}`" class="items mb-40">
              <div class="timeline-dot">
                <span class="dot-number">{{ LIST2.length - i }}</span>
              </div>
              <div class="date fz-14">{{ item.date }}</div>
              <div class="fz-18 fw-bold">{{ item.projectName }}</div>
              <span class="opacity-8 fw-bold mt-10">[ {{ item.technology }} ]</span>
              <p class="fz-14 mt-10">{{ item.description }}</p>
              <ul class="list-responsibility mt-10 mb-0">
                <li v-for="(resp, j) in item.responsibilities" :key="`list-2-item-${i}-resp-${j}`">
                  {{ resp }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="gradient-overlay" v-if="!showAll"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mt-40">
          <button @click="toggleShowAll" class="btn-curve btn-lit">
            <span>{{ showAll ? 'Show Less' : 'Show All' }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showAll = ref(false)

const toggleShowAll = () => {
  showAll.value = !showAll.value
}

const LIST1 = [
  {
    date: 'Mar 2025 - Jun 2025',
    projectName: 'Check Trusty',
    technology: 'Typescript, React, Next.js',
    description: 'Home improvement platform connecting homeowners with verified experts across 100+ services. Features location-based search, expert ratings, and instant communication.',
    responsibilities: [
      'Developed and implemented new interactive features to enhance user experience',
      'Optimized website performance through code splitting and lazy loading techniques',
      'Refactored legacy codebase, improving loading times by 40% and maintainability',
      'Integrated advanced search and filtering capabilities for expert matching',
      'Collaborated with UX/UI team to implement responsive design improvements'
    ]
  },
  {
    date: 'Jan 2025 - Mar 2025',
    projectName: 'AI platform',
    technology: 'Typescript, Vue 3, Quasar',
    description: 'A collaborative AI-powered platform enabling artists and their fans to create digital content together, streamlining community interaction and revenue distribution.',
    responsibilities: [
      'Assisted in project development',
      'Implemented mobile-responsive design adaptations',
      'Configured SEO optimizations'
    ]
  },
  {
    date: 'May 2024 - Jan 2025',
    projectName: 'Telegram Mini App',
    technology: 'Typescript, Vue 3, Quasar',
    description: 'A Telegram mini application designed for token farming and management, featuring seamless integration with Telegram\'s ecosystem.',
    responsibilities: [
      'Lead a front-end development team',
      'Collaborated with customers to gather requirements and provide regular updates',
      'Integrated Telegram Bot API features including authentication, payment, and notifications',
      'Developed responsive features optimized for both mobile and desktop platforms',
      'Performed unit testing and end-to-end testing of components',
    ]
  },
  {
    date: 'Mar 2023 - May 2024',
    projectName: 'NFT Marketplace',
    technology: 'Typescript, Vue 3, Quasar',
    description: 'Blockchain-based online platform to sell and buy non-fungible tokens (NFTs).',
    responsibilities: [
      'Lead a front-end development team',
      'Communication with customers',
      'Setting up a project from scratch',
      'Setting up SSR for SEO',
      'Development of features',
      'Creating a wallet for the marketplace',
      'Testing of components'
    ]
  },
  {
    date: 'Aug 2022 – Mar 2023',
    projectName: 'CryptoMarry',
    technology: 'Typescrypt, React, Chakra UI',
    description: 'CryptoMarry is a Web3 platform that rediscovers how partners accumulate and manage their joint crypto assets.',
    responsibilities: [
      'Refactoring existing code',
      'Setting up SSR(Next.js) for SEO',
      'Connecting MetaMask for transactions',
      'Development of features',
      'Testing of components',
    ],
  },
  {
    date: 'Dec 2021 – Aug 2022',
    projectName: 'Enji.ai',
    technology: 'Typescrypt, Vue.js, Quasar',
    description: 'Automation of internal processes of Mad Devs.',
    responsibilities: [
      'Developing a framework for sending SQL directly from the frontend',
      'Development of new features, support',
      'Testing of components',
    ],
  },
  {
    date: 'Juny 2021 – Dec 2021',
    projectName: 'Edentity',
    technology: 'Javascript, Vue.js, Cypress, Vuetify, Html, Scss',
    description: 'Widget for the car showroom and admin panel.',
    responsibilities: [
      'Creating a car store',
      'Creating a widget for integrating the store into other dealers\' websites',
      'Development of new features, support',
      'Testing of components',
    ],
  },
  {
    date: 'Dec 2020 – Juny 2021',
    projectName: 'Mad Devs v2',
    technology: 'Javascript, Nuxt.js, SSR, Prismic.js',
    description: 'Development of the new website for Mad Devs.',
    responsibilities: [
      'Migration from Vue 2 to Nuxt.js',
      'Setting up SSR for SEO',
      'Connecting and configuring Prismic.js',
      'Refactoring, optimization, accessibility',
      'Development of new features, support',
      'Testing of components',
    ],
  },
  {
    date: 'Oct 2020 – Dec 2020',
    projectName: 'IotHub',
    technology: 'Javascript, React.js, Apollo client, Stripe.js',
    description: 'IoT Hub is a system for organizing centralized configuration management and security checks of IoT devices (mainly intended for office work and companies): printers, UPS, routers, etc.',
    responsibilities: [
      'Development of new features, support',
      'Testing of components',
      'Connecting and configuring Stripe.js',
      'Setup React Apollo Client',
    ],
  },
]

const LIST2 = [
  {
    date: 'Feb 2020 - Oct 2020',
    projectName: 'Edentity',
    technology: 'Javascript, Vue.js, Cypress, Vuetify, Html, Scss',
    description: 'Developing a widget for the car showroom and admin panel',
    responsibilities: [
      'Widget development for websites without using html iframe',
      'Layout of the admin panel for the widget via Vuetify',
      'Setup unit, component, integration tests. Setup json server for tests',
    ],
  },
  {
    date: 'Jan 2020 – Feb 2020',
    projectName: 'Simplonpass',
    technology: 'Javascript, React.js, Html, Scss',
    description: 'Service for hiring companies, creating contracts, bonds, etc.',
    responsibilities: [
      'Development assistance',
      'Setup JWT authentication',
    ],
  },
  {
    date: 'Dec 2019 – Jan 2020',
    projectName: 'Iview',
    technology: 'PWA, Javascript, React.js, Html, Scss',
    description: 'Service for viewing traffic jams on alleys, using cameras',
    responsibilities: [
      'Project layout from scratch',
      'PWA Setup',
    ],
  },
  {
    date: 'Jan 2019 - Dec 2019',
    projectName: 'KICKEX',
    technology: 'Javascript, Vue.js, Pug, Scss',
    description: 'KickEx - a cryptocurrency exchange with smart orders and low trading commissions.',
    responsibilities: [
      'Project layout from scratch, create components, adding a dark theme',
      'Setup tradingview charts.',
    ],
  },
  {
    date: 'Aug 2018 - Jul 2019',
    projectName: 'Nappy Club',
    technology: 'PHP, Yii2, Html, Scss',
    description: 'Sale of diapers throughout Russia',
    responsibilities: [
      'Development of new features, support.',
      'HTML letter layout.',
      'Writing integration tests for fronted.',
    ],
  },
  {
    date: 'Jul 2018 - Aug 2018',
    projectName: 'Website for Mad Devs',
    technology: 'Javascript, Vue.js, Html, Scss',
    description: 'Development of the official website for Mad Devs',
    responsibilities: [
      'The layout of the new design for the website of the company Mad Devs.',
      'Migrating MD site from Vue.js to Nuxt.js framework',
    ],
  },
  {
    date: 'May 2018 - Jul 2018',
    projectName: 'PekloTool',
    technology: 'Javascript, Vue.js, HTML, Scss',
    description: 'Generation of contextual advertising',
    responsibilities: [
      'Development of new feature, Support.',
      'Server api integration on the client side.',
    ],
  },
  {
    date: 'Feb 2018 - May 2018',
    projectName: 'Silkroadexplore, ShowMeBishkek',
    technology: 'PHP, Wordpress, HTML, CSS, Javascript',
    description: 'Organization of tours in Kyrgyzstan',
    responsibilities: [
      'Development of new feature, Support.',
      'Deploy code to production via FTP FileZilla.',
      'Creation of new blocks on the pages, without the involvement of the designer.',
    ],
  },
  {
    date: 'Jan 2018 – Feb 2018',
    projectName: 'Mad Location Manager',
    technology: 'Gulp, Javascript, Html, Sass, Pug',
    description: 'This is library for GPS and Accelerometer data "fusion" with Kalman filter',
    responsibilities: [
      'Setup project from scratch',
      'Setup Gulp tasks for production',
      'Added multi-language functional without using plugins.',
    ],
  },
  {
    date: 'Oct 2017 - Jan 2018',
    projectName: 'Mad Devs internship programm',
    technology: 'Python, Django, PosgreSQL, Javascript, HTML, CSS',
    description: 'Development of an internal project for sending spam to different services.',
    responsibilities: [
      'Learning Django, Python, PosgreSQL, Javascript, HTML, CSS',
      'Development of a Telegram bot for finding mentors',
      'Writing unit and integration tests for Django.',
    ],
  },
]
</script>

<style lang="scss" scoped>
.resume2 {
  .list-responsibility {
    li {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 1.5;
      color: #fff;
      list-style: disc;
    }
  }

  .items {
    position: relative;
    padding-left: 30px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: rgba(255, 255, 255, 0.1);
    }

    .timeline-dot {
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      background: var(--maincolor);
      border-radius: 50%;
      transform: translateX(-9px);

      .dot-number {
        color: #000;
        font-size: 10px;
        font-weight: bold;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        letter-spacing: normal;
      }
    }
  }

  .gradient-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to bottom, transparent, #0c0c0c);
    pointer-events: none;
  }

  .btn-curve {
    position: relative;
    z-index: 1;
    padding: 10px 20px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.03);
  }

  &-container {
    &:not(.show-all) {
      max-height: 800px;
      overflow: hidden;
      transition: max-height 0.5s ease-in-out;
      margin-bottom: 40px;

      @media (max-width: 768px) {
        max-height: 1000px;
      }
    }
  }
}
</style>