<!--评论-->
<template>
	<div >
           <head_r :title="'评论'"></head_r>
        <section class="dx_body">


            <section class="bgff ">

            <ul class="df_jug_er">
                <li class="btm pd pt10 pm10"  v-for="commentItem in comments">
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
        </section>

        </section>
             <section class="tibu_jhsd btm pd mui-row">
                <p class="mui-col-xs-12 d_jgh_ddtx pt5">
                    <i class="dx icon-bianji fd_jgh_bsrt fz22"></i>
                    <input type="text" placeholder="我也有话说" v-model="content" @input="input" ref="input" @keyup="submitComment()">
                </p>
        </section>

	</div>
</template>
<script>
  import head_r from '../components/head_r.vue'
  export default {
    data() {
      return {
        content:"",
        comments:[],

      }
    },
    components: {
      head_r:head_r
    },
    methods: {
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
          article_uuid :this.$route.params.article_uuid,
          content:this.content
        }
        this.post(`/v1/mall/products/comments`,obj,function (data) {
          if(data.code===200){
            _this.getCommentsList();
          }
        })
      },
      /**
       * 获取评论列表
       */
      getCommentsList(){
        const _this= this;
        let obj = {
          article_uuid :this.$route.params.article_uuid,
        }
        _this.ge_t_one('/v1/mall/products/comments',obj,function (data) {
          if(data.code ===200){
            _this.comments = data.data;
          }
        })
      }
    },
    mounted(){
      window.scrollTo(0,0);
      this.Title("评论");
      const _this  = this;
      _this.$nextTick(()=>{
        _this.getCommentsList();
      })
    },
  }


</script>
<style scoped>



</style>
