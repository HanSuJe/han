<!--精选-->
<template>
	<div >
    <!--<header class="head_sdrt pd cen">-->
        <!--<i class="dx icon-left tujh_dt" @click="$router.back(-1)"></i>-->
        <!--<span class="fz16">{{articleDetail.title}}</span>-->
        <!--<i class="dx icon-iconfontzhizuobiaozhun20 fenxiasrcc fz18"></i>-->
    <!--</header>-->
        <div class="dx_body">

    <p class="sd_jh_ertxc">

    <img :src="images[0]" v-show="images.length>=1">
    </p>

        <section class="bgff pd pt10 ">
        <p class="fz24 z3 cen df_err_e">
          {{articleDetail.title}}
    </p>
            <p class="fz16 z3 dsf_jh_erx mt5">
              {{articleDetail.share.summary}}
    </p>
        <section class="mt10 dfs_jh_ertx" v-for="item in images">
        <img :src="item" class="fm">
            <!--<p class="pingdan_btn ">-->
    <!--<a class="bkyy ye yj20 fz16">￥39.9拼单</a>-->
    <!--</p>-->
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
                <p class="toiy_eswet ls cen btm" @click="goComment">
    查看全部评价
            </p>



        </section>



    </div>

        <section class="tibu_jhsd btm pd mui-row">
                <p class="mui-col-xs-10 d_jgh_ddtx pt5">
                    <i class="dx icon-bianji fd_jgh_bsrt fz22"></i>
                  <input type="text" placeholder="我也有话说" v-model="content" @input="input" ref="input" @keyup.enter="submitComment()" id="content">
                </p>
            <p class="mui-col-xs-2 dsf_jh_de  tr h100">
        <i class="dx icon-shoucang fz26 cz z9" @click="dealShouChang"></i>
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
              shop:{},
              images:[]
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
          goComment(){
            const _this = this;
            this.$router.push({
              path:`/comment/${_this.$route.query.uuid}`,
              replace:true
            })
          },
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
            const _this = this;
            let obj = {
              article_uuid :this.$route.query.uuid,
              content:this.content
            }
            this.post('/v1/choice/comments',obj,function (data) {
              if(data.code ===200){
                _this.getDetail();
              }
            })
          },
          /**
           * 获取详情页的数据
           * */
          getDetail(){
            const _this = this;
            let obj = {
              uuid:this.$route.query.uuid
            }
            this.ge_t_one(`/v1/choice/articles/detail`,obj,function (data) {
              if(data.code === 200){
                _this.articleDetail = data.data;
                _this.images = data.data.images;
                _this.shop = _this.articleDetail.shop;
              }
            })
          },
          /**
           * 收藏与取消收藏
           * */
          dealShouChang(){
            const _this = this;
            let obj = {
              article_uuid:_this.$route.query.uuid,
            }
            //为true就是取消点赞
            if(this.articleDetail.collection_or_not){

              this.delete(`/v1/choice/collections`,obj,function (data) {
                if(data.code ===200){
                  _this.articleDetail.collections_count--;
                  this.articleDetail.collection_or_not = !this.articleDetail.collection_or_not;
                }
              })
            }else{
              this.put_one('/v1/choice/collections',obj,function (data) {
                if(data.code ===200){
                  _this.articleDetail.collections_count++;
                }
              })

              this.articleDetail.collection_or_not = !this.articleDetail.collection_or_not;
            }



          },
          /**
           * 点差(取消点差)
           */
          putCha(){
            const _this = this;
            let obj = {
              uuid:_this.$route.query.uuid,
            }
            //为true就是取消点赞
            if(this.articleDetail.laud_bad){
              obj.cancelled = true;
            }else{
              obj.cancelled = false;
            }
            this.put_one('/v1/choice/articles/bad',obj,function (data) {
              if(data.code ===200){
                if(_this.articleDetail.laud_bad){
                  console.log("取消点差成功:");
                  _this.articleDetail.laud_bad_count--;
                }else{
                  console.log("点差成功:");
                  _this.articleDetail.laud_bad_count++;
                }
              }
            })

            this.articleDetail.laud_bad = !this.articleDetail.laud_bad;
          },
          //点赞(取消点赞)
          putZan(){
            const _this = this;
            let obj = {
              uuid:_this.$route.query.uuid,
            };
            //为true就是取消点赞
            if(this.articleDetail.laud_good){
              obj.cancelled = true;
            }else{
              obj.cancelled = false;
            }
            this.put_one(`/v1/choice/articles/good`,obj,function (data) {
              if(data.code === 200){
                if(_this.articleDetail.laud_good){
                  console.log("取消点赞成功:");
                  _this.articleDetail.laud_good_count--;
                }else{
                  console.log("点赞成功:");
                  _this.articleDetail.laud_good_count++;
                }
//                _this.getDetail();
              }
            });
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
