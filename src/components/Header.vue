<script setup>
import Navigation from './Navigation.vue'
</script>

<template>
  <header id="header" class="header">
    <h1 class="main-title">Brandon Triplett</h1>

    <p class="main-subtitle">Web Developer</p>

    <Navigation />
  </header>
</template>

<style scoped lang="scss">
.header {
  .main-title {
    font-size: 36px;
    margin-bottom: 12px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 50px;
      text-align: left;
    }
  }

  .main-subtitle {
    font-size: 22px;
    margin-bottom: 48px;
    text-align: center;
    font-weight: 700;
    line-height: initial;

    @media (min-width: 768px) {
      font-size: 24px;
      text-align: left;
    }
  }
}
</style>
