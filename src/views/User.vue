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
		<div class="user">
			<div class="user-body" v-for="(user, index) in users" :key="index">
				<router-link :to="{ path: '/user/' + user.userId }">
				<div class="user-img">
					<img :src="user.avater" alt="" class="img">
				</div>
				</router-link>
				<div class="user-name">
					<h3>{{user.userNickname}}</h3><br>
				</div>
				<br>
				<div class="user-gre">
					<br>
					<span class="genre">{{user.genre}}</span>
				</div>
				<div class="user-dress">
					<span>{{user.provincename}}</span>/<span>{{user.cityname}}</span>
				</div>
				<div class="zuopin">
					<span>作品{{user.works}}</span>|<span>关注{{user.works}}</span>|<span>粉丝{{user.works}}</span>|
				</div>

			</div>
			<div class="col-12"><button class="btn btn-lg warning-fill" @click="loadMore">点击加载更多</button></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

				users: [],
				currentPage: 1,
				count: 0



			};
		},


		created() {

			this.axios
				.get('http://localhost:8080/api/user/recom', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					this.users = res.data.data;
				});

		},

		methods: {
			loadMore() {
				this.currentPage = this.currentPage + 1;
				this.axios
					.get('http://localhost:8080/api/article', {
						params: {
							page: this.currentPage,
							count: this.count
						}
					})
					.then(res => {
						console.log(res.data.data.length);
						let temp = [];
						temp = res.data.data;
						for (var i = 0; i < temp.length; i++) {
							this.users.splice(this.currentPage * this.count, 0, temp[i]);
						}
						console.log(this.users.length);
					});
			}
		}
	};
</script>

<style scoped="scoped">
	.user-dress {
		font-size: 12px;
	}

	.genre {
		background: rgb(212, 240, 232);
	}

	.user {
		display: grid;
		margin: auto;
		grid-template-columns: 24% 24% 24% 24%;

	}

	.user-body {
		margin: auto;
		align-content: center;
		text-align: center;
		margin-right: 15px;
		margin-left: 5px;
		margin-bottom: 15px;
		height: 300px;

	}

	.user-name {
		margin-top: -20px;
	}

	.user-gre {
		margin-top: -75px;
	}

	.btn {
		display: flex;
		/* margin-top:50px;
		margin-left: -5px; */
		background: rgb(255, 234, 204);
		font-size: 20px;
		border-radius: 500%;
		height: 50px;
		width: 100px;
	}

	.img {
		align-content: center;
		text-align: center;
		width: 100px;
		height: 100px;
		border-radius: 100%;
	}

	hr {
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

	.item {
		margin-right: 10px;
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

	.item-two {
		margin-right: 10px;
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
