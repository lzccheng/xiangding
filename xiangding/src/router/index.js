import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import hotel from '@/pages/hotel/hotel'
import hotelDetail from '@/pages/hotel/hotelDetail/hotelDetail'
import teamMeeting from '@/pages/teamMeeting/teamMeeting'
import enter from '@/pages/enter/enter'
import my from '@/pages/my/my'
import hotelOrder from '@/pages/hotel/hotelOrder/hotelOrder'

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
      path: '/hotelDetail/hotelOrder',
      name: 'hotelOrder',
      component: hotelOrder,
      meta: {
        title: '酒店订单'
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
      path: '/my',
      name: 'my',
      component: my,
      meta: {
        title: '我的'
      }
    }
  ],
  mode:'history'
})
