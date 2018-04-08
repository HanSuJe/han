<!-- 新上 -->
<template>
	<section>
		<ul>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<del>¥20</del>
					<span>¥9.9</span>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<del>¥20</del>
					<span>¥9.9</span>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<del>¥20</del>
					<span>¥9.9</span>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<del>¥20</del>
					<span>¥9.9</span>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<del>¥20</del>
					<span>¥9.9</span>
				</div>
				<button class="right">去拼单</button>
			</div>
		  </li>
		  <li>
			<img src="../img/timg.jpg">
			<div class="content">
				<p>之而立按实际代理费辣椒水独立开发件莱卡士大夫</p>
				<div class="left">
					<del>¥20</del>
					<span>¥9.9</span>
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
			this.Title('新上')
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
	li{
		list-style: none;
	}
	section img{
		float: left;
		height: 174px;
		width: 50%;
	}
	.content{
		overflow: hidden;
		padding: 20px 4px 12px 0px;
		height: 174px;
		position: relative;
		border-bottom: 1px solid #bbb;
	}
	.content p{
		font-size: 20px;
		line-height:25px;
		display: -webkit-box;
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp: 3;
    	overflow: hidden;
	}
	.content del{
		font-size: 20px;
		margin-top: 30px;
	}
	.content span{
		font-size: 24px;
		margin-top: 20px;
	}
	.left{
		float: left;
		margin-top: 45px;
		position: relative;
		margin-left: 5px;
	}
	.left del{
		position: absolute;
		bottom: 30px;
		color: #ccc;
	}
	.left span{
		bottom: 5px;
		color: red;
	}
	.right{
		float: right;
		width: 60px;
		text-align: center;
		height: 30px;
		position: absolute;
		background-color: rgba(1,1,1,0.3);
		bottom: 22px;
		right: 10px;
	}
</style>