<!--地址列表-->
<template>
  <div class="add_cade_s">
    <head_r :title="'收货地址'"></head_r>
    <section class="dx_body">
      <ul>
        <li class="bgff mui-row btm mb10" v-for="(ds,idx) in dizi_s">
          <section class="pd pt10 pm10">
            <p class="fl map_sdrtxc">
              <i class="dx icon-map ls fz20"></i>
            </p>
            <section class="ov">
              <p class="z3 fz16">
                {{ds.name+" "+ds.mobile}}
              </p>
              <p class="dianer mt5 diz_setx z3">
                {{ds.province+""+ds.city+""+ds.address}}
              </p>
            </section>
          </section>
          <section class="btm df_kh_eer pd">
            <span class="fl" @click="swe_s(idx)">
              <span class="f_b sd_gxsd yj cz " :class="!ds.is_default||'act'">
                <i class="dx icon-check"></i>
              </span>
              <span class="fz14 z3 ml5">设为默认地址</span>
            </span>
            <span class="fr fz14">
              <a class="ls" @click="hf('account/addresses/edit',ds)">编辑</a>
              <a class="ye ml20" @click="sanchu(idx,ds.uuid)">删除</a>
            </span>
            <p class="qc"></p>
          </section>
        </li>
      </ul>
    </section>
    <a class="bgls ad_sdrtxc pm20" @click="hf('account/addresses/edit')">添加收货地址</a>
  </div>
</template>
<script>
  import {
    MessageBox
  } from 'mint-ui';
  import head_r from '@/components/head_r.vue'

  export default {
    data() {
      return {
        dizi_s: '',
        gx_idx: 0 //勾选默认
      }
    },
    components: {
      head_r: head_r
    },
    methods: {
      sanchu(idx, uid) {
        let th = this
        MessageBox.confirm('你确定要删除吗?').then(action => {
          if (action) {
            this.dizi_s.splice(idx, 1)

            th.delete("/v1/user/addresses", {uuid: uid})
          }
        });
      },
      swe_s(idx) {
        this.dizi_s.map(function (a) {
          a.is_default = false
        })
        this.dizi_s[idx].is_default = true
      }
    },
    mounted() {
      this.Title("收货地址")
      var sd_sd = {},
        th = this
      this.ge_t("/v1/user/addresses", sd_sd, function (data) {
        th.dizi_s = data.data
      })
    }
  }

</script>
<style scoped>
  .df_kh_eer {
    line-height: 40px;
  }

  .add_cade_s {
    padding-bottom: 50px
  }
</style>
