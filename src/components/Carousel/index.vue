<template>
  <div class="carousel-wrapper">
    <!-- 輪播圖片 -->
    <transition-group tag="div" class="banner-container" :name="transitionName">
      <div class="banner" v-for="(item, index) of banner" :key="index" v-show="index === srcIndex">
        <img :src="item.src" alt="">
      </div>
    </transition-group>

    <!-- 輪播控制鈕 -->
    <div class="slide-control">
      <div class="control-btn" v-for="num of banner.length" :key="num-1" @click="changeBanner(num-1)">
        <img v-if="srcIndex === num-1" src="../../assets/images/dot_yellow.png" alt="">
        <img v-else src="../../assets/images/dot_white.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'right-in',
      srcIndex: 0,
      isClick: true,
      banner: [
        { src: require('@/assets/images/banner_01.jpeg') },
        { src: require('@/assets/images/banner_02.jpeg') }
      ],
    }
  },
  methods: {
    changeBanner(index) {
      // 防止連續點擊
      if (this.isClick) {
        this.isClick = false
        this.srcIndex = index
        const vm = this
        setTimeout(function () {
          vm.isClick = true
        }, 300)
      }
    }
  },
  watch: {
    srcIndex(newIndex, oldIndex) {
      if (newIndex < 0) {
        this.srcIndex = this.banner.length - 1
      } else if (newIndex  > this.banner.length - 1) {
        this.srcIndex = 0
      } else {
        if (oldIndex < 0) this.transitionName = 'left-in'
        else if (oldIndex > this.banner.length - 1) this.transitionName = 'right-in'
        else this.transitionName = newIndex > oldIndex ? 'right-in' : 'left-in'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  @apply relative w-full overflow-hidden;
  height: 33vw;

  & .banner-container {
    @apply relative mx-auto my-0 object-center object-cover;
    & .banner {
      @apply absolute w-full;
      & img {
        @apply w-full;
      }
    }
  }

  & .slide-control {
    @apply absolute w-full text-center;
    top: 30vw;
    & .control-btn {
      @apply inline-block cursor-pointer;
      width: 1.56vw;
      margin: 0 0.5vw;
    }
  }
}

// 向左輪播
.right-in-enter {
  left: 100%;
}
.right-in-enter-active, .right-in-leave-active {
  transition: left 0.3s;
}
.right-in-enter-to, .right-in-leave {
  left: 0;
}
.right-in-leave-to {
  left: -100%;
}
// 向右輪播
.left-in-enter {
  left: -100%;
}
.left-in-enter-active, .left-in-leave-active {
  transition: left 0.3s;
}
.left-in-enter-to, .left-in-leave {
  left: 0;
}
.left-in-leave-to {
  left: 100%;
}
</style>