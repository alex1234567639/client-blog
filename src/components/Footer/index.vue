<template>
    <div class="footer-wrapper">
        <div class="line"></div>
        <div class="text">Yu-Gi-Oh 部落格</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  @apply relative w-full bg-black text-white;
  height: 8vw;
  .line {
    @apply absolute;
    top: 4vw;
    left: 5%;
    width: 90%;
    height: 1px;
    background-color: lightgray;
  }
  .text {
    @apply absolute text-center bg-black;
    top: 4vw;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    padding: 0 3vw;
  }
}
</style>
