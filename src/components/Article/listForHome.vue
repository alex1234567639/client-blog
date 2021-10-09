<template>
  <div class="meta-deck">
    <div class="title">{{ articleInfo.title }}</div>
    <div class="article-box">
      <div class="card" v-for="item of articleInfo.articleList" :key="item.id">
        <div class="card-top">
          <img :src="item.photo" alt="">
        </div>
        <div class="card-bottom">
          <span class="title">{{ item.title }}</span>
          <div class="info">
            <span class="author">作者：{{ item.author_name }}</span>
            <span class="date">日期：{{ item.publish_date }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <router-link :to="articleInfo.link" class="more-btn">更多文章 >></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.meta-deck {
  padding: 1.67vw 0;

  & .title {
    @apply text-white;
    width: 70vw;
    margin: 0 auto 1vw;
    font-size: 1.56vw;
    letter-spacing: 1.5px;
  }

  & .article-box {
    @apply flex justify-between cursor-pointer;
    width: 70vw;
    height: 24vw;
    margin: 0 auto;
    :hover .card-bottom > .title {
      @apply underline;
    }

    & .card {
      width: 21.8vw;
      & .card-top {
        @apply flex items-center;
        height: 60%;
        background-color: #e6e6e6;
        & img {
          @apply w-full;
        }
      }
      & .card-bottom {
        @apply flex flex-col justify-between bg-white;
        height: 40%;
        padding: 0.5vw 0.8vw;
        & .title {
          @apply text-black font-bold overflow-hidden overflow-ellipsis;
          width: 20vw;
          font-size: 1.08vw;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        & .info {
          margin-left: 0.2vw;
          & span {
            @apply block overflow-hidden overflow-ellipsis whitespace-nowrap;
            width: 20vw;
            font-size: 0.95vw;
            color: #575757;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
  & .more {
    @apply text-right;
    width: 70vw;
    margin: 1vw auto 0;
    & .more-btn {
      @apply text-white cursor-pointer;
      padding: 0.5vw;
      font-size: 0.95vw;
      transition-duration: 300ms;
      &:hover {
        color: #6079ff;
      }
    }
  }
}
</style>
