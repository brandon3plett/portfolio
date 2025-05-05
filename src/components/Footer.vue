<script setup>
import BackToTop from './BackToTop.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'
import IconVue from './icons/IconVue.vue'
import IconEmail from './icons/IconEmail.vue'
import IconGitHub from './icons/IconGitHub.vue'
</script>

<template>
  <BackToTop />

  <footer class="footer">
    <ul class="social-media-icons">
      <li class="social-media-icon">
        <a
          href="https://www.linkedin.com/in/brandontriplett"
          class="linkedin-icon social-media-icon"
          target="_blank"
        >
          <IconLinkedIn />
        </a>
      </li>
      <li>
        <a
          href="mailto:brandon3plett@gmail.com"
          class="email-icon social-media-icon"
          target="_blank"
        >
          <IconEmail />
        </a>
      </li>
      <li>
        <a href="https://github.com/brandon3plett" class="social-media-icon" target="_blank">
          <IconGitHub />
        </a>
      </li>
    </ul>

    <p>&copy; Brandon Triplett <span id="footer-year"></span></p>

    <p>Built with Vue.js</p>

    <a href="https://vuejs.org" target="_blank" rel="noopener">
      <IconVue class="vue-logo" />
    </a>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
  padding: 32px;
  row-gap: 18px;

  .social-media-icons {
    display: flex;
    column-gap: 16px;
    list-style-type: none;
    align-items: flex-end;

    .social-media-icon {
      // vertical-align: baseline;

      svg,
      path {
        fill: #fff;
        transition: all 0.3s ease-in-out;

        &:hover {
          fill: aquamarine;
        }
      }

      svg {
        width: 32px;
      }
    }

    .email-icon {
      svg {
        vertical-align: bottom;
      }
    }
  }

  p {
    text-align: center;
    line-height: initial;
  }

  .vue-logo {
    width: 32px;
  }
}
</style>
