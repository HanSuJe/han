<!-- 足迹 -->
<template>
	<section>
		<div class="content" v-for="message in messages">
			<p class="time">{{message.day}}</p>
			<ul>
				<li @click="enter(message.scheme)">
					<img :src="message.image">
					<div class="message">
						<p>{{message.title}}</p>
						<span>¥{{message.price}}</span>
						<del>¥{{message.original_price}}</del>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>
<script>
	export default{
		data(){
			return{
				messages:[]
			}
		},
		mounted(){
			this.Title('足迹');
			var date=null;
			const _this=this;
			this.$nextTick(()=>{
				_this.getDetail(date);
			})
		},
		methods:{
      		getDetail(date){
        		let that=this;
        		var obj={};
        		var arr=[];
        		this.ge_t(`/v1/mall/browse_records`,obj,function (data) {
          			if(data.code === 200){
          				for(var i=0;i<data.data.length;i++){
          					if(date==data.data[i].day){
          						data.data[i].day = null;
          					} else {
          						date = data.data[i].day;
          					}
            			}
            			that.messages = data.data;
         	 		}
        		})
     		 },
     		 enter:(scheme)=>{
     		 	window.location.href=scheme;
     		 }
  		}
	}
</script>
<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	body{
		position: relative;
	}
	section{
		position: absolute;
		top: 0;
		padding: 0px 15px;
		background-color: #ffffff;
	}
	img{
		float: left;
		height: 90px;
		width: 120px;
		margin-right: 20px;
	}
	.content .time{
		font-size: 18px;
		margin-top: 15px;
	}
	.message{
		overflow: hidden;
	}
	.message p{
		font-size: 14px;
		line-height: 29px;
    	display: -webkit-box; 
    	-webkit-box-orient: vertical; 
    	-webkit-line-clamp: 2;
    	overflow: hidden;
    	color: #4E3E3E;
    	margin-bottom: 6px;
	}
	.content ul li{
		list-style: none;
		margin-top:15px;
		height: 90px;
	}
	.message span{
		font-size: 25px;
		height: 25px;
		line-height: 100%;
		color: #F97D4F;
	}
	.message del{
		font-size: 18px;
		color: #aaa;
		margin-left: 8px;
	}
</style>