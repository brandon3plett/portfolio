<script setup>
import BackToTopIcon from './icons/IconBackToTop.vue'
</script>

<template>
  <button id="back-to-top" class="back-to-top" aria-label="Back to top">
    <BackToTopIcon />
  </button>
</template>

<style scoped lang="scss">
.back-to-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  border: solid 2px #fff;

  svg {
    fill: #000;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 1024px) {
    &:hover {
      background-color: aquamarine;
      border-color: aquamarine;

      svg {
        fill: #000;
      }
    }
  }
}
</style>
