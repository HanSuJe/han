<!--确认订单-->
<template>
	<div >
              <head_r :title="'确认订单'"></head_r>
        <section class="dx_body ">
            
                   
                <ul>
                    <li class="bgff mui-row btm mb10" >
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
                        
                        
                    </li>
                </ul>
            
            
             
    <section class=" pt10 pm10 bgff">
        
            <section class="pd">
            <img src="static/img/longxia.jpg" class="user_iyer yj cz">
                <span class="ml5 fz16 z3">绿森特商贸帝国</span>
                <i class="dx icon-right"></i>
        </section>
      <section class="mt10 pd">
      <tulist></tulist>
    </section>
        
        <ul class="sd_iyh_er mt10">
            <li class="btm pd fz14 pr">
    数量
                
                
                    <section class="dsf_kjh_derr mui-row br">
                    <p class="mui-col-xs-3 dsf_hjgh_ser aa" @click="sd_sd_sd(1)">
        <span>-</span>
    </p>
           <p class="mui-col-xs-6 h100">
                <input type="text" class="w100 cen"  v-model="num">
            </p>
                
                    <p class="mui-col-xs-3 dsf_hjgh_ser ab" @click="sd_sd_sd(0)">
         <span>+</span>
    </p>
            </section>   
                
                
                
    </li>
                      <li class="btm pd fz14">
    店铺优惠
    <span class="fr z3">
    领券满50减20<i class="dx icon-right"></i>
    </span>
    </li>
        </ul> 
        
        <section class="btm pd pt10">
    <p class="z3">
        原价 <span class="fr">￥53.90</span>
    </p>
                <p class="z3 mt10">
        已优惠 <span class="fr">-￥20</span>
    </p>
    </section>
        
    </section>
            
    </section>
        
        
        <section class="zifu_dder btm pd z6 "> 
        <span class="fz14">实付</span>
            <span class="ye ml5 ">¥ 33.90</span>
    
            <span class="yj20 bkyy bgye sd_jhdrtxc fz14" @click="hf('cashier')">立即支付</span>
        </section>
        
	</div>
</template>
<script>
    import head_r from '../components/head_r.vue'
    import tulist from '../components/tulist.vue'
    export default {
        data() {
            return {
                num: 1
            }
        },
        components: {
            head_r: head_r,
            tulist: tulist
        },
        methods: {
            sd_sd_sd(ty) {
                if (ty == 0) {
                    this.num++
                } else if (ty == 1) {
                    if (this.num > 1) {
                        this.num--
                    }

                }
            }
        },
        mounted() {
       this.Title("确认订单")
        },
    }

</script>
<style scoped>


    .dsf_kjh_derr input{
       position: relative;
        bottom: 7px;
    }
    .zifu_dder{
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 65px;
        background: #fff;
        line-height: 50px;
    }
    .sd_jhdrtxc{
        width: 140px;
        height: 40px;
        position: absolute;
        right: 10px;
        line-height: 40px;
        text-align: center;
        top: 5px
    }
</style>
