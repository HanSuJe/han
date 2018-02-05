<!--编辑地址-->
<template>
  <div >
    <head_r :title="'编辑地址'"></head_r>

    <section class="dx_body  ">
      <form class="mui-input-group">
        <section class="bgff">
          <div class="mui-input-row fz14">
            <label>收货人</label>
            <input type="text" class="mui-input-clear fz14" placeholder=""  v-model="form_s.name">
          </div>

          <div class="mui-input-row fz14">
            <label>联系电话</label>
            <input type="tel" class="mui-input-clear fz14" placeholder="" v-model="form_s.mobile">
          </div>

          <div class="mui-input-row fz14 pr" @click="popupVisible=true">
            <label>所在地区</label>
            <span class="sd_jg_dse fz14 z9">
              {{form_s.diqu||'请选择'}} <i class="dx icon-right z3"></i>
            </span>
          </div>
          <p class="text_yasd">
            <textarea placeholder="请填写详细地址，不少于5个字" rows="4" v-model="form_s.address" class="fz14 z3"></textarea>
          </p>
        </section>
        <div class="mui-input-row fz14 pr bgff mt10" @click="form_s.is_default?form_s.is_default=false:form_s.is_default=true">
          <label>设为默认</label>
          <span class="f_b sd_gxsd yj cz" :class="!form_s.is_default||'act'">
            <i class="dx icon-check"></i>
          </span>
        </div>
        <div class="mui-input-row fz14 pr bgff mt10" v-if="form_s.uuid" @click="sanchu(form_s.uuid)">
          <label class="ye">删除地址</label>
        </div>
      </form>
      <p class="mt20 cen baocun_sd">
        <span class="bgls" @click="baocun">保存</span>
      </p>
    </section>
    <diqu :popupVisible="popupVisible" @city="city_er" @close_sele="close_sele"></diqu>
  </div>
</template>
<script>
  import {
    Toast
  } from 'mint-ui';
  import {
    MessageBox
  } from 'mint-ui';
  import head_r from '@/components/head_r.vue'
  import diqu from '@/components/diqu.vue'
  export default {
    data() {
      return {
        popupVisible: false,
        form_s: {
          name: "", //收货人姓名
          mobile: "", //手机号码
          diqu: "",
          province: '', //省份
          city: '', //城市
          address: "", //详细地址
          is_default: false //是否默认

        }
      }
    },
    components: {
      head_r: head_r,
      diqu: diqu
    },
    methods: {
      sanchu(uid) {
        let th=this
        MessageBox.confirm('你确定要删除吗?').then(action => {
          if (action) {

            th.delete("/v1/user/addersses",{uuid:uid},function(){
              th.hf('')
            })
          }
        });
      },
      city_er: function(dtas) { //获取选择后的城市
        this.form_s.diqu = dtas
        this.popupVisible = false
      },
      close_sele: function() { //关闭下拉选择
        this.popupVisible = false
      },
      baocun() { //保存按钮触发


        if (!this.form_s.name) {
          this.alert("请输入收货人")
          return
        }
        if (!this.form_s.mobile) {
          this.alert("请输入联系电话")
          return
        }
        if (!this.yanza.phone(this.form_s.mobile)) {
          this.alert("联系电话格式错误")
          return
        }
        if (!this.form_s.diqu) {
          this.alert("请选择地区")
          return
        }

        if (!this.form_s.address) {
          this.alert("请输入详细地址")
          return
        }
        this.form_s.province = this.form_s.diqu.split("-")[0]
        this.form_s.city = this.form_s.diqu.split("-")[1]
        //                try{
          //                   this.form_s.address = this.form_s.diqu.split("-")[2]+  this.form_s.address
          //                }catch(e){
            //
            //                }
            var th = this


            if( this.form_s.uuid ){
              this.put("/v1/user/addersses", this.form_s, function(data) {
                if (data.code == 200) {
                  th.hf('')
                }
              })
              return
            }
            this.post("/v1/user/addersses", this.form_s, function(data) {
              if (data.code == 200) {
                th.hf('')
              }
            })


          },
          alert(msg) {
            Toast({
              message: msg
            });
          }
        },
        mounted() {

          this.Title("添加地址")
          this.form_s = this.$route.query
          if (this.$route.query.province) {
            this.us_sd = this.$route.query
            this.form_s.diqu = this.$route.query.province + "-" + this.$route.query.city
          }

        },
      }
      </script>
      <style scoped>
        .sd_jg_dse {
          position: absolute;
          right: 10px;
          top: 9px;
        }

        .sd_jg_dse i.dx {
          position: relative;
          top: 1px;
        }

        .text_yasd textarea {
          text-indent: 0px;
          font-size: 16px;
        }

        .sd_gxsd {
          position: absolute;
          right: 10px;
          top: 10px;
        }

        .baocun_sd span {
          margin: auto;
          display: block;
          width: 100px;
          line-height: 40px;
          border-radius: 20px;
          font-size: 14px;
        }

        </style>
