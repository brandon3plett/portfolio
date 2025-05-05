<script setup></script>

<template>
  <div id="history" class="history-section portfolio-section">
    <h2 class="portfolio-section-title">01. My History</h2>

    <p>
      My journey into the world of web development began back in the early 2000's, during the days
      of <a href="https://www.angelfire.lycos.com" target="_blank" rel="noopener">Angelfire</a> and
      <a href="https://en.wikipedia.org/wiki/GeoCities" target="_blank" rel="noopener">Geocities</a>
      (yeah, THAT long ago). I would dabble with creating sites with just HTML, CSS and drag and
      drop. Many years later I would find myself customizing MySpace accounts with just HTML and
      inline CSS. In 2018, I would come back to what I loved by enrolling in a 6 month coding
      bootcamp at
      <a href="https://case.edu/" target="_blank" rel="noopener">Case Western Reserve</a> located in
      Cleveland, OH under the Trilogy Education program (now
      <a href="https://2u.com/" target="_blank" rel="noopener">2U</a>).
    </p>

    <p>
      Upon graduation from Trilogy Education's coding bootcamp, I was immediately brought on as a
      teaching assistant for the next two bootcamps. And from there I had the pleasure of being able
      to help out those who wanted to pursue a career in the tech industry. I've also had the chance
      to work for many different agencies along my own path and have substantially grown as a
      developer within the six years I've been in the field.
    </p>
  </div>
</template>

<style scoped lang="scss">
.history-section {
  p {
    margin-bottom: 22px;
  }

  a {
    color: aquamarine;
    background-image: linear-gradient(90deg, #fff);
    background-size: 0% 0.5px;
    background-repeat: no-repeat;
    background-position: left bottom;
    display: inline;
    transition: all 500ms ease;
    padding-bottom: 2px;

    @media (min-width: 1024px) {
      &:hover {
        background-size: 100% 0.5px;
        color: #fff;
      }
    }
  }
}
</style>
