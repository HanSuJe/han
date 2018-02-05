import Vue from 'vue'
import Router from 'vue-router'
import edit_address from '@/account/addresses/edit'
import new_address from '@/account/addresses/new'
import commdoity from '@/indent/commdoity'
import choiceness from '@/page/choiceness'
import comment from '@/page/comment'
import confirm_order from '@/page/confirm_order'
import cashier from '@/refund/cashier'
import order_list from '@/indent/order_list'
import lint_item from '@/indent/lint_item'
import after_sales from '@/page/after_sales'
import after_sale from '@/page/after_sale'
import after_details from '@/page/after_details'
import after_details_two from '@/page/after_details_two'
Vue.use(Router)
export default new Router({
    routes: [
        {
          path: '/account/addresses/edit',
            name: 'edit_address',
            component: edit_address
    }, {
        path: '/account/addresses/new',
            name: 'new_address',
            component: new_address
    }, {
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
    }




  ]
})
