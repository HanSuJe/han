<!--售后详情二-->

<template>
	<div >
          <head_r :title="'售后详情'"></head_r>
        <section class="dx_body">
            
                <section class="dsf_jgh_err mui-row pd">
            <p class="mui-col-xs-2  h100 ds_jh_drttx">
                <i class="dx icon-refund cf fz30"></i>
            </p>
                    <section class="ov">
        <p class="cf mt30 fz16">
退货退款等待商家确认 <span class="fz12 fr ">18/1/22 22:22:22</span>
    </p>
                       
    </section>
            </section>
            
            
            
                    
            
            
               
            <section class="bgff pd pt10 pm10 mt10 sdf_er_dretrx pr">
        退款类型 <span>退货退款</span><br>
        退款金额 <span>¥ 35.90</span>  <br>
        退款原因 <span>其他</span>    <br>
                商品名称 <span>退货退款</span>    <br>
                   订单编号 <span>1111111111111</span>    <br>
                   申请时间 <span>18/1/22 22:22:22</span>   
                
                
    
        </section>
            
                 <section class="bgff pd pt10 pm10 mt10 sdf_er_dretrx pr ab">
    请将货品邮寄至<br>
        宋嘉 13109002930<br>
              北京市 通州区 通州北苑 东花市大街北里西区 22号 西侧B座 北塔 23层 2305室       <br>
                   备注：谢谢惠顾，运费自理  <br>
                     
                     
    </section>
            
            
                <ul class="sd_iyh_er  bgff mt10">
                  
             <li class="btm pd fz14 pr">
    选择快递
    <span class="fr z3">
        
        <span v-if="kuaidi">{{kuaidi}}</span>
        <span class="z9" v-else>请选择</span>
        <i class="dx icon-right"></i>
    </span>
        <select class="tou_dertxc" v-model="kuaidi">
            <option>圆通</option>
             <option>中通</option>
             <option>顺丰</option>
        </select>
    </li> 
                    
    <li class="btm pd fz14 pr">
            <span class="f_b dsf_jhh_dr fl">选择快递</span>
        <p class="ov">
        <input type="text" placeholder="请填写快递单号" class="dsf_jh_drtr">
    </p>
                         
    </li>
    </ul>
            
            
            
            
            
    </section>
        
        
        
               <section class="df_rx_ertx btm tr pd box pm10" >
            <p class="box_a">
           
            </p>
                 <p class="box_a">
       
            </p>
                 <p class="box_a">
                      <span class="yj20 ye bkyy fz14 dsf_jh_ert">
    提交
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
              kuaidi:""
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

    .sdf_er_dretrx.ab{
        border-left: 2px solid RGBA(249, 125, 79, 1)
    }
    .dsf_jhh_dr{
        width: 70px;
    }

    .dsf_jh_drtr{
        border: 0px;
        font-size: 14px;
        text-indent: 0px;
        margin: 0px
    }
</style>
