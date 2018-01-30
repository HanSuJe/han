<!--售后详情-->

<template>
	<div >
          <head_r :title="'售后详情'"></head_r>
        <section class="dx_body">
            
                <section class="dsf_jgh_err mui-row pd">
            <p class="mui-col-xs-2  h100 ds_jh_drttx">
                <i class="dx icon-refund cf fz30"></i>
            </p>
                    <section class="ov">
        <p class="cf mt20 fz16">
退货退款等待商家确认 <span class="fz12 fr ">18/1/22 22:22:22</span>
    </p>
                        <p class="fz14 cf mt5">
    
    
    7日后未确认，平台将介入帮您处理</p>
    </section>
            </section>
            
            
            
                     <section class="bgff pt10 mt10">
            
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
        退款类型 <span>退货退款</span><br>
        退款金额 <span>¥ 35.90</span>  <br>
        退款原因 <span>其他</span>        
                
                
    
        </section>
            
            
            
            
            
    </section>
        
        
        
               <section class="df_rx_ertx btm tr pd box pm10" >
            <p class="box_a">
               <span class="yj20 ye bkyy fz14 dsf_jh_ert">
    取消申请
    </span>
            </p>
                 <p class="box_a">
                  <span class="yj20 ye bkyy fz14 dsf_jh_ert">
    修改申请
    </span>
            </p>
                 <p class="box_a">
                      <span class="yj20 ye bkyy fz14 dsf_jh_ert">
    平台申诉
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



</style>
