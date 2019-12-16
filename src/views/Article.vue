<template>
	<div class="art">
		<div class="container">
		<div class="top">
			<div class="top-left">
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
			<div class="top-con"></div>
			<div class="top-right"></div>
		</div>
		</div>
	</div>
	
</template>

<script>

	
</script>

<style scoped="scoped">
	.art{
		width: 1005px;
		height: 1000px;
	}
	.container{
		margin:auto ;
		width: 85%;
		height: 100%;
		background: #000000;
	}

</style>
