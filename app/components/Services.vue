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
            <h3>What Services I Provide?</h3>
          </div>
        </div>
      </div>
      <div class="services-grid">
        <div
          v-for="(service, index) in SERVICES"
          :key="`service-${index}`"
          class="services-grid__item wow fadeIn"
          :data-wow-delay="service.delay"
        >
          <div class="services-card item">
            <div class="services-card__watermark">{{ service.step }}</div>
            <div class="cont">
              <div class="services-card__header">
                <div :class="['services-card__icon', service.iconClass]">
                  <img
                    :src="`https://cdn.simpleicons.org/${service.icon}`"
                    :alt="service.title"
                  />
                </div>
                <div class="services-card__step">{{ service.step }}</div>
              </div>
              <h4 class="services-card__title">{{ service.title }}</h4>
              <p class="services-card__desc">{{ service.desc }}</p>
              <div class="services-card__tags">
                <span
                  v-for="(tag, tIdx) in service.tags"
                  :key="tIdx"
                  class="services-card__tag"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services-cta wow fadeIn" data-wow-delay=".7s">
        <p class="services-cta__text">Have a project in mind?</p>
        <a
          href="https://t.me/denisoed"
          target="_blank"
          class="butn butn-md butn-bord"
        >
          Let's work together
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SERVICES } from "~~/data/services";
</script>

<style lang="scss" scoped>
.services {
  &-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }

    &__item {
      display: flex;
    }
  }

  &-card {
    height: 100%;
    min-height: 340px;
    position: relative;
    overflow: hidden;
    transition:
      transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    flex-direction: column;

    .cont {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(236, 28, 36, 0.15);

      .services-card__watermark {
        opacity: 0.08;
        transform: translateY(-5px);
      }

      .services-card__icon img {
        transform: scale(1.1) rotate(5deg);
      }
    }

    &__watermark {
      position: absolute;
      bottom: -10px;
      right: 15px;
      font-size: 120px;
      font-weight: 900;
      line-height: 1;
      color: #fff;
      opacity: 0.04;
      pointer-events: none;
      transition:
        opacity 0.4s ease,
        transform 0.4s ease;
      z-index: 0;
    }

    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
    }

    &__icon {
      flex-shrink: 0;
      margin-right: 20px;

      img {
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        filter: brightness(0) invert(1);
      }
    }

    &__step {
      font-size: 13px;
      opacity: 0.5;
      font-weight: 600;
      letter-spacing: 1px;
    }

    &__title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
      color: #fff;
    }

    &__desc {
      font-size: 14px;
      line-height: 1.7;
      opacity: 0.7;
      margin-bottom: 20px;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    &__tag {
      display: inline-block;
      padding: 4px 12px;
      font-size: 11px;
      font-weight: 500;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.06);
      color: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(236, 28, 36, 0.2);
        border-color: rgba(236, 28, 36, 0.4);
        color: #fff;
      }
    }
  }

  &-cta {
    text-align: center;
    margin-top: 60px;

    &__text {
      font-size: 18px;
      opacity: 0.7;
      margin-bottom: 20px;
    }

    .butn {
      border-radius: 30px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
  }
}
</style>
