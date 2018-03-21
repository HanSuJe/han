<!--订单详情-->
<template>
	<div >
          <head_r :title="'订单详情'"></head_r>
        <section class="dx_body">

            <section v-if="tyoe==0">
                <section class="dsf_jgh_err mui-row pd">
            <p class="mui-col-xs-2  h100 ds_jh_drttx">
                <i class="dx icon-yiqipindan cf fz30"></i>
            </p>
                    <section class="ov">
        <p class="cf mt20 fz16">
    拼单中…
    </p>
                        <p class="fz14 cf mt5">


    邀请好友拼单</p>
    </section>
            </section>

              <section class="mt10 bgff pd pt10 pm10 mui-row">
            <section class="mui-col-xs-8 ">
                <p class="z3">等待分享,还差4人</p>
                <section class="mt10">
                <p class="dsf_jh_erx yj ov bgls">
                <img src="static/img/longxia.jpg" >
                </p>

                     <p class="dsf_jh_erx yj ov bgls" v-for="df in 4">
            <i class="dx icon-wenhao "></i>
    </p>
                </section>

            </section>

                      <section class="mui-col-xs-4 tr">
              <p class="ye ">剩余：23:34:23</p>
    <p class="mt5">
        <span class="bkyy tyaui_ser yj20 ye">邀请好友拼单</span>
    </p>
    </section>

                </section>
            </section>

              <section v-if="tyoe==1">
                         <section class="dsf_jgh_err mui-row pd">
            <p class="mui-col-xs-2  h100 ds_jh_drttx">
                <i class="dx icon-daifahuo cf fz30"></i>
            </p>
                    <section class="ov">
        <p class="cf mt20 fz16">
    等待卖家发货
    </p>
                        <p class="fz14 cf mt5">


    20天5小时后商品自动确认</p>
    </section>
            </section>

    </section>



            <section v-if="tyoe==2||tyoe==3">
                <section class="dsf_jgh_err mui-row pd pr">
                    <span class="fz14 cf df_jhg_drtxc">顺丰速运</span>
            <p class="mui-col-xs-2  h100 ds_jh_drttx">
                <i class="dx icon-yifahuo cf fz30" v-if="tyoe==2"></i>
                  <i class="dx icon-pingjia cf fz30" v-if="tyoe==3"></i>
            </p>
                    <section class="ov" v-if="tyoe==2">
        <p class="cf mt20 fz16">
已发货
    </p>
                        <p class="fz14 cf mt5">


    20天5小时后商品自动确认</p>
    </section>
                           <section class="ov" v-else>
        <p class="cf mt20 fz16">
待评价
    </p>
                        <p class="fz14 cf mt5">


    客官，给个评价</p>
    </section>


            </section>

              <section class="mt10 bgff pd pt10 pm10 mui-row pr">
                    <p class="sd_jg_drertx ">
    <span class="cz_w  df_jh_dert">
    <i class="dx icon-yifahuo z3 fz30 cz_a"></i>
    </span>

    </p>
                        <section class="fz12 z3 pl60 pr20">
                            [北京市]快件已到达北京市通州分拣中心，下一站北苑配送站。[北京市]快件已到达北京市通州分拣中心，下一站北苑配送站。
                            <p class="z9 fz12">
                            2018-01-02
                            </p>
                        </section>

                  <i class="dx icon-right ddf_ut_er"></i>

                </section>


            </section>




                <ul class="mt10">
                    <li class="bgff mui-row btm mb10  pr" :class="tyoe==0?'pr60':''">
                        <section class="pd pt10 pm10">
                            <p class="fl map_sdrtxc">
                                <i class="dx icon-map ls fz20"></i>
                            </p>
                            <section class="ov">
                                <p class="z3 fz16">
                                 收货人：宋嘉
                                </p>
                                <p class="dianer mt5 diz_setx z3">
          北京市 通州区 通州北苑 东花市大街北里西区 22号 西侧B座 北塔 23层 2305室
                                </p>

                            </section>

                        </section>
                        <span class="bkyy ls bgff xiugai yj20 fz14" v-if="tyoe==0">修改</span>

                    </li>
                </ul>


            <section class="bgff pt10">

                  <section class=" pd">
      <tulist></tulist>
    </section>
                <p class="fz14 tr z3 mt20 pd">
    实付 ¥ 39.8
    </p>
        <p class="tr pd mt10 pm10">
    <a class="adsf_asd ye bkyy yj20 mr10" href="tel:13538190372">拨打电话</a>
<a class="adsf_asd ye bkyy yj20 ">联系卖家</a>
    </p>
            </section>


            <section class="bgff pd pt10 pm10 mt10 sdf_er_dretrx pr">
                   <span class="bkyy ls bgff xiugai yj20 fz14 ab">复制</span>
        订单编号 <span>1234567890123</span><br>
        支付方式 <span>支付宝</span>  <br>
        下单时间 <span>2017-12-11 10:25:30</span>



        </section>



    </section>

<!--        底部-->
         <section class="df_rx_ertx btm tr pd box" v-if="tyoe==0">
            <p class="box_a">

            </p>
                 <p class="box_a">
            </p>
                 <p class="box_a">
         <span class="yj20 bgye bkyy fz14 dsf_jh_ert">
    邀请好友拼单
    </span>
            </p>


    </section>


             <section class="df_rx_ertx btm tr pd box" v-if="tyoe==1">
            <p class="box_a">

            </p>
                 <p class="box_a">
                  <span class="yj20 ye bkyy fz14 dsf_jh_ert">
    申请退款
    </span>
            </p>
                 <p class="box_a">
           <span class="yj20 bgye bkyy fz14 dsf_jh_ert ">
    确认收货
    </span>
            </p>




    </section>





             <section class="df_rx_ertx btm tr pd box" v-if="tyoe==2">
            <p class="box_a">
               <span class="yj20 ye bkyy fz14 dsf_jh_ert">
    申请退款
    </span>
            </p>
                 <p class="box_a">
                  <span class="yj20 ye bkyy fz14 dsf_jh_ert">
    催发货
    </span>
            </p>
                 <p class="box_a">
           <span class="yj20 bgye bkyy fz14 dsf_jh_ert ">
    确认收货
    </span>
            </p>




    </section>



               <section class="df_rx_ertx btm tr pd box" v-if="tyoe==3">
            <p class="box_a">
               <span class="yj20 ye bkyy fz14 dsf_jh_ert">
    申请退款
    </span>
            </p>
                 <p class="box_a">
                  <span class="yj20 ye bkyy fz14 dsf_jh_ert">
    再来一份
    </span>
            </p>
                 <p class="box_a">
           <span class="yj20 bgye bkyy fz14 dsf_jh_ert ">
    去评价
    </span>
            </p>




    </section>





	</div>
</template>
<script>
    import head_r from '../components/head_r.vue'
    import tulist from '../components/tulist.vue'
    export default {
        data() {
            return {
                tyoe: ""
            }
        },
        components: {
            head_r: head_r,
            tulist: tulist
        },
        methods: {

        },
        mounted() {
             this.Title("订单详情")
            window.scrollTo(0,0);
            this.tyoe = this.$route.query.type
        },
    }

</script>
<style scoped>
    .dsf_jh_erx {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        float: left;
        margin-right: 5px;
    }

    .dsf_jh_erx img {
        width: 100%;
        height: 100%;
    }

    .tyaui_ser {
        width: 100px;
        text-align: center;
        line-height: 36px;
        display: inline-block;
    }

    .df_jhg_drtxc{
        position: absolute;
        right: 10px;
        top: 30px;
    }
    .sd_jg_drertx{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 50px;
        height: 100%;
        text-align: center;
    }
    .df_jh_dert{
        height: 100%;
        width: 100%;
        text-align: center;
    }
    .ddf_ut_er{
        position: absolute;
        right: 10px;
        top: 44%;
    }
</style>
