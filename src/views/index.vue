<template>
  <div class="home-page-wrapper">
    <Carousel />
    <MetaDeck />
    <SeriesIntroduction />
    <ProductionInformation />
    <Footer />
  </div>
</template>

<script>
import Carousel from '../components/Carousel/index'
import MetaDeck from '../components/MetaDeck/homePage'
import SeriesIntroduction from '../components/SeriesIntroduction/homePage'
import ProductionInformation from '../components/ProductInformation/homePage'
import Footer from '../components/Footer/index'

export default {
  components: {
    Carousel,
    MetaDeck,
    SeriesIntroduction,
    ProductionInformation,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.home-page-wrapper {
  background-color: #2B2B2B;
}
</style>
