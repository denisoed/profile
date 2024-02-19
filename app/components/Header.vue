<template>
  <nav class="navbar navbar-chang navbar-expand-lg">
    <div class="container position-re">
      <div class="row">
        <div class="col-lg-3 col-6 order1">
          <div class="bord">
            <!-- Logo -->
            <a class="logo icon-img-70" href="#">
              Denisoed
            </a>
          </div>
        </div>
        <div class="col-lg-6 order3">
          <div class="bg">
            <!-- navbar links -->
            <div class="full-width">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#home" data-scroll-nav="0"><span class="rolling-text">Home</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services" data-scroll-nav="1"><span class="rolling-text">Services</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#experience" data-scroll-nav="2"><span class="rolling-text">Experiences</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 order2">
          <div class="bord d-flex justify-content-end">
            <ul class="social d-flex rest">
              <li>
                <a href="http://linkedin.com/in/denis-grushkin-161b31166" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/denisoed" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://medium.com/@denisoed" target="_blank">
                  <i class="fab fa-medium"></i>
                </a>
              </li>
            </ul>
            <button class="navbar-toggler" type="button">
              <span class="icon-bar"><i class="fas fa-bars"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const LINKS = [
  {
    name: 'Home',
    link: '#banner',
  },
  {
    name: 'About',
    link: '#about',
  },
]
</script>

<style lang="scss" scoped>
.navbar {
  .logo {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
}
</style>