<!--2列图文列表-->
<template>
  <div v-html="content" >

	</div>

</template>
<script>
    export default {
        props:['title','productsChoice'],
        data() {
            return {
              content: ''
            }
        },
        methods: {
          //获取商品详情信息
//          getGoodsDetail(){
//            this.$http.get('http://39.107.86.17/v1/mall/products/details?style_uuid=e5090e0a-8be8-44d7-b9c0-ab9ca9d24780')
//              .then((res)=>{
//              if(res.status === 200){
//                this.content =res.data.data;
//              }
//            },(err)=>{
//
//            });
//          }

          getGoodsDetail(){
            let _this=this;
//            'e5090e0a-8be8-44d7-b9c0-ab9ca9d24780'
            this.ge_t('/v1/mall/products/details',{ style_uuid:this.$route.params.style_uid},
              function (data) {
                _this.content=data.data;
                console.log("获取到的数据是:",data.data);
            });
          }


        },
      mounted(){
        this.Title("商品样式")
        this.getGoodsDetail();
        },
    }
</script>
<style>
  div{
    display: block;
    max-width: 100%;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: auto;
  }
</style>
