<!--评论-->
<template>
	<div >
           <head_r :title="'评论'"></head_r>
        <section class="dx_body">
    
            
            <section class="bgff ">
       
            <ul class="df_jug_er">
                <li class="btm pd pt10 pm10"  v-for="dsf in 10">
                    <section class="mui-row">
                    <section class="mui-col-xs-8 dian">
                    <img src="static/img/longxia.jpg" class="user_iysdf yj cz fl mt5">
                        <section class="ov pl10">
                            <p class="z3 fz14">用户昵称</p>
                            <p class="z9 fz12">
    规格：500g/袋
                            </p>
                        </section>
                
                    </section>
                    <section class="ov  z9 fz12 tr pt10">
                            17/12/8
                    </section> 
                        
                        
                        
                </section>
                    
                    <p class="z3 mt10">
                            如果你无法简洁的表达你的想法，那只说明你不够了解它。如果你无法简洁的表达你的想法，那只说明你不够了解它。如果你无法简洁的表达你的想法，那只说明你不够了解它。
                        </p>
    
                </li>
            
            </ul>
                
                
    
        </section>
            
            
            
        </section>
        
             <section class="tibu_jhsd btm pd mui-row">
                <p class="mui-col-xs-12 d_jgh_ddtx pt5">
                    <i class="dx icon-bianji fd_jgh_bsrt fz22"></i>
                    <input type="text" placeholder="我也有话说" >
                </p>
           
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
window.scrollTo(0,0);
           this.Title("评论")
        },
    }

</script>
<style scoped>



</style>
