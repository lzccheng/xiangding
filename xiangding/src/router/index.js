import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import hotel from '@/pages/hotel/hotel'
import hotelDetail from '@/pages/hotel/hotelDetail/hotelDetail'
import teamMeeting from '@/pages/teamMeeting/teamMeeting'
import enter from '@/pages/enter/enter'
import my from '@/pages/my/my'
import hotelOrder from '@/pages/hotel/hotelOrder/hotelOrder'
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
      path: '/my/cash',
      name: 'cash',
      component: cash,
      meta: {
        title: '提现'
      }
    }
  ]
})
