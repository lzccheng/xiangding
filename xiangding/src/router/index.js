import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import hotel from '@/pages/hotel/hotel'
import hotelDetail from '@/pages/hotel/hotelDetail/hotelDetail'
import teamMeeting from '@/pages/teamMeeting/teamMeeting'
import enter from '@/pages/enter/enter'
import my from '@/pages/my/my'
import hotelOrder from '@/pages/hotel/hotelOrder/hotelOrder'
import hotelSearch from '@/pages/hotel/hotelSearch/hotelSearch'
import hotelSelect from '@/pages/hotel/hotelSelect/hotelSelect'
import cash from '@/pages/my/cash/cash'
import hotelEnter from '@/pages/enter/hotelEnter/hotelEnter'
import agantEnter from '@/pages/enter/agantEnter/agantEnter'
import cashDetail from '@/pages/my/cashDetail/cashDetail'
import feedBack from '@/pages/my/feedBack/feedBack'
import custom from '@/pages/my/custom/custom'
import collection from '@/pages/my/collection/collection'
import roomEnter from '@/pages/my/roomEnter/roomEnter'
import meettingSend from '@/pages/my/meettingSend/meettingSend'
import clockSend from '@/pages/my/clockSend/clockSend'
import teamSend from '@/pages/my/teamSend/teamSend'
import agantDetailt from '@/pages/my/agantDetailt/agantDetailt'
import order from '@/pages/my/order/order'
import orderPay from '@/pages/my/orderPay/orderPay'
import myagantEnter from '@/pages/my/myagantEnter/myagantEnter'
import agantIncome from '@/pages/my/agantIncome/agantIncome'
import agantHistory from '@/pages/my/agantHistory/agantHistory'
import login from '@/pages/enter/login/login'
import hotelManage from '@/pages/enter/hotelManage/hotelManage'
import orderManage from '@/pages/enter/orderManage/orderManage'
import resetPassword from '@/pages/enter/resetPassword/resetPassword'
import incomeDetail from '@/pages/enter/incomeDetail/incomeDetail'
import onlineMessage from '@/pages/enter/onlineMessage/onlineMessage'
import orderDeal from '@/pages/enter/orderDeal/orderDeal'
<<<<<<< HEAD
import cashStatus from '@/pages/enter/cashStatus/cashStatus'
import incomeList from '@/pages/enter/incomeList/incomeList'
=======
import orderStatus from '@/pages/enter/orderStatus/orderStatus'
>>>>>>> 6301f70ca50b865618abf7af95401d0b6e2df073

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/my/order/orderPay',
      name: 'orderPay',
      component: orderPay,
      meta: {
        title: '我的订单付款'
      }
    },
    {
      path: '/my/cash',
      name: 'cash',
      component: cash,
      meta: {
        title: '提现'
      }
    }
  ]
})
