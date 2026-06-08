<template>
  <section
    ref="sectionRef"
    :class="['resume2 section-padding wow fadeIn', { 'in-view': isVisible }]"
    data-scroll-index="2"
  >
    <div class="container">
      <div class="sec-head mb-80 wow fadeIn">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="d-inline-block">
              <div class="sub-title-icon d-flex align-items-center">
                <span class="icon pe-7s-tools"></span>
                <h2 class="fz-16">{{ $t('skills.title') }}</h2>
              </div>
            </div>
            <h3>{{ $t('skills.subtitle') }}</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="skills-row">
        <div
          v-for="(group, gIdx) in localizedSkillGroups"
          :key="gIdx"
          :style="{ '--g': gIdx }"
        >
          <div class="skill-card">
            <h4 class="skill-card__title">{{ group.title }}</h4>
            <div class="skill-card__items">
              <div
                v-for="(skill, i) in group.items"
                :key="i"
                class="skill-badge"
                :style="{ '--i': i }"
              >
                <img
                  v-if="skill.icon"
                  :src="
                    skill.color
                      ? `https://cdn.simpleicons.org/${skill.icon}/${skill.color}`
                      : `https://cdn.simpleicons.org/${skill.icon}`
                  "
                  :alt="skill.name"
                  class="skill-badge__icon"
                />
                <span class="skill-badge__label">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const { t } = useI18n()

interface Skill {
  name: string;
  icon: string | null;
  color?: string;
}

interface SkillGroup {
  title: string;
  items: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "Nuxt.js", icon: "nuxt" },
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextdotjs", color: "white" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css" },
      { name: "Sass/Scss", icon: "sass" },
      { name: "Pug/Jade", icon: "pug" },
    ],
  },
  {
    title: "UI & Design",
    items: [
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Vuetify", icon: "vuetify" },
      { name: "Quasar", icon: "quasar", color: "white" },
      { name: "Chakra UI", icon: "chakraui" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "REST API", icon: null },
      { name: "GraphQl", icon: "graphql" },
      { name: "Apollo", icon: "apollographql" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express", color: "white" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "SQL", icon: null },
      { name: "Python", icon: "python" },
      { name: "Django", icon: "django" },
      { name: "PHP", icon: "php" },
      { name: "Yii2", icon: "yii" },
      { name: "WordPress", icon: "wordpress" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    title: "Build & DevOps",
    items: [
      { name: "SSR", icon: null },
      { name: "SSG", icon: null },
      { name: "SPA", icon: null },
      { name: "PWA", icon: null },
      { name: "Vite", icon: "vite" },
      { name: "Webpack", icon: "webpack" },
      { name: "Rollup", icon: "rollupdotjs" },
      { name: "Gulp", icon: "gulp" },
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "Docker", icon: "docker" },
      { name: "Docker Compose", icon: null },
      { name: "Gitlab CI/CD", icon: "gitlab" },
    ],
  },
  {
    title: "Platforms & Services",
    items: [
      { name: "Supabase", icon: "supabase" },
      { name: "Strapi", icon: "strapi" },
      { name: "Prismic", icon: "prismic" },
      { name: "Jira", icon: "jira" },
      { name: "Miro", icon: "miro", color: "white" },
      { name: "Stripe", icon: "stripe" },
      { name: "JWT", icon: "jsonwebtokens" },
      { name: "Capacitor", icon: "capacitor" },
      { name: "Telegram Mini Apps", icon: "telegram" },
      { name: "Telegram Bots", icon: "telegram" },
    ],
  },
  {
    title: "Testing & More",
    items: [
      { name: "Unit testing(jest)", icon: "jest" },
      { name: "Integration testings(cypress)", icon: "cypress" },
      { name: "Web 3", icon: null },
      { name: "Ethereum", icon: "ethereum" },
      { name: "Programming printers", icon: null },
      { name: "Browser Extension", icon: null },
      { name: "Samsung TV", icon: "samsung" },
      { name: "LG TV", icon: "lg" },
      { name: "Android TV", icon: "android" },
    ],
  },
];

const localizedSkillGroups = computed(() =>
  skillGroups.map((group, idx) => ({
    ...group,
    title: t(`skills.groups.${idx}`),
  }))
)

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.1 },
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<style lang="scss" scoped>
.skills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;

  > * {
    flex: 0 0 auto;
    width: calc(33% - 16px);
    max-width: calc(33% - 16px);

    @media (max-width: 991px) {
      width: calc(50% - 16px);
      max-width: calc(50% - 16px);
    }

    @media (max-width: 767px) {
      width: 100%;
      max-width: 100%;
    }
  }
}

.skill-card {
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.015);
  backdrop-filter: blur(6px);
  transition:
    border-color 0.4s ease,
    box-shadow 0.4s ease;
  height: 100%;

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  &__title {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.4);
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.03);
  font-size: 13px;
  line-height: 1.4;
  cursor: default;
  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  opacity: 0;
  transform: translateY(16px);

  &__icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    object-fit: contain;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px) scale(1.04);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.18);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    }
  }
}

.in-view {
  .skill-card {
    animation: fadeInUp 0.6s ease forwards;
    animation-delay: calc(var(--g) * 0.08s);
  }

  .skill-badge {
    animation-name: fadeInUp;
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: calc(var(--g) * 0.08s + var(--i) * 0.05s);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
