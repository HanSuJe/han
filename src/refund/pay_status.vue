<template>
  <div class="share-container">
    <div class="ok-container">
      <img src="../img/ok-success.png" alt="" class="ok-success">
    </div>
    <p class="pay-success-tip">支付成功</p>
    <div class="access-container">
      <p class="get-friend-tip">{{mshareInfo.title}}</p>
      <p class="warning-tip">{{mshareInfo.desc}}</p>
      <p class="left-time-tip">剩余{{mshareInfo.remaining_time}}</p>
    </div>
    <div class="back-container">
      <a class="back-btn" @click="shareInfo(order_uuid)">分享</a>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              mshareInfo:{},
              order_uuid:''
          }
      },
    mounted(){
      this.order_uuid = this.$route.params.uuid;
      this.getShareInfo();
    },
    methods:{
      //分享信息
      shareInfo(orderId){

      },
      getShareInfo(){
        const _this = this;
        const obj = {
          uuid:this.order_uuid
        };
        this.ge_t('/v1/mall/orders/pay_result',obj,function (data) {
          console.log("info is:",data);
          if(data.code ===200){
            _this.mshareInfo = data.data;
          }
        })
      }
    }
  }
</script>
<style scoped>
  @import "../css/share.css";
</style>
