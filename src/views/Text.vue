<template>
	<div class="spec">
		<div class="top-title">
			<h1>专题</h1>
			<p class="num">当前共有60个专题</p>
		</div>
		<div class="nav-frist">
			<ul>

				<li>
					<img src="https://resource.meihua.info/FrbjuBKgNAyfhVrKSB2P-rQhAwoE" class="spec-img" name="ping" alt="">
					<div class="it">
						<router-link class="item" to="">品牌</router-link>
					</div>
				</li>
				<li>
					<img src="https://resource.meihua.info/Fp2O8yYqr_gpkWUusOI2gHpxNaZE" class="spec-img" alt="">

					<div class="it">
						<router-link class="item" to="">品类</router-link>
					</div>
				</li>
				<li>
					<img src="https://resource.meihua.info/Fovpc9oyPsmFFFqrJYqV2YFqzKbN" class="spec-img" alt="">

					<div class="it">
						<router-link class="item" to="">节气节日</router-link>
					</div>
				</li>
				<li>
					<img src="https://resource.meihua.info/FibI4aNS-ZHzG5ZHHPELy_DoBUL1" class="spec-img" alt="">

					<div class="it">
						<router-link class="item" to="">趋势热点</router-link>
					</div>
				</li>
			</ul>
		</div>
		<div class="cont">
			<span>编辑推荐 </span>
			<span> 最新</span>

		</div>
		<div class="mokuai">
			<div class="spec-body" v-for="(special, index) in specials" :key="index">
				<div class="spec-img">
			
					<img :src="special.cover" class="tu">
				</div>
				<div class="spec-text">
					<span class="title">{{special.title}}</span><br>
					<span class="summary">{{special.summary}}</span><br>
					<span>{{special.totalWorks}}篇作品·</span><span>{{special.views}}次关注</span>
				</div>
			</div>
		</div>
		

	</div>
</template>

<script>
	export default {
		data() {
			return {

				specials: [],

				currentIndex: 0,
				timer: null,
 showAll:false,  


			};
		},


		created() {


			this.axios.get('http://localhost:8080/api/special').then(res => {

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
	.spec {
		margin-top: 15px;
		margin: auto;

		width: 65%;
		height: 1000px;
	}

	.top-title {}

	.num {
		margin-bottom: -25px;
	}

	.spec-img {
		margin-top: 28px;
		height: 75px;
	}

	.it {
		margin-left: 35px;
		margin-top: -60px;
	}

	.item {



		margin-top: 50px;
		margin-left: 15px;
		text-decoration: none;
		font-size: 26px;
		color: #FFFFFF;
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

	.cont {
		margin-left: px;
		margin-top: 26px;

	}
.mokuai{
	display: grid;
grid-template-columns: 52% 52%;	

}
	.spec-body {

	}

	.tu {
		width: 400px;
		height: 100px;
	}

	.summary {
		margin-top: -55px;
		font-size: 13px;
	}

	.spec-text {
		margin-top: 35px;
		
	}
	.title{
		font-size: 22px;
	}
</style>
