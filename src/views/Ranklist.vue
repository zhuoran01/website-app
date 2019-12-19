<template>
	<div class="ran">
		<div class="top-img">
			<img src="https://www.meihua.info/static/images/top/top_cover.jpg" class="top-img">
		</div>
		<div class="nav-frist">
			<router-link class="" to="">
				<li>
					<img src="https://www.meihua.info/_next/static/images/tab_article-d0a7ad3d17abcf87d1b17b76b72b7a09.svg">

				</li>
			</router-link>
			<router-link class="" to="">
				<li>
					<img src="https://www.meihua.info/_next/static/images/tab_author-3453fe877aa29be63c6e8ed69d536f42.svg">
				</li>
			</router-link>
		</div>
		<router-view class="container" />
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.ran {
		height: 1000px;

	}

	.top-img {

		width: 100%;
	}

	.nav-frist {
		margin-left: 600px;
		display: flex;
		width: 100%;
		text-align: center;
	}


	li {

		list-style: none;

	}
</style>
