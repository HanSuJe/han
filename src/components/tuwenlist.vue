<!--2列图文列表-->
<template>
	<div >
    <p class="dsf_jhg_ds cen">
        <span class="ye fz18">{{title}}</span>
    </p>

    <section class="sd_kh_row pl5 mui-row">
            <section class="pr5 mui-col-xs-6 mb5" v-for="product in productsChoice">
                    <section class="drf_jhgr_rer bgff">
                        <p class="sd_iy_img">
                             <img :src="product.image" alt="商品图片">
                        </p>
                        <section class="pd">

                        <p class="fz16 z3 dianer  pt10">
                           {{product.title}}
                        </p>
                            <p class="mt10 pm10">
                            <span class="ye fz24">{{product.original_price}}</span>
                                <span class="yj dd_sd_dsdf">拼</span>
                            </p>

                            </section>


                    </section>

            </section>

    </section>



	</div>
</template>
<script>

    export default {
        props:['title','productsChoice'],
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
      mounted(){

        },
    }

</script>
<style scoped>
    .dsf_jhg_ds{
        line-height: 50px;
    }
    .drf_jhgr_rer{
        border-radius: 20px;
        overflow: hidden
    }
    .sd_iy_img{
        height: 11.2rem;
    }
    .sd_iy_img img{
        width: 100%;
        height: 100%
    }

    .dd_sd_dsdf{
        width: 20px;
        height: 20px;
        background: #F97D4F;
        color: #fff;
        position: absolute;
        right: 15px;
        font-size: 12px;
        text-align: center;
    }
</style>
