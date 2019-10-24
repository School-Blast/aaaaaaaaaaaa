import Vue from 'vue'
import VueRouter from 'vue-router'
import A from '../components/Route/A'
import B from '../components/Route/B'
import C from '../components/Route/C'
import D from '../components/Route/D'
import E from '../components/Route/E'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/a"
  },

  {
    path:"/a",
    name:"A",
    component:A
  },
  {
    path:"/b",
    name:"B",
    component:B
  },
  {
    path:"/c",
    name:"C",
    component:C
  },
  {
    path:"/d",
    name:"D",
    component:D
  },
  {
    path:"/e",
    name:"E",
    component:E
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
