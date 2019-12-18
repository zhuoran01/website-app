<template>
	<div class="spec">
		<div class="nav-frist">
			<ul>
				<li>
					<router-link class="item" to="">全部</router-link>
				</li>
				<li>
					<router-link class="item" to="">个人</router-link>
				</li>
				<li>
					<router-link class="item" to="">品牌主</router-link>
				</li>
				<li>
					<router-link class="item" to="">服务商</router-link>
				</li>

			</ul>
		</div>
		<hr>
		<div class="nav-second">
			<ul>
				<li>
					<router-link class="item-two" to="">推荐</router-link>
				</li>
				<li>
					<router-link class="item-two" to="">热门</router-link>
				</li>
				<li>
					<router-link class="item-two" to="">最新</router-link>
				</li>
				<li>
					<router-link class="item-two" to="">关注</router-link>
				</li>
		
			</ul>
		</div>
		<hr>
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">
	hr{
		color: rgb(232, 232, 232);
	}
	.ran {
		background: rgb(243, 243, 243);
		width: 90%;
	}

	.nav-frist {
		margin-left: 500px;
		width: 1200px;
		background: rgb(255, 255, 255);
		height: 30px;
	}
	.item{
		margin-right:10px ;
		color: #000000;
		font-size: 20px;
		text-decoration: none;
		text-align: center;
	}

	.item input {
		margin-top: 15px;
		width: 200px;
		height: 35px;
	}

	.item a {
		display: inline-block;
		width: 80px;
		height: 35px;
		margin-right: 5px;
		font-size: 18px;
		font-weight: 600;
		color: #fff;
		text-align: center;
		line-height: 35px;
		letter-spacing: 3px;
	}
	.nav-second {
		margin-left: 100px;
		width: 1200px;
		background: rgb(255, 255, 255);
		height: 30px;
	}
	.item-two{
		margin-right:10px ;
		color: #000000;
		font-size: 12px;
		text-decoration: none;
		text-align: center;
	}
	
	..item-two input {
		margin-top: 15px;
		width: 200px;
		height: 35px;
	}
	
	..item-two a {
		display: inline-block;
		width: 80px;
		height: 35px;
		margin-right: 5px;
		font-size: 18px;
		font-weight: 600;
		color: #fff;
		text-align: center;
		line-height: 35px;
		letter-spacing: 3px;
	}
	ul {
		margin: auto;
		margin-top: -3px;
		list-style: none;
		text-decoration: none;
		display: flex;
	}

	li {
		font-size: 15px;

		margin-top: 10px;
		margin-left: 15px;
		align-content: center;
		/* 去掉圆点 */
		list-style: none;
		color: #fff;
	}

	
</style>
