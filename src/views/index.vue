<template>
  <div class="home-page-wrapper">
    <Carousel />
    <MetaDeck />
    <SeriesIntroduction />
    <ProductionInformation />
    <div class="btn1" @click="testPopUp">測試按鈕1</div>
    <div class="btn2">測試按鈕2</div>
    <Footer />
  </div>
</template>

<script>
import Carousel from '../components/Carousel/index'
import MetaDeck from './MetaDeck/home'
import SeriesIntroduction from './SeriesIntroduction/home'
import ProductionInformation from './ProductInformation/home'
import Footer from '../components/Footer/index'

export default {
  components: {
    Carousel,
    MetaDeck,
    SeriesIntroduction,
    ProductionInformation,
    Footer
  },
  methods: {
    testPopUp() {
      this.$popup('測試按鈕1', 'msg')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';

.home-page-wrapper {
  background-color: #2B2B2B;
}
.btn1 {
  @include btn;
}
.btn2 {
  @include btn(2vw, #ffffff, gray);
}
</style>
