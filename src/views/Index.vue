<template>
	<div class="index">
		<div class="conter">

			<div class="left">
				<div class="left-top">
					<div class="banner">
						<transition-group tag="ul" class="slide-ul" name="slide">
							<li v-for="(item,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
								<a :href="item.url">
									<img :src="item.image" :alt="item.description" class="tu">
								</a>
							</li>
						</transition-group>
						<div class="carousel-items">
							<span v-for="(item,index) in slideList" :class="{active:index===currentIndex}" @mouseover="change(index)"></span>
						</div>
					</div>
				</div>
				<div class="left-cont">
					<span class="left-cont-text">推荐</span>
					<span class="left-cont-text">热门</span>
					<span class="left-cont-text">最新</span>
					<span class="left-cont-text">关注</span>

				</div>
				<div class="left-foot">
					<div class="padding" v-for="(special, index) in specials" :key="index">
						<div class="pad-img">
							<img :src="special.cover" class="img">
							<div class="pad-text">
								<div class="pad-title">
									<h5>{{special.title}}</h5>
								</div>
								<div class="pad-summ">
									<span>{{special.summary }}</span>
								</div>

								<button class="btn">{{special.classIficationName }}</button>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="right">
				<div class="right-top">
					<span>产品</span>


					<div class="top-a">
						<ul>
							<router-link class="web-a" to="">
								<li>
									<img src="https://www.meihua.info/static/images/home/home_logo1.svg">
									<span class="top-text">传播业大展</span>
								</li>
							</router-link>
							<router-link class="web-a" to="">
								<li>
									<img src="https://www.meihua.info/static/images/home/home_logo2.svg">
									<span class="top-text">梅花奖创新</span>
								</li>
							</router-link>

						</ul>
					</div>
					<div class="top-a">
						<ul>
							<router-link class="web-a" to="">
								<li>
									<img src="https://www.meihua.info/static/images/home/home_logo3.svg">
									<span class="top-text">VIP人脉</span>
								</li>
							</router-link>
							<router-link class="web-a" to="">
								<li>
									<img src="https://www.meihua.info/static/images/home/home_logo4.svg">
									<span class="top-text">全媒体舆情监测</span>
								</li>
							</router-link>

						</ul>
					</div>
					<div class="top-a">
						<ul>
							<router-link to="">
								<li>
									<img src="https://www.meihua.info/static/images/home/home_logo5.svg">
									<span class="top-text">大猫自动化营销</span>
								</li>
							</router-link>
							<router-link to="">
								<li>
									<img src="https://www.meihua.info/static/images/home/home_logo6.svg">
									<span class="top-text">广告监测</span>
								</li>
							</router-link>

						</ul>
					</div>
				</div>
				<div class="right-foot">
					<span>热门用户</span>

					<div class="top-user" v-for="(user, index) in users" :key="index">
						<ul>
							<li>
								<div class="author-list">
									<div>
										<img :src="user.avater" class="model-box">
									</div>
									<div class="mode-text">
										<span>{{user.userNickname}}</span><br>
										<span class="genre">{{user.genre}}</span>
									</div>
								</div>
							</li>
						</ul>
					</div>

				</div>
				<div class="right-foot">
					<span>热门文章</span>
					<div class="top-user" v-for="(article, index) in articles" :key="index">
						<ul>
							<li>
								<div class="author-list">
									<div>
										<img :src="article.cover" class="model-box">
									</div>
									<div class="mode-text">
										<span>{{article.title}}</span><br>
										<span class="genre">{{article.genre}}</span>
									</div>
								</div>
							</li>
						</ul>
					</div>

				</div>

			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: [],
				articles: [],
				specials: [],
				slideList: [{
						"url": "#",
						"description": "one",
						"image": "https://resource.meihua.info/FpFzJAOZ9lLWiYm4yu_H-gVzKsIi"
					},
					{
						"url": "#",
						"description": "two",
						"image": "https://resource.meihua.info/FiDQyuPlcldJTkbu1wsrPNSztyQs"
					},
					{
						"url": "#",
						"description": "three",
						"image": "https://resource.meihua.info/FnXKNdIhvHhIINhCBNm4HMmNK7f8"
					}
				],
				currentIndex: 0,
				timer: null,



			};
		},


		created() {

			this.axios.get('http://localhost:8080/api/user/top').then(res => {
				// console.log(res.data.data);
				this.users = res.data.data;
			});
			this.axios.get('http://localhost:8080/api/article/top').then(res => {

				this.articles = res.data.data;

			});
			this.axios.get('http://localhost:8080/api/article/recom').then(res => {
				// console.log(res.data.data);
				this.specials = res.data.data;
			});
		},

		methods: {

			go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 2000)
			},

			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			change(index) {
				this.currentIndex = index
			},
			autoPlay() {
				this.currentIndex++
				if (this.currentIndex > this.slideList.length - 1) {
					this.currentIndex = 0
				}
			}

		}


	};
</script>

<style scoped="scoped">
	.index {

		align-content: center;

		background: rgb(249, 249, 249);
		height: 1000px;
		width: 100%;
	}

	.conter {
		margin: auto;
		display: flex;
		width: 85%;
	}

	.left {

		margin: 5px;
		width: 73%;
		height: 1000px;
	}

	.left-top {
		height: 20%;

	}

	

	.right {
		background: rgb(255, 255, 255);
		margin: 5px;
		width: 25%;
		height: 1000px;
	}

	.right-top {
		height: 20%;
	}

	ul {
		display: flex;
		align-content: center;

	}

	li {
		margin-left: 20px;
		align-content: center;
		list-style: none;

	}

	.top-a {
		margin-left: -60px;
		align-content: center;
	}


	.top-text {
		margin-left: 4px;
		margin-top: -20px;
	}

	.tu {
		margin-left: -60px;
		margin-top: -15px;
		margin-bottom: -15px;
		height: 100%;
		width: 105%;
	}

	.left-cont {
		margin-top: 10px;

	}

	.left-cont-text {

		font-size: 22px;
		margin-left: 20px;
	}

	.top-user {
		display: flex;
		height: 90px;

	}

	.author-list {
		display: flex;
		height: 100px;
	}

	.model-box {
		margin-left: -50px;
		height: 80px;
		width: 80px;
	}

	.mode-text {
		margin-left: 10px;
		font-size: 15px;
	}

	.genre {
		background: rgb(212, 240, 232);
	}

	.padding {
		/* display: flex;
		flex: 30% 30% 30%; */
		display: grid;
		grid-template-columns: 33% 33% 33%;

	}

	.img {
		margin-bottom: -10px;
		border-radius: 25px;
		width: 200px;
		height: 250px;
	}

	.btn {
		border-radius: 25px;
		background: rgb(254, 188, 112);

	}.pad-title{
		margin-bottom: -20px;
		width: 180px;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.pad-summ{
		font-size: 13px;
		width: 170px;
		
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	
	}
	
	.left-foot {
		
		height: 80%;
	display: grid;
	grid-template-columns: 33% 33% 33%;
	}
</style>
