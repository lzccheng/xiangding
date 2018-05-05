<template>
  <div class="box">
      <div id="aMap"></div>
      <div class="_box" ref="_box" @click="_boxClick">
        <div class="erea" ref="_erea" @click="handleCancel">
          <div class="_erea">
            <el-cascader
                  :options="options"
                  v-model="selectedOptions">
              </el-cascader>
          </div>
          <div class="btn">
            <button @click="_boxClick" class="green_btn">确定</button>
          </div>
        </div>
        <div class="date" ref="_date" @click="handleCancel">
          <p>
            <span>入住日期：</span>
            <span>
              <input id="date1" type="text" onfocus="this.blur()" readonly="" @focus="handleBlur" placeholder="日期选择特效" data-lcalendar="2016-05-11,2016-05-11" v-model="date1_value"/>
            </span>
            <span><i class="fas fa-angle-right"></i></span>
          </p>
          <p>
            <span>退房日期：</span>
            <span>
              <input id="date2" type="text" onfocus="this.blur()" readonly="" placeholder="日期选择特效" data-lcalendar="2016-05-11,2016-05-11" v-model="date2_value"/>
            </span>
            <span><i class="fas fa-angle-right"></i></span>
          </p>
          <div class="btn">
            <button @click="_boxClick" class="green_btn">确定</button>
          </div>
        </div>
        <div class="style" ref="_style" @click="handleCancel">
          <div>
            <p class="title">
              <span>酒店星级：</span>
            </p>
            <p><el-rate v-model="star"></el-rate></p>
          </div>
          <div>
            <p class="title">价格： </p>
            <p class="slider">
              <el-slider
                v-model="price"
                range
                :step="50"
                :max="3000">
              </el-slider>
            </p>
            <p class="price">
              <span class="min_price">￥{{price[0]}}</span>
              <span class="max_price">￥{{price[1]}}</span>
            </p>
          </div>
          <div class="btn">
            <button @click="_boxClick" class="green_btn">确定</button>
          </div>
        </div>
      </div>

  		<div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for='(i,index) in arrItem' :key='index' class="swiper-slide">
              <router-link :to="{path: '/hotelDetail',query:{id:i.id}}" tag='div'>
                 <div class="iSlide">
                    <img class="img" :src="i.imgUrl">
                  </div>
              </router-link>

            </div>
          </div>
        </div>
  		</div>
  		<div class="msg">
  			<ul>
  				<li>
  					<div class="map">
  						<span class="_right"><i class="fas fa-map-marker-alt"></i></span>
              <!-- <span ref="show_erea"><input onfocus="this.blur()" id="area" type="text" readonly="" placeholder="城市选择特效"  value="广东省,深圳市,南山区" v-model="area_value"/></span> -->
              <label for="">
                <span class="location" id="cccc">{{text_erea}}</span>
              </label>
              <!-- <input id="value1" type="hidden" value="20,234,504"/>  -->
  					</div>
  					<span class="right"><i class="fas fa-angle-right"></i></span>
  					<p class="local">

              <span @click="handlePosition">
                <span><i class="fa fa-crosshairs"></i></span><br>
                <span>我的位置</span>
              </span>

  					</p>
  				</li>
  				<li @click="handleDate">
            <div class="date">
              <div class="time">
                <p><span class="text">入住</span><br/></p>
                <p>
                  <span class="day">{{day1}}</span>
                  <p>
                    <i class="far fa-calendar-alt"></i>
                    <span>{{month1}}月</span>
                    <span>{{date1}}</span>
                  </p>
                </p>
              </div>
              <div class="time">
                <p><span class="text">退房</span><br/></p>
                <p>
                  <span class="day">{{day2}}</span>
                  <p>
                    <i class="far fa-calendar-alt"></i>
                    <span>{{month2}}月</span>
                    <span>{{date2}}</span>
                  </p>
                </p>
              </div>
            </div>
            <div class="total" style="float:right;color:#aaa;padding-top:20px;font-size:16px;">
              <span>{{night}}晚</span>
              <i class="fas fa-angle-right"></i>
            </div>
          </li>
  				<li @click="handleStyle">
            <div class="select">
              <span><i class="fas fa-search-plus"></i></span>
              <span>星级:{{star}}星/价格:{{price[0]}}-{{price[1]}}/设备</span>
              <span class="angle"><i class="fas fa-angle-right"></i></span>
            </div>
          </li>
  			</ul>
        <div class="button">
          <router-link tag="button" :to="{path: '/hotel/hotelSearch',query: {data,name: '酒店列表'}}">查找酒店</router-link>
        </div>
  		</div>

      <div class="near">
        <p class="title">附近推荐酒店</p>
        <div class="hotelRoom" v-for='(i,index) in hotel' :key='index'>
          <router-link :to="{path: '/hotelDetail',query:{id:i.id}}" tag='div'>
            <img :src="i.imgUrl">
            <div>
              <p class="min_title">
                <span class="one">
                  {{i.name}}
                  <p class="_star">
                    <el-rate
                      v-model="i.star"
                      disabled
                      text-color="#ff9900">
                    </el-rate>
                  </p>
                </span>
              </p>
              <p>
                <span>{{i.area}}&nbsp;&nbsp;|&nbsp;&nbsp;{{i.room_total}}间房</span>
                <span class="min_price"><span class="i">￥</span>  <span class="num">{{i.min_price}}</span>  起</span>
              </p>
            </div>
          </router-link>
        </div>
        <div class="btn">
          <button class="green_btn">查看更多酒店</button>
        </div>
      </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import star from '../../components/star/star'
  import common from '../../common/js/common'

  let g_date = new Date()
  let _date = new Date()
  let tomo = new Date(g_date.getTime()+1000*60*60*24)
  let _day = [
    '周日',
    '周一',
    '周二',
    '周三',
    '周四',
    '周五',
    '周六'
  ]
  export default{
      components: {
        star
      },
      mounted:function(){
        var mobileSelect5 = new MobileSelect({
            trigger: '#cccc',
            title: '请选择地区',
            wheels: [
                        {data : ereaPlugin_data}
                    ],
            keyMap: {
                id:'code',
                value: 'name',
                childs :'children'
            },
          triggerDisplayData: false,
          position: [18,0],
          callback:function(indexArr, data){
            that.text_erea = data[1].name+data[2].name+data[3].name
          }
        });
        let that = this
        // const loading = that.$loading({
        //     lock: true,
        //     text: '定位中..........',
        //     background: 'rgba(0, 0, 0, 0.7)',
        //     // target: '.msg'
        //   })
        //   that.show_erea = true
        //   // that.$refs.show_erea.style.display = 'inline-block'
        //   common.getLocation(onComplete,onError)
        //   function onComplete(data) {
        //     loading.close()
        //     let addr = data.formattedAddress.split('街道')
        //     if(!addr[1]){
        //       addr = data.formattedAddress.split('号')
        //     }
        //     that.text_erea = addr[1]+'附近'
        //     that.show_erea = false
        //     that.$refs.show_erea.style.display = 'none'
        //     that.$message({
        //       message: '定位成功！'+that.text_erea,
        //       type: 'success'
        //     })
        //   }
        //   /*
        //    *解析定位错误信息
        //    */
        //   function onError(data) {
        //     loading.close()
        //     that.$message({
        //       message: '定位失败！'+data.message,
        //       type: 'warning'
        //     })
        //   }

        let nowDate = new Date()
        this.$axios({url:'/bannerData',data:{id:123}}).then((res)=>{
          that.arrItem = res.data
          setTimeout(function(){
            var mySwiper = new Swiper('.swiper-container', {
               loop: true,
               autoplay: true
            })
          },100)
        }).catch((err)=>{
          console.log(err)
        })
        this.$axios({url:'/hotelData',method: 'get'}).then((res)=>{
            that.hotel = res.data
          }).catch((err)=>{
            console.log(err)
          })
          this.$axios({url:'/addons/yun_shop/api.php?i=3&route=home-page.index',method: 'get'}).then((res)=>{
            // console.log(res.data)
            // alert(res.data.msg)
          }).catch((err)=>{
            console.log(err)
          })

          // let area = new LArea()
          // new LArea().init({
          //   'trigger': '#area',
          //   'valueTo': '#value',
          //   'keys': {
          //       id: 'id',
          //       name: 'name'
          //   },
          //   'type': 1,
          //   'data': LAreaData
          // });
          // var erea = ereaPlugin({
          //   showEl: '#bbb',
          //   clickEl: '#aaa',
          //   data: ereaPlugin_data,
          //   callBack: function(res){
          //     console.log(res)
          //   }
          // })
          // var erea = ereaPlugin({
          //   showEl: '#bbb',
          //   clickEl: '#aaa',
          //   data: ereaPlugin_data,
          //   callBack: function(res){
          //     that.erea_value = res.erea_value
          //     that.text_erea = that.erea_value[2]+that.erea_value[3]
          //   }
          // }).init()
          let date = new Date()
          let min_date = date.getFullYear()+'-'+this.zero(date.getMonth()+1)+'-'+this.zero(date.getDate())
          let min_date2 = new Date(tomo.getTime()).getFullYear()+'-'+this.zero(new Date(tomo.getTime()).getMonth()+1)+'-'+this.zero(new Date(tomo.getTime()).getDate())
          this.date1_value = min_date
          this.date2_value = min_date2
          new LCalendar().init({
              'trigger': '#date1', //标签id
              'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
              'minDate': min_date, //最小日期
              'maxDate': (new Date().getFullYear()+2) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
          })
          new LCalendar().init({
              'trigger': '#date2', //标签id
              'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
              'minDate': min_date2, //最小日期
              'maxDate': (new Date().getFullYear()+2) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
          })
      },
      data(){
      	return {
          area_value: '广东省,广州市,天河区',
      		arrItem:[],
          hotel: [],
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() <= (Date.now()-1000*60*60*24);
            }
          },
          pickerOptions2: {
            disabledDate(time) {
              return time.getTime() <= _date.getTime();
            }
          },
          options: [
            {
              value: '广东省',
              label: '广东省',
              children: [
                {
                  value: '广州市',
                  label: '广州市'
                },
                {
                  value: '深圳市',
                  label: '深圳市'
                },
                {
                  value: '佛山市',
                  label: '佛山市'
                },
                {
                  value: '肇庆市',
                  label: '肇庆市'
                },
              ]
             }
          ],
          selectedOptions: ['广东省','广州市'],
          value1: new Date(),
          value2: tomo,
          date1_value: '',
          date2_value: '',
          input1: '',
          star: 4,
          price: [80, 800],
          _lng: '',
          _lat: '',
          show_erea: true,
          text_erea: '请选择',
          erea_value: []
        }
      },
      methods: {
        handleChange_erea(){
          this.show_erea = true
          this.$refs.show_erea.style.display = 'inline-block'
        },
        handlePosition(){
           let that = this
           const loading = that.$loading({
            lock: true,
            text: '定位中..........',
            background: 'rgba(0, 0, 0, 0.7)',
            // target: '.msg'
          })
          // that.show_erea = true
          // that.$refs.show_erea.style.display = 'inline-block'
          common.getLocation(onComplete,onError)
          function onComplete(data) {
            loading.close()
            let addr = data.formattedAddress.split('街道')
            if(!addr[1]){
              addr = data.formattedAddress.split('号')
            }
            that.text_erea = addr[1]+'附近'
            // that.show_erea = false
            // that.$refs.show_erea.style.display = 'none'
            that.$message({
              message: '定位成功！'+that.text_erea,
              type: 'success'
            })
          }
          /*
           *解析定位错误信息
           */
          function onError(data) {
            loading.close()
            that.$message({
              message: '定位失败！'+data.message,
              type: 'warning'
            })
          }
        },
        handleBlur(e){
          var e = e || event
          e.path[0].blur()
        },
        handleErea(){
          this._showBox()
          this.$refs._erea.style.display = 'block'
        },
        handleDate(){
          this._showBox()
          this.$refs._date.style.display = 'block'
        },
        handleStyle(){
          this._showBox()
          this.$refs._style.style.display = 'block'
        },
        handleCancel(e){
          var e = e || event
          e.cancelBubble = true
        },
        handleChange(time){
          this.value2 = new Date(time.getTime()+1000*60*60*24)
          _date = time
        },
        _showBox(){
          document.querySelectorAll('body')[0].style.overflow = 'hidden'
          this.$refs._box.style.height = window.innerHeight + 'px'
        },
        _boxClick(){
          this.$refs._box.style.height = '0px'
          this.$refs._erea.style.display = 'none'
          this.$refs._date.style.display = 'none'
          this.$refs._style.style.display = 'none'
          document.querySelectorAll('body')[0].style.overflow = 'auto'
        },
        zero(num){
          return Number(num) >10?num:'0'+num
        },
        _getDay(value){
          let dd = new Date()
          let day = dd.getDate()
          let mon = dd.getMonth()+1
          let year = dd.getFullYear()
          let str = year+'/'+mon+'/'+day
          let tody = new Date(str)
          let tomorrow = new Date(tody.getTime()+1000*60*60*24).getTime()
          let getTime = value.getTime()
          if(getTime<tomorrow){
            return '今天'
          }
          if(getTime>=tomorrow&&getTime<new Date(tody.getTime()+2*1000*60*60*24).getTime()){
            return '明天'
          }
          if(getTime>=new Date(tody.getTime()+2*1000*60*60*24).getTime()&&getTime<new Date(tody.getTime()+3*1000*60*60*24).getTime()){
            return '后天'
          }
          return _day[value.getDay()]
        },
        getDay_(value){
          let dd = new Date()
          let date = new Date(value).getTime()
          let tody = dd.getFullYear()+'-'+(dd.getMonth()+1)+'-'+dd.getDate()
          let tomorrow = new Date(tody).getTime()+1000*60*60*24
          if(date<tomorrow){
            return '今天'
          }
          if(date>=tomorrow && date<(tomorrow+1000*60*60*24)){
            return '明天'
          }
          if(date>=(tomorrow+1000*60*60*24) && date<(tomorrow+1000*60*60*24*2)){
            return '后天'
          }
          return _day[new Date(value).getDay()]
        },
        _blur(event){
          event.blur()
        }
      },
      computed: {
        day1(){
          // return this.zero(this.value1.getDate())
          let date = new Date(this.date1_value).getTime()
          let date2 = date+1000*60*60*24
          this.date2_value = new Date(date2).getFullYear()+'-'+this.zero(new Date(date2).getMonth()+1)+'-'+this.zero(new Date(date2).getDate())
        return this.zero(new Date(this.date1_value).getDate())
        },
        day2(){
            if(new Date(this.date1_value).getTime()>new Date(this.date2_value).getTime()){
              let date = new Date(this.date1_value).getTime()
              let date2 = date+1000*60*60*24
              this.date2_value = new Date(date2).getFullYear()+'-'+this.zero(new Date(date2).getMonth()+1)+'-'+this.zero(new Date(date2).getDate())
            }
            return this.zero(new Date(this.date2_value).getDate())
        },
        month1(){
          // return this.zero(this.value1.getMonth()+1)
          return this.zero(new Date(this.date1_value).getMonth()+1)
        },
        month2(){
          // return this.zero(this.value2.getMonth()+1)
          return this.zero(new Date(this.date2_value).getMonth()+1)
        },
        date1(){
          // return this._getDay(this.value1)
          return this.getDay_(this.date1_value)
        },
        date2(){
          // return this._getDay(this.value2)
          return this.getDay_(this.date2_value)
        },
        night(){
          // return Math.round((this.value2.getTime()-this.value1.getTime())/(1000*60*60*24))
          return Math.round((new Date(this.date2_value).getTime()-new Date(this.date1_value).getTime())/(1000*60*60*24))
        },
        data(){
          let data = {
            date1: this.value1,
            date2: this.value2
          }
          return data
        }
      }
  }
</script>

<style scoped lang='scss'>
	@import '../../common/css/common';
	.box{
		width: 100%;
    background-color: #fff;
    margin-bottom: rem(50px);
    padding-bottom: 30%;
    ._box{
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background-color: rgba(0,0,0,0.5);
      z-index: 130;
      overflow-y: scroll;
      >div{
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 999;
        text-align: center;
        display: none;
        .btn{
          padding: rem(10px) 8%;
        }
        &.erea{
          ._erea{
            padding-top: rem(15px);
          }
        }
        &.date{
          p{
            padding: rem(10px) 0;
            span{
              color: #aaa;
              input{
                border: none;
                color: #aaa;
              }
            }
          }
        }
        &.style{
          >div{
            >p{
              margin: rem(10px) 0;
              &.title{
                font-size: rem(16px);
                font-weight: bold;
                text-align: left;
                padding-left: rem(20px);
              }
              &.hotelStyle{
                text-align: left;
                span{
                  display: inline-block;
                  padding: rem(8px) 3%;
                  margin: rem(15px) 5%;
                  border: 1px solid #aaa;
                  border-radius: rem(3px);
                  color: #aaa;
                  &.active{
                    color: #43C122;
                    border: 1px solid #43C122;
                  }
                }
              }
              &.slider{
                padding: 0 rem(15px);
              }
              &.price{
                color: #409EFF;
                padding: 0 rem(20px) rem(15px);
                .min_price{
                  float: left;

                }
                .max_price{
                  float: right;
                }
              }
            }

          }
        }
      }
    }

    .block{
      display: flex;
      .to{
        display: inline-block;
        line-height: rem(40px);
        padding: 0 rem(5px);
      }
      // .i{
      //   font-size: rem(15px);
      // }
      .num{
        display: flex;
        .day{
          display: inline-block;
          width: rem(65px);
          line-height: rem(40px);
        }
      }
    }
		.banner{
      z-index: 99;
			.iSlide{
        z-index: 99;
				width: 100%;
				.img{
          z-index: 99;
					width: 100%;
					height: 13rem;
				}
			}
		}
		.msg{
      ul{
        padding: 0 5%;
        li{
          padding: rem(10px) 3% rem(8px);
          border-bottom: rem(1px) solid #aaa;
          ._right{
            margin-right: rem(10px);

            i{
              color: #aaa;
            }
          }
          .right{
            display: inline-block;
          }
          .map{
            width: 70%;
            padding-top: rem(15px) ;
            display: inline-block;
            .location{

              font-size: rem(13px);
            }
          }
          #area{
            width: 85%;
            border: none;
            font-size: rem(14px);
          }
          .local{
            float: right;
            text-align: center;
            color: #aaa;
          }
          .date{
            display: inline-block;
            text-align: center;
            .time{
              display:inline-block;
              margin-right: rem(30px);
              p{
                .text{
                  color: #aaa;
                }
                .day{
                  color: #53c635;
                  font-size: rem(28px);
                }
              }
            }
          }
          .select{
            color: #aaa;
            font-size:rem(14px);
            padding: rem(5px) 0;
            .angle{
              float: right;
            }
            span{
              margin-right: 5%;
              font-size: rem(14px);
            }
          }
        }
      }
      .button{
        padding: rem(10px) 0;
        text-align: center;
        button{
          width: 90%;
          height: rem(40px);
          font-size: rem(16px);
          border-radius: rem(5px);
          border: none;
          color: #fff;
          background-color: #43c122;
        }
      }
		}
    .near{
      padding: rem(17px) rem(10px);
      .title{
        font-size: rem(14px);
        color: #555;
      }
      .hotelRoom{
        padding: rem(15px) 0;
        border-bottom: 1px #aaa solid;
        img{
          width: 100%;
          height: rem(200px);
          border-radius: rem(5px);
        }
        .min_title{
          .one{
            font-size: rem(16px);
            font-weight: bold;
            ._star{
              display: inline-block;
            }
          }
          img{
            display: inline-block;
            width: rem(13px);
            height: rem(13px);
          }
        }
        .min_price{
          float: right;
          color: #FF9800;
          font-weight: bold;
          .num{
            font-size: rem(16px);
          }
        }
      }
      .btn{
        padding: rem(40px) rem(15px) rem(10px);
      }
    }
	}


</style>
