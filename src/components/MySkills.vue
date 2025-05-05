<script setup>
import IconHtml from './icons/IconHtml.vue'
import IconCSS from './icons/IconCSS.vue'
import IconJavaScript from './icons/IconJavaScript.vue'
import IconWordPress from './icons/IconWordPress.vue'
import IconPHP from './icons/IconPHP.vue'
import IconMySQL from './icons/IconMySQL.vue'
import IconGit from './icons/IconGit.vue'
import IconGitHub from './icons/IconGitHub.vue'
import IconVue from './icons/IconVue.vue'
import IconGulp from './icons/IconGulp.vue'
import IconSass from './icons/IconSass.vue'
import IconNode from './icons/IconNode.vue'
</script>

<template>
  <div id="skills" class="portfolio-section">
    <h2 class="portfolio-section-title">04. My Skills</h2>

    <div class="skills-grid">
      <div class="skill-wrapper">
        <IconHtml class="skill" title="HTML" />
        <p>HTML5</p>
      </div>

      <div class="skill-wrapper">
        <IconCSS class="skill" />
        <p>CSS3</p>
      </div>

      <div class="skill-wrapper">
        <IconJavaScript class="skill" />
        <p>JavaScript</p>
      </div>

      <div class="skill-wrapper">
        <IconWordPress class="skill" />
        <p>WordPress</p>
      </div>

      <div class="skill-wrapper">
        <IconPHP class="skill" />
        <p>PHP</p>
      </div>

      <div class="skill-wrapper">
        <IconMySQL class="skill" />
        <p>MySQL</p>
      </div>

      <div class="skill-wrapper">
        <IconGit class="skill" />
        <p>Git</p>
      </div>

      <div class="skill-wrapper">
        <IconGitHub class="skill" />
        <p>GitHub</p>
      </div>

      <div class="skill-wrapper">
        <IconVue class="skill" />
        <p>Vue</p>
      </div>

      <div class="skill-wrapper">
        <IconGulp class="skill" />
        <p>Gulp</p>
      </div>

      <div class="skill-wrapper">
        <IconSass class="skill" />
        <p>SASS</p>
      </div>

      <div class="skill-wrapper">
        <IconNode class="skill" />
        <p>Node</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills-grid {
  display: flex;
  flex-flow: row wrap;
  gap: 39px;

  .skill-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 6px;

    svg {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
