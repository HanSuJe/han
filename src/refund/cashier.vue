<!--收银台-->
<template>
	<div >
           <head_r :title="'收银台'"></head_r>
        <section class="dx_body">
            <section class="bgff pd pt20">
        <tulist :orderInfo="orderInfo"></tulist>
    <p class="tr mt20">
        <span>实付</span>
          <span class="fz24 ye">{{orderInfo.total_fee}}</span>
    </p>

            <section class="mt40 mui-row pd pm40">
        <p class="mui-col-xs-6  cen" @click="vokeWeChatPay()" v-for="pay in payWays">
            <a class="bkyy z3 sd_jgh_ds yj20" v-show="pay.mode==='wechat_pay'">
                <i class="dx icon-weixinzhifu ls fz24 cz"></i>
                <span>微信支付</span>
            </a>
        </p>
                <p class="mui-col-xs-6  cen" @click="vokeALiPay()" v-for="pay in payWays" v-show="pay.mode==='alipay'">

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
                order_uuid:"",
                orderInfo:{},
                payWays:[]
            }
        },
        components: {
            head_r:head_r,
            tulist:tulist
        },
        methods: {
          getPayWayInfo(){
            const _this = this;
            let obj = {
              order_uuid:this.order_uuid
            }
            this.ge_t('/v1/payment/modes',obj,function (data) {
              console.log("get pay info:",data);
              if(data.code ===200){
                _this.orderInfo = data.data.settlement;
                _this.payWays = data.data.modes;
              }
            })
          },
          //微信支付
          vokeWeChatPay(){
            const _this = this;
            window.locahost.herf=_this.payWays[0].scheme;
          },
          //支付宝支付
          vokeALiPay(){
            const _this = this;
            window.locahost.herf=_this.payWays[1].scheme;
          }
        },
        mounted(){
          this.order_uuid = this.$route.query.order_uuid;
          document.title = "收银台";
          this.getPayWayInfo();
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
