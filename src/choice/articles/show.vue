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
        <div class="mui-input-row fz14 pr bgff mt10" @click="select()">
          <label>设为默认</label>
          <span class="f_b sd_gxsd yj cz" :class="{act:isMoren}">
            <i class="dx icon-check" ></i>
          </span>
        </div>
        <!-- <div class="mui-input-row fz14 pr bgff mt10" v-if="form_s.uuid" @click="sanchu(form_s.uuid)">
          <label class="ye">删除地址</label>
        </div> -->
      </form>
      <p class="mt20 cen baocun_sd">
        <span class="bgls" @click="baocun">保存</span>
      </p>
    </section>
    <diqu :popupVisible="popupVisible" @city="city_er" @close_sele="close_sele"></diqu>
  </div>
</template>
