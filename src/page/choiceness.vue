<!--精选-->
<template>
	<div >
           <header class="head_sdrt pd cen">
        <i class="dx icon-left tujh_dt" @click="$router.back(-1)"></i>
        <span class="fz16">永辉京东到家…城356家门店</span>
               <i class="dx icon-iconfontzhizuobiaozhun20 fenxiasrcc fz18"></i>
    </header>
        <div class="dx_body">
    
    <p class="sd_jh_ertxc">
    
    <img src="static/img/longxia.jpg">
    </p>
            
        <section class="bgff pd pt10 ">
        <p class="fz24 z3 cen df_err_e">
    永辉京东到家合作2年 覆盖近20城356家门店
    </p>
            <p class="fz16 z3 dsf_jh_erx mt5">
    【亿邦动力网讯】12月15日消息，永辉超市（鲁谷店）入驻京东到家已经两年了。如今，已经有356家永辉超市门店入驻了京东到家，覆盖了北京、上海、深圳在内的全国近20个主要城市。随着和京东到家合作的扩大，永辉的线上业务增幅迅猛，数据显示：今年前11个月，永辉在京东到家上的销售额月均环比增幅达到20%。
    </p>
        <section class="mt10 dfs_jh_ertx" v-for="sd in 2">
        <img src="static/img/longxia.jpg" class="fm">
            <p class="pingdan_btn ">
    <a class="bkyy ye yj20 fz16">￥39.9拼单</a>
    </p>
    </section>
            
            <section class="mt30 mui-row cen pm20">
        <section class="mui-col-xs-6 z9">
                <span class="bkyy yj dsf_jh_erxc">
                    <i class="dx icon-zan fz26 "></i>
                </span><br>
           <span class="f_b mt10 fz16">
    12
    </span>
        </section>
                
                
                 <section class="mui-col-xs-6 ye">
                <span class="bkyy yj dsf_jh_erxc">
                    <i class="dx icon-buzan fz26 "></i>
                </span><br>
            <span class="f_b mt10 fz16">
    12
    </span>
        </section>
    </section>
            
    </section>    
           
            
                
        <section class="bgff pd pt10 pm10 mt10 pr">
            <img src="static/img/longxia.jpg" class="uyg_uih_srtxc cz fl">
            <section class="ov pl10">
                <p class="fz16 z3">店铺名称</p>

                <p class="fz12 z3 dfg_jh_ret">
    已拼单2000件 <span class="ml10">商品数量:300</span>
                </p>
            </section>
            
            <span class="bgls sd_jG_drtx">进店</span>
            
            <p class="qc"></p>
        </section>
            
            
            
            
            
            <section class="bgff mt10">
            <p class="toiy_eswet z3 fz14 pd">
最新评价
            </p>
            <ul class="df_jug_er">
                <li class="btm pd pt10 pm10"  v-for="dsf in 2">
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
                <p class="toiy_eswet ls cen btm" @click="hf('pingjia')">
    查看全部评价
            </p>
                
                
    
        </section>
            
            
            
    </div>
        
        <section class="tibu_jhsd btm pd mui-row">
                <p class="mui-col-xs-10 d_jgh_ddtx pt5">
                    <i class="dx icon-bianji fd_jgh_bsrt fz22"></i>
                    <input type="text" placeholder="我也有话说" >
                </p>
            <p class="mui-col-xs-2 dsf_jh_de  tr h100">
        <i class="dx icon-shoucang fz26 cz z9"></i>
                <span class="z9 fz14">12</span>
    </p>
        </section>
        
	</div>
</template>
<script>
    
    export default {
        data() {
            return {
              
            }
        },
        components: {
       
        },
        methods: {
           
        },
      mounted(){
 this.Title("精选")
        },
    }

</script>
<style scoped>
    .sd_jh_ertxc{
           height: 14.06rem;
    }
    .sd_jh_ertxc img{
        width: 100%;
        height: 100%;
    }
    .df_err_e{
        line-height: 1.5
    }
    .dsf_jh_erx{
        line-height: 24px;
    }

    .dfs_jh_ertx{
        height: 21.56rem;
        position: relative
    }
    .dfs_jh_ertx img.fm{
        width: 100%;
        height: 100%;
    }
    .pingdan_btn{
        position: absolute;
        left: 0px;
        bottom: 40px;
        width: 100%;
        height: 10px;
        text-align: center;
    }
    .pingdan_btn a{
        background: #fff;
        padding: 8px 50px
        
    }
    .dsf_jh_erxc{
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
    }
    
</style>
