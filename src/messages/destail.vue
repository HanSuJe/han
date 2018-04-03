<!--系统消息-->
<template>
  <div >
    <div class="dx_body">

      <p class="sd_jh_ertxc">

        <img :src="images[0]" v-show="images.length>=1">
      </p>

      <section class="bgff pd pt10 ">
        <p class="fz24 z3 cen df_err_e">
          {{articleDetail.title}}
        </p>
        <p class="fz16 z3 dsf_jh_erx mt5">
          {{articleDetail.body}}
        </p>
        <section class="mt10 dfs_jh_ertx" v-for="item in images">
          <img :src="item" class="fm">
          <!--<p class="pingdan_btn ">-->
          <!--<a class="bkyy ye yj20 fz16">￥39.9拼单</a>-->
          <!--</p>-->
        </section>
      </section>

    </div>



  </div>
</template>
<script>

  export default {
    data() {
      return {
        likeNumber:3,
        articleDetail:{},
        images:[]
      }
    },
    mounted(){
      this.Title("系统消息");
      const _this = this;
      this.$nextTick(()=>{
        _this.getDetail();

      })

    },
    methods: {
      /**
       * 获取详情页的数据
       * */
      getDetail(){
        const _this = this;
        let obj = {
          uuid:this.$route.query.uuid
        }
        this.ge_t_one(`/v1/user/messages/destail`,obj,function (data) {
          if(data.code === 200){
            _this.articleDetail = data.data;
            _this.images = data.data.images;
          }
        })
      },
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
  .pingdan_btn a{
    background: #fff;
    padding: 8px 50px

  }

</style>
