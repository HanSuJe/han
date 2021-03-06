import router from './router'
import md5 from './js/md5'
import $cookie from "@/tools/cookie"
var sd_iux = "http://39.107.86.17"
var sd_erttx = {}
// alert($cookie.get('user_uuid'));
// alert($cookie.get('token'));

// sd_erttx.user_uuid = $cookie.get('user_uuid');
// sd_erttx.token = $cookie.get('token')
sd_erttx.user_uuid = 'e57eb086-0450-40b0-a172-65b26dbcc8fb';
sd_erttx.token = 'c41920e4-150e-4aab-8416-f9bad33cf64d'
export default {
  install(Vue, options) {
    Vue.prototype.Title = function (title) {
      document.title = title
    }

    Vue.prototype.ge_t = function (url, cn, xy, powe) {
      cn.user_uuid = this.$route.query.user_uuid ? this.$route.query.user_uuid : sd_erttx.user_uuid
      if (!powe) {
        cn.token = this.$route.query.token ? this.$route.query.token : sd_erttx.token
      }
      cn.signature = this.getsign(cn)
      this.$http.get(sd_iux + url, {
        params: cn
      }).then((response) => {
        xy(response.data)
      }, (response) => {
        alert("请求失败");
      });
    }
    Vue.prototype.ge_t_one = function (url, cn, xy, powe) {
      cn.user_uuid = this.$route.query.user_uuid ? this.$route.query.user_uuid : sd_erttx.user_uuid
      this.$http.get(sd_iux + url, {
        params: cn
      }).then((response) => {
        xy(response.data)
      }, (response) => {
        alert("请求失败");
      });
    }

    Vue.prototype.post = function (url, cn, xy, powe) {
      cn.user_uuid = this.$route.query.user_uuid ? this.$route.query.user_uuid : sd_erttx.user_uuid
      if (!powe) {
        cn.token = this.$route.query.token ? this.$route.query.token : sd_erttx.token
      }
      cn.signature = this.getsign(cn)
      this.$http.post(sd_iux + url, cn).then((response) => {
        xy(response.data)
      }, (response) => {
        alert("请求失败");
      });
    }


    Vue.prototype.put = function (url, cn, xy, powe) {
      cn.user_uuid = this.$route.query.user_uuid ? this.$route.query.user_uuid : sd_erttx.user_uuid
      if (!powe) {
        cn.token = this.$route.query.token ? this.$route.query.token : sd_erttx.token
      }
      cn.signature = this.getsign(cn)
      this.$http.put(sd_iux + url, cn).then((response) => {
        xy(response.data)
      }, (response) => {
        alert("请求失败");
      });
    }
    Vue.prototype.put_one = function (url, cn, xy, powe) {
      cn.user_uuid = this.$route.query.user_uuid ? this.$route.query.user_uuid : sd_erttx.user_uuid
      if (!powe) {
        cn.token = this.$route.query.token ? this.$route.query.token : sd_erttx.token
      }
      this.$http.put(sd_iux + url, cn).then((response) => {
        xy(response.data)
      }, (response) => {
        alert("请求失败");
      });
    }


    Vue.prototype.delete = function (url, cn, xy, powe) {
      cn.user_uuid = this.$route.query.user_uuid ? this.$route.query.user_uuid : sd_erttx.user_uuid
      if (!powe) {
        cn.token = this.$route.query.token ? this.$route.query.token : sd_erttx.token
      }
      cn.signature = this.getsign(cn)
      console.log(cn)
      this.$http.delete(sd_iux + url, {
        body: cn
      }).then((response) => {
        xy(response.data)
      }, (response) => {
        alert("请求失败");
      });
    }

    Vue.prototype.hf = function (url, cu) { //路由跳转
      console.log(url)
      router.push({
        path: "/" + url,
        query: cu
      })
    }


    //分享信息
    Vue.prototype.setTitle = function (mes) {
      document.querySelector('meta[name="share-title"]').setAttribute('content', mes.share_title);
      document.querySelector('meta[name="share-summary"]').setAttribute('content', mes.share_summary);
      document.querySelector('meta[name="share-url"]').setAttribute('content', mes.share_url);
      document.querySelector('meta[name="share-image"]').setAttribute('content', mes.share_image);
      // var iframe = document.createElement('iframe');
      // iframe.style.visibility = 'hidden';
      // iframe.style.width = '1px';
      // iframe.style.height = '1px';
      // iframe.onload = function () {
      //   setTimeout(function () {
      //     document.body.removeChild(iframe);
      //   }, 0);
      // };
      // document.body.appendChild(iframe);
    }


    //获取cookie
    Vue.prototype.getCookie = function (cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
    }

    Vue.prototype.setCookie = function (cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      console.info(cname + "=" + cvalue + "; " + expires);
      document.cookie = cname + "=" + cvalue + "; " + expires;
      console.info(document.cookie);
    }

    Vue.prototype.yanza = {
      mail: function (a) {
        var b = !1;
        return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
      },
      phone: function (a) {
        var b = !1;
        return a.match(/^1[0-9]{10}$/) && 11 == a.length && (b = !0), b
      },
      car_t: function (a) {
        var b = !1;
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
      }
    };

    Vue.prototype.getsign = function (datex) {

      var sdsr_sd = {}
      sdsr_sd.timestamp = new Date().getTime()
      Object.assign(sdsr_sd, datex)
      let jian = Object.keys(sdsr_sd)
      jian.sort()
      var sd_srttx = {}
      jian.map(function (a) {
        sd_srttx[a] = sdsr_sd[a]
      })


      return md5.hexMD5(sd_srttx)
    }


  }
}
