<!--申请售后-->
<template>
	<div >
              <head_r :title="'地址管理'"></head_r>
        <section class="dx_body">
            
            
            <ul class="dsf_ul_dsf pd">
                <li class="bkyy" v-for="d in 6" @click="hf('shouhou')">
        <p class="fz16 z3">退货退款</p>
                    <p class="fz14 mt10">
    我已收到货
    </p>
                    <i class="dx icon-right cdf_khj_drt fz22"></i>
                    </li>
                
            </ul>
             
    </section>
        
	</div>
</template>
<script>
      import head_r from '../components/head_r.vue'
    export default {
        data() {
            return {
                
            }
        },
        components: {
          head_r:head_r
        },
        methods: {
           
        },
      mounted(){
    this.Title("申请售后")
        },
    }

</script>
<style scoped>
 
    .dsf_ul_dsf li{
        background: #fff;
        border-radius: 20px;
        padding: 27px 20px;
        margin-top: 15px;
        position: relative
        
    }
    .cdf_khj_drt{
        position: absolute;
        right: 10px;
        top: 40%
    }


</style>
