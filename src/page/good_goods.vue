<template>
	<div >
       <mt-navbar v-model="selected" :fixed='isFixed'>
          <mt-tab-item id="1">精选</mt-tab-item>
          <mt-tab-item id="2">好货</mt-tab-item>
       </mt-navbar>
      <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
                  <ul v-infinite-scroll="loadMoreGood" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
                     <li v-for="(item,index) in goods" :key="index">
                         <img v-lazy="item.image" v-if='item.image' class="shop_image img-responsive">
                         <img src="http://gogo-bj.oss-cn-beijing.aliyuncs.com/app/product_bg_square.png?x-oss-process=style/240w" v-if='!item.image' class="shop_image img-responsive">
                         <div class="title">{{item.title}}</div>
                         <div class="price_lable">
                             <div class="price">{{item.price}}</div>
                             <div class="original_price">{{item.original_price}}</div>
                             <div class="black_label">{{item.black_label}}</div>
                         </div>
                     </li>
                  </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
                  <ul v-infinite-scroll="loadMoreShop" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                     <li v-for="(item,index) in shops" :key="index"> </li>
                  </ul>
          </mt-tab-container-item>
      </mt-tab-container>
	</div>
</template>
<script>
import Navbar from "mint-ui/lib/Navbar";
import TabItem from "mint-ui/lib/tab-item";
import TabContainerItem from "mint-ui/lib/tab-container-item";
import TabContainer from "mint-ui/lib/tab-container";
import Lazyload from "mint-ui/lib/lazyload";
import InfiniteScroll from "mint-ui/lib/infinite-scroll";
export default {
  data() {
    return {
      isFixed: true,
      selected: "1",
      goods: [],
      shops: []
    };
  },
  components: {
    Navbar,
    TabItem,
    TabContainerItem,
    TabContainer,
    Lazyload,
    InfiniteScroll
  },
  created() {
    var sd_sd = {},
      th = this;
    this.ge_t("/v1/mall/collections", sd_sd, function(data) {
      if (data.code == 200) {
        th.goods = data.data;
      } else {
        alert(data.tips);
      }
    });
  },
  methods: {
    //加载更多精选
    loadMoreGood() {},
    //加载更多好货
    loadMoreShop() {}
  }
};
</script>
<style  scoped>
.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
  margin: auto;
}
ul {
  width: 100%;
  margin: 10px 8px 0 0;
  padding-top: 45px;
  overflow: hidden;
}
ul li {
  background: #ffffff;
  float: left;
  width: 47%;
  margin-bottom: 10px;
  border-radius: 10px;
  margin-left: 2%;
}
ul li .shop_image {
  width: 100%;
  height: 160px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
ul li .title {
  width: 100%;
  line-height: 30px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 5px;
}
ul li .price_lable {
  display: flex;
  justify-content: flex-start;
}
ul li .price_lable .price {
  color: #ff9999;
  padding-left: 5px;
  padding-bottom: 5px;
  font-size: 15px;
}
ul li .price_lable .original_price {
  color: #999999;
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: 13px;
  text-decoration: line-through;
}
ul li .price_lable .black_label {
  color: #999999;
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: 13px;
}
</style>
