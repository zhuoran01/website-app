<template>

	<div class="per">
		<div class="top-img">

		</div>
		<div class="left-text">

			<div class="img">
				<img :src="users.avater" class="img ">
			</div>
			<div class="text">
				<div class="name">
					<span>{{users.userNickname}}</span>
				</div>
				<div class="gren"></div>
				<span class="gren">{{users.genre}}</span>
				<div class="city"><span>{{users.provincename}}</span>/<span>{{users.cityname}}</span></div>
				<span>文章 {{users.works}}</span>| <span>关注 {{users.follows}}</span> |<span> 喜欢 {{users.fans}}</span>
				<div class="btn">
					<button class="sixin">私信</button>
					<button class="guanzhu">关注</button>
				</div>
			</div>
			
	<router-link  class="btn" to="update">修改个人信息</router-link>

		</div>
		<div class="con">
			<div class="con-top">
				<span class="arc"> 文章</span> <span class="arc"> 关于</span>
			</div>
			<hr>
		</div>
	</div>




</template>

<script>
	export default {
		data() {
			return {
				users: [],
				userVo: {
					user: {},

				},
				avatar: '',
				show: true,
				id: JSON.parse(localStorage.getItem('user')).user_id
			};
		},
		created() {
			var id = this.$route.params.id;
			this.axios.get('http://localhost:8080/api/user/' + id).then(res => {
				console.log(res.data.data);
				this.users = res.data.data;

			});
		},
		methods: {
			//点击头像，即模拟点击文件选择组件
			handleClick: function() {
				document.getElementById('fileBox').click();
			},
			changeAvatar: function() {
				var _this = this;
				let formData = new FormData();
				// alert(event.target.files[0].name);
				formData.append('file', event.target.files[0]);
				this.$http({
					method: 'post',
					url: this.GLOBAL.baseUrl + '/upload',
					headers: {
						'Content-Type': 'multipart/form-data'
					},
					data: formData,
					processData: false,
					contentType: false
				}).then(function(uploadFileRes) {
					console.log(uploadFileRes.data.data);
					_this.avatar = uploadFileRes.data.data;
				});
				//调用修改头像的方法
				// this.updateAvatar();
			},
			updateAvatar: function() {
				this.$http({
					method: 'put',
					url: this.GLOBAL.baseUrl + '/user',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: {
						mobile: this.user.mobile,
						avatar: this.avatar
					}
				}).then(re => {
					console.log(res.data.code);
				});
			}
		}
	};
</script>

<style scoped="scoped">
	.con {
		margin-top: -430px;
		margin-left: 430px;
		height: 500px;
		width: 1200px;



	}

	.con-top {
		font-size: 23px;
		margin-left: 50px;
		margin-top: 15px;
		height: 30px;
	}

	.btn {
		border-radius: 25px;
		margin-top: 35px;
		color: #000000;
	}

	.arc {
		margin-left: 30px;
	}

	.sixin {
		background: rgb(255, 255, 255);
		border-radius: 35px;
		height: 50px;
		width: 150px;
	}

	.guanzhu {
		background: rgb(0, 140, 214);
		border-radius: 35px;
		height: 50px;
		width: 150px;
	}

	.city {
		font-size: 13px;
		margin: 15px;
	}

	.gren {
		margin: 18px;
		color: rgb(41, 178, 139);
		font-size: 15px;
		background: rgb(212, 240, 232);
	}

	.text {
		text-align: center;
	}

	.name {
		margin-top: 18px;
		font-size: 28px;
	}

	.per {
		margin: auto;
		background: rgb(249, 249, 249);
	}

	.img {
		margin-left: 45px;
		align-content: center;
		text-align: center;
		margin-top: 15px;
		color: #000000;
		width: 180px;
		height: 120px;
	}

	.top-img {
		height: 200px;
		background: url(https://resource.meihua.info/author_bc.png);

	}

	/* .con{
		height: 600px;
		background: #0086B3;
	} */
	.left-text {
		border-radius: 15px;
		margin-left: 80px;
		margin-top: -90px;
		width: 350px;
		background: rgb(255, 255, 255);
		height: 500px;
	}
</style>
