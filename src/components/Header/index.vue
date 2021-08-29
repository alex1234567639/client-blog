<template>
    <div class="header-wrapper">
        <!-- navbar -->
        <div class="nav">
            <img class="icon" src="@/assets/images/icon.png" alt="">
            <span class="name">Yu-Gi-Oh 部落格</span>
        </div>

        <!-- 漢堡btn -->
        <img class="open-btn" src="@/assets/images/hamburger_open.png" alt="" @click="showMenu">

        <!-- 側邊欄選單 -->
        <div class="menu" v-show="menuVisible">
            <div class="menu-box">
                <div class="type">
                    <router-link class="type-item" to="/">首頁</router-link>
                </div>
                <div class="type">
                    <router-link class="type-item" to="/">系列介紹</router-link>
                    <div class="subtype">
                        <router-link class="subtype-item" to="/">主題牌組</router-link>
                        <router-link class="subtype-item" to="/">外掛系列</router-link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuVisible: true
        }
    },
    methods: {
        showMenu() {

        }
    }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
    position: fixed;
    right: 0;
    // width: 100%;
    width: calc(100% - 10.93vw);
    height: 4vw;
    z-index: 40;
    background-color: #2B2B2B;

    & .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4vw;
        color: #ffffff;
        & .icon {
            width: 6vw;
            margin-right: 0.88vw;
        }
        & .name {
            font-size: 1.2vw;
        }
    }

    & .open-btn {
        cursor: pointer;
        position: absolute;
        left: 1vw;
        top: 1.2vw;
        width: 2vw;
    }

    & .menu {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 50;
        & .menu-box {
            display: flex;
            flex-direction: column;
            justify-items: start;
            width: 10.93vw;
            height: 100vh;
            background-color: #1F2C5D;
            color: #ffffff;
            overflow-y: auto;
            & .type {
                & .subtype {

                }
            }
        }
    }
}
</style>
