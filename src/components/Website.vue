<script setup>
import IconNewTab from './icons/IconNewTab.vue'

const props = defineProps({
  title: String,
  href: String,
  imgSrc: String,
  imgAlt: String,
  panel: String,
})
</script>

<template>
  <a :href="props.href" target="_blank" rel="noopener">
    <div class="overlay-wrapper">
      <img :src="props.imgSrc" :alt="props.imgAlt" />

      <div class="overlay">
        <p>Go to site</p>
        <IconNewTab />
      </div>
    </div>
  </a>

  <h4 id="website-title-accordion" class="website-title-accordion">{{ props.title }}</h4>

  <div class="panel">
    <p>{{ props.panel }}</p>
  </div>
</template>

<style lang="scss">
.website-wrapper {
  width: 100%;

  @media (min-width: 768px) {
    max-width: 355px;
  }

  a {
    display: inline-block;
  }

  img {
    width: 100%;

    @media (min-width: 768px) {
      max-width: 400px;
    }
  }
}

.overlay-wrapper {
  position: relative;

  .overlay {
    display: flex;
    column-gap: 9px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 10px 30px;
    inset: 0;
    opacity: 0;
    content: '';
    background-color: rgba(0, 0, 0, 0.9);
    width: inherit;
    transition: all 0.3s ease-in-out;

    p {
      font-size: 14px;
      margin: 0;
    }

    svg {
      width: 18px;
    }
  }

  @media (min-width: 1024px) {
    &:hover .overlay {
      opacity: 1;
      cursor: pointer;
      box-shadow: rgb(127, 255, 212) 0px 0px 11px 7px;
    }
  }
}

.website-title-accordion {
  display: flex;
  flex-direction: row;
  margin-block: 22px;
  position: relative;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    right: -22px;
    bottom: 5px;
    border-top: solid 7px #fff;
    border-left: solid 7px transparent;
    border-right: solid 7px transparent;
    transition: all 0.2s ease-in-out;
  }
}

.website-title-accordion.active::after {
  transform: rotate(180deg);
  border-top-color: aquamarine;
}

.panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: all 0.3s ease-in-out;

  p {
    overflow-y: hidden;
    margin-bottom: 22px;
  }
}
</style>
