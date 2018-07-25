import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home.vue'
import theme from '../page/theme.vue'
import article from '../page/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/theme',
      component: theme,
      name: 'theme'
    }, 
    {
      path: '/article',
      component: article,
      name: 'article'
    }
  ]
})
