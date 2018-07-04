<template>
  <div>
    <navbar></navbar>
        <router-view></router-view>
     <foot></foot>
  </div>
</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script type="text/javascript">
 

import navbar from "./components/common/navbar";
import foot from "./components/footer"

export default {

  data(){
    return {
      isShow:false
    }
  },
  components:{
    navbar,
    foot
  }  
}



</script>

<style lang="scss" >


  .kerwinactive{
    background-color: red;
  }


  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box
  }

  html,body{
    height: 100%;
    overflow-y:scroll
  }


  ul {
    list-style: none;
  }

  section{
    position: relative;
    top:0px;
  }
</style>