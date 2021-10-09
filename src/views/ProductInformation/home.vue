<template>
  <div>
    <ListForHome :article-info="articleInfo" />
  </div>
</template>

<script>
import ListForHome from '../../components/Article/listForHome'

export default {
  components: {
    ListForHome
  },
  data() {
    return {
      articleInfo: {
        title: '卡表資料',
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
        ],
        link: '/productionInformation'
      }
    }
  }
}
</script>
