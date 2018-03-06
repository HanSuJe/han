<!--选择城市-->
<template>
 <section class="selected_city">
      <mt-popup v-model="popupVisible" position="bottom" >
      <mt-picker :slots="slots" :showToolbar="true" @change="onValuesChange" valueKey="text" >
         <section class="city_btn pd  mui-row ov">
            <mt-button type="default" size="small" @click='$emit("close_sele")'>取消</mt-button>
            <span class="fr">
    <mt-button type="primary" size="small" @click="city_confirm">确定</mt-button>
    </span>
               
        </section>
    
    </mt-picker>
    </mt-popup>
     
     
    </section>
</template>

<script>
    import city from "../js/city.data";
    export default {
        props: {
            popupVisible: ""
        },
        data() {
            return {
                district: "",
                slots: [{
                    flex: 1,
                    values: city.cityData,
                    className: 'slot1',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: "",
                    values: city.cityData[0].children,
                    className: 'slot3',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot4'
                }, {
                    flex: 1,
                    values: city.cityData[0].children[0].children,
                    className: 'slot5',
                    textAlign: 'center'
                }]
            }
        },
        methods: {
            city_confirm: function() {
                this.$emit("city", this.district)
                this.popupVisible_w = false
            },

            onValuesChange(picker, values) {
            
                     picker.setSlotValues(1, values[0].children);
                      picker.setSlotValues(2, values[1].children);
           

                try {
                    if(values[1].children){
                       this.district = values[0].text + "-" + values[1].text+ "-" + values[2].text  
                    }else{
                         this.district = values[0].text + "-" + values[1].text
                    }
                   
                } catch (e) {
               
                }


            }
        }
    }

</script>

<style scoped>
    .city_btn {
        background: #f8f8f8;
        position: relative;
        z-index: 999;
        height: 45px;
        line-height: 45px;
        padding-top: 5px;
    }

</style>
