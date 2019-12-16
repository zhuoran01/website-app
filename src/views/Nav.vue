<template>
<div class="nav">
	<div class="top">
		<div class="left">
			<ul>
				<img src="../img/logo1.jpg" class ="logo">
				<li>
					<router-link class="item" to="index"><span>主页</span></router-link>
				</li>
				<li>
					<router-link class="item" to="article">文章</router-link>
				</li>
				<li>
					<router-link  class="item" to="user">作者</router-link>
				</li>
				<li>
					<router-link  class="item" to="special">专题</router-link>
				</li>
				<li>
					<router-link class="item" to="ranklist">排行榜</router-link>
				</li>
			</ul>
		</div>
		<div class="right">
			<li>
				<router-link class="item" to="">个人中心</router-link>
			</li>
			<li class="items"><input type="text" class="input-box" placeholder="搜索" v-model="keywords" /></li>
			<li class="items"><button class="btn btn-lg btn-rd dark-border" @click="search">搜索</button></li>
			<li class="items" v-if="!this.user"><router-link class="item" to="/sign-in">登录</router-link></li>

				<router-link :to="{ path: '/user/' + user.id }" v-if="this.user"><img :src="user.avatar" @mouseenter="this.show = true" class="avatar-lg abs-center-right" /></router-link>
			<!-- </li> -->
			<li class="item" v-if="this.user"><a class="link" @click="logout">退出</a></li>
		</div>
	</div>
	<router-view class="container" />
</div>
	
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			keywords: ''
		};
	},
	created() {},
	methods: {
		logout() {
			this.user = null;
			localStorage.clear();
		},
		search() {
			let currentPath = this.$route.path;
			alert(currentPath);
			if (currentPath != '/search' || currentPath != '/search/article' || currentPath != '/search/topic' || currentPath != '/search/usere') {
				this.$router.push({ path: '/search', query: { keywords: this.keywords } });
			} else {
				this.$router.push({ path: '/empty', query: { keywords: this.keywords } });
			}
		}
	}
};
</script>
<style scoped>
.nav{
	
}
.items{
	
}
.logo{
	margin-top: px;
	margin-left: -40px;
	height: 45px;
}
.top{
	height: 45px;
	background: rgb(25, 25, 25);
}
ul{
	margin-top: -3px;
	list-style: none;
	
	
	display: flex;
}
.left{
	margin-right: 30px;
	margin-top: -5px;
	
}
.right{
	margin-top: -60px;
	margin-left: 925px;
	display: flex;
}
	li {
		font-size: 15px;
	  text-decoration: none;
		margin-top: 10px;
		margin-left: 15px;
		align-content: center;
		/* 去掉圆点 */
		list-style: none;
		color: #fff;
	}
	
/* 路由激活高亮样式 */
.router-link-active {
	color: red;
	font-weight: 700;
}
.item {
	margin-right: 30px;
	margin-top: -5px;
    text-decoration: none;
	color: #fff;
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
</style>
