<template>
	<div >
		我的订单
	</div>
</template>

<script type="text/javascript">

	export default{

		}

</script>



<style type="text/css" scoped>

		li{list-style: none;}

		body{
			background: #eee
		}
		ul{
			width: 1280px;
			background: yellow;
			margin: auto;
		}
		ul li{
			width: 320px;
			height: 140px;
			padding: 20px;
			float: left;
			background: white;
			border-bottom: 1px solid #eee

		}
		.product li:hover{
			background: #eee
		}
		ul li img{
			height: 100px;
			width: 100px;
			background: hotpink;
			float: left;
		}
		ul li div{
			float: left;
			height: 100%;
			width:160px;
			margin-left: 20px;
		}
		ul li div span{
			display: block;
			margin-top: 50px;
			color:#999;

			font-size: 12px;
		}
		ul li div p{
			width: 160px;
			height: 21px;
			overflow:ellipsis;
			color: #0089dc;
			font-weight: 900;
		}
			</style>