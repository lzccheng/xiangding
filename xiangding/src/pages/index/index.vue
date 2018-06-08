<template>
  <div class="box" @click="_boxClick">
      <div id="aMap"></div>
      <div class="_box" ref="_box" @click="_boxClick">
        <div class="style" ref="_style" @click="handleCancel">
          <div>
            <p class="title">
              <span>酒店星级：</span>
            </p>
            <p><el-rate v-model="category_id"></el-rate></p>
          </div>
          <div>
            <p class="title">价格：</p>
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
          <div class="btn" style="margin-bottom: 10px;">
            <button @click="_boxClick" class="green_btn">确定</button>
          </div>
        </div>
      </div>

  		<div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for='(i,index) in arrItem' :key='index' class="swiper-slide">
              <router-link :to="Fn.getUrl({path: '/hotelDetail',query:{id:i.id,hotelName:i.store_name,date1:date_value[0].datetime,date2:date_value[1].datetime}})" tag='div'>
                 <div class="iSlide">
                    <img class="img" :src="i.thumb">
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
              <label for="">
                <span class="location" id="cccc">{{text_erea}}</span>
              </label>
  					</div>
  					<span class="right"><i class="fas fa-angle-right"></i></span>
  					<p class="local">
              <span @click="handlePosition">
                <span><i class="fa fa-crosshairs"></i></span><br>
                <span>我的位置</span>
              </span>

  					</p>
  				</li>
  				<li id="myDate">
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
              <span>星级:{{star}}星/价格:{{price[0]}}-{{price[1]}}</span>  
              <span class="angle"><i class="fas fa-angle-right"></i></span>
            </div>
          </li>
          <li>
            <div class="select">
              <span><i class="fas fa-search"></i></span>  
              <span><input type="text" v-model="store_name" placeholder="酒店名称"></span>  
            </div>
          </li>
  			</ul>
        <div class="button">
          <router-link tag="p" class="green_btn" :to="Fn.getUrl({path: '/hotel/hotelSearch',query: {data,name: '酒店列表',province,city,erea,struct,date1:date_value[0].datetime,date2:date_value[1].datetime,lng,lat,brand_id: 2,seachMinPrice:price[0],seachMaxPrice:price[1],category_id,store_name}})">查找酒店</router-link>
        </div>
  		</div>
      <div class="near">
        <p class="title">附近推荐酒店</p>
        <div class="hotelRoom" v-for='(i,index) in arrData' :key='index'>
          <router-link :to="Fn.getUrl({path: '/hotelDetail',query:{id:i.id,hotelName:i.store_name,date1:date_value[0].datetime,brand_id: 2,date2:date_value[1].datetime}})" tag='div'>
            <img :src="i.banner_thumb?i.thumb:i.banner_thumb">
            <div>
              <p class="min_title">
                <span class="one">
                  {{i.store_name}}
                  <p class="_star">
                    <el-rate
                      v-model="i.category_id"
                      disabled
                      text-color="#ff9900">
                    </el-rate>
                  </p>
                </span>
              </p>
              <p>
                <span>{{i.information}}&nbsp;&nbsp;|&nbsp;&nbsp;{{i.num}}间房</span>
                <span class="min_price"><span class="i">￥</span>  <span class="num">{{i.minprice}}</span>  起</span>
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
        let that = this
        var mobileSelect5 = new MobileSelect({
            trigger: '#cccc',
            title: '请选择地区',
            wheels: [
                      {data : [
                          {name: '广东省',code: '1',children:[
                            {name: '广州市',code: '22',children:[
                              {name:'天河区',code:'55',children:[
                                {name: '景山街道',code: '666'}
                              ]}
                            ]}
                          ]}
                        ]
                      }
                    ],
            keyMap: {
                id:'code',
                value: 'name',
                childs :'children'
            },
          triggerDisplayData: false,
          position: [18,0],
          onShow: function(){
          },
          onHide:function(){
          },
          callback:function(indexArr, data){
            that.text_erea = data[1].name+data[2].name+data[3].name
            that.province = data[0].name
            that.city = data[1].name
            that.erea = data[2].name
            that.struct = data[3].name
          }
        })
        this.Http.getEreaData((res)=>{
          mobileSelect5.updateWheels(JSON.parse(res.data));
        })
          //定位
          const loading = that.$loading({
            lock: true,
            text: '定位中..........',
            background: 'rgba(0, 0, 0, 0.7)',
            // target: '.msg'
          })
          common.getLocation(onComplete,onError)
          function onComplete(data) {
            loading.close()
            let addr = data.formattedAddress.split('街道')
            if(!addr[1]){
              addr = data.formattedAddress.split('号')
            }
            that.text_erea = addr[1]+'附近'
            let tip = '定位成功！'+that.text_erea
            that.Fn.tips(tip)
          }
          /*
           *解析定位错误信息
           */
          function onError(data) {
            loading.close()
            that.Fn.tips('定位失败！')
          }

        // this.$axios({url:'/bannerData',data:{id:123}}).then((res)=>{
        //   that.arrItem = res.data
        //   setTimeout(function(){
        //     var mySwiper = new Swiper('.swiper-container', {
        //        loop: true,
        //        autoplay: true
        //     })
        //   },100)
        // }).catch((err)=>{
        //   console.log(err)
        // })
        this.$axios({url:'/hotelData',method: 'get'}).then((res)=>{
            that.hotel = res.data
          }).catch((err)=>{
            console.log(err)
          })
          this.$axios({url:'?i=3&route=home-page.index',method: 'get'}).then((res)=>{
            // console.log(res.data)
            // alert(res.data.msg)
          }).catch((err)=>{
            console.log(err)
          })
          new lzcDatePlugin({
            el: '#myDate',
            callback: function(res){
              that.date_value[0].datetime = res[0].dateTime;
              that.date_value[1].datetime = res[1].dateTime;
            }
          })
          this.getData()
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
          text_erea: '广州市荔湾区沙面街道',
          erea_value: [],
          date_value: [
            {
              datetime: new Date().getTime()
            },
            {
              datetime: new Date(new Date().getTime()+1000*60*60*24).getTime()
            }
          ],
          province:'广东省',
          city: '广州市',
          erea: '荔湾区',
          struct: '沙面街道',
          arrData:[],
          lng: 0,
          lat: 0,
          seachMinPrice: '',
          seachMaxPrice: '',
          store_name: '',
          category_id: 3,
          store_name: ''
        }
      },
      methods: {
        getData(){
          let that = this
          this.Http.get({route:'goods.category.get-children-category',params:{action:true}}).then(res=>{
             console.log(res)
            that.arrItem = res.data.data[1].slice(0,2)
            console.log(that.arrItem)
            that.arrData = res.data.data[1].map(i=>{
              i.category_id = Number(i.category_id)
              return i
            })
          })
        },
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
            that.Fn.tips('定位成功！'+that.text_erea)
          }
          /*
           *解析定位错误信息
           */
          function onError(data) {
            loading.close()
            that.Fn.tips('定位失败！')
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
        handleStyle(e){
          this.handleCancel()
          this._showBox()
          this.$refs._style.style.display = 'block'
          this.Fn.addClass(document.querySelector('html'),'noscroll')
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

          this.$refs._box.style.height = window.innerHeight + 'px'
        },
        _boxClick(){
          this.$refs._box.style.height = '0px'
          this.$refs._style.style.display = 'none'
          this.Fn.removeClass(document.querySelector('html'),'noscroll')
        },
        zero(num){
          return Number(num) >9?num:'0'+num
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
          return this.zero(new Date(this.date_value[0].datetime).getDate())
        },
        day2(){
            return this.zero(new Date(this.date_value[1].datetime).getDate())
        },
        month1(){
          // return this.zero(this.value1.getMonth()+1)
          return this.zero(new Date(this.date_value[0].datetime).getMonth()+1)
        },
        month2(){
          // return this.zero(this.value2.getMonth()+1)
          return this.zero(new Date(this.date_value[1].datetime).getMonth()+1)
        },
        date1(){
          // return this._getDay(this.value1)
          return this.getDay_(this.date_value[0].datetime)
        },
        date2(){
          // return this._getDay(this.value2)
          return this.getDay_(this.date_value[1].datetime)
        },
        night(){
          // return Math.round((this.value2.getTime()-this.value1.getTime())/(1000*60*60*24))
          return Math.round((this.date_value[1].datetime-this.date_value[0].datetime)/(1000*60*60*24))
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
    .posi_fixed{
      position: fixed;
      left: 0;
      top: 0;
    }
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
            padding: 0 rem(10px);
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
                padding: 0 rem(20px) rem(32px);
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
              input{
                border: none;
                font-size: rem(14px);
              }
            }
          }
        }
      }
      .button{
        padding: rem(10px) 5%;
        // button{
        //   width: 90%;
        //   height: rem(40px);
        //   font-size: rem(16px);
        //   border-radius: rem(5px);
        //   border: none;
        //   color: #fff;
        //   background-color: #43c122;
        // }
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
        padding: rem(40px) 5% rem(10px);
      }
    }
	}


</style>
