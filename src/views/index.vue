<template>
  <div class="home-page-wrapper">
    <Carousel />
    <SeriesIntroduction />
    <Footer />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/index'
import SeriesIntroduction from '@/components/SeriesIntroduction/homePage'
import Footer from '@/components/Footer/index'

export default {
  components: {
    Carousel,
    SeriesIntroduction,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.home-page-wrapper {
  background-color: #2B2B2B;
}
</style>
