<template>
  <div>
      <ul class="content">
        <li v-for="message in messages" >
           <div class="time">明天{{time}}</div>
           <div class="photo-list" v-if="message.image?true:false">
             <img :src="message.image">
             <p>{{message.title}}</p>
           </div>
           <div class="text-list" v-if="message.image?false:true">
             <p>{{message.body}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
  export default {
     data(){
      return{
        time:'12:20',
        messages:[],
        body:{}
      }
     },
     mounted(){
         this.Title("gogo头条");
         const _this = this;
         this.$nextTick(()=>{
          _this.getDetail();
         })
     },
     methods:{
      getDetail(){
        let that=this;
        var obj={};
        this.ge_t(`/v1/user/messages/destail`,obj,function (data) {
          if(data.code === 200){
            that.messages = data.data;
            that.body=data.messages;
          }
        })
      }
  }
}
</script>
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .content{
    background-color: #F5F5F5;
    height: 100vh;
    width: 100%;
    padding: 10px 15px 0px 15px;
    position: absolute;
    top: 0;
  }
  .time{
    height: 17px;
    color: #AAAAAA;
    text-align: center;
  }
  .content li{
    list-style: none;
  }
  .photo-list{
    margin: 10px 0px 30px;
    position: relative;
    border-radius: 20px;
    height: 210px;
  }
  .photo-list img{
    width: 100%;
    height: 210px;
    border-radius: 20px;
  }
  .photo-list p{
    position: absolute;
    width: 100%;
    bottom: 0px;
    background-color: rgba(0,0,0,0.3);
    height: 59px;
    padding: 9px 15px;
    border-radius: 0px 0px 20px 20px;
    color: #ffffff;
    font-size: 16px;
    line-height: 22px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .text-list{
    width: 100%;
    padding: 15px 15px 22px 15px;
    border-radius: 20px;
    margin: 10px 0px 30px;
    background-color: #ffffff;
    color: #4E3E3E;
    line-height: 22px;
  }
  .text-list p{
    font-size: 16px;
  }
  body{
    position: relative;
  }
</style>
