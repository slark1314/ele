<template>
	<div class = "all">
		<nav>
			<h1>饿了么</h1>
			<ul>
				<li><a href="../home">首页</a></li>
				<li><a href="../myorder">我的订单</a></li>
				<li><a href="">加盟合作</a></li>
				<li><a href="">我的客服</a></li>
			</ul>
			<div class="phoneapp">
				手机应用
				<div class="erweima">
					<span>扫一扫, 手机订餐更方便</span>
					<img src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png">
				</div>
			</div>
			<div class="phone">18****12</div>
		</nav>
	</div>

</template>

<script type="text/javascript">
import  indexall from "../index_all";

	export default{
		data(){
			return {
				isshow:false
			}
		},
		components:{
			indexall,
		}
	}
</script>



<style type="text/css" scoped>
.all{
	height: 60px;
	width: 100%;
	background: #1e89e0;
	box-sizing: border-box;
}
	nav{
		height: 100%;
		width: 1180px;
		margin: 0 auto;
		position: relative;
		
		}
	h1{
		width: 120px;
		height: 60px;
		float: left;
		text-align:center;
		line-height: 60px;
		color: #fff;
	}
	nav li a{
		height: 60px;
		width: 112px;
		line-height: 60px;
		font-size: 16px;
		padding: 20px  50px;
		text-decoration:none;
		color: #fff;
		text-align:center;
	}
	nav li {
		float: left;
		list-style: none
	}
	nav li:hover{
		background: #006bc7
	}
	nav .phoneapp{
		float: left;
		margin-left: 100px;
		height: 60px;
		width: 100px;
		line-height: 60px;
		font-size: 16px;
		text-decoration:none;
		color: #eee;
		text-align:center;
		cursor: pointer;
	}
	.erweima{
		background: rgba(255,255,255,.98);
		box-shadow: 0 1px 2px rgba(0,0,0,.5);
		width: 200px;
		position: absolute;
		top: 60px;
		left: 850px;
		z-index: 10;
		display: none;
		padding: 3px 10px;
		}
		.erweima img{
			height: 180px;
			width: 180px;
		}
		.erweima span{
			color: #222;
			font-size: 16px;
			font-weight: 900;
		}
		.phoneapp:hover .erweima{
			display: block
		}
		nav .phone{
			float: right;
			margin-left: 100px;
			height: 60px;
			width: 100px;
			line-height: 60px;
			font-size: 16px;
			text-decoration:none;
			color: #eee;
			text-align:center;
			cursor: pointer;
		}

		</style>