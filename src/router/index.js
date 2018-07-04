import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) //注册这个路由模块


//引入 home  card film


import Home from "../components/home"
import detail from "../components/detail"
import myorder from "../components/myorder"

export default new Router({

  mode:"history", //默认 hash  #/home  history模式  /home 	
  routes: [
    {
        path:"/home",
        component:Home,

    }, 
    {
        path:"/myorder",
        component:myorder
    },
    {
    	path:"/detail/:id",
    	component:detail,
    },   
     {
    	path:"*",
    	redirect:"/home"
    }
  ]
})


// router.get("/aaa/aa")