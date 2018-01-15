import router from './router'
import md5 from './js/md5'
var sd_iux = "http://39.106.190.128"



export default {
    install(Vue, options) {
        Vue.prototype.ge_t = function (url, cn, xy) {
            cn.user_uuid = '73955cb3-0c38-4b18-83d9-9180a7243ddd'
            cn.token = "952bca2e-1ee1-439e-bec8-2d2a07198859"
            this.$http.get(sd_iux + url, {
                params: cn
            }).then((response) => {
                xy(response.data)
            }, (response) => {
                alert("请求失败");
            });
        }

        Vue.prototype.post = function (url, cn, xy) {
            cn.user_uuid = '73955cb3-0c38-4b18-83d9-9180a7243ddd'
            cn.token = "952bca2e-1ee1-439e-bec8-2d2a07198859"
            this.$http.post(sd_iux + url, cn).then((response) => {
                xy(response.data)
            }, (response) => {
                alert("请求失败");
            });
        }


        Vue.prototype.put = function (url, cn, xy) {
            cn.user_uuid = '73955cb3-0c38-4b18-83d9-9180a7243ddd'
            cn.token = "952bca2e-1ee1-439e-bec8-2d2a07198859"
            this.$http.put(sd_iux + url, cn).then((response) => {
                xy(response.data)
            }, (response) => {
                alert("请求失败");
            });
        }


        Vue.prototype.delete = function (url, cn, xy) {
            
            cn.user_uuid = '73955cb3-0c38-4b18-83d9-9180a7243ddd'
            cn.token = "952bca2e-1ee1-439e-bec8-2d2a07198859"
            console.log(cn)
              this.$http.delete(sd_iux + url, {body:cn}).then((response) => {
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

        Vue.prototype.yanza = {
            mail: function (a) {
                var b = !1;
                return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
            },
            phone: function (a) {
                var b = !1;
                return a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
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


            console.log(sd_srttx)
            console.log(md5.hexMD5(sd_srttx))
        }


    }
}
