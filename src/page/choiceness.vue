<!--精选-->
<template>
	<div >
    <header class="head_sdrt pd cen">
        <i class="dx icon-left tujh_dt" @click="$router.back(-1)"></i>
        <span class="fz16">{{articleDetail.title}}</span>
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
            <!--点赞-->
            <section class="mt30 mui-row cen pm20">
        <section class="mui-col-xs-6 z9">
                <span class="bkyy yj dsf_jh_erxc" @click="putZan()">
                    <i class="dx icon-zan fz26 "></i>
                </span><br>
           <span class="f_b mt10 fz16">
    {{articleDetail.laud_good_count}}
    </span>
          <!--取消点赞-->
        </section>


                 <section class="mui-col-xs-6 ye">
                <span class="bkyy yj dsf_jh_erxc" @click="putCha()">
                    <i class="dx icon-buzan fz26 "></i>
                </span><br>
            <span class="f_b mt10 fz16">
    {{articleDetail.laud_bad_count}}
    </span>
        </section>
    </section>

    </section>



        <section class="bgff pd pt10 pm10 mt10 pr">
            <img src="static/img/longxia.jpg" class="uyg_uih_srtxc cz fl">
            <section class="ov pl10">
                <p class="fz16 z3">{{shop.name}}</p>

                <p class="fz12 z3 dfg_jh_ret">
   {{shop.sales_volume}} <span class="ml10">{{shop.product_count}}</span>
                </p>
            </section>

            <a class="bgls sd_jG_drtx" :href="shop.scheme">进店</a>

            <p class="qc"></p>
        </section>





            <section class="bgff mt10">
            <p class="toiy_eswet z3 fz14 pd">
最新评价
            </p>
            <ul class="df_jug_er">
                <li class="btm pd pt10 pm10"  v-for="commentItem in articleDetail.comments">
                    <section class="mui-row">
                    <section class="mui-col-xs-8 dian">
                    <img :src="commentItem.head_image" class="user_iysdf yj cz fl mt5">
                        <section class="ov pl10">
                            <p class="z3 fz14">{{commentItem.nickname}}</p>
                            <p class="z9 fz12">
                              {{commentItem.content}}
                            </p>
                        </section>

                    </section>
                    <section class="ov  z9 fz12 tr pt10">
                      {{commentItem.created_at}}
                    </section>



                </section>

                    <p class="z3 mt10">
                      {{commentItem.content}}
                        </p>

                </li>

            </ul>
                <p class="toiy_eswet ls cen btm" @click="hf('comment')">
    查看全部评价
            </p>



        </section>



    </div>

        <section class="tibu_jhsd btm pd mui-row">
                <p class="mui-col-xs-10 d_jgh_ddtx pt5">
                    <i class="dx icon-bianji fd_jgh_bsrt fz22"></i>
                  <input type="text" placeholder="我也有话说" v-model="content" @input="input" ref="input" @keyup="submitComment()">
                </p>
            <p class="mui-col-xs-2 dsf_jh_de  tr h100">
        <i class="dx icon-shoucang fz26 cz z9"></i>
                <span class="z9 fz14">{{articleDetail.collections_count}}</span>
    </p>
        </section>

	</div>
</template>
<script>

    export default {
        data() {
            return {
              likeNumber:12,
              articleDetail:{},
              content:"",
              shop:{}
            }
        },
        mounted(){
          this.Title("精选");
          const _this = this;
          this.$nextTick(()=>{
              _this.getDetail();

          })
        },
        methods: {
          /**
           * 实时获取输入的内容
           * */
          input() {
            const  input = this.$refs.input;
            const _this = this;
            input.addEventListener('input',function(){
              _this.content = input.value;

            },false)
          },
          /**
           * 提交评论
           */
          submitComment(){
            let obj = {
              user_uuid:'cd93bfa6-645d-4ddf-9aab-b86d14107bf1',
              token:'7e26e3e5-3955-4759-b6cf-9e960e15f3f1',
              article_uuid :'73e1ac43-6eef-4499-89f3-e30bbdd4a68c',
              content:this.content
            }
            this.$http.post('http://39.107.86.17/v1/choice/comments',
              obj
            ).then((res)=>{
              if(res.body.code===200){
                this.getDetail();
              }
            },(err)=>{
              console.log("提交评论失败",err);
            })
          },
          /**
           * 获取详情页的数据
           * */
          getDetail(){
            this.$http.get('http://39.107.86.17/v1/choice/articles/detail?uuid=73e1ac43-6eef-4499-89f3-e30bbdd4a68c').then((res)=>{
                console.log("获取到详情:",res);
                if(res.body.data){
                  this.articleDetail = res.body.data;
                  this.shop = this.articleDetail.shop;
                }
            },(err)=>{

            });
          },

          /**
           * 点差(取消点差)
           */
          putCha(){
            let obj = {
              user_uuid:'cd93bfa6-645d-4ddf-9aab-b86d14107bf1',
              token:'7e26e3e5-3955-4759-b6cf-9e960e15f3f1',
              uuid:'73e1ac43-6eef-4499-89f3-e30bbdd4a68c',
            }
            //为true就是取消点赞
            if(this.articleDetail.laud_bad){
              obj.cancelled = true;
            }else{
              obj.cancelled = false;
            }
            this.$http.put('http://39.107.86.17/v1/choice/articles/bad',
              obj
            ).then((res)=>{
              if(res.body.code===200){
                if(this.articleDetail.laud_bad){
                  console.log("取消点差成功:",res);
                  this.articleDetail.laud_bad_count--;
                }else{
                  console.log("点差成功:",res);
                  this.articleDetail.laud_bad_count++;
                }

              }
            },(err)=>{
              console.log("点差失败:",err);
            })
            this.articleDetail.laud_bad = !this.articleDetail.laud_bad;
          },
          //点赞(取消点赞)
          putZan(){
            let obj = {
              user_uuid:'cd93bfa6-645d-4ddf-9aab-b86d14107bf1',
              token:'7e26e3e5-3955-4759-b6cf-9e960e15f3f1',
              uuid:'73e1ac43-6eef-4499-89f3-e30bbdd4a68c',
            };
            //为true就是取消点赞
            if(this.articleDetail.laud_good){
              obj.cancelled = true;
            }else{
              obj.cancelled = false;
            }
            this.$http.put('http://39.107.86.17/v1/choice/articles/good',
              obj
            ).then((res)=>{
              if(res.body.code===200){
                if(this.articleDetail.laud_good){
                  console.log("取消点赞成功:",res);
                  this.articleDetail.laud_good_count--;
                }else{
                  console.log("点赞成功:",res);
                  this.articleDetail.laud_good_count++;
                }

              }
            },(err)=>{
              console.log("点赞失败:",err);
            })
            this.articleDetail.laud_good = !this.articleDetail.laud_good;
          }

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
