import Vue from 'vue'
import Router from 'vue-router'

const index = r => require(['@/pages/index/index'], r)
const hotel = r => require(['@/pages/hotel/hotel'], r)
const hotelDetail = r => require(['@/pages/hotel/hotelDetail/hotelDetail'], r)
const teamMeeting = r => require(['@/pages/teamMeeting/teamMeeting'], r)
const enter = r => require(['@/pages/enter/enter'], r)
const my = r => require(['@/pages/my/my'], r)
const hotelOrder = r => require(['@/pages/hotel/hotelOrder/hotelOrder'], r)
const payOrder = r => require(['@/pages/hotel/payOrder/payOrder'], r)
const hotelSearch = r => require(['@/pages/hotel/hotelSearch/hotelSearch'], r)
const hotelSelect = r => require(['@/pages/hotel/hotelSelect/hotelSelect'], r)
const cash = r => require(['@/pages/my/cash/cash'], r)
const hotelEnter = r => require(['@/pages/enter/hotelEnter/hotelEnter'], r)
const agantEnter = r => require(['@/pages/enter/agantEnter/agantEnter'], r)
const cashDetail = r => require(['@/pages/my/cashDetail/cashDetail'], r)
const feedBack = r => require(['@/pages/my/feedBack/feedBack'], r)
const custom = r => require(['@/pages/my/custom/custom'], r)
const collection = r => require(['@/pages/my/collection/collection'], r)
const roomEnter = r => require(['@/pages/my/roomEnter/roomEnter'], r)
const meettingSend = r => require(['@/pages/my/meettingSend/meettingSend'], r)
const clockSend = r => require(['@/pages/my/clockSend/clockSend'], r)
const teamSend = r => require(['@/pages/my/teamSend/teamSend'], r)
const roomSend = r => require(['@/pages/my/roomSend/roomSend'], r)
const agantDetailt = r => require(['@/pages/my/agantDetailt/agantDetailt'], r)
const order = r => require(['@/pages/my/order/order'], r)
const orderPay = r => require(['@/pages/my/orderPay/orderPay'], r)
const myagantEnter = r => require(['@/pages/my/myagantEnter/myagantEnter'], r)
const agantIncome = r => require(['@/pages/my/agantIncome/agantIncome'], r)
const agantHistory = r => require(['@/pages/my/agantHistory/agantHistory'], r)
const payMethods = r => require(['@/pages/my/payMethods/payMethods'], r)
const login = r => require(['@/pages/enter/login/login'], r)
const hotelManage = r => require(['@/pages/enter/hotelManage/hotelManage'], r)
const orderManage = r => require(['@/pages/enter/orderManage/orderManage'], r)
const resetPassword = r => require(['@/pages/enter/resetPassword/resetPassword'], r)
const incomeDetail = r => require(['@/pages/enter/incomeDetail/incomeDetail'], r)
const onlineMessage = r => require(['@/pages/enter/onlineMessage/onlineMessage'], r)
const orderDeal = r => require(['@/pages/enter/orderDeal/orderDeal'], r)
const cashStatus = r => require(['@/pages/enter/cashStatus/cashStatus'], r)
const incomeList = r => require(['@/pages/enter/incomeList/incomeList'], r)
const orderStatus = r => require(['@/pages/enter/orderStatus/orderStatus'], r)
const mealDetail = r => require(['@/pages/enter/mealDetail/mealDetail'], r)
const foodManage = r => require(['@/pages/enter/foodManage/foodManage'], r)
const foodAdd = r => require(['@/pages/enter/foodAdd/foodAdd'], r)
const foodOrder = r => require(['@/pages/hotel/foodOrder/foodOrder'], r)
const forgotPassword = r => require(['@/pages/enter/forgotPassword/forgotPassword'], r)
const cancelRoom = r => require(['@/pages/my/cancelRoom/cancelRoom'], r)
const weChatCash = r => require(['@/pages/my/weChatCash/weChatCash'], r)
const myMessage = r => require(['@/pages/my/myMessage/myMessage'], r)
const myTeam = r => require(['@/pages/my/myTeam/myTeam'], r)
const myCard = r => require(['@/pages/enter/myCard/myCard'], r)
const hotelMessage = r => require(['@/pages/enter/hotelMessage/hotelMessage'], r)
const incomeTable = r => require(['@/pages/my/incomeTable/incomeTable'], r)
const bindPhone = r => require(['@/pages/my/bindPhone/bindPhone'], r)
const bindCard = r => require(['@/pages/my/bindCard/bindCard'], r)
const payPassword = r => require(['@/pages/my/payPassword/payPassword'], r)
const cardMessage = r => require(['@/pages/enter/cardMessage/cardMessage'], r)
const searchPage = r => require(['@/pages/hotel/searchPage/searchPage'], r)
const page404 = r => require(['@/pages/page404/page404'], r)
// import index from '@/pages/index/index'
// import hotel from '@/pages/hotel/hotel'
// import hotelDetail from '@/pages/hotel/hotelDetail/hotelDetail'
// import teamMeeting from '@/pages/teamMeeting/teamMeeting'
// import enter from '@/pages/enter/enter'
// import my from '@/pages/my/my'
// import hotelOrder from '@/pages/hotel/hotelOrder/hotelOrder'
// import payOrder from '@/pages/hotel/payOrder/payOrder'
// import hotelSearch from '@/pages/hotel/hotelSearch/hotelSearch'
// import hotelSelect from '@/pages/hotel/hotelSelect/hotelSelect'
// import cash from '@/pages/my/cash/cash'
// import hotelEnter from '@/pages/enter/hotelEnter/hotelEnter'
// import agantEnter from '@/pages/enter/agantEnter/agantEnter'
// import cashDetail from '@/pages/my/cashDetail/cashDetail'
// import feedBack from '@/pages/my/feedBack/feedBack'
// import custom from '@/pages/my/custom/custom'
// import collection from '@/pages/my/collection/collection'
// import roomEnter from '@/pages/my/roomEnter/roomEnter'
// import meettingSend from '@/pages/my/meettingSend/meettingSend'
// import clockSend from '@/pages/my/clockSend/clockSend'
// import teamSend from '@/pages/my/teamSend/teamSend'
// import roomSend from '@/pages/my/roomSend/roomSend'
// import agantDetailt from '@/pages/my/agantDetailt/agantDetailt'
// import order from '@/pages/my/order/order'
// import orderPay from '@/pages/my/orderPay/orderPay'
// import myagantEnter from '@/pages/my/myagantEnter/myagantEnter'
// import agantIncome from '@/pages/my/agantIncome/agantIncome'
// import agantHistory from '@/pages/my/agantHistory/agantHistory'
// import payMethods from '@/pages/my/payMethods/payMethods'
// import login from '@/pages/enter/login/login'
// import hotelManage from '@/pages/enter/hotelManage/hotelManage'
// import orderManage from '@/pages/enter/orderManage/orderManage'
// import resetPassword from '@/pages/enter/resetPassword/resetPassword'
// import incomeDetail from '@/pages/enter/incomeDetail/incomeDetail'
// import onlineMessage from '@/pages/enter/onlineMessage/onlineMessage'
// import orderDeal from '@/pages/enter/orderDeal/orderDeal'
// import cashStatus from '@/pages/enter/cashStatus/cashStatus'
// import incomeList from '@/pages/enter/incomeList/incomeList'
// import orderStatus from '@/pages/enter/orderStatus/orderStatus'
// import mealDetail from '@/pages/enter/mealDetail/mealDetail'
// import foodManage from '@/pages/enter/foodManage/foodManage'
// import foodAdd from '@/pages/enter/foodAdd/foodAdd'
// import foodOrder from '@/pages/hotel/foodOrder/foodOrder'
// import forgotPassword from '@/pages/enter/forgotPassword/forgotPassword'
// import cancelRoom from '@/pages/my/cancelRoom/cancelRoom'
// import weChatCash from '@/pages/my/weChatCash/weChatCash'
// import myMessage from '@/pages/my/myMessage/myMessage'
// import myTeam from '@/pages/my/myTeam/myTeam'
// import myCard from '@/pages/enter/myCard/myCard'
// import hotelMessage from '@/pages/enter/hotelMessage/hotelMessage'
// import incomeTable from '@/pages/my/incomeTable/incomeTable'
// import bindPhone from '@/pages/my/bindPhone/bindPhone'
// import bindCard from '@/pages/my/bindCard/bindCard'
// import payPassword from '@/pages/my/payPassword/payPassword'
// import cardMessage from '@/pages/enter/cardMessage/cardMessage'
// import searchPage from '@/pages/hotel/searchPage/searchPage'
// import page404 from '@/pages/page404/page404'

Vue.use(Router)

const routes = [
    {
      path: '',
      redirect: {name: 'index'}
    },
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: hotel,
      meta: {
        title: '酒店'
      }
    },
    {
      path: '/hotelDetail',
      name: 'hotelDetail',
      component: hotelDetail,
      meta: {
        title: '酒店详情'
      }
    },
    {
      path: '/hotel/hotelSearch',
      name: 'hotelSearch',
      component: hotelSearch,
      meta: {
        title: '酒店搜索'
      }
    },
    {
      path: '/hotel/payOrder',
      name: 'payOrder',
      component: payOrder,
      meta: {
        title: '酒店支付订单'
      }
    },
    {
      path: '/hotel/searchPage',
      name: 'searchPage',
      component: searchPage,
      meta: {
        title: '酒店搜索'
      }
    },
    {
      path: '/hotelDetail/hotelSelect',
      name: 'hotelSelect',
      component: hotelSelect,
      meta: {
        title: '酒店信息'
      }
    },
    {
      path: '/hotelDetail/hotelSelect/hotelOrder',
      name: 'hotelOrder',
      component: hotelOrder,
      meta: {
        title: '酒店支付信息'
      }
    },
    {
      path: '/teamMeeting',
      name: 'teamMeeting',
      component: teamMeeting,
      meta: {
        title: '团队会议'
      }
    },
    {
      path: '/enter',
      name: 'enter',
      component: enter,
      meta: {
        title: '入驻'
      }
    },
    {
      path: '/enter/login',
      name: 'login',
      component: login,
      meta: {
        title: '入驻登录'
      }
    },
    {
      path: '/enter/hotelManage',
      name: 'hotelManage',
      component: hotelManage,
      meta: {
        title: '酒店管理'
      }
    },
    {
      path: '/enter/hotelManage/cashStatus',
      name: 'cashStatus',
      component: cashStatus,
      meta: {
        title: '酒店管理提现详情'
      }
    },
    {
      path: '/enter/hotelManage/incomeList',
      name: 'incomeList',
      component: incomeList,
      meta: {
        title: '酒店管理收支明细'
      }
    },
    {
      path: '/enter/hotelManage/incomeDetail',
      name: 'incomeDetail',
      component: incomeDetail,
      meta: {
        title: '酒店管理收入详情'
      }
    },
    {
      path: '/enter/hotelManage/onlineMessage',
      name: 'onlineMessage',
      component: onlineMessage,
      meta: {
        title: '酒店管理在线信息'
      }
    },
     {
      path: '/enter/hotelManage/orderDeal',
      name: 'orderDeal',
      component: orderDeal,
      meta: {
        title: '酒店管理订单处理'
      }
    },
     {
      path: '/enter/hotelManage/orderStatus',
      name: 'orderStatus',
      component: orderStatus,
      meta: {
        title: '酒店管理订单处理状态'
      }
    },
     {
      path: '/enter/hotelManage/mealDetail',
      name: 'mealDetail',
      component: mealDetail,
      meta: {
        title: '餐饮管理订单详情'
      }
    },
    {
      path: '/enter/hotelManage/foodManage',
      name: 'foodManage',
      component: foodManage,
      meta: {
        title: '酒店管理餐饮管理'
      }
    },
    {
      path: '/enter/hotelManage/foodAdd',
      name: 'foodAdd',
      component: foodAdd,
      meta: {
        title: '酒店管理餐饮添加'
      }
    },
     {
      path: '/hotel/hotelManage/foodOrder',
      name: 'foodOrder',
      component: foodOrder,
      meta: {
        title: '餐饮团购'
      }
    },
    {
      path: '/enter/forgotPassword',
      name: 'forgotPassword',
      component: forgotPassword,
      meta: {
        title: '忘记密码'
      }
    },
    {
      path: '/enter/hotelManage/myCard',
      name: 'myCard',
      component: myCard,
      meta: {
        title: '酒店管理银行卡'
      }
    },
    {
      path: '/enter/cardMessage/cardMessage',
      name: 'cardMessage',
      component: cardMessage,
      meta: {
        title: '酒店管理添加银行卡'
      }
    },
    {
      path: '/enter/hotelManage/orderManage',
      name: 'orderManage',
      component: orderManage,
      meta: {
        title: '酒店订单管理'
      }
    },
    {
      path: '/enter/hotelManage/resetPassword',
      name: 'resetPassword',
      component: resetPassword,
      meta: {
        title: '酒店管理修改密码'
      }
    },
    {
      path: '/enter/hotelEnter',
      name: 'hotelEnter',
      component: hotelEnter,
      meta: {
        title: '酒店入驻'
      }
    },
     {
      path: '/enter/hotelMessage',
      name: 'hotelMessage',
      component: hotelMessage,
      meta: {
        title: '酒店信息'
      }
    },
    {
      path: '/enter/agantEnter',
      name: 'agantEnter',
      component: agantEnter,
      meta: {
        title: '代理服务商入驻'
      }
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/my/cashDetail',
      name: 'cashDetail',
      component: cashDetail,
      meta: {
        title: '我的收益详情'
      }
    },
    {
      path: '/my/feedBack',
      name: 'feedBack',
      component: feedBack,
      meta: {
        title: '我的反馈'
      }
    },
    {
      path: '/my/custom',
      name: 'custom',
      component: custom,
      meta: {
        title: '我的客服'
      }
    },
     {
      path: '/my/incomeTable',
      name: 'incomeTable',
      component: incomeTable,
      meta: {
        title: '我的收支明细'
      }
    },
    {
      path: '/my/bindPhone',
      name: 'bindPhone',
      component: bindPhone,
      meta: {
        title: '我的绑定手机'
      }
    },
    {
      path: '/my/bindCard',
      name: 'bindCard',
      component: bindCard,
      meta: {
        title: '我的绑定银行卡'
      }
    },
    {
      path: '/my/payPassword',
      name: 'payPassword',
      component: payPassword,
      meta: {
        title: '我的余额支付密码'
      }
    },
     {
      path: '/my/myMessage',
      name: 'myMessage',
      component: myMessage,
      meta: {
        title: '我的信息'
      }
    },
    {
      path: '/my/myTeam',
      name: 'myTeam',
      component: myTeam,
      meta: {
        title: '我的团队'
      }
    },
    {
      path: '/my/collection',
      name: 'collection',
      component: collection,
      meta: {
        title: '我的收藏'
      }
    },
     {
      path: '/my/roomEnter',
      name: 'roomEnter',
      component: roomEnter,
      meta: {
        title: '我的管理房'
      }
    },
    {
      path: '/my/roomEnter/meettingSend',
      name: 'meettingSend',
      component: meettingSend,
      meta: {
        title: '我的会议室发布'
      }
    },
    {
      path: '/my/roomEnter/teamSend',
      name: 'teamSend',
      component: teamSend,
      meta: {
        title: '我的团房发布'
      }
    },
    {
      path: '/my/roomSend/roomSend',
      name: 'roomSend',
      component: roomSend,
      meta: {
        title: '我的房间发布'
      }
    },
    {
      path: '/my/roomEnter/clockSend',
      name: 'clockSend',
      component: clockSend,
      meta: {
        title: '我的钟点房发布'
      }
    },
    {
      path: '/my/agantDetailt',
      name: 'agantDetailt',
      component: agantDetailt,
      meta: {
        title: '我的代理详情'
      }
    },

    {
      path: '/my/myagantEnter',
      name: 'myagantEnter',
      component: myagantEnter,
      meta: {
        title: '我的代理入口'
      }
    },
     {
      path: '/my/myagantEnter/agantIncome',
      name: 'agantIncome',
      component: agantIncome,
      meta: {
        title: '我的代理收入'
      }
    },
    {
      path: '/my/myagantEnter/agantHistory',
      name: 'agantHistory',
      component: agantHistory,
      meta: {
        title: '我的代理历史'
      }
    },
    {
      path: '/my/order',
      name: 'order',
      component: order,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/my/order/payMethods',
      name: 'payMethods',
      component: payMethods,
      meta: {
        title: '我的付款方式'
      }
    },
    {
      path: '/my/order/orderPay',
      name: 'orderPay',
      component: orderPay,
      meta: {
        title: '我的订单付款'
      }
    },
     {
      path: '/my/cancelRoom',
      name: 'cancelRoom',
      component: cancelRoom,
      meta: {
        title: '我的申请退房'
      }
    },
    {
      path: '/my/weChatCash',
      name: 'weChatCash',
      component: weChatCash,
      meta: {
        title: '我的提现'
      }
    },
    {
      path: '/my/cash',
      name: 'cash',
      component: cash,
      meta: {
        title: '提现'
      }
    },
    {
      path: '/*',
      name: 'page404',
      component: page404,
      meta: {
        title: '404'
      }
    }
  ]

export default new Router({
  routes,
  scrollBehavior(to,from,savePosition){
    if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
