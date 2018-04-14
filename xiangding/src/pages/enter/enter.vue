<template>
	<div class="box">
		<div class="background">
			
		</div>
		<div class="enter">
			<router-link class="hotelEnter" tag="div" to="/enter/hotelEnter">
				<p><span class="icon"><i class="fas fa-user-plus"></i></span></p>
				<span class="text">酒店入驻</span>
			</router-link>
			<router-link class="agentEnter" tag="div" to="/enter/agantEnter">
				<p><span class="icon"><i class="far fa-handshake"></i></span></p>
				<span class="text">代理服务商入驻</span>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common';
	.box{
		width: 100%;
		height: 100%;
		div{
			&.enter{
				width: 80%;
				position: absolute;
				left: 50%;
				top: 0;
				margin-left: -40%;
				div{
					
					height: rem(200px);
					border-radius: rem(15px);
					margin: rem(50px) auto;
					text-align: center;
				}
			}
			&.background{
				width: 100%;
				height: 100%;
				background-color: #fff;
				background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523678917746&di=9d67e28303460dfdcd4a4e6734b629f1&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120530%2F188024-1205300PQ373.jpg');
				background-repeat: no-repeat;
				background-attachment: fixed;
				background-position: top;
				filter: blur(4px);
			}
		}
		.hotelEnter{
			background: linear-gradient(to bottom, #155880 , #94bf80);
		}
		
		.agentEnter{
			background: linear-gradient(to bottom, #94bf80 , #155880);
		}
		.text{
			color: #fff;
			font-size: rem(16px);
		}
		p{
			padding-top: rem(30px);
			.icon{
				color: #fff;
				font-size: rem(90px);
				margin-top: rem(20px);
			}
		}
	}
</style>