<template>
    <header class="head_sdrt pd cen">
        <i class="dx icon-left tujh_dt" @click="$router.back(-1)"></i>
        <span class="fz20">{{title}}</span>
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
