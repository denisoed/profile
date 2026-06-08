<template>
  <nav class="navbar navbar-chang navbar-expand-lg">
    <div class="container position-re">
      <div class="row">
        <div class="col-lg-3 col-6 order1">
          <div class="bord">
            <!-- Logo -->
            <a class="logo" href="#"> Denisoed </a>
          </div>
        </div>
        <div class="col-lg-6 order3">
          <div class="bg">
            <!-- navbar links -->
            <div class="full-width">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#home" data-scroll-nav="0"
                    ><span class="rolling-text">{{ $t('nav.home') }}</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services" data-scroll-nav="1"
                    ><span class="rolling-text">{{ $t('nav.services') }}</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#experience" data-scroll-nav="2"
                    ><span class="rolling-text">{{ $t('nav.experiences') }}</span></a
                  >
                </li>
              </ul>
              <SocialLinks class="mobile-social-links ml-10 mt-10" />
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 order2">
          <div class="bord d-flex justify-content-end align-items-center">
            <SocialLinks class="desktop-social-links" />
            <button class="lang-switcher" @click="toggleLocale">{{ locale === 'en' ? 'EN' : 'RU' }}</button>
            <BurgerBtn class="navbar-toggler" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'ru' : 'en')
}
</script>

<style lang="scss" scoped>
.navbar {
  .logo {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  .mobile-social-links {
    display: none !important;

    @media screen and (max-width: 992px) {
      display: flex !important;
    }
  }

  .bord {
    @media screen and (max-width: 420px) {
      padding: 8px 15px;
    }
  }

  .navbar-toggler {
    margin-left: 10px;
  }

  .lang-switcher {
    color: #fff;
    font-weight: 600;
    font-size: 13px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 4px 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-left: 10px;

    &:hover {
      background: rgba(236, 28, 36, 0.2);
      border-color: rgba(236, 28, 36, 0.4);
    }
  }

  .desktop-social-links {
    @media screen and (max-width: 1200px) {
      :deep(li) {
        width: 25px;
        height: 25px;

        i {
          font-size: 14px;
        }
      }
    }

    @media screen and (max-width: 992px) {
      display: none !important;
    }
  }
}
</style>
