<template>
  <footer>
    <div class="container pb-30 pt-30 bord-thin-top">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <p class="fz-13">© {{ YEAR }} <span class="underline main-color"><a
                  href="https://github.com/denisoed" target="_blank">Denisoed</a></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const YEAR = new Date().getFullYear();
</script>
