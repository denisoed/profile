<template>
  <button
    id="burger-btn"
    type="button"
    aria-label="Toggle navigation"
    :class="{ open: opened }"
    @click="toggle"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const opened = ref(false);
function toggle() {
  opened.value = !opened.value
}
</script>

<style lang="scss" scoped>
#burger-btn {
  width: 20px;
  height: 16px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  background: none;
  box-shadow: none;
  border: none;

  span {
    height: 3px;
    width: 100%;
    display: block;
    position: absolute;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 6px;
    }
    
    &:nth-child(4) {
      top: 12px;
    }
  }

  &.open span {
    &:nth-child(1) {
      top: 6px;
      width: 0%;
      left: 50%;
    }
  
    &:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    
    &:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    
    &:nth-child(4) {
      top: 6px;
      width: 0%;
      left: 50%;
    }
  } 
}
</style>
