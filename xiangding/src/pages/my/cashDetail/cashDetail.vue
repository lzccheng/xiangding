<template>
	<div class="box">
		<div class="header">
		    <div class="big">
		    	<div class="ball"></div>
		    	<div class="text">
		    		<p class="agant">广东省广州市代理商</p>
		    		<p class="number"> 区域编号: 11221411</p>
		    	</div>
		    </div>
	    </div>
	    <div class="nav">
	    	<!-- <div class="my_hotel">tt</div>
	    	<span>我服务的酒店</span>
	    	<div class="total_b">
	    	<div class="total">30</div>
	    	<div class="gt"><i class="fas fa-angle-right"></i></div>
	    	</div> -->
	    	<div class="green"></div>
	    	<span class="hotel">我服务的酒店</span>
	    	<span class="num">30</span>
	    </div>
	    <div class="body">
	    	<ul>
	    		<li>
	    			<span class="hotel_name">广州银河大酒店</span>
	    			<span>
	    				<span>1200</span>
	    				<span>开房数</span>
	    			</span>
	    			<span>
	    				<span>1200</span>
	    				<span>总金额</span>
	    			</span>
	    			<span>详情</span>
	    		</li>
	    		<li></li>
	    		<li></li>
	    		<li></li>
	    		<li></li>
	    	</ul>
	    </div>
	    <div class="page">
	        <div class="page_p">
		    	<div class="up">上一页</div>
		    	<div class="up">下一页</div>
	    	</div>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		methods: {

		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		background-color: #e5e5e5;
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
        		margin-right: 55%;
        	}
        	.num{
        		background-color: #43c122;
        		font-size: rem(14px);
        		color: #ffffff;
        		padding: rem(2px) rem(13px);
        		border-radius: rem(8px);
        	}
        }
        .body{
        	margin-top: rem(9px);
        	padding: rem(15px) rem(14px);
        	background-color: #ffffff;
        	ul{
        		li{
        			.hotel_name{
        				font-size: rem(14px);
        			}
        		}
        	}
        }
	}
</style>