<template>
	<div class="box">
    <Header title="服务酒店"/>
		<!-- <div class="header">
		    <div class="big">
		    	<div class="ball"></div>
		    	<div class="text">
		    		<p class="agant">广东省广州市代理商</p>
		    		<p class="number"> 区域编号: 11221411</p>
		    	</div>
		    </div>
	    </div> -->
	    <div class="nav">
	    	<div class="green"></div>
	    	<span class="hotel">我服务的酒店</span>
	    	<span class="num">{{store_num}}</span>
	    </div>
        <div class="line"></div>
	    <div class="body">
	    	<div  class="item" v-for="(i,index) in store_name" :key="index">
                <div class="hotel_name">{{i.store_name}}</div>      
                <!-- <div class="right_box">
                    <div class="i">
                        <p class="green">1200</p>
                        <p class="room_nmb">开房数</p>
                    </div>
                    <div class="i">
                        <p class="green">1200</p>
                        <p class="room_nmb">总金额</p>
                    </div>
                    <div class="i">
                        <br/>
                        <router-link tag="p" :to="Fn.getUrl({path: '/my/incomeTable'})" class="room_nmb">详情</router-link>
                    </div>
                </div>   -->    
            </div>
            <div class="send_box">
          <!--  <span class="page">上一页</span>
           <span class="page">下一页</span> -->
        </div>
	    </div>
	</div>
</template>
<script>
	export default {
        mounted(){
            this.getData()
        },
		data(){
			return {
                store_num: 0,
                store_name: []
			}
		},
		methods: {
            getData(){
                let that = this
                this.Http.post({route:'finance.earning.earning-count&action=true&',data:{uid: this.$store.state.userInfo.uid}}).then(res=>{
                    that.store_num = res.data.data.store_num
                    that.store_name = res.data.data.store_name
                })
            }
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		background-color: #fff;
        margin-top: rem(20px);
        .header{
        	height: rem(125px);
            background-color: #43c122;
            .big{
            	padding: rem(25px) rem(15px);
				display: flex;            	
                .ball{
                	width: rem(75px);
                	height: rem(75px);
                	background-color: #e5e5e5;
                	border-radius: 50%;
                	display: inline-block;
                }
                .text{
                	width: rem(230px);
                	height: rem(62px);
                	margin-left: rem(12px);
                	margin-top: rem(6px);
                	.agant{
                		font-size: rem(17px);
                		color: #ffffff;
                		margin-top: rem(3px);
                	}
                	.number{
                		font-size: rem(13px);
                		color: #ffffff;
                		margin-top: rem(8px);
                		padding-left: rem(2px);
                	}
                }
            }
        }
        .nav{
        	display: flex;
            align-items: center;
        	padding: rem(12px) rem(13px);
        	background-color: #ffffff;
        	.green{
        		width: 0;
        		height: rem(17px);
        		border: #43c14c solid 2px;
        		margin-right: rem(8px);
        		}
        	.hotel{
        		font-size: rem(14px);
        		margin-right: 53%;
        	}
        	.num{
        		background-color: #43c122;
        		font-size: rem(14px);
        		color: #ffffff;
        		padding: rem(2px) 4%;
        		border-radius: rem(11px);
        	}
        }
        .line{
            border: #e5e5e5 solid rem(5px);
        }
        .body{
        	margin-top: rem(9px);
        	padding: rem(1px) rem(14px);
        	background-color: #ffffff;
        	.item{
                width: 100%;
                display: flex;
                align-items:center;
                border-bottom: #e5e5e5 solid rem(1px);
                margin-top: rem(10px);
                .hotel_name{
                    font-size: rem(14px);
                    width: 62%;
                    padding-bottom: rem(6px);
                }
                .right_box{
                    width: 40%;
                    display: flex;
                    justify-content: center;
                    .i{
                        margin-right: 6%;
                        .green{
                            color: #43c122;
                            font-size: rem(13px); 
                            font-weight: bold;
                        }
                    }
                }
            }
            .send_box{
                background-color: #ffffff;
                display: flex;
                justify-content: center;
                margin: rem(20px) 0;
                .page{
                    background-color: #43c122;
                    color: #ffffff;
                    padding: rem(8px) rem(15px);
                    font-size: rem(14px);
                    border-radius: rem(5px);
                    margin-right: 5%;
               }
            }
        }
	}
</style>