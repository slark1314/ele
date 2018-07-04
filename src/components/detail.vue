<template>
	<div>
		<detailhead></detailhead>
		<detailside></detailside>
		<detailmenu></detailmenu>
		<detailproduction></detailproduction>

			<!-- 二级路由容器		 -->
			<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
import detailhead from "./detailhead.vue"
import detailside from "./detailside.vue"
import detailmenu from "./detailmenu.vue"
import detailproduction from "./detailproduction.vue"
import foot from "./footer.vue"

	export default{
		components:{
			detailhead,
			detailside,
			foot,
			detailmenu,
			detailproduction
		}
	}
</script>



<style type="text/css" lang="scss" scoped>
	
</style>