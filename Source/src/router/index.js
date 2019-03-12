import App from '../App';
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import index from '@/pages/index/index'
import story from '@/pages/story/story'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: index
      },{
        path: '/story',
        name: 'story',
        component: story
      }]
    }
    
  ]
})
