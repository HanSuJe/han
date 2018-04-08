<!-- 马上抢 -->
<template>
	<section>
		<ul>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<span>¥9.9</span>
					<del>¥20</del>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<span>¥9.9</span>
					<del>¥20</del>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<span>¥9.9</span>
					<del>¥20</del>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<span>¥9.9</span>
					<del>¥20</del>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<span>¥9.9</span>
					<del>¥20</del>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<span>¥9.9</span>
					<del>¥20</del>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		</ul>	
	</section>
</template>
<script type="text/javascript">
	export default{
		mounted(){
         this.Title("今日必抢");
     }
	}
</script>
<style scoped>
	*{
		padding: 0;
		margin:  0;
	}
	body{
		position: relative;
	}
	section{
		position: absolute;
		top: 0;
	}
	section ul{
		padding: 0px 4px;
	}
	ul li{
		list-style: none;
		float: left;
		width: 48%;
		height: 298px;
		margin:4px 4px 0px 4px;
		border:1px solid red;
	}
	ul li:nth-child(2n){
		margin-left: 0px;
	}
	ul li:first-child,li:nth-child(2){
		margin-top: 0;
	}
	section img{
		height: 174px;
		width: 100%;
		box-sizing: border-box;
	}
	.content{
		height: 89px;
		width: 100%;
		padding: 10px 16px 16px 16px;
	}
	.content p{
		font-size: 16px;
		line-height: 22px;
		color: #4e3e3e;
		display: -webkit-box;
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp: 2;
    	overflow: hidden;
	}
	.content span{
		display: inline-block;
		font-size: 20px;
		color: #F97D4F;
	}
	.content del{
		display: inline-block;
		font-size: 12px;
		color: #ccc;
	}
	.left{
		float: left;
		width: 50%;
		height: 33px;
		margin-top: 16px;
	}
	.right{
		float: right;
		margin-top: 8px;
		height: 40px;
		width: 50px;
		background-color: rgba(0,1,1,0.3);
	}
</style>