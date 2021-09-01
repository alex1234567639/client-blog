<template>
  <div id="app" class="header-wrapper" :class="{'is-open-ham': menuVisible}">

    <!-- navbar -->
    <div class="nav">
      <img class="icon" src="@/assets/images/icon.png" alt="">
      <span class="name">Yu-Gi-Oh 部落格</span>
    </div>

    <router-view class="router" />

    <!-- 漢堡btn -->
    <img v-if="!menuVisible" class="ham-btn" src="@/assets/images/hamburger_open.png" alt="" @click="showMenu(true)">
    <img v-if="menuVisible" class="ham-btn" src="@/assets/images/hamburger_close.png" alt="" @click="showMenu(false)">

    <!-- 側邊欄選單 -->
    <div class="menu" v-show="menuVisible">
      <div class="menu-box">
        <div class="type">
          <router-link class="type-item" to="/">首頁</router-link>
        </div>
        <div class="type">
          <router-link class="type-item" to="/">系列介紹</router-link>
        </div>
        <span>
          <div class="subtype">
            <router-link class="subtype-item" to="/">主題牌組</router-link>
          </div>
          <div class="subtype">
            <router-link class="subtype-item" to="/">外掛系列</router-link>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            menuVisible: false
        }
    },
    methods: {
        showMenu(boolean) {
          this.menuVisible = boolean
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
.is-open-ham {
  width: calc(100% - 14vw) !important;
}
.header-wrapper {
  @apply fixed w-full z-40;
  right: 0;
  height: 4vw;
  background-color: #2B2B2B;

  & .nav {
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

  & .ham-btn {
    @apply absolute cursor-pointer;
    left: 1vw;
    top: 1.2vw;
    width: 2vw;
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
