<!--订单-->
<template>
	<div >
        
        <section class="dsf_jh_derr btm pl10">
                <span class="act">全部</span>
                 <span>待付款</span>
                 <span>待发货</span>
                 <span>拼单中</span>
                 <span>待收货</span>
        </section>
        <section class="dx_body mt50">
     
            <section class="bgff btm  pt10 mt2 mb8" >
            
               <section class="pd">
            <img src="static/img/longxia.jpg" class="user_iyer yj cz">
                <span class="ml5 fz16 z3">绿森特商贸帝国</span>
                <i class="dx icon-right"></i>
                   <span class="ls fz14 fr mt2">拼单中…</span>
        </section>
      <section class="mt10 pd">
      <tulist></tulist>
    </section>
                <p class="fz14 tr z3 mt20 pd">
    实付 ¥ 39.8
    </p>
        <p class="tr pd mt10 pm10">

<a class="adsf_asd bgye bkyy yj20 " @click="hf('lint_item',{type:0})">邀请好友拼单</a>
    </p>
                
                </section>
            
            
            
               <section class="bgff btm  pt10 mt2 mb8" >
            
               <section class="pd">
            <img src="static/img/longxia.jpg" class="user_iyer yj cz">
                <span class="ml5 fz16 z3">绿森特商贸帝国</span>
                <i class="dx icon-right"></i>
                   <span class="ls fz14 fr mt2">等待发货</span>
        </section>
      <section class="mt10 pd">
      <tulist></tulist>
    </section>
                <p class="fz14 tr z3 mt20 pd">
    实付 ¥ 39.8
    </p>
        <p class="tr pd mt10 pm10">
<a class="adsf_asd ye bkyy yj20 " @click="hf('lint_item',{type:1})">催发货</a>
<a class="adsf_asd bgye bkyy yj20 ml10" @click="hf('lint_item',{type:2})">再次购买</a>
    </p>
                
                </section>
            
            
            
              <section class="bgff btm  pt10 mt2 mb8" >
            
               <section class="pd">
            <img src="static/img/longxia.jpg" class="user_iyer yj cz">
                <span class="ml5 fz16 z3">绿森特商贸帝国</span>
                <i class="dx icon-right"></i>
                   <span class="ls fz14 fr mt2">交易取消</span>
        </section>
      <section class="mt10 pd">
      <tulist></tulist>
    </section>
                <p class="fz14 tr z3 mt20 pd">
    实付 ¥ 39.8
    </p>
        <p class="tr pd mt10 pm10">
<a class="adsf_asd ye bkyy yj20 " @click="hf('lint_item',{type:1})">删除订单</a>
<a class="adsf_asd bgye bkyy yj20 ml10" @click="hf('lint_item',{type:3})">再次购买</a>
    </p>
                
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
            head_r: head_r,
            tulist: tulist
        },
        methods: {

        },
        mounted() {
        this.Title("订单列表")
        },
    }

</script>
<style scoped>
    .dsf_jh_derr {
        background: #fff;
        line-height: 40px;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        overflow: auto;
        white-space: nowrap;
    }
    
    .dsf_jh_derr span {
        font-size: 16px;
        margin-right: 20px;
    }
    
    .dsf_jh_derr span.act {
        color: #37B46E;
        border-bottom: 1px solid #37B46E;
        padding-bottom: 8px;
    }
   
</style>
