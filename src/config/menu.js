module.exports = {
  menuList: [
    {
      name: '首頁',
      router: '/',
      show: false
    },
    { 
      name: '系列介紹',
      router: '/',
      show: false,
      subtype: [
        { name: '主題牌組', router: '/' },
        { name: '外掛系列', router: '/' }
      ]
    },
    { 
      name: '泛用卡介紹',
      router: '/',
      show: false,
      subtype: [
        { name: '單卡介紹', router: '/' },
        { name: '戰術分析', router: '/' }
      ]
    },
    { 
      name: '卡表資料',
      router: '/',
      show: false,
      subtype: [
        { name: 'RD', router: '/' },
        { name: '補充包', router: '/' },
        { name: '預組套牌', router: '/' },
        { name: '禮盒', router: '/' },
        { name: '活動贈品', router: '/' }
      ]
    },
    { 
      name: '上位卡表',
      router: '/',
      show: false
    },
    {
      name: '卡片故事',
      router: '/',
      show: false
    },
    { 
      name: '規則相關',
      router: '/',
      show: false,
      subtype: [
        { name: '判例', router: '/' },
        { name: '禁卡表', router: '/' }
      ]
    },
    { 
      name: '卡片查詢',
      router: '/',
      show: false
    },
    {
      name: '重要日程',
      router: '/',
      show: false
    }
  ]
}