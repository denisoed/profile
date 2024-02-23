<template>
  <ul class="social-links d-flex align-items-center rest">
    <li>
      <a href="https://telegram.me/denisoed" target="_blank" aria-label="Telegram link">
        <i class="fab fa-telegram"></i>
      </a>
    </li>
    <li>
      <a href="http://linkedin.com/in/denis-grushkin-161b31166" target="_blank" aria-label="Linkedin link">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </li>
    <li>
      <a href="https://github.com/denisoed" target="_blank" aria-label="Github link">
        <i class="fab fa-github"></i>
      </a>
    </li>
    <li>
      <a href="https://medium.com/@denisoed" target="_blank" aria-label="Medium link">
        <i class="fab fa-medium"></i>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.social-links {
  gap: 15px;

  li {
    width: 35px;
    height: 35px;

    a {
      width: 100%;
      height: 100%;
      position: relative;
      line-height: 40px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.22);
      border-radius: 50%;
  
      i {
        font-size: 18px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>