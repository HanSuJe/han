import Vue from 'vue'
import Router from 'vue-router'
import addresses from '@/account/addresses/index'
import edit_address from '@/account/addresses/edit'
import show_article from '@/choice/articles/show'
import commdoity from '@/indent/commdoity'
import choiceness from '@/choice/articles/choiceness'
import comment from '@/choice/articles/comment'
import confirm_order from '@/page/confirm_order'
import cashier from '@/refund/cashier'
import order_list from '@/indent/order_list'
import lint_item from '@/indent/lint_item'
import after_sales from '@/page/after_sales'
import after_sale from '@/page/after_sale'
import after_details from '@/page/after_details'
import after_details_two from '@/page/after_details_two'
import good_goods from '@/page/good_goods'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/account/addresses',
      name: 'addresses',
      component: addresses
    },
    {
      path: '/account/addresses/edit',
      name: 'edit_address',
      component: edit_address
    },
    {
      path: '/choice/articles/show',
      name: 'show_article',
      component: show_article
    },
    {
      path: '/commdoity',
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
    }, {
      path: '/confirm_order',
      name: 'confirm_order',
      component: confirm_order
    }, {
      path: '/cashier',
      name: 'cashier',
      component: cashier
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
      path: '/after_sales',
      name: 'after_sales',
      component: after_sales
    }, {
      path: '/after_sale',
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
