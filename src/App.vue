<template>
  <div id="app" class="header-wrapper">

    <!-- navbar -->
    <div class="nav">
      <div class="nav-content">
        <img class="icon" src="@/assets/images/icon.png" alt="">
        <span class="name">Yu-Gi-Oh 部落格</span>
      </div>
    </div>

    <router-view class="router" />

    <!-- 漢堡btn -->
    <img v-if="!menuVisible" class="open-ham-btn" src="./assets/images/hamburger_open.png" alt="" @click="showMenu(true)">
    <img v-if="menuVisible" class="close-ham-btn" src="./assets/images/hamburger_close.png" alt="" @click="showMenu(false)">

    <!-- 側邊欄選單 -->
    <div class="menu" v-show="menuVisible">
      <div class="menu-box">
        <div v-for="(item, index) of menuList" :key="index">

          <!--無子類別-->
          <div v-if="!item.subtype" class="type">
            <router-link class="type-item" :to="item.router">
              {{ item.name }}
            </router-link>
          </div>

          <!--有子類別-->
          <div v-else class="type" @click="showSubtype(index)">
            <div class="type-item">
              {{ item.name }}
              <img class="arrow" :class="{ 'rotate': item.show }" src="./assets/images/arrow.png" alt="">
            </div>
          </div>
          <transition name="fade">
            <div v-if="item.subtype && item.show" :class="{ 'rotate': item.show }">
              <div class="subtype" v-for="(sub, subIndex) of item.subtype" :key="subIndex">
                <router-link class="subtype-item" :to="sub.router">{{ sub.name }}</router-link>
              </div>
            </div>
          </transition>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuList } from './config/menu'

export default {
  data() {
    return {
      menuList,
      menuVisible: false
    }
  },
  mounted() {
    console.log(this.menuList)
  },
  methods: {
    showMenu(boolean) {
      this.menuVisible = boolean
    },
    showSubtype(index) {
      this.menuList[index].show = !this.menuList[index].show
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>

// fade 動畫 start
.fade-leave, .fade-enter-to {
  opacity: 1;
}
.fade-leave-active, .fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave-to, .fade-enter {
  opacity: 0;
}
// fade 動畫 end

.header-wrapper {
  @apply w-full z-40;
  background-color: #2B2B2B;

  & .nav {
    @apply fixed top-0 left-0 w-full z-10 bg-black;
    & .nav-content {
      @apply flex justify-center items-center text-white;
      height: 4vw;
      & .icon {
        width: 5.4vw;
        margin-right: 0.88vw;
      }
      & .name {
        font-size: 1.2vw;
      }
    }
  }

  & .open-ham-btn {
    @apply fixed cursor-pointer z-10;
    left: 1.4vw;
    top: 1.4vw;
    width: 1.6vw;
  }
  & .close-ham-btn {
    @apply fixed cursor-pointer z-10;
    left: 15.4vw;
    top: 1.4vw;
    width: 1.6vw;
  }

  & .menu {
    @apply fixed z-50;
    left: 0;
    top: 0;
    & .menu-box {
      @apply flex flex-col justify-items-start text-white;
      width: 14vw;
      height: 100vh;
      background-color: #1F2C5D;
      overflow-y: auto;
      padding-bottom: 100px;
      & .type {
        @apply cursor-pointer;
        width: 80%;
        font-size: 1vw;
        border-bottom: 1px solid rgba(201,201,201,0.2);
        margin-left: 10%;
        transition-duration: 500ms;
        &:hover {
          border-bottom: 1px solid #ffffff;
        }
        & .type-item {
          @apply block text-white no-underline;
          padding: 1.35vw 0 0.52vw 0;
          & .arrow {
            @apply inline-block float-right;
            width: 1vw;
            margin: 0.48vw 0.5vw 0 0;
            transform: rotate(-90deg);
            transition: .3s;
          }
          & .rotate {
            transform: rotate(0deg);
          }
        }
      }
      & .subtype {
        @apply cursor-pointer;
        width: 55%;
        font-size: 1vw;
        border-bottom: 1px solid rgba(201,201,201,0.2);
        margin-left: 30%;
        transition-duration: 500ms;
        &:hover {
          border-bottom: 1px solid #ffffff;
        }
        &:hover .subtype-item {
          @apply text-white;
        }
        & .subtype-item {
          @apply block no-underline;
          padding: 1vw 0 0.4vw 0;
          color: rgba(201,201,201,0.2);
          transition-duration: 500ms;
        }
      }
    }
  }
}
</style>
