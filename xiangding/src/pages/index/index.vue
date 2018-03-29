<template>  
  <div class="box">
  		<div class="banner">
        <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for='(i,index) in arrItem' :key='index' class="swiper-slide">
            <div class="iSlide">
                <img class="img" :src="i.imgUrl">
              </div>
          </div>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
        
  		</div>
  		<div class="msg">
  			<ul>
  				<li>
  					<div class="map">
  						<span class="_right"><i class="fas fa-map-marker-alt"></i></span>
	  					<span>广州</span>
	  					<span class="_right"><i class="fas fa-angle-right"></i></span>
  					</div>
  					
  					<p class="local">
  						<span><i class="fa fa-crosshairs"></i></span><br>
  						<span>我的位置</span>
  					</p>
  				</li>
  				<li>
            <div class="date">
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
            <img :src="i.imgUrl">
            <div>
              <p class="min_title">
                <span class="one">{{i.name}}</span>
                <img :src="i.star">
                <img :src="i.star">
                <img :src="i.star">
                <img :src="i.star">
              </p>
              <p>
                <span>{{i.area}}&nbsp;&nbsp;/&nbsp;&nbsp;{{i.room}}间房</span>
                <span class="min_price">￥{{i.min_price}}起</span>
              </p>
            </div>
        </div>
      </div>
  </div>
</template>  
<script>  
  import Swiper from 'swiper' 
  export default{  
      mounted:function(){
        var mySwiper = new Swiper('.swiper-container', {
           
        })
      },
      data(){
      	return {
      		arrItem:[
      			{
      				name:'swiperSlide5',
      				imgUrl:'http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg'
      			},
      			{
      				name:'swiperSlide1',
      				imgUrl:'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'
      			},
      			{
      				name:'swiperSlide51',
      				imgUrl:'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'
      			},
      			{
      				name:'swiperSlide1111115',
      				imgUrl:'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'
      			}
      		],
          hotel: [
            {
              imgUrl: 'http://d6.yihaodianimg.com/N04/M09/35/35/CgQDrlOxMtiAAX-JAACqi31CJ7I44800.jpg',
              name: '广州银河大酒店',
              star:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522234915879&di=7df834c51f02fc1a257dc138835fb7f6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F57%2F64%2F72d58PICyn8_1024.png',
              area:'天河区',
              room:'360',
              min_price: '290'
            },
            {
              imgUrl: 'http://d6.yihaodianimg.com/N02/M01/20/C4/CgQCslN8UVqAQg-BAACw4isVwDs94800.jpg',
              name: '广州银河大酒店',
              star:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522234915879&di=7df834c51f02fc1a257dc138835fb7f6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F57%2F64%2F72d58PICyn8_1024.png',
              area:'天河区',
              room:'360',
              min_price: '290'
            },
            {
              imgUrl: 'http://file28.mafengwo.net/M00/E4/6B/wKgB6lPJkDGAKiGUAAWr55AgSgg98.rbook_comment.w1024.jpeg',
              name: '广州银河大酒店',
              star:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522234915879&di=7df834c51f02fc1a257dc138835fb7f6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F57%2F64%2F72d58PICyn8_1024.png',
              area:'天河区',
              room:'360',
              min_price: '290'
            },
            {
              imgUrl: 'http://pic35.photophoto.cn/20150512/0040039395981972_b.jpg',
              name: '广州银河大酒店',
              star:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522234915879&di=7df834c51f02fc1a257dc138835fb7f6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F57%2F64%2F72d58PICyn8_1024.png',
              area:'天河区',
              room:'360',
              min_price: '290'
            }

          ]
      	}
      }
  }  
</script>  

<style scoped lang='scss'>
	@import '../../common/css/common';
	.box{
		width: 100%;
    background-color: #fff;
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
          padding: rem(5px) 5% rem(8px);
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