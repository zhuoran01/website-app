<template>
	<div class="art">
		<div class="container">
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
					<div class="top-img">
						<img src="https://resource.meihua.info/FtZtjqMepaX_4JK2SCDUy7uvoTX_" class="top-imgs"><br>
						<img src="https://resource.meihua.info/FtZtjqMepaX_4JK2SCDUy7uvoTX_" class="top-imgs">
					</div>


				</div>
				<div class="top-con">
					<div class="left-cont">
						<span class="left-cont-text">最新</span>
						<span class="left-cont-text">热门</span>
						<span class="left-cont-text">关注</span>

					</div>
				</div>
				<div class="con-body">
					<div class="con-article" v-for="(article, index) in articles" :key="index">
						<div class="ari-text">
							<div class="text-title">
								<h4>
									
									{{article.title}}
								</h4>
							</div>
							<div class="text-summ">
								<p>{{article.summary}}</p>
							</div>
							<div class="classname">
								<p>{{article.classIficationName}}-{{article.gmtPublishStr.date.year}}-{{article.gmtPublishStr.date.month}}-{{article.gmtPublishStr.date.day}}</p>
						
							</div>
						</div>
						
						
						<div class="ari-img">
							<img :src="article.cover" class="img">
						</div>
						
					</div>
				</div>
			</div>
			<div class="top-right">
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

		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				users: [],
				times:[],
				articles: [],
				specials: [{}],
				slideList: [{
						"url": "#",
						"description": "one",
						"image": "https://resource.meihua.info/FiD3y43xolN19YuYLO1cJ88EAHvw"
					},
					{
						"url": "#",
						"description": "two",
						"image": "https://resource.meihua.info/FhQ_hq-ZLlEsW2aoygwj2QpvGMdU"
					},
					{
						"url": "#",
						"description": "three",
						"image": "https://resource.meihua.info/Fob82E3XguYSvwCF88PFj8qvjbPv"
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
			this.axios.get('http://localhost:8080/api/article/recom').then(res => {

				this.articles = res.data.data;
				this.times=articles.gmtPublishStr.data;
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
	.art {
		margin: auto;
		width: 1005px;
		height: 1000px;
	}
	.container {
		display: flex;

		margin: auto;
		width: 85%;
		height: 100%;

	}
	.left {

		width: 68%;
	}
	.left-top {
		display: flex;
		height: 350px;
	}
	.tu {
		margin-left: -100px;
		width: 450px;
		height: 350px;
	}
	.top-img {
		margin-left: 10px;
		margin-top: 16px;

	}
	.top-imgs {
		margin-bottom: 8px;
		height: 170px;
	}
	.top-right {
		width: 25%;
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
	.left-cont {
		margin-top: 18px;
	}
	.left-cont-text {

		font-size: 22px;
		margin-top: 15px;
		margin-right: 50px;
		margin-left: -30px;
	}
	.con-body{
	
		margin-left: -80px;
		
	}
	.text-title{
		width: 480px;
	}
	.con-article{
		display: flex;
	}
	.img{
		height: 180px;
	}
	.text-summ{
		width: 480px;
		
	}
</style>
