<!--1行图文列表-->

<template>
   <section>
        <img :src="orderInfo.image" class="uiy_litss fl">
       <section class="ov pl10">
        <p class="dianer d_jgh_drd z3">
    {{orderInfo.title}}
    </p>
           <p class="z9 fz14 mt5">
    {{orderInfo.style_name}}
    </p>
           <p class="mt5">
    <span>{{orderInfo.price}}</span>
               <span class="fr">{{orderInfo.quantity_str}}</span>
    </p>
        </section>

       <p class="qc"></p>
    </section>
</template>
<script>
    export default {
        props:{
            title:"",
            orderInfo:{}
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
    .uiy_litss{
        width: 90px;
        height: 90px;
    }
    .d_jgh_drd{
        height: 40px;
    }
</style>
