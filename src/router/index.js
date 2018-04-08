import Vue from 'vue'
import Router from 'vue-router'
import addresses from '@/account/addresses/index'
import edit_address from '@/account/addresses/edit'
import show_article from '@/choice/articles/show'
import commdoity from '@/indent/commdoity'
import evaluate from '@/indent/evaluate'
import choiceness from '@/choice/articles/choiceness'
import comment from '@/choice/articles/comment'
import confirm_order from '@/page/confirm_order'
import cashier from '@/refund/cashier'
import pay_result from '@/refund/pay_result'
import share from '@/refund/share'
import order_list from '@/indent/order_list'
import lint_item from '@/indent/lint_item'
import after_sales from '@/page/after_sales'
import after_sale from '@/page/after_sale'
import after_details from '@/page/after_details'
import after_details_two from '@/page/after_details_two'
import good_goods from '@/page/good_goods'
import product_details from '@/mall/products/details'
import agreement from '@/page/agreement'
import destail from '@/messages/destail'
import shops from '@/mall/shops'
import selection from '@/components/selection'
import grab from '@/components/grab'
import newitems from '@/components/newitems'
import footprint from '@/components/footprint'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:{name:'footprint'}
    },
    {
      path:'/components/footprint',
      name:'footprint',
      component:footprint
    },
    {
      path:'/components/newitems',
      name:'newitems',
      component:newitems
    },
    {
      path:'/components/grab',
      name:'grab',
      component:grab
    },
    {
      path:'/components/selection',
      name:'selection',
      component:selection
    },
    {
      path: '/account/addresses',
      name: 'addresses',
      component: addresses
    },
    {
      path: '/account/addresses/edit',
      name: 'edit_address',
      component: edit_address
    },{
      path: '/agreement',
      name: 'agreement',
      component: agreement
    },{
      path: '/shops',
      name: 'shops',
      component: shops
    },
    {
      path: '/messages/destail',
      name: 'destail',
      component: destail
    },
    {
      path: '/choice/articles/show',
      name: 'show_article',
      component: show_article
    },
    {
      path: '/commdoity/:style_uuid',
      name: 'commdoity',
      component: commdoity
    }, {
      path: '/choiceness',
      name: 'choiceness',
      component: choiceness
    }, {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: evaluate
    },
    {
      path: '/confirm_order',
      name: 'confirm_order',
      component: confirm_order
    }, {
      path: '/cashier',
      name: 'cashier',
      component: cashier
    },
    {
      path: '/pay_result',
      name: 'pay_result',
      component: pay_result
    },{
      path: '/share/:uuid',
      name: 'share',
      component: share
    }, {
      path: '/order_list',
      name: 'order_list',
      component: order_list
    },
    {
      path: '/lint_item',
      name: 'lint_item',
      component: lint_item
    },
    {
      path: '/mall/products/details',
      name: 'product_details',
      component: product_details
    },
    {
      path: '/after_sales',
      name: 'after_sales',
      component: after_sales
    }, {
      path: '/after_sale/:order_uuid',
      name: 'after_sale',
      component: after_sale
    }, {
      path: '/after_details',
      name: 'after_details',
      component: after_details
    }, {
      path: '/after_details_two',
      name: 'after_details_two',
      component: after_details_two
    },

    {
      path: '/good_goods',
      name: 'good_goods',
      component: good_goods
    }


  ]
})
