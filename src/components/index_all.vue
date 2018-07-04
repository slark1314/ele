<template>
	<div>
		  <el-tabs :tab-position="tabPosition" class="tabs" @tab-click="showallvendor">
		    <el-tab-pane :label ="data.name" v-for="data in list" :key="data.id" >
		    	<span href="" v-for="small in data.sub_categories" :key = "small.id" @click="tianlei(small.id)">{{small.name}}</span>
		    </el-tab-pane>
		  </el-tabs>
		 <ul class = "product">
		 	<li v-for="data in datalist"  @click="todetail(data.id)">
		 	<img :src="`//fuss10.elemecdn.com/${data.image_path.substr(0,1)}/${data.image_path.substr(1,2)}/${data.image_path.substr(3,data.image_path.length-1)}.${data.image_path.substr(32,data.image_path.length)}?imageMogr2/thumbnail/70x70/format/webp/quality/85`"/>
		 	<div>
		 	<p>{{data.name}}</p>
		 	<span>{{data.piecewise_agent_fee.description}}</span>
		 	</div>
		 	</li>
		 </ul>	
	</div>
</template>
<script type="text/javascript">
	import router from  "../router"
	import axios from "axios";//
	export default{

		data(){
			return {
				foodlist:[],
				tabPosition: 'top',
				list:[],
				datalist:[],
				urllist:[],
				indexurl:[
				'a',-100,207,220,260,233,-102,244,252,275,276,-103,-104,-105,-107,-106,
				]
			}
		},
		methods:{
			todetail(id){
				console.log(id,router)
				router.push("/detail")
			},
			showallvendor(data){

				if(data.index==0){
					this.foodlist=[]
					this.datalist=[]
					axios.get(`/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wtw37q7f8m2m&latitude=31.192017&limit=24&longitude=121.437046&offset=0&sign=1530672389360&terminal=web`).then(res=>{	
						this.datalist = res.data
						for(var i = 0;i<=res.data.length;i++){
							this.foodlist.push(res.data[i])
						}				
					})
				}else{
				this.foodlist=[]
				this.datalist=[]
				axios.get(`/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wtw37q7f8m2m&latitude=31.192017&limit=24&longitude=121.437046&offset=0&restaurant_category_ids%5B%5D=${this.indexurl[data.index]}&sign=1530623530224&terminal=web`).then(res=>{	
					this.datalist = res.data
					for(var i = 0;i<=res.data.length;i++){
						this.foodlist.push(res.data[i])
					}				
				})
			}
			},
			tianlei(data){
				this.foodlist=[]
				this.datalist=[]
				axios.get(`/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wtw37q7f8m2m&latitude=31.192017&limit=24&longitude=121.437046&offset=0&restaurant_category_ids%5B%5D=${data}&sign=1530623530224&terminal=web`).then(res=>{	
					this.datalist = res.data
					for(var i = 0;i<=res.data.length;i++){
						this.foodlist.push(res.data[i])
					}			
				})
			}
		},
		created(){
			axios.get("/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wwmt70gy6fb&latitude=36.08431&limit=24&longitude=120.37148&offset=0&terminal=web").then(res=>{	
				for(var i = 0;i<=res.data.length;i++){
					var path = `//fuss10.elemecdn.com/${res.data[i].image_path.substr(0,1)}/${res.data[i].image_path.substr(1,2)}/${res.data[i].image_path.substr(3,res.data[i].image_path.length-1)}.${res.data[i].image_path.substr(32,res.data[i].image_path.length)}?imageMogr2/thumbnail/70x70/format/webp/quality/85`
					this.datalist.push(res.data[i])
				}
			})
		},
		mounted(){
			axios.get("/restapi/shopping/v2/restaurant/category?latitude=31.192017&longitude=121.437046").then(res=>{	
				this.list =res.data
				for(var i = 2;i<=res.data.length;i++){
				}
			})
		}
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
			width: 25%;
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
		.tabs{
			margin:0 auto;
			width: 1180px;
			height: 100px;
		}
		.tabs span{
			display: block;
			height: 30px;
			background: #f6f6f6;
			margin-left: 10px;
			float: left;
			text-align:center;
			line-height: 30px;
			border-radius:3px ;
			text-decoration:none;
			line-height: 30px;
			color: #666;
			padding: 2px 5px;
			font-size: 14px;
			cursor: pointer;
		}
		.tabs span:hover{
			color: #fff;
			background: #0089dc
		}
			</style>