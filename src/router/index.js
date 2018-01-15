import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import bianjidz from '@/page/bianjidz'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
    }, {
            path: '/bianjidz',
            name: 'bianjidz',
            component: bianjidz
    }


  ]
})
