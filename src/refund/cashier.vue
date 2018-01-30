<!--收银台-->
<template>
	<div >
           <head_r :title="'收银台'"></head_r>
        <section class="dx_body">
            <section class="bgff pd pt20">
        <tulist></tulist>
    <p class="tr mt20">
        <span>实付</span>
          <span class="fz24 ye">￥33.90</span>
    </p>
                
            <section class="mt40 mui-row pd pm40">
        <p class="mui-col-xs-6  cen">
            <a class="bkyy z3 sd_jgh_ds yj20">
                <i class="dx icon-weixinzhifu ls fz24 cz"></i>
                <span>微信支付</span>
            </a>
        </p>
    
                
                <p class="mui-col-xs-6  cen">
            <a class="bkyy z3 sd_jgh_ds yj20">
                <i class="dx icon-zhifubao lser fz24 cz"></i>
                <span>支付宝支付</span>
            </a>
        </p>
    </section>    
                
    </section>
        </section>
	</div>
</template>
<script>
      import head_r from '../components/head_r.vue'
              import tulist from '../components/tulist.vue'
    export default {
        data() {
            return {
              
            }
        },
        components: {
            head_r:head_r,
            tulist:tulist
        },
        methods: {
           
        },
      mounted(){

        },
    }

</script>
<style scoped>
    .sd_jgh_ds{
        line-height: 40px;
        height: 40px;
        display: inline-block;
        width: 148px;
        text-align: center;
        background: #fff;
    }


</style>
