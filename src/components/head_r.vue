<template>
    <header class="head_sdrt pd cen">
        <i class="dx icon-left tujh_dt" @click="$router.back(-1)"></i>
        <span class="fz20">{{title}}</span>
      <meta name="share-title" content="我是标题">
      <meta name="share-summary" content="我是摘要">
      <meta name="share-url" content="http://www.baidu.com">
      <meta name="share-image" content="http://gogo-bj.oss-cn-beijing.aliyuncs.com/app/product_bg_square.png?x-oss-process=style/300w">
    </header>
</template>
<script>
    export default {
        props:{
            title:""
        },
        data() {
            return {

            }
        },
        methods: {

        },
        created: function() {

        },
    }

</script>
<style scoped>
    .head_sdrt{
        display: none;
    }
    .head_sdrt{
        height: 45px;
        background: #fff;
        line-height: 45px;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        z-index: 1000
    }
    .tujh_dt{
        position: absolute;
        left: 10px;
        top: 0px;
        font-size: 20px
    }
</style>
