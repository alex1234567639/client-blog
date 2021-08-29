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
    position: relative;
    width: 100%;
    height: 8vw;
    background-color: #000000;
    color: #ffffff;
    .line {
        position: absolute;
        width: 90%;
        height: 1px;
        background-color: lightgray;
        top: 4vw;
        left: 5%;
    }
    .text {
        position: absolute;
        top: 4vw;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        padding: 0 3vw;
        text-align: center;
        background-color: #000000;
    }
} 
</style>
