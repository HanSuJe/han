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
   import head_r from '../../components/head_r.vue'
    export default {
        data() {
            return {
                content:"",
                comments:[]
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
                  this.getCommentsList();
              }
            },(err)=>{
              console.log("提交评论失败",err);
            })
          },
          /**
           * 获取评论列表
           */
          getCommentsList(){
            this.$http.get('http://39.107.86.17/v1/choice/comments?article_uuid=73e1ac43-6eef-4499-89f3-e30bbdd4a68c').then((res)=>{
              console.log("获取到评论详情:",res);
              if(res.body.data){
                this.comments = res.body.data;
              }
            },(err)=>{

            });
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
