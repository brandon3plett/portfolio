<script setup>
import IconNewTab from '../icons/IconNewTab.vue'

const props = defineProps({
  expTitle: String,
  workLink: String,
  workTitle: String,
  expStart: String,
  expEnd: String,
})
</script>

<template>
  <div class="work-exp-title-date-wrapper">
    <div class="work-exp">
      <p class="exp-title">{{ props.expTitle }}</p>

      <a class="work-title" :href="props.workLink" target="_blank" rel="noopener"
        >{{ props.workTitle }} <IconNewTab class="new-tab"
      /></a>
    </div>

    <p>{{ props.expStart }} &mdash; {{ props.expEnd }}</p>
  </div>
</template>

<style scoped lang="scss">
.work-exp-title-date-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    // margin-bottom: 39px;
  }

  .exp-title {
    font-size: 22px;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 9px;
  }

  .work-title {
    font-weight: 600;
    margin-bottom: 18px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .new-tab {
    width: 14px;
    margin-left: 1px;
    vertical-align: baseline;
  }
}
</style>
