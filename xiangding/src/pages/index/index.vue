<template>  
  <div class="box">
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
  						<!-- <span class="_right"><i class="fas fa-map-marker-alt"></i></span>
	  					<span>广州</span>
	  					<span class="_right"><i class="fas fa-angle-right"></i></span> -->
              <el-cascader
                  :options="options"
                  v-model="selectedOptions"
                  @change="handleChange">
              </el-cascader>
  					</div>
  					
  					<p class="local">
  						<span><i class="fa fa-crosshairs"></i></span><br>
  						<span>我的位置</span>
  					</p>
  				</li>
  				<li>
            <!-- <div class="date">
              <div class="time">
                <p><span class="text">入住</span><br/></p>
                <p>
                  <span class="day">06</span>
                  <p>
                    <i class="far fa-calendar-alt"></i>
                    <span>02月</span>
                    <span>周二</span>
                  </p>
                </p>
              </div>
              <div class="time">
                <p><span class="text">退房</span><br/></p>
                <p>
                  <span class="day">10</span>
                  <p>
                    <i class="far fa-calendar-alt"></i>
                    <span>02月</span>
                    <span>周五</span>
                  </p>
                </p>
              </div>
            </div>   
            <div class="total" style="float:right;color:#aaa;padding-top:20px;font-size:16px;">
              <span>4晚</span>
              <i class="fas fa-angle-right"></i>
            </div>  -->
            <div class="block">
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
            </div>
          </li>
  				<li>
            <div class="select">
              <span><i class="fas fa-search-plus"></i></span>  
              <span>星级/类型/价格/设备</span>  
              <span class="angle"><i class="fas fa-angle-right"></i></span>
            </div>
            
          </li>
  			</ul>
        <div class="button">
          <button>查找酒店</button>
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
          options: [
            {
              value: 'guangdong',
              label: '广东省',
              children: [
                {
                  value: 'guangzhou',
                  label: '广州市'
                },
                {
                  value: 'shenzhengshi',
                  label: '深圳市'
                },
                {
                  value: 'foshan',
                  label: '佛山市'
                },
                {
                  value: 'zhaoqing',
                  label: '肇庆市'
                },
              ]
             }
          ],
          selectedOptions: ['guangdong','guangzhou'],
          value1: '',
          input1: ''
        }
      },
      computed: {

      }
  }  
</script>  

<style scoped lang='scss'>
	@import '../../common/css/common';
	.box{
		width: 100%;
    background-color: #fff;
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
          .map{
            padding-top: rem(10px) ;
            display: inline-block;
          }
          .local{
            float: right;
            text-align: center;
            color: #aaa;
            margin-top: rem(12px);
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