<template>
  <div v-if="showLoader" class="loader-wrap">
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
    </svg>

    <div class="loader-wrap-heading">
      <div class="load-text">
        <span v-for="(letter, i) in loadingLetters" :key="i">{{ letter }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const loadingLetters = t("misc.loading").split("");

const loaderDone = useState("loaderDone", () => false);
const showLoader = computed(() => !loaderDone.value);

onMounted(() => {
  setTimeout(() => {
    loaderDone.value = true;
  }, 4000);
});
</script>
