<template>  
  <div class="box">

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
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="入住日期" 
                :picker-options="pickerOptions1" 
                @change="handleChange" 
                @focus="_blur">
            </el-date-picker>
          </p>
          <p>
            <span>退房日期：</span>
            <el-date-picker
                v-model="value2"
                type="date"
                placeholder="入住日期" 
                :picker-options="pickerOptions2" 
                @focus="_blur">
            </el-date-picker>
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
          <!-- <div>
            <p class="title">酒店类型：</p>
            <p class="hotelStyle">
              <span>经济酒店</span>
              <span>主题酒店</span>
              <span class="active">商务酒店</span>
              <span>度假酒店</span>
              <span>豪华酒店</span>
            </p>
          </div> -->
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
          <!-- <div>
            <p class="title">房间类型：</p>
            <p class="hotelStyle">
              <span>单人房</span>
              <span>大床房</span>
              <span class="active">双人房</span>
              <span>套间</span>
            </p>
          </div> -->
          <!-- <div>
            <p class="title">房间数量：</p>
            <p class="hotelStyle">
              <span>单间</span>
              <span class="active">团房</span>
            </p>
          </div> -->
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
  					<div class="map" @click="handleErea">
  						<span class="_right"><i class="fas fa-map-marker-alt"></i></span>
	  					<span>{{selectedOptions[1]}}</span>
	  					
              
  					</div>
  					<span class="right"><i class="fas fa-angle-right"></i></span>
  					<p class="local">
              
              <span>
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
            <!-- <div class="block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="入住日期" 
                :picker-options="pickerOptions1">
              </el-date-picker>
              <span>&nbsp;</span>
              <div class="num">
                <div>
                  <span class="day">入住天数：</span>
                </div>
                <div class="">
                  <el-input v-model="input1" value="number" placeholder="输入数字" type="number"></el-input>
                </div>
              </div>
            </div> -->
          </li>
  				<li @click="handleStyle">
            <div class="select">
              <span><i class="fas fa-search-plus"></i></span>  
              <span>星级:{{star}}星/价格:{{price[0]}}-{{price[1]}}</span>  
              <span class="angle"><i class="fas fa-angle-right"></i></span>
            </div>
          </li>
  			</ul>
        <div class="button">
          <router-link tag="button" :to="{path: '/hotel/hotelSearch',query: {data}}">查找酒店</router-link>
        </div>
  		</div>

      <div class="near">
        <p class="title">附近推荐酒店</p>
        <div class="hotelRoom" v-for='(i,index) in hotel' :key='index'>
          <router-link :to="{path: '/hotelDetail',query:{id:i.id}}" tag='div'>
            <img :src="i.imgUrl">
            <div>
              <p class="min_title">
                <span class="one">{{i.name}}<star :len='i.star'/></span>
              </p>
              <p>
                <span>{{i.area}}&nbsp;&nbsp;/&nbsp;&nbsp;{{i.room_total}}间房</span>
                <span class="min_price">￥{{i.min_price}}起</span>
              </p>
            </div>
          </router-link>
        </div>
      </div>
  </div>
</template>  
<script>  
  import Swiper from 'swiper' 
  import star from '../../components/star/star'

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
        this.$axios({url:'/api/bannerData',method: 'get',data:{id:123}}).then((res)=>{
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
        this.$axios({url:'/api/hotelData',method: 'get'}).then((res)=>{
            that.hotel = res.data
          }).catch((err)=>{
            console.log(err)
          })

      },
      data(){
      	return {
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
          input1: '',
          star: 4,
          price: [80, 800]
        }
      },
      methods: {
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
        handleCancel(event){
          event.cancelBubble = true
        },
        handleChange(time){
          this.value2 = new Date(time.getTime()+1000*60*60*24)
          _date = time
        },
        _showBox(event){
          this.$refs._box.style.height = window.outerHeight + 'px'
        },
        _boxClick(){
          this.$refs._box.style.height = '0px'
          this.$refs._erea.style.display = 'none'
          this.$refs._date.style.display = 'none'
          this.$refs._style.style.display = 'none'
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
        _blur(event){
          event.blur()
        }
      },
      computed: {
        day1(){
          return this.zero(this.value1.getDate())
        },
        day2(){
          return this.zero(this.value2.getDate())
        },
        month1(){
          return this.zero(this.value1.getMonth()+1)
        },
        month2(){
          return this.zero(this.value2.getMonth()+1)
        },
        date1(){
          return this._getDay(this.value1)
        },
        date2(){
          return this._getDay(this.value2)
        },
        night(){
          return Math.round((this.value2.getTime()-this.value1.getTime())/(1000*60*60*24))
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
    ._box{
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background-color: rgba(0,0,0,0.5);
      z-index: 99;
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
			.iSlide{
				width: 100%;
				.img{
					width: 100%;
					height: 13rem;
				}
			}
		}
		.msg{
      ul{
        padding: 0 5%;
        li{
          padding: rem(15px) 5% rem(8px);
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
            padding-top: rem(10px) ;
            display: inline-block;
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
      padding: 0 rem(10px);
      .title{
        font-size: rem(18px);
        color: #555;
        font-weight: bold;
      }
      .hotelRoom{
        padding-top: rem(15px);
        img{
          width: 100%;
          height: rem(200px);
          border-radius: rem(5px);
        }
        .min_title{
          .one{
            font-size: rem(16px);
            font-weight: bold;
          }
          img{
            display: inline-block;
            width: rem(13px);
            height: rem(13px);
          }
        }
        .min_price{
          float: right;
        }
      }
    }
	}
	
	
</style>