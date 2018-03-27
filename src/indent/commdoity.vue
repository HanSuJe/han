<!--详情-->
<template>
	<div >

<!--        轮播图-->
        <section class="lunbotu pr">
            <p class="lunbot_tou pd">
                <i class="dx icon-left z3 hjg_erttc yj"></i>

                 <i class="dx icon-iconfontzhizuobiaozhun20 z3 hjg_erttc yj ab" v-show="false"></i>
            </p>

    <mt-swipe :auto="4000">
  <mt-swipe-item>
        <img src="static/img/longxia.jpg">
    </mt-swipe-item>
  <mt-swipe-item>  <img src="static/img/longxia.jpg"></mt-swipe-item>
  <mt-swipe-item>  <img src="static/img/longxia.jpg"></mt-swipe-item>
</mt-swipe>
        </section>

        <section class="bgff pd">
          <p class="fz16 z3 pt15 pm10">
{{goodsDetail.title}}

        </p>
            <section class="mui-row mt5">
        <span class="fz24 ye">{{goodsDetail.price}}</span>
                <del class="fz14 z9 ml10">{{goodsDetail.original_price}}元</del>
                <span class="ye fz12 fr mt2">{{goodsDetail.sold_count}}</span>

    </section>
    <section class="mui-row mt15 pm10">
        <p class="mui-col-xs-4 ls">
            <i class="dx icon-gouxuan ls cz fz18 mr5 df_dr_dr"></i>
            {{serviceNote[0].label}}
        </p>
             <p class="mui-col-xs-4 cen ls" @click="fuwusm=true">
            <i class="dx icon-gouxuan ls cz fz18 mr5 df_dr_dr"></i>
               {{serviceNote[1].label}}
        </p>

                <p class="mui-col-xs-4 ls tr" @click="fuwusm=true">
                    <i class="dx icon-iconfontxiaogantanhao ls cz fz18 mr5 "></i>
        </p>

    </section>


        </section>

        <section class="pd pt10 pm10 bgff mt10 mui-row pr">
                <span class="z9 fz14 fl">促销</span>
                <p class="ov pl10  dsf_jh_ert ls fz12">
                        {{promotionInfos[0].label}}，{{promotionInfos[0].desc}}<br>
                  {{promotionInfos[1].label}}，{{promotionInfos[1].desc}}
                </p>

                       <i class="dx icon-iconfontxiaogantanhao ls cz fz18  dsf_jh_erert " @click="chuxiao=true"></i>
            </section>


        <section class="mt10 dsf_jg_drt bgff pd fz14 mui-row">
有<span class="ye">123</span>人正在拼单
            <span class="z6 fr">
    查看全部 <i class="dx icon-right "> </i>
    </span>
    </section>


            <ul class="df_jg_ert">
            <li class="pd pr" v-for="dsf in 2">
                <img src="static/img/longxia.jpg" class="user_iysdf yj cz">
                <span class="ml10 fz14 z3">用户昵称用户昵称</span>
                <p class="sd_jgh_eert fz14">
                    还差1人<br>
                    <span class="ye fz12">剩余20:32:28</span>
                </p>
                <span class="gfohgf_drt yj">GO</span>

            </li>
            </ul>

            <section class="bgff mt10">
            <p class="toiy_eswet z3 fz14 pd">
    商品评价({{comments.length}})
            </p>
            <ul class="df_jug_er">
                <li class="btm pd pt10 pm10"  v-for="item in comments">
                    <section class="mui-row">
                    <section class="mui-col-xs-8 dian">
                    <img :src="item.head_image" class="user_iysdf yj cz fl mt5">
                        <section class="ov pl10">
                            <p class="z3 fz14">{{item.nickname}}</p>
                            <p class="z9 fz12">
    {{item.style}}
                            </p>
                        </section>

                    </section>
                    <section class="ov  z9 fz12 tr pt10">
                            {{item.created_at}}
                    </section>



                </section>

                    <p class="z3 mt10">
                            {{item.content}}
                        </p>

                </li>

            </ul>
                <p class="toiy_eswet ls cen btm" @click="hf('evaluate')">
    查看全部评价
            </p>



        </section>


       <!-- <section class="bgff pd pt10 pm10 mt10 pr">
            <img src="static/img/longxia.jpg" class="uyg_uih_srtxc cz fl">
            <section class="ov pl10">
                <p class="fz16 z3">{{shop.name}}</p>

                <p class="fz12 z3 dfg_jh_ret">
    {{shop.sales_volume}} <span class="ml10">{{shop.product_count}}</span>
                </p>
            </section>

            <span class="bgls sd_jG_drtx">进店</span>

            <p class="qc"></p>
        </section>-->


           <section class="bgff mt10">
            <p class="toiy_eswet z3 fz14 pd" @click="goGoodDetail">
点击查看商品详情

            </p>
    </section>


        <!--<tuwenlist :title="'每日精选'" :productsChoice="productsChoice"></tuwenlist>-->

<!--        底部-->

        <section class="sjg_tibu pd btm">
                <span class="yj ds_jh_drtx cz bkyy">
                    <i class="dx icon-custom-service ls fz24"></i>
                </span>

            <span class="bkyy yj20 ye fz12 dsfjgh_sertc ml5" @click="gmfuwu=true">
            {{goodsDetail.original_price}} 原价买
            </span>

            <span class="bkyy bgye yj20 fz12 dsfjgh_sertc ab ml10"  @click="gmfuwu=true">
    ¥ 20.5 拼单2
            </span>

                 <span class="yj ds_jh_drtx cz bkyy ab">
                    <i class="dx icon-shoucang z9 fz24"></i>
                </span>

            </section>


<!--        服务说明-->
            <mt-popup v-model="fuwusm" position="bottom" class="df_jh_derttx">
                     <i class="dx icon-shanchuguanbicha2 ye fz32 close_serttx yj" @click="fuwusm=false"></i>


                        <p class="cen pt20 pm10 fz16">服务说明</p>

                  <section class="mui-row pr pd mt10"  v-for="service in serviceNote">
      <img :src="service.icon" class="user_iysdf yj cz fl">
         <p class="ov pl10  dsf_jh_ert ls fz12">
                       {{service.label}}<br>
                    {{service.desc}}
                </p>


            </section>
<!--

                         <section class="mui-row pr pd mt10" >
      <img src="static/img/longxia.jpg" class="user_iysdf yj cz fl">
         <p class="ov pl10  dsf_jh_ert ls fz12">
                       七天无理由退货<br>
                   支持7天无理由退货
                </p>


            </section>-->


                              <p class="bgls fz16 pt10 pm10 cen mt40" @click="fuwusm=false">
    确认
            </p>


    </mt-popup>

<!--      促销弹出层-->
           <mt-popup v-model="chuxiao" position="bottom" class="df_jh_derttx">
               <i class="dx icon-shanchuguanbicha2 ye fz32 close_serttx yj" @click="chuxiao=false"></i>
               <p class="cen pt20 pm10 fz16">促销</p>

               <section class="mui-row pr">

         <p class=" pl10  dsf_jh_ert ls fz12">
           {{promotionInfos[0].label}}，{{promotionInfos[0].desc}}<br>
           {{promotionInfos[1].label}}，{{promotionInfos[1].desc}}
                </p>

                      <i class="dx icon-gouxuan ls cz fz18  dsf_jh_erert ab"></i>
            </section>

               <p class="bgls fz16 pt10 pm10 cen mt40" @click="chuxiao=false">
    确认
            </p>

    </mt-popup>

        <!--        购买服务弹出层-->
            <mt-popup v-model="gmfuwu" position="bottom" class="df_jh_derttx">
                     <i class="dx icon-shanchuguanbicha2 ye fz32 close_serttx yj" @click="gmfuwu=false"></i>
                <p class="dsf_jhg_dertx">
            <img :src="styleData.image">
            </p>
            <p class="z3 cen mt10">
    {{styleData.original_price}}～{{styleData.price}}

            </p>
                <p class="ls  cen">
    {{mLabel}}
    </p>

     <section class="mt20 pd">
        <section class="mui-row pl10" v-for="(ge,idx) in styles">
            <p class="fz12 df_jgh_dr  z3 fl pt5">{{ge.category_name}}</p>
            <p class="ov pt5">
        <!--<span class="sd_hgsd_sd bkyy yj20 fz14" :class="sdf.cls" v-for="(sdf,idxer) in ge.guige" @click="sd_jghs(idx,idxer)">{{sdf.name}}</span> -->
              <span class="sd_hgsd_sd bkyy yj20 fz14 act" v-for="(sdf,idxer) in ge.labels" @click="sd_jghs(sdf)">{{sdf.label}}</span>

            </p>

        </section>

          <section class="mui-row pl10 mt10" >
            <p class="fz12 df_jgh_dr  z3 fl pt10">数量</p>
        <section class="ov pt5">

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

        </section>
    </section>





    </section>

         <p class="bgls fz16 pt10 pm10 cen mt40" @click="gmfuwu=false">
    确认
            </p>

    </mt-popup>


	</div>
</template>
<script>
    import details from "../mall/products/details.vue"
    export default {
        data() {
            return {
                chuxiao: false,
                fuwusm: false,
                gmfuwu: false,
                hgs_na: [{
                    "name": "重量",
                    guige: [{
                        name: "5斤装",
                        cls: "act",
                        sf:"0"
                    }, {
                        name: "10斤装",
                        cls: "",
                        sf:"0"
                    }, {
                        name: "不可选",
                        cls: "",
                        sf:"1"
                    }]
                },{
                    "name": "包装",
                    guige: [{
                        name: "保温泡面箱",
                        cls: "act",
                        sf:"0"
                    }, {
                        name: "规格可选",
                        cls: "",
                        sf:"0"
                    }, {
                        name: "保温袋干冰",
                        cls: "",
                        sf:"0"
                    }]
                }],
                num:1,
              //我写的部分
              goodsDetail:{},
              serviceNote:[],//服务
              promotionInfos:[],//促销
              productsChoice:[],//每日精选
              shop:{},
              styleData:{},//商品样式
              styles:[],
              comments:[],
              mLabel:""
            }
        },
        components: {
//            tuwenlist: tuwenlist
        },
      mounted() {
        this.Title("商品详情")
        this.getGoodsDetail();

      },
        methods: {
          goGoodDetail(){
            const _this = this;
            this.$router.push({
              path:`/mall/products/details/${_this.goodsDetail.style_uuid}`,
              replace:true
            })
          },
            //获取弹出层获取商品的尺寸等信息
            getGoodsStyle(){
              const _this = this;
              let obj = {
                style_uuid:_this.$route.params.style_uuid,
                uuid:_this.goodsDetail.uuid
              }
              this.ge_t_one('/v1/mall/products/style',obj,function (data) {
                console.log("获取到款式的信息是:",data);
                if(data.code === 200){
                    _this.styleData = data.data;
                    _this.styles = data.data.styles;
                }
              })
            },
            //获取商品详情信息
            getGoodsDetail(){
              const _this = this;
              let obj = {
                style_uuid:_this.$route.params.style_uuid
              }
              this.ge_t_one('/v1/mall/products',obj,function (data) {

                if(data.code === 200){
                  _this.goodsDetail =data.data;
                  console.log("获取到商品详情是:",_this.goodsDetail);
                  _this.serviceNote = _this.goodsDetail.service_note;
                  _this.promotionInfos = _this.goodsDetail.promotion_infos;
                  _this.productsChoice = _this.goodsDetail.products_for_choice.products;
                  _this.shop = _this.goodsDetail.shop;
                  _this.comments = _this.goodsDetail.comments;
                  _this.getGoodsStyle();
                }
              })
             /* this.$http.get('http://39.107.86.17/v1/mall/products?user_uuid=6b0fe7a1-1384-49ab-a324-5734910d4b38&style_uuid=e5090e0a-8be8-44d7-b9c0-ab9ca9d24780').then((res)=>{

                 if(res.status === 200){
                     this.goodsDetail =res.data.data;
                     this.serviceNote = this.goodsDetail.service_note;
                     this.promotionInfos = this.goodsDetail.promotion_infos;
                     this.productsChoice = this.goodsDetail.products_for_choice.products;
                   console.log("商品的详情信息是:",this.goodsDetail);
                 }
              },(err)=>{

              });*/
            },
            sd_jghs(item){
               this.mLabel  = item.label;
            },
            sd_sd_sd(ty){
                if(this.num>=this.styleData){
                  alert("不能超过库存总数");
                  return;
                }
                if(ty==0){
                    this.num++
                }else   if(ty==1){
                    if(this.num>1){
                          this.num--
                    }

                }
            }
        },

    }

</script>
<style scoped>
    .lunbotu {
        height: 23.4rem;
    }

    .lunbotu img {
        width: 100%;
        height: 100%;
    }

    .lunbot_tou {
        position: absolute;
        left: 0px;
        top: 47px;
        width: 100%;
        z-index: 999;
    }

    .hjg_erttc {
        background: #fff;
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
    }

    .hjg_erttc.ab {
        float: right;
    }

    .df_dr_dr {
        position: relative;
        bottom: 1px
    }

    .dsf_jg_drt {
        line-height: 44px;
    }

    .dsf_jh_ert {
        text-align: left;
        line-height: 1.5
    }

    .df_jg_ert li {
        height: 60px;
        background: #fff;
        border-radius: 20px;
        margin-top: 10px;
        line-height: 60px;
    }


    .sd_jgh_eert {
        position: absolute;
        right: 28px;
        top: 14px;
        line-height: 1.4;
        text-align: right;
    }

    .gfohgf_drt {
        width: 36px;
        height: 36px;
        background: #F97D4F;
        color: #fff;
        font-size: 16px;
        position: absolute;
        text-align: center;
        line-height: 36px;
        right: -18px;
        top: 18px;
    }

    .df_jg_ert {
        padding-left: 15px;
        padding-right: 33px;
    }






    .dsf_jh_erert {
        position: absolute;
        right: 15px;
        top: 20px;
    }

    .dsf_jh_erert.ab {
        top: 12px;
    }

    .sjg_tibu {
        line-height: 50px;
        height: 65px;
        background: #fff;
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 1000;
        width: 100%;
    }



    .ds_jh_drtx {
        display: inline-block;
        width: 38px;
        height: 38px;
        text-align: center;
        line-height: 38px;
    }

    .dsfjgh_sertc {
        padding: 9px 14px;
    }

    .dsfjgh_sertc.ab {
        padding: 9px 20px;
        width: 40%;
        text-align: center;
        line-height: 1.1;
        display: inline-block;
    }
    @media screen and (max-width: 330px) {
        .dsfjgh_sertc.ab {
            padding: 9px 0px;
            width: 34%;
        }
    }

    .ds_jh_drtx.ab {
        position: absolute;
        right: 10px;
        top: 7px;
    }

    .df_jh_derttx {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .close_serttx {
        position: absolute;
        right: 10px;
        top: -10px;
        background: #fff;
    }

    .dsf_jhg_dertx {
        text-align: center;
        padding-top: 20px;
    }

    .dsf_jhg_dertx img {
        width: 200px;
        height: 200px;
    }

    .df_jgh_dr {
        width: 40px;
    }

    .sd_hgsd_sd {
        padding: 5px 15px;
        margin-right: 10px;
        float: left;
        margin-bottom: 10px;
    }
    .sd_hgsd_sd.act{
        background: #37B46E;
        color: #fff
    }
    .dsf_kjh_derr {
        position: relative;
        left: 0px;
        top: 0px;
    }




</style>
