<template>
	<div id="bg">
		<router-link to="/">首页</router-link>
		<div class="login-box">
			<form class="login-form">
				<div class="top"><span>登录</span></div>
				<input type="text" v-model="userDto.account" id="mobile" placeholder="请输入账号" />
				<input type="password" v-model="userDto.password" placeholder="请输入密码" />
				<div class="code-box">
					<input type="text" v-model="userDto.code" placeholder="请输入验证码" class="code" />
					<img class="verify" @click.prevent="refresh" ref="codeImg" />
				</div>
				<input type="button" class="btn btn-lg dark-fill" value="登录" @click="signIn(userDto)" />
				<router-link to="/sign-up">没有账号？去注册</router-link>
			</form>
			<div class="line-box">
				<span class="line"></span>
				<span class="login-3rd">第三方登录</span>
				<span class="line"></span>
			</div>

			<div class="icon-box">
				<router-link to="/wechat-sign-up">
					<i class="iconfont" style="color: rgb(0, 178, 130)">&#xe605;</i>
				</router-link>
				<router-link to="/sign-up">
					<i class="iconfont" style="color: rgb(250, 136, 16)">&#xe6a9;</i>
				</router-link>
				<router-link to="/qq-sign-up">
					<i class="iconfont" style="color: rgb(76, 156, 220)">&#xe642;</i>
				</router-link>
				<router-link to="/blog-sign-up"><i class="iconfont" style="color: rgb(236, 71, 49)">&#xe637;</i>
				</router-link>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				userDto: {
					account: '',
					password: '',
					code: ''
				},
				token: ''
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/code', {
				responseType: 'blob'
			}).then(res => {
				// console.log(res);
				var img = this.$refs.codeImg;
				let url = window.URL.createObjectURL(res.data);
				img.src = url;
				console.log(res.headers);
				//取得后台通过响应头返回的sessionId的值
				this.token = res.headers['access-token'];
				console.log(this.token);
			});
		},
		methods: {
			signIn(userDto) {
				this.axios({
					method: 'get',
					url: 'http://localhost:8080/api/user',
					data: JSON.stringify(this.userDto),
					headers: {
						'Access-Token': this.token
					}
				}).then(res => {
					if (res.data.msg === '成功') {
						alert('登录成功');
						localStorage.setItem('user', JSON.stringify(res.data.data));
						this.$router.push('/');
					} else {
						alert(res.data.msg);
						this.userDto.code = '';
					}
				});
			},
			refresh() {
				this.axios.get('http://localhost:8080/api/code', {
					responseType: 'blob'
				}).then(res => {
					console.log(res);
					var img = this.$refs.codeImg;
					let url = window.URL.createObjectURL(res.data);
					img.src = url;
				});
			}
		}
	};
</script>
<style scoped>
	#bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576149179741&di=0ec177c8af78e37622c01fb42674a250&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F53965a1e8f9c5.jpg");
	}
	.top {
		text-align: center;
		margin: auto;
		font-size: 30px;
	}
	.login-box {
		width: 450px;
		height: 400px;
		border: 2px solid rgb(55, 180, 208);
		border-radius: 10px;
		background-color: rgb(55, 180, 208, 0.4);
		position: absolute;
		top: 160px;
		left: 30%;
	}
	.login-form {
		padding-top: 20px;
		width: 70%;
		margin: 0 auto;
		text-align: left;
	}
	.login-form input {
		width: 100%;
		height: 35px;
		outline: none;
		border: none;
		margin-bottom: 10px;
		border-radius: 5px;
	}
	.code-box {
		display: flex;
		margin-top: 10px;
		margin-bottom: 20px;
		justify-content: space-between;
	}
	.verify {
		flex: 0 0 50%;
		height: 40px;
	}
	.verify:hover {
		cursor: pointer;
	}
	.code {
		flex: 0 0 40%;
		height: 40px;
	}
	a {
		color: #008b8b;
		font-weight: 700;
	}
	@font-face {
		font-family: 'iconfont';
		/* project id 1434165 */
		src: url('//at.alicdn.com/t/font_1434165_xs4k052gbx.eot');
		src: url('//at.alicdn.com/t/font_1434165_xs4k052gbx.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1434165_xs4k052gbx.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1434165_xs4k052gbx.woff') format('woff'),
			url('//at.alicdn.com/t/font_1434165_xs4k052gbx.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1434165_xs4k052gbx.svg#iconfont') format('svg');
	}
	.iconfont {
		margin-top: 30px;
		margin-left: 15px;
		margin-right: 15px;
		width: 100%;
		font-family: "iconfont" !important;
		font-size: 40px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	/* 第三方登录div */
	.line-box {
		width: 100%;
		margin: 0 auto;
		margin-top: 30px;
		margin-bottom: 4%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.line {
		border-bottom: 2px solid rgb(181, 209, 148);
		flex: 0 0 23%;
	}
	.login-3rd {
		color: #0000FF;
	}
</style>