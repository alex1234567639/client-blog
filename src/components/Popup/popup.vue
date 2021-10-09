<template>
  <transition name="fade">
    <div class="popup" v-if="show">
      <div class="bg"></div>

      <!--訊息-->
      <div class="pop-up-box" v-if="type === 'msg' || type === 'reload'">
        <!--背景-->
        <img class="pop-up-bg" src="../../assets/images/pop_up.png" alt="">
        <img class="cross" @click="cancel" src="../../assets/images/close.png" alt="">
        <!--content-->
        <div class="content">
          <span v-html="msg"></span>
        </div>
      </div>

      <!-- 圖片 -->
      <div class="popup-photo" v-if="type === 'photo'" @click="cancel">
        <img :src="require('../../assets/images/' + content)" alt="">
        <img class="cross" @click="cancel" src="../../assets/images/close.png" alt="">
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      content: '',
      type: '',
      show: false
    }
  },
  computed: {
    msg() {
      return this.content
    },
  },
  methods: {
    cancel() {
      if (this.type === 'reload') {
        this.show = false
        location.reload()
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  @apply fixed z-50 top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center;
  & .bg {
    @apply fixed top-0 bottom-0 left-0 right-0 w-full h-full;
    background-color: rgba(0, 0, 0, 0.8);
  }
  & .pop-up-box {
    @apply relative;
    & .pop-up-bg {
      width: 700px;
    }
    & .cross {
      @apply absolute cursor-pointer;
      top: -6.17px;
      right: -10.71px;
      width: 93.33px;
    }
    & .content {
      @apply absolute text-center text-white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 78%;
      & span {
        @apply font-bold;
        font-size: 30px;
        line-height: 1.5;
      }
    }
  }
  & .popup-photo {
    @apply relative z-50;
    margin-bottom: 10vw;
    width: 600px;
    & .cross {
      @apply absolute cursor-pointer;
      top: -5px;
      right: -5px;
      width: 50px;
    }
  }
}
@media (max-width: 768px) {
  .popup {
    & .pop-up-box {
      @apply relative;
      margin-bottom: 30vw;
      & .pop-up-bg {
        width: 480px;
      }
      & .cross {
        @apply absolute cursor-pointer;
        top: -4.24px;
        right: -7.34px;
        width: 63.99px;
      }
      & .content {
        & span {
          font-size: 1.7rem;
          line-height: 1.3;
        }
      }
    }
    & .popup-photo {
      margin-bottom: 30vw;
      width: 400px;
      & .cross {
        top: -6px;
        right: -6px;
        width: 40px;
      }
    }
  }
}
@media (max-width: 480px) {
  .popup {
    & .pop-up-box {
      & .pop-up-bg {
        width: 340px;
      }
      & .cross {
        @apply absolute cursor-pointer;
        top: -3px;
        right: -5.2px;
        width: 45.33px;
      }
      & .content {
        & span {
          font-size: 1.6rem;
        }
      }
    }
    & .popup-photo {
      margin-bottom: 30vw;
      width: 80%;
      & .cross {
        top: -4px;
        right: -4px;
        width: 30px;
      }
    }
  }
}
@media (max-width: 350px) {
  .popup {
    & .pop-up-box {
      & .pop-up-bg {
        width: 280px;
      }
      & .cross {
        @apply absolute cursor-pointer;
        top: -2.47px;
        right: -4.28px;
        width: 37.33px;
      }
      & .content {
        & span {
          font-size: 1.2rem;
        }
      }
    }
    & .popup-photo {
      margin-bottom: 30vw;
      width: 80%;
      & .cross {
        top: -4px;
        right: -4px;
        width: 25px;
      }
    }
  }
}
// 過渡效果
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@media (min-width: 1921px) {
  .popup {
    & .pop-up-box {
      & .content {
        & span {
          font-size: 1.5vw;
        }
      }
    }
    & .popup-photo {
      width: 31.5vw;
      &  img{
        @apply m-auto w-full;
      }
      & .cross{
        width: 1.55vw;
        right: -1vw;
      }
    }
  }
}
</style>