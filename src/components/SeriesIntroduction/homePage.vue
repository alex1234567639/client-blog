<template>
  <div class="series-introduction">
    <div class="title">系列介紹</div>
    <div class="article-box">
      <div class="card" v-for="item of articleList" :key="item.id">
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
      <span>更多文章 >></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [
        {
          id: 1001,
          author_name: '台北閃刀王',
          title: '[基礎介紹] 閃刀姬牌組介紹 (閃刀/閃刀姫/Sky Striker) 稱霸賽場連續兩年的傳奇',
          photo: require('../../assets/images/card_cover_01.jpg'),
          publish_date: '2021/09/09'
        },
        {
          id: 1002,
          author_name: '台北閃刀王',
          title: '[基礎介紹] 閃刀姬牌組介紹 (閃刀/閃刀姫/Sky Striker)',
          photo: require('../../assets/images/card_cover_02.jpg'),
          publish_date: '2021/09/09'
        },
        {
          id: 1003,
          author_name: '台北閃刀王',
          title: '[基礎介紹] 閃刀姬牌組介紹 (閃刀/閃刀姫/Sky Striker)',
          photo: require('../../assets/images/card_cover_01.jpg'),
          publish_date: '2021/09/09'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.series-introduction {
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
    & span {
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
