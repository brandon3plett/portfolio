<script setup></script>

<template>
  <nav class="navigation">
    <ul class="portfolio-links">
      <li>
        <a href="#history">History</a>
      </li>

      <li>
        <a href="#career">Career</a>
      </li>

      <li>
        <a href="#work">Work</a>
      </li>

      <li>
        <a href="#skills">Skills</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.portfolio-links {
  display: flex;
  column-gap: 40px;
  width: fit-content;
  margin-inline: auto;
  margin-bottom: 50px;
  list-style-type: none;

  @media (min-width: 768px) {
    margin-inline: unset;
  }

  a {
    background-image: linear-gradient(90deg, aquamarine);
    background-size: 0% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: all 500ms ease;
    font-size: 14px;
    text-decoration: none;
    padding-bottom: 6px;

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      &:hover {
        background-size: 100% 3px;
        color: aquamarine;
      }
    }
  }
}
</style>
