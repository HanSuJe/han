<template>
  <div class="share-container">
    <div class="ok-container">
      <img :src="pingDanInfo.status_image" alt="" class="ok-success">
    </div>
    <div class="access-container">
      <p class="get-friend-tip">{{pingDanInfo.status}}</p>
      <p class="warning-tip">{{pingDanInfo.updated_at}}</p>
    </div>
    <div class="buyer-container">
      <ul class="buyer-list">
        <li class="buer-item" v-for="item in userImg">
          <img :src="item" alt="" class="buyer-avatar">
        </li>
      </ul>
    </div>
    <div class="goods-container">
      <img :src="products.image" alt="" class="goods-img">
      <div class="goods-info clearfix">
        <p class="goods-name">{{products.title}}</p>
        <p class="goods-rule">{{products.style_name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        pingDanInfo:{},
        products:{},
        userImg:[],
        uuid:""
      }
    },
    mounted(){
      this.uuid = this.$route.params.uuid;
      this.getpingDanInfo();
    },
    methods:{
      getpingDanInfo(){
          const _this = this;
          const obj = {
              uuid:this.uuid
          };
          this.ge_t('/v1/mall/fight_groups',obj,function (data) {
            console.log("info is:",data);
            if(data.code ===200){
                _this.pingDanInfo = data.data;
                _this.products = data.data.product;
                _this.userImg = data.data.user_images;
            }
          })
      }
    }
  }
</script>
<style scoped>
  @import "../css/share.css";
</style>
