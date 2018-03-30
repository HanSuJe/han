<!--退款/售后-->
<template>
	<div >
      <head_r :title="'退款/售后'"></head_r>
        <section class="dx_body">

              <ul class="sd_iyh_er  bgff">

             <li class="btm pd fz14 pr">
    退款类型
    <span class="fr z3">

        <span v-if="leixin">{{leixin}}</span>
        <span class="z9" v-else>请选择</span>
        <i class="dx icon-right"></i>
    </span>
        <select class="tou_dertxc" v-model="leixin">
            <option>退款类型1</option>
             <option>退款类型2</option>
             <option>退款类型3</option>
        </select>
    </li>

                        <li class="btm pd fz14 pr">
    快递状态
    <span class="fr z3">

      <span>已收货</span>
    </span>

    </li>

                  <li class="btm pd fz14 pr">
    退款原因
    <span class="fr z3">

        <span v-if="yaunying">{{yaunying}}</span>
        <span class="z9" v-else>请选择</span>
        <i class="dx icon-right"></i>
    </span>
        <select class="tou_dertxc" v-model="yaunying">
            <option>退款原因1</option>
             <option>退款原因2</option>
             <option>退款原因3</option>
        </select>
    </li>


                   <li class="btm pd fz14 pr">
    联系电话
    <span class="fr z3">

      <span>{{phone}}</span>
    </span>

    </li>

    </ul>

            <section class="mt10 bgff pd pt10 ">
                    <span class="fz14 fl">退款说明</span>
                <p class="ov pl10">
          <textarea placeholder="请您详细填写退款说明（170字以内）" class="fz14 fg_kjrtx" rows="3" v-model="tuikuanIntro"></textarea>
        </p>


                <p class="qc"></p>

            </section>

            <section class="pd mt10">
        <p class="z3">
        上传凭证 <span class="z9">(最多3张)</span>
    </p>

                <section class="mui-row mt10">
                    <p class="dsf_jh_dert yj20 bgff" v-for="(ts,idx) in tups">
                        <img :src="ts" >
                        <i class="dx icon-cha  close_usr yj bgff" @click="remo_img(idx)"></i>
                    </p>


                        <p class="dsf_jh_dert yj20 bgff" >
                    <i class="dx icon-xiangji fz32"></i>
                            <input type="file" @change="previewFile()" id="ssd_ooie">
                    </p>

                </section>
        </section>

    </section>

         <a  class="bgls ad_sdrtxc pm20" @click="goAfterSaleDetail()">提交申请</a>
	</div>
</template>
<script>
    import head_r from '../components/head_r.vue'
    export default {
        data() {
            return {
                leixin: "", //退款类型
                yaunying: "", //退款原因
                tups: [],
                order_uuid:"",
                phone:"13192838978",
                tuikuanIntro:""
            }
        },
        components: {
            head_r: head_r
        },
        methods: {
          goAfterSaleDetail(){
            if(this.leixin===""){
              alert("请选择退款类型!");
              return;
            }
            if(this.yaunying===""){
              alert("请选择退款原因!");
              return;
            }
            if(this.tuikuanIntro===""){
              alert("请选择退款说明!");
              return;
            }
            if(this.tups.length<=0){
              alert("请上传凭证!");
              return;
            }
            let obj = {
              order_uuid:this.order_uuid,
              type_of:this.leixin,
              refund_cause:this.yaunying,
              description:this.tuikuanIntro,
              mobile:this.phone,
              images:this.tups
            }
            this.post(`/v1/mall/services/order/`,obj,function (data) {
              console.log("data:",data);
             /* this.$router.push({
                path:'/after_details_two',
                replace:true
              })*/
            })
          },
            remo_img(idx) {
                this.tups.splice(idx, 1)
            },
            previewFile() {
                if(this.tups.length>=3){
                    return
                }
                var th = this
                var file = document.querySelector('#ssd_ooie').files[0];
                var reader = new FileReader();
                reader.onloadend = function() {
                    th.tups.push(reader.result)
                }
                if (file) {
                    reader.readAsDataURL(file);
                    console.log("file:",file);
                } else {

                }
            }
        },
        mounted() {
                this.Title("售后")
window.scrollTo(0,0);
                this.order_uuid = this.$route.params.order_uuid;
        },
    }

</script>
<style scoped>
    #ssd_ooie {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 0
    }



    .fg_kjrtx {
        text-indent: 0px;
        padding: 0px;
        border: 0px;
    }

    .dsf_jh_dert {
        width: 90px;
        height: 90px;
        text-align: center;
        line-height: 90px;
        float: left;
        margin-right: 15px;
        margin-bottom: 15px;
        position: relative;
    }

    .dsf_jh_dert img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    .close_usr {
        position: absolute;
        right: -10px;
        top: -10px;
        width: 24px;
        height: 24px;
        z-index: 100;
        text-align: center;
        line-height: 24px;
        font-size: 12px;
    }

</style>
